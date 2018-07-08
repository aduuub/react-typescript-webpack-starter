import * as faker from 'faker';
import * as moment from 'moment';
import * as React from 'react';
// @ts-ignore
import ReactCalendarTimeline, { ReactCalendarTimelineProps, TimelineGroup } from 'react-calendar-timeline/lib';

import generateFakeData from 'components/utilities/fake-data';

interface IState {
  shifts: any[];
  groups: TimelineGroup[];
  defaultTimeStart: Date;
  defaultTimeEnd: Date;
}

const keys = {
  groupIdKey: 'id',
  groupTitleKey: 'title',
  groupRightTitleKey: 'rightTitle',
  itemIdKey: 'id',
  itemTitleKey: 'title',
  itemDivTitleKey: 'title',
  itemGroupKey: 'group',
  itemTimeStartKey: 'start',
  itemTimeEndKey: 'end',
};

export default class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    const { groups, shifts } = generateFakeData();
    const defaultTimeStart = moment()
      .startOf('day')
      .toDate();
    const defaultTimeEnd = moment()
      .startOf('day')
      .add(1, 'day')
      .toDate();

    this.state = {
      groups,
      shifts,
      defaultTimeStart,
      defaultTimeEnd,
    };
  }

  handleItemMove = (itemId: any, dragTime: any, newGroupOrder: any) => {
    const { shifts, groups } = this.state;

    const group = groups[newGroupOrder];

    this.setState({
      shifts: shifts.map(
        (item: any) =>
          item.id === itemId
            ? Object.assign({}, item, {
              start: dragTime,
              end: dragTime + (item.end - item.start),
              group: group.id,
            })
            : item,
      ),
    });

    console.log('Moved', itemId, dragTime, newGroupOrder);
  }

  handleItemResize = (itemId: any, time: any, edge: any) => {
    const { shifts } = this.state;

    this.setState({
      shifts: shifts.map(
        (item: any) =>
          item.id === itemId
            ? Object.assign({}, item, {
              start: edge === 'left' ? time : item.start,
              end: edge === 'left' ? item.end : time,
            })
            : item,
      );
    });
    console.log('Resized', itemId, time, edge);
  }

  render() {
    const { groups, shifts, defaultTimeStart, defaultTimeEnd } = this.state;

    return (
      <ReactCalendarTimeline
        groups={groups}
        items={shifts}
        keys={keys}
        fullUpdate={true}
        sidebarContent={<div>Above The Left</div>}
        itemsSorted
        itemTouchSendsClick={false}
        stackItems
        itemHeightRatio={0.75}
        showCursorLine
        canMove={true}
        canResize={'both'}
        defaultTimeStart={defaultTimeStart}
        defaultTimeEnd={defaultTimeEnd}
        onItemMove={this.handleItemMove}
        onItemResize={this.handleItemResize}
      />
    );
  }
}
