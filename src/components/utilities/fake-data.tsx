import * as faker from 'faker';
import * as moment from 'moment';
import * as React from 'react';

export default function(groupCount = 30, itemCount = 1000, daysInPast = 30) {
  let randomSeed = Math.floor(Math.random() * 1000);
  let groups = [];
  for (let i = 0; i < groupCount; i++) {
    groups.push({
      id: `${i + 1}`,
      title: faker.name.firstName(),
      rightTitle: faker.name.lastName(),
    });
  }

  let items = [];
  for (let i = 0; i < itemCount; i++) {
    const startDate =
      faker.date.recent(daysInPast).valueOf() + daysInPast * 0.3 * 86400 * 1000;
    const startValue =
      Math.floor(moment(startDate).valueOf() / 10000000) * 10000000;
    const endValue = moment(
      startDate + faker.random.number({ min: 2, max: 20 }) * 15 * 60 * 1000
    ).valueOf();

    items.push({
      id: i + "",
      group: faker.random.number({ min: 1, max: groups.length }) + "",
      title: faker.hacker.phrase(),
      start: startValue,
      end: endValue,
      // canMove: startValue > new Date().getTime(),
      // canResize: 'both',
      className:
        moment(startDate).day() === 6 || moment(startDate).day() === 0
          ? "item-weekend"
          : "",
      itemProps: {
        "data-tip": faker.hacker.phrase()
      }
    });
  }

  items = items.sort((a, b) => b - a);

  return { groups, shifts: items };
}
