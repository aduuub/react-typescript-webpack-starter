import * as moment from 'moment';
import * as React from 'react';
// @ts-ignore
import ReactCalendarTimeline, { ReactCalendarTimelineProps, TimelineGroup, TimelineItem } from 'react-calendar-timeline/lib';

import { getShiftData } from 'components/utilities/fake-data';

interface IState {
  shifts: TimelineItem[];
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

    const { groups, shifts } = getShiftData();
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
  }
  onCanvasClick = (groupId: any, startTime: any, e: any) => {
    // Create the new shift
    const newShift = {
        className: 'item-weekend',
        end: startTime + (60 * 60 * 1000), // add on an hour
        group: groupId,
        id: this.state.shifts.length + 1,
        itemProps: {
          'data-tip': 'You cant bypass the system without synthesizing the haptic THX circuit!',
        },
        start: startTime,
        title: '8:30am - 3:30pm at Prefab',
    };

    // console.log(newShift);

    // Add it
    this.setState((oldState: IState) => {
      const shifts = oldState.shifts;
      shifts.push(newShift);
      // console.log(shifts);
      return {
        ...oldState,
        shifts,
      };
    });
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
      ),
    });
  }

  render() {
    const { groups, shifts, defaultTimeStart, defaultTimeEnd } = this.state;

    const sidebarContent = <div className='u-textCenter u-mT-md'>Staff</div>;

    return (
      <ReactCalendarTimeline
        groups={groups}
        items={shifts}
        keys={keys}
        fullUpdate={true}
        sidebarContent={sidebarContent}
        itemsSorted
        itemTouchSendsClick={false}
        stackItems
        itemHeightRatio={0.75}
        canMove={true}
        canResize={'both'}
        lineHeight={50}

        defaultTimeStart={defaultTimeStart}
        defaultTimeEnd={defaultTimeEnd}

        onItemMove={this.handleItemMove}
        onItemResize={this.handleItemResize}
        onCanvasClick={this.onCanvasClick}
      />
    );
  }
}
