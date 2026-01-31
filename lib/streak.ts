/**
 * Calculate the updated streak based on the last activity date and current date
 * @param currentStreak - The user's current streak count
 * @param lastActivityDate - The last activity date in YYYY-MM-DD format (or null if no prior activity)
 * @param currentDateLocal - The current date in YYYY-MM-DD format
 * @returns Object with newStreak and longestStreak values
 */
export function calculateStreak(
  currentStreak: number,
  lastActivityDate: string | null,
  currentDateLocal: string // YYYY-MM-DD
): { newStreak: number; longestStreak: number } {
  // If no previous activity, start streak at 1
  if (!lastActivityDate) {
    return { newStreak: 1, longestStreak: 1 };
  }

  // If same day, keep current streak (no increment)
  if (lastActivityDate === currentDateLocal) {
    return { newStreak: currentStreak, longestStreak: currentStreak };
  }

  // Calculate days between last activity and today
  const lastDate = new Date(lastActivityDate + 'T00:00:00');
  const currentDate = new Date(currentDateLocal + 'T00:00:00');
  const diffTime = currentDate.getTime() - lastDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // If exactly 1 day apart, increment streak
  if (diffDays === 1) {
    const newStreak = currentStreak + 1;
    return { newStreak, longestStreak: newStreak };
  }

  // Otherwise (missed days or time travel), reset to 1
  // Keep the previous streak as longestStreak if it was higher
  return { newStreak: 1, longestStreak: Math.max(currentStreak, 1) };
}
