import { Activity } from '../features/panel/types';

interface GroupedActivitiesHistoryByMonth {
  [monthYear: string]: Activity[];
}
export const groupActivitiesHistoryByMonth = (activities: Activity[]) =>
  activities.reduce((acc, item) => {
    const date = new Date(item.completedAt);
    const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(item);
    return acc;
  }, {} as GroupedActivitiesHistoryByMonth);

export const sortActivityByCompletedAtDesc = (activityA: Activity, activityB: Activity) =>
  activityB.completedAt - activityA.completedAt;

export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);

  return date.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};
