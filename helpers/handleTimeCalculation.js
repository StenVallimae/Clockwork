export const handleTimeCalculation = (start, end) => {
  const [startHours, startMinutes] = start.split(':').map(Number);
  const [endHours, endMinutes] = end.split(':').map(Number);

  const startTotalMinutes = startHours * 60 + startMinutes;
  const endTotalMinutes = endHours * 60 + endMinutes;

  let timePeriodMinutes = 0;

  if (endTotalMinutes >= startTotalMinutes) {
    timePeriodMinutes = endTotalMinutes - startTotalMinutes;
  } else {
    timePeriodMinutes = 24 * 60 - startTotalMinutes + endTotalMinutes;
  }

  let nighttimePeriod = 0;
  let daytimePeriod = 0;

  for (let i = 0; i < timePeriodMinutes; i += 15) {
    const minutesInDay = (startTotalMinutes + i) % (24 * 60);

    if (minutesInDay >= 6 * 60 && minutesInDay < 22 * 60) {
      daytimePeriod += 0.25;
    } else {
      nighttimePeriod += 0.25;
    }
  }

  return {day: daytimePeriod, night: nighttimePeriod};
};
