import type { MySql2Database } from 'drizzle-orm/mysql2';

import { workExperiences } from '../schema';

export async function seedWorkExperiences(db: MySql2Database) {
  await db.insert(workExperiences).values([
    {
      companyId: 1,
      startDate: new Date('2023-10-01'),
      endDate: new Date('2025-10-01'),
      employmentTypeId: 1,
      workModeId: 1,
    },
    {
      companyId: 2,
      startDate: new Date('2025-10-01'),
      endDate: null,
      employmentTypeId: 2,
      workModeId: 1,
    },
    {
      companyId: 3,
      startDate: new Date('2018-08-01'),
      endDate: new Date('2019-08-01'),
      employmentTypeId: 1,
      workModeId: 1,
    },
    {
      companyId: 4,
      startDate: new Date('2018-05-01'),
      endDate: new Date('2018-11-01'),
      employmentTypeId: 1,
      workModeId: 1,
    },
    {
      companyId: 5,
      startDate: new Date('2020-06-01'),
      endDate: new Date('2020-12-01'),
      employmentTypeId: 1,
      workModeId: 2,
    },
    {
      companyId: 6,
      startDate: new Date('2021-01-01'),
      endDate: new Date('2023-10-01'),
      employmentTypeId: 1,
      workModeId: 1,
    },
  ]);
}
