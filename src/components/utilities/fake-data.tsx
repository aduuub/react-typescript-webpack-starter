// @ts-ignore
import ReactCalendarTimeline, { ReactCalendarTimelineProps, TimelineGroup, TimelineItem } from 'react-calendar-timeline/lib';

const groups: TimelineGroup[] = [
  {
    id: '1',
    title: 'Adam Wareing',
    rightTitle: 'Schumm',
  },
  {
    id: '2',
    title: 'Mitch Coad',
    rightTitle: 'Schumm',
  },
  {
    id: '3',
    title: 'Fraser Malpas',
    rightTitle: 'Schumm',
  },
  {
    id: '4',
    title: 'Bob Dylan',
    rightTitle: 'Schumm',
  },
];

const shifts: TimelineItem[] = [
  {
    className: 'item-weekend',
    end: 1530985222795,
    group: '1',
    id: '0',
    itemProps: {
      'data-tip': 'You cant bypass the system without synthesizing the haptic THX circuit!',
    },
    start: 1530970000000,
    title: '8:30am - 3:30pm at Prefab',
  },
  {
    className: 'item-weekend',
    end: 1530985222795,
    group: '2',
    id: '1',
    itemProps: {
      'data-tip': 'You cant bypass the system without synthesizing the haptic THX circuit!',
    },
    start: 1530970000000,
    title: '8:30am - 3:30pm at Prefab',
  },
  {
    className: 'item-weekend',
    end: 1530985222795,
    group: '3',
    id: '2',
    itemProps: {
      'data-tip': 'You cant bypass the system without synthesizing the haptic THX circuit!',
    },
    start: 1530970000000,
    title: '8:30am - 3:30pm at Prefab',
  },
  {
    className: 'item-weekend',
    end: 1530985222795,
    group: '4',
    id: '3',
    itemProps: {
      'data-tip': 'You cant bypass the system without synthesizing the haptic THX circuit!',
    },
    start: 1530970000000,
    title: '8:30am - 3:30pm at Prefab',
  },
];

export function getShiftData() {
  return { shifts, groups };
}
