import * as faker from 'faker';
import * as moment from 'moment';
import * as React from 'react';
// @ts-ignore
import ReactCalendarTimeline, { ReactCalendarTimelineProps, TimelineGroup } from 'react-calendar-timeline/lib';

const GROUP_COUNT = 10;
const ITEM_COUNT = 500;
const DAYS_IN_PAST = 30;

interface IState {
  shifts: any[];
  groups: TimelineGroup[];
}

export default class Calendar extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props);

    const groups: TimelineGroup[] = [];
    for (let i = 0; i < GROUP_COUNT; i++) {
      groups.push({
        id: i + 1,
        title: faker.name.firstName(),
      });
    }

    let shifts = [];
    for (let i = 0; i < ITEM_COUNT; i++) {
      const startDate = faker.date.recent(DAYS_IN_PAST).valueOf() + (DAYS_IN_PAST * 0.3) * 86400 * 1000;
      const startValue = moment(startDate).valueOf();
      const endValue = moment(startDate + faker.random.number({ min: 2, max: 20 }) * 15 * 60 * 1000).valueOf();
      shifts.push({
        id: i,
        group: faker.random.number({ min: 1, max: groups.length }),
        title: 'Shift ',
        start: startValue,
        end: endValue,
        canMove: startValue > new Date().getTime(),
        canResize: endValue > new Date().getTime(),
        className: (moment(startDate).day() === 6 || moment(startDate).day() === 0) ? 'item-weekend' : '',
      });
    }

    shifts = shifts.sort(function (a: any, b: any) { return b - a; });
    this.state = {
      shifts,
      groups,
    };
  }

  handleItemResize(itemId: any, time: any, edge: any) {
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
    console.log('Resized', itemId, time, edge);
  }

  render() {
    const calendarProps: ReactCalendarTimelineProps = {
      groups: this.state.groups,
      items: this.state.shifts,
      canMove: true,
      canResize: 'both',
      itemsSorted: true,
      itemTouchSendsClick: false,
      defaultTimeStart: moment().startOf('day').toDate(),
      defaultTimeEnd: moment().startOf('day').add(1, 'day').toDate(),
      onItemResize: this.handleItemResize,
      keys: {
        groupIdKey: 'id',
        groupTitleKey: 'title',
        itemIdKey: 'id',
        itemTitleKey: 'title',
        itemGroupKey: 'group',
        itemTimeStartKey: 'start',
        itemTimeEndKey: 'end',
      },
      itemClick(item: any) {
        console.log('Clicked: ' + item);
      },
      moveResizeValidator(action: any, item: any, time: any) {
        if (time < new Date().getTime()) {
          return Math.ceil(new Date().getTime() / (15 * 60 * 1000)) * (15 * 60 * 1000);
        }
        return time;
      },
    };

    return (
      <ReactCalendarTimeline {...calendarProps} />
    );
  }
}
