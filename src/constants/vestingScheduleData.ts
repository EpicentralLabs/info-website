/**
 * Vesting schedule data showing monthly token unlocks for each allocation.
 * The data includes details for the distribution of tokens across different allocations over 16 months.
 * 
 * @type {Array} vestingScheduleData
 * @property {string} month - The month or stage of the vesting schedule (e.g., 'Cliff', 'Month 1', etc.).
 * @property {number} defi - The amount of tokens unlocked for DeFi allocation in the given month.
 * @property {number} dao - The amount of tokens unlocked for DAO allocation in the given month.
 * @property {number} team - The amount of tokens unlocked for team allocation in the given month.
 * @property {number} marketing - The amount of tokens unlocked for marketing allocation in the given month.
 * @property {number} contributors - The amount of tokens unlocked for contributor bonus allocation in the given month.
 */
export const vestingScheduleData = [
  { month: 'Cliff', defi: 0, dao: 1457402, team: 546531, marketing: 910877, contributors: 273263 },
  { month: 'Month 2', defi: 910877, dao: 728701, team: 182175, marketing: 910877, contributors: 273263 },
  { month: 'Month 3', defi: 910877, dao: 728701, team: 182175, marketing: 910877, contributors: 273263 },
  { month: 'Month 4', defi: 910877, dao: 728701, team: 182175, marketing: 0, contributors: 273263 },
  { month: 'Month 5', defi: 910877, dao: 728701, team: 182175, marketing: 0, contributors: 273263 },
  { month: 'Month 6', defi: 910877, dao: 728701, team: 182175, marketing: 0, contributors: 273263 },
  { month: 'Month 7', defi: 910877, dao: 728701, team: 182175, marketing: 0, contributors: 0 },
  { month: 'Month 8', defi: 910877, dao: 728701, team: 182175, marketing: 0, contributors: 0 },
  { month: 'Month 9', defi: 910877, dao: 728701, team: 182175, marketing: 0, contributors: 0 },
  { month: 'Month 10', defi: 910877, dao: 728701, team: 182175, marketing: 0, contributors: 0 },
  { month: 'Month 11', defi: 910877, dao: 728701, team: 182175, marketing: 0, contributors: 0 },
  { month: 'Month 12', defi: 910877, dao: 728701, team: 182175, marketing: 0, contributors: 0 },
  { month: 'Month 13', defi: 910877, dao: 0, team: 182175, marketing: 0, contributors: 0 },
  { month: 'Month 14', defi: 910877, dao: 0, team: 182175, marketing: 0, contributors: 0 },
  { month: 'Month 15', defi: 0, dao: 0, team: 182175, marketing: 0, contributors: 0 },
  { month: 'Month 16', defi: 0, dao: 0, team: 182175, marketing: 0, contributors: 0 },
];
