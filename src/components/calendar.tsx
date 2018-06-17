import * as faker from 'faker';
import * as moment from 'moment';
import * as React from 'react';
// @ts-ignore
import ReactCalendarTimeline, { ReactCalendarTimelineProps, TimelineGroup } from 'react-calendar-timeline/lib';
import 'react-calendar-timeline/lib/Timeline.css';

const GROUP_COUNT = 30;
const ITEM_COUNT = 1000;
const DAYS_IN_PAST = 30;

export default class Calendar extends React.Component {

  init(): ReactCalendarTimelineProps {
    const groups: TimelineGroup[] = [];
    for (let i = 0; i < GROUP_COUNT; i++) {
      groups.push({
        id: i + 1,
        title: faker.name.firstName(),
      });
    }

    let items = [];
    for (let i = 0; i < ITEM_COUNT; i++) {
      const startDate = faker.date.recent(DAYS_IN_PAST).valueOf() + (DAYS_IN_PAST * 0.3) * 86400 * 1000;
      const startValue = moment(startDate).valueOf();
      const endValue = moment(startDate + faker.random.number({ min: 2, max: 20 }) * 15 * 60 * 1000).valueOf();
      items.push({
        id: i,
        group: faker.random.number({min: 1, max: groups.length}),
        title: 'Shift ',
        start: startValue,
        end: endValue,
        canMove: startValue > new Date().getTime(),
        canResize: endValue > new Date().getTime(),
        className: (moment(startDate).day() === 6 || moment(startDate).day() === 0) ? 'item-weekend' : '',
      });
    }

    items = items.sort(function (a: any, b: any) { return b - a; });
    const minTime = moment().add(-6, 'months').valueOf();
    const maxTime = moment().add(6, 'months').valueOf();

    return {
      groups,
      items,
      canMove: true, // defaults
      canResize: true,
      // @ts-ignore
      itemsSorted: true,
      itemTouchSendsClick: false,

      defaultTimeStart: moment().startOf('day').toDate(),
      defaultTimeEnd: moment().startOf('day').add(1, 'day').toDate(),

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

      // this limits the timeline to -6 months ... +6 months
      onTimeChange(visibleTimeStart: any, visibleTimeEnd: any) {
        if (visibleTimeStart < minTime && visibleTimeEnd > maxTime) {
          // @ts-ignore
          this.updateScrollCanvas(minTime, maxTime);
        } else if (visibleTimeStart < minTime) {
          // @ts-ignore
          this.updateScrollCanvas(minTime, minTime + (visibleTimeEnd - visibleTimeStart));
        } else if (visibleTimeEnd > maxTime) {
          // @ts-ignore
          this.updateScrollCanvas(maxTime - (visibleTimeEnd - visibleTimeStart), maxTime);
        } else {
          // @ts-ignore
          this.updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
        }
      },
    };
  }

  render() {
    const params = this.init();
    return (
    <ReactCalendarTimeline {...params} />
    );
  }
}
