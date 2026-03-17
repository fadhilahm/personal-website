import type { MySql2Database } from 'drizzle-orm/mysql2';

import { companyTranslations } from '../schema';

export async function seedCompanyTranslations(db: MySql2Database) {
  await db.insert(companyTranslations).values([
    {
      companyId: 1,
      localeId: 1,
      name: 'e-dash',
      description:
        'Environmental technology company backed by Mitsui & Co., providing cloud-based CO2 emissions tracking and decarbonization solutions for enterprises and municipalities.',
    },
    {
      companyId: 2,
      localeId: 1,
      name: 'Universal Studios Japan (via Allegis Group Japan K.K.)',
      description:
        'Digital technology company providing entertainment experiences and digital platform services for millions of global visitors.',
    },
    {
      companyId: 3,
      localeId: 1,
      name: 'PT LAPI ITB',
      description: 'Research company that works under the Indonesian government.',
    },
    {
      companyId: 4,
      localeId: 1,
      name: 'GADA ENERGI ITB',
      description:
        'Energy-focused research institute that works under Petroleum Engineering Major.',
    },
    {
      companyId: 5,
      localeId: 1,
      name: 'PT. Solusi Layanan Digital (Help)',
      description:
        'Startup that made an application to aggregate delivery services so users can send items using the cheapest delivery fee.',
    },
    {
      companyId: 6,
      localeId: 1,
      name: 'Traffic Sim Co., Ltd',
      description:
        'Company that provides various services and hardwares for broadcasting companies.',
    },
    {
      companyId: 1,
      localeId: 2,
      name: 'e-dash',
      description:
        '三井物産系の環境テクノロジー企業。企業・自治体向けクラウド型CO2排出量追跡・脱炭素化ソリューションを提供。',
    },
    {
      companyId: 2,
      localeId: 2,
      name: 'ユニバーサル・スタジオ・ジャパン（アレジス・グループ・ジャパン経由）',
      description:
        '世界中の来場者にエンターテインメント体験とデジタルプラットフォームサービスを提供するデジタルテクノロジー企業。',
    },
    {
      companyId: 3,
      localeId: 2,
      name: 'PT LAPI ITB',
      description: 'インドネシア政府傘下の研究会社。',
    },
    {
      companyId: 4,
      localeId: 2,
      name: 'GADA ENERGI ITB',
      description: '石油工学専攻傘下のエネルギー研究機関。',
    },
    {
      companyId: 5,
      localeId: 2,
      name: 'PT. ソルシ・ラヤナン・デジタル（Help）',
      description: '配送サービスを集約し、最安値で荷物を送れるアプリを開発したスタートアップ。',
    },
    {
      companyId: 6,
      localeId: 2,
      name: 'Traffic Sim Co., Ltd',
      description: '放送会社向けの各種サービス・ハードウェアを提供する企業。',
    },
    {
      companyId: 1,
      localeId: 3,
      name: 'e-dash',
      description:
        'Perusahaan teknologi lingkungan didukung Mitsui & Co., menyediakan pelacakan emisi CO2 berbasis cloud dan solusi dekarbonisasi untuk perusahaan dan pemerintah daerah.',
    },
    {
      companyId: 2,
      localeId: 3,
      name: 'Universal Studios Japan (via Allegis Group Japan K.K.)',
      description:
        'Perusahaan teknologi digital yang menyediakan pengalaman hiburan dan layanan platform digital untuk jutaan pengunjung global.',
    },
    {
      companyId: 3,
      localeId: 3,
      name: 'PT LAPI ITB',
      description: 'Perusahaan riset di bawah pemerintah Indonesia.',
    },
    {
      companyId: 4,
      localeId: 3,
      name: 'GADA ENERGI ITB',
      description: 'Lembaga riset energi di bawah Jurusan Teknik Perminyakan.',
    },
    {
      companyId: 5,
      localeId: 3,
      name: 'PT. Solusi Layanan Digital (Help)',
      description:
        'Startup yang membuat aplikasi agregasi layanan pengiriman agar pengguna dapat mengirim barang dengan biaya termurah.',
    },
    {
      companyId: 6,
      localeId: 3,
      name: 'Traffic Sim Co., Ltd',
      description:
        'Perusahaan yang menyediakan berbagai layanan dan perangkat keras untuk perusahaan penyiaran.',
    },
  ]);
}
