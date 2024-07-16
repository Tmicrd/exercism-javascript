const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

const getDayOfWeekIndex = (dayOfWeek) => weekdays.indexOf(dayOfWeek);

const getDateLimits = (weekOrdinal, daysInMonth) => {
  switch (weekOrdinal) {
    case 'first':
      return { lower: 1, upper: 7 };
    case 'second':
      return { lower: 8, upper: 14 };
    case 'third':
      return { lower: 15, upper: 21 };
    case 'fourth':
      return { lower: 22, upper: 28 };
    case 'last':
      return { lower: daysInMonth - 6, upper: daysInMonth };
    case 'teenth':
      return { lower: 13, upper: 19 };
    default:
      throw new Error('Invalid week ordinal');
  }
};

const getMeetupDay = (year, month, weekOrdinal, dayOfWeek) => {
  const { lower, upper } = getDateLimits(
    weekOrdinal,
    getDaysInMonth(year, month),
  );
  const dayOfWeekIndex = getDayOfWeekIndex(dayOfWeek);

  for (let i = lower; i <= upper; i++) {
    if (new Date(year, month - 1, i).getDay() === dayOfWeekIndex) {
      return i;
    }
  }

  throw new Error('Meetup day not found');
};

export const meetup = (year, month, weekOrdinal, dayOfWeek) => {
  const meetupDay = getMeetupDay(year, month, weekOrdinal, dayOfWeek);
  return new Date(year, month - 1, meetupDay);
};
