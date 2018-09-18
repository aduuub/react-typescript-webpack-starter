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
    end: 1537166446000,
    group: '1',
    id: '0',
    itemProps: {
      'data-tip': 'You cant bypass the system without synthesizing the haptic THX circuit!',
    },
    start: 1537162846000,
    title: 'Ground crew WLG',
  },
  {
    className: 'item-weekend',
    end: 1537166446000,
    group: '2',
    id: '1',
    itemProps: {
      'data-tip': 'You cant bypass the system without synthesizing the haptic THX circuit!',
    },
    start: 1537162846000,
    title: 'Ground crew WLG',
  },
  {
    className: 'item-weekend',
    end: 1537166446000,
    group: '3',
    id: '2',
    itemProps: {
      'data-tip': 'You cant bypass the system without synthesizing the haptic THX circuit!',
    },
    start: 1537162846000,
    title: 'Pilot NSN - WLG',
  },
  {
    className: 'item-weekend',
    end: 1537166446000,
    group: '4',
    id: '3',
    itemProps: {
      'data-tip': 'You cant bypass the system without synthesizing the haptic THX circuit!',
    },
    start: 1537162846000,
    title: 'Ground crew NSN',
  },
];

export function getShiftData() {
  return { shifts, groups };
}
