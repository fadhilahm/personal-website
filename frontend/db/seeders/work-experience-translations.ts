import type { MySql2Database } from 'drizzle-orm/mysql2';

import { workExperienceTranslations } from '../schema';

export async function seedWorkExperienceTranslations(db: MySql2Database) {
  await db.insert(workExperienceTranslations).values([
    {
      workExperienceId: 1,
      localeId: 1,
      positionTitle: 'Full-stack Software Developer',
      description: `- Worked as a full-stack developer on E-dash (Go, Next.js, AWS) - CO2 emissions calculation and ESG reporting for 460+ companies
- Cosmos: invoice management tool for CS team, comments system, 5000+ invoices monthly
- OIDC Authentication service: user management for 100+ enterprise users, Auth0 integration, mobile-friendly`,
    },
    {
      workExperienceId: 2,
      localeId: 1,
      positionTitle: 'NodeJS Developer',
      description: `- Monitored distributed microservices (Azure Service Bus, Kafka)
- Developed new features and defect triage with global teams (GitLab, JIRA, Confluence)
- Debugged complex distributed system issues using Elasticsearch, Kibana, distributed tracing`,
    },
    {
      workExperienceId: 3,
      localeId: 1,
      positionTitle: 'Software Engineer',
      description: `- Developed Chemical Huff and Puff module for Pertamina's software
- Introduced machine learning for the first time in the software
- Led future ML implementation for other modules`,
    },
    {
      workExperienceId: 4,
      localeId: 1,
      positionTitle: 'Researcher',
      description: `- Researched machine learning in oil and gas industry
- Led team of 3 in creating research paper
- Published in IATMI Journal: "Application of Artificial Neural Network to Identify Potential Zones for Re-perforation"`,
    },
    {
      workExperienceId: 5,
      localeId: 1,
      positionTitle: 'Backend Developer',
      description: `- Developed features and maintained AWS with Node.js
- ShopeePay integration, queueing system, SQL optimization for CMS
- Collaborated with Bitbucket and Jira`,
    },
    {
      workExperienceId: 6,
      localeId: 1,
      positionTitle: 'Software Engineer',
      description: `- Electric Current Monitoring: Full-stack (Go, Next.js), Terraform, ECS, Clean Architecture
- Stream Monitoring: Node.js/TypeScript, Vue.js, improved UX
- OIDC Authentication: 2FA, integrated with company applications`,
    },
    {
      workExperienceId: 1,
      localeId: 2,
      positionTitle: 'フルスタックソフトウェア開発者',
      description: `- E-dash（Go、Next.js、AWS）でフルスタック開発。CO2排出量計算・ESGレポート、460社以上に対応
- Cosmos：CS向け請求書管理ツール、コメント機能、月5000件以上の請求書処理
- OIDC認証サービス：100社以上のエンタープライズユーザー管理、Auth0連携、モバイル対応`,
    },
    {
      workExperienceId: 2,
      localeId: 2,
      positionTitle: 'NodeJS開発者',
      description: `- 分散マイクロサービス（Azure Service Bus、Kafka）の監視
- グローバルチームと新機能開発・障害トリアージ（GitLab、JIRA、Confluence）
- Elasticsearch、Kibana、分散トレーシングで複雑な分散システムのデバッグ`,
    },
    {
      workExperienceId: 3,
      localeId: 2,
      positionTitle: 'ソフトウェアエンジニア',
      description: `- ペルタミナ向けChemical Huff and Puffモジュールを開発
- ソフトウェアに初めて機械学習を導入
- 他モジュールへのML実装を主導`,
    },
    {
      workExperienceId: 4,
      localeId: 2,
      positionTitle: 'リサーチャー',
      description: `- 石油・ガス業界における機械学習の応用を研究
- 3名のチームを率いて研究論文を作成
- IATMIジャーナルに「人工ニューラルネットワークによる再穿孔有望ゾーンの特定」を発表`,
    },
    {
      workExperienceId: 5,
      localeId: 2,
      positionTitle: 'バックエンド開発者',
      description: `- Node.jsで機能開発・AWS運用
- ShopeePay連携、キューイング、CMS用SQL最適化
- Bitbucket・Jiraで協業`,
    },
    {
      workExperienceId: 6,
      localeId: 2,
      positionTitle: 'ソフトウェアエンジニア',
      description: `- 電気監視サービス：フルスタック（Go、Next.js）、Terraform、ECS、クリーンアーキテクチャ
- ストリーム監視：Node.js/TypeScript、Vue.js、UX改善
- OIDC認証：2FA、全社アプリケーションと連携`,
    },
    {
      workExperienceId: 1,
      localeId: 3,
      positionTitle: 'Pengembang Perangkat Lunak Full-stack',
      description: `- Bekerja sebagai pengembang full-stack di E-dash (Go, Next.js, AWS) - Perhitungan emisi CO2 dan pelaporan ESG untuk 460+ perusahaan
- Cosmos: alat manajemen faktur untuk tim CS, sistem komentar, 5000+ faktur per bulan
- Layanan OIDC Authentication: manajemen pengguna untuk 100+ pengguna enterprise, integrasi Auth0, ramah seluler`,
    },
    {
      workExperienceId: 2,
      localeId: 3,
      positionTitle: 'Pengembang NodeJS',
      description: `- Memantau mikroservis terdistribusi (Azure Service Bus, Kafka)
- Mengembangkan fitur baru dan triase cacat dengan tim global (GitLab, JIRA, Confluence)
- Debug masalah sistem terdistribusi kompleks menggunakan Elasticsearch, Kibana, distributed tracing`,
    },
    {
      workExperienceId: 3,
      localeId: 3,
      positionTitle: 'Insinyur Perangkat Lunak',
      description: `- Mengembangkan modul Chemical Huff and Puff untuk perangkat lunak Pertamina
- Memperkenalkan machine learning untuk pertama kalinya di perangkat lunak
- Memimpin implementasi ML untuk modul lain`,
    },
    {
      workExperienceId: 4,
      localeId: 3,
      positionTitle: 'Peneliti',
      description: `- Meneliti penerapan machine learning di industri minyak dan gas
- Memimpin tim 3 orang dalam membuat makalah penelitian
- Menerbitkan di Jurnal IATMI: "Penerapan Artificial Neural Network untuk Mengidentifikasi Zona Potensial Re-perforasi"`,
    },
    {
      workExperienceId: 5,
      localeId: 3,
      positionTitle: 'Pengembang Backend',
      description: `- Mengembangkan fitur dan memelihara AWS dengan Node.js
- Integrasi ShopeePay, sistem antrian, optimasi SQL untuk CMS
- Berkolaborasi dengan Bitbucket dan Jira`,
    },
    {
      workExperienceId: 6,
      localeId: 3,
      positionTitle: 'Insinyur Perangkat Lunak',
      description: `- Layanan Pemantauan Arus Listrik: Full-stack (Go, Next.js), Terraform, ECS, Clean Architecture
- Pemantauan Stream: Node.js/TypeScript, Vue.js, peningkatan UX
- OIDC Authentication: 2FA, terintegrasi dengan aplikasi perusahaan`,
    },
  ]);
}
