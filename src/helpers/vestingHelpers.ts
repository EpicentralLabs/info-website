/**
 * Calculates the progress in months from a given start date, with a maximum cap of 16 months.
 * @param {Date} START_DATE - The starting date to calculate progress from.
 * @returns {number} The number of months passed since the start date, clamped between 0 and 18.
 */
export const calculateTimeProgress = (START_DATE: Date): number => {
    const now = new Date();
    const monthDiff = (now.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24 * 28.7); // Average month length in days
    return Math.max(0, Math.min(16, monthDiff));
  };
  
  /**
   * Calculates the exact position of progress in the vesting schedule.
   * @param {Date} START_DATE - The starting date for the vesting schedule.
   * @returns {number} The precise vesting position.
   */
  export const calculateExactPosition = (START_DATE: Date): number => {
    const progress = calculateTimeProgress(START_DATE);
    if (progress < 0) return 0;
    if (progress >= 16) return 15;
  
    const currentMonth = Math.floor(progress);
    const monthProgress = progress - currentMonth;
  
    return currentMonth + monthProgress;
  };
  
  /**
   * Gets a human-readable progress label for the vesting timeline.
   * @param {Date} START_DATE - The starting date for the vesting schedule.
   * @returns {string} The progress label (e.g., "Month 2 of 16" or "Vesting completed").
   */
  export const getProgressLabel = (START_DATE: Date): string => {
    const now = new Date();
    if (now < START_DATE) {
      return 'Vesting starts in ' + Math.ceil((START_DATE.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) + ' days';
    }
    const monthProgress = calculateTimeProgress(START_DATE);
    if (monthProgress >= 18) {
      return 'Vesting completed';
    }
    return `Month ${Math.floor(monthProgress) + 1} of 18`;
  };
  
  /**
   * Calculates the percentage of tokens still locked for a given allocation.
   * @param {string} allocation - The allocation type (e.g., "DeFi Allocation").
   * @param {Date} START_DATE - The starting date for the vesting schedule.
   * @returns {number} The percentage of tokens still locked.
   */
  export const calculateLockedPercentage = (allocation: string, START_DATE: Date): number => {
    const now = new Date();
    if (now < START_DATE) return 100; // Everything locked before start
    
    const progress = calculateTimeProgress(START_DATE);
  
    const vestingPeriods = {
      'DeFi Allocation': { months: 14, initialLock: 100 },
      'DAO Treasury': { months: 13, initialLock: 100 },
      'Core Team & Investors': { months: 17, initialLock: 100 },
      'Marketing': { months: 3, initialLock: 100 },
      'Contributor Bonus': { months: 8, initialLock: 100 },
      'Public Allocation': { months: 0, initialLock: 0 },
    };
  
    const period = vestingPeriods[allocation as keyof typeof vestingPeriods];
    if (!period) return 0;
  
    if (progress >= period.months) return 0;
    return Math.max(0, period.initialLock * (1 - progress / period.months));
  };
  
  /**
   * Calculates the percentage of tokens unlocked for a given allocation.
   * @param {string} allocation - The allocation type (e.g., "DeFi Allocation").
   * @param {Date} START_DATE - The starting date for the vesting schedule.
   * @returns {number} The percentage of tokens unlocked.
   */
  export const calculateUnlockedPercentage = (allocation: string, START_DATE: Date): number => {
    return 100 - calculateLockedPercentage(allocation, START_DATE);
  };
  
  /**
   * Calculates the total unlocked supply across all allocations.
   * @param {Array} tokenDistributionData - The token distribution data.
   * @param {Date} START_DATE - The starting date for the vesting schedule.
   * @returns {object} An object containing the total unlocked amount and percentage.
   */
  export const calculateTotalUnlockedSupply = (tokenDistributionData: { name: string; amount: string }[], START_DATE: Date): { amount: string; percentage: string } => {
    const totalSupply = 54652600;
    let unlockedAmount = 0;
  
    tokenDistributionData.forEach(item => {
      const unlockedPercentage = calculateUnlockedPercentage(item.name, START_DATE);
      unlockedAmount += (Number(item.amount.replace(/,/g, '')) * unlockedPercentage / 100);
    });
  
    return {
      amount: unlockedAmount.toLocaleString(),
      percentage: ((unlockedAmount / totalSupply) * 100).toFixed(1)
    };
  };
  