import { groupActivitiesHistoryByMonth, sortActivityByCompletedAtDesc, formatDate } from './utils';
import { Activity } from '../features/panel/types';

describe('groupActivitiesHistoryByMonth', () => {
  it('should group activities by month and year', () => {
    const activities: Activity[] = [
      { completedAt: 1695427200000, activityType: 'interview', name: 'Price increase' }, // 23 Sep, 2023
      { completedAt: 1695254400000, activityType: 'interview', name: 'App feedback' }, // 21 Sep, 2023
      { completedAt: 1716508800000, activityType: 'interview', name: 'Smartphone Insurance' }, // 24 May, 2024
      {
        completedAt: 1715817600000,
        activityType: 'survey',
        name: 'Hannover soft-launch',
        source: 'anna@wertgarantie.de',
      }, // 16 May, 2024
      { completedAt: 1715385600000, activityType: 'review', name: 'Trustpilot link', source: 'anna@wertgarantie.de' }, // 11 May, 2024
    ];

    const expectedOutput = {
      'September 2023': [
        { completedAt: 1695427200000, activityType: 'interview', name: 'Price increase' },
        { completedAt: 1695254400000, activityType: 'interview', name: 'App feedback' },
      ],
      'May 2024': [
        { completedAt: 1716508800000, activityType: 'interview', name: 'Smartphone Insurance' },
        {
          completedAt: 1715817600000,
          activityType: 'survey',
          name: 'Hannover soft-launch',
          source: 'anna@wertgarantie.de',
        },
        {
          completedAt: 1715385600000,
          activityType: 'review',
          name: 'Trustpilot link',
          source: 'anna@wertgarantie.de',
        },
      ],
    };

    const result = groupActivitiesHistoryByMonth(activities);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle an empty activities array', () => {
    const activities: Activity[] = [];
    const expectedOutput = {};

    const result = groupActivitiesHistoryByMonth(activities);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle activities in the same month', () => {
    const activities: Activity[] = [
      { completedAt: 1695254400000, activityType: 'interview', name: 'App feedback' }, // 21 Sep, 2023
      { completedAt: 1695340800000, activityType: 'survey', name: 'Customer survey' }, // 22 Sep, 2023
    ];

    const expectedOutput = {
      'September 2023': [
        { completedAt: 1695254400000, activityType: 'interview', name: 'App feedback' },
        { completedAt: 1695340800000, activityType: 'survey', name: 'Customer survey' },
      ],
    };

    const result = groupActivitiesHistoryByMonth(activities);

    expect(result).toEqual(expectedOutput);
  });
});

describe('sortActivityByCompletedAtDesc', () => {
  it('should sort activities in descending order of completedAt', () => {
    const activities: Activity[] = [
      { completedAt: 1695254400000, activityType: 'interview', name: 'App feedback' }, // 21 Sep, 2023
      { completedAt: 1695427200000, activityType: 'interview', name: 'Price increase' }, // 23 Sep, 2023
      { completedAt: 1716508800000, activityType: 'interview', name: 'Smartphone Insurance' }, // 24 May, 2024
    ];

    const expectedOrder = [
      { completedAt: 1716508800000, activityType: 'interview', name: 'Smartphone Insurance' },
      { completedAt: 1695427200000, activityType: 'interview', name: 'Price increase' },
      { completedAt: 1695254400000, activityType: 'interview', name: 'App feedback' },
    ];

    const sortedActivities = activities.sort(sortActivityByCompletedAtDesc);

    expect(sortedActivities).toEqual(expectedOrder);
  });

  it('should handle activities with the same completedAt timestamp', () => {
    const activities: Activity[] = [
      { completedAt: 1695254400000, activityType: 'interview', name: 'First' },
      { completedAt: 1695254400000, activityType: 'interview', name: 'Second' },
    ];

    const expectedOrder = [
      { completedAt: 1695254400000, activityType: 'interview', name: 'First' },
      { completedAt: 1695254400000, activityType: 'interview', name: 'Second' },
    ];

    const sortedActivities = activities.sort(sortActivityByCompletedAtDesc);

    expect(sortedActivities).toEqual(expectedOrder);
  });

  it('should handle an empty array', () => {
    const activities: Activity[] = [];

    const sortedActivities = activities.sort(sortActivityByCompletedAtDesc);

    expect(sortedActivities).toEqual([]);
  });
});

describe('formatDate', () => {
  it('should format timestamp to "DD MMM YYYY"', () => {
    const timestamp = 1695427200000; // 23 Sep 2023
    const expectedDate = '23 Sept 2023';

    const formattedDate = formatDate(timestamp);
    console.log('date = ', formattedDate);
    expect(formattedDate).toEqual(expectedDate);
  });

  it('should return "Invalid Date" for invalid timestamps', () => {
    // !NOTE: cast to any to run the test without typing errors
    const timestamp = 'invalid_timestamp' as any;
    const expectedDate = 'Invalid Date';

    const formattedDate = formatDate(timestamp);

    expect(formattedDate).toEqual(expectedDate);
  });
});
