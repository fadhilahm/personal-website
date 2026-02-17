import type { MySql2Database } from 'drizzle-orm/mysql2';

import { projectTranslations } from '../schema';

export async function seedProjectTranslations(db: MySql2Database) {
  await db.insert(projectTranslations).values([
    {
      projectId: 1,
      localeId: 1,
      name: 'E-dash',
      description:
        'Cloud-based SaaS platform that automates CO2 emissions calculation and ESG reporting for enterprises. Served 460+ companies.',
    },
    {
      projectId: 2,
      localeId: 1,
      name: 'Cosmos',
      description:
        'Tool to help CS team manage invoices. Comments system for team communication. Processes 5000+ invoices monthly.',
    },
    {
      projectId: 3,
      localeId: 1,
      name: 'OIDC Authentication Service (e-dash)',
      description:
        'User management for multiple company services. Auth0 integration, mobile-friendly. Secured 100+ enterprise users.',
    },
    {
      projectId: 4,
      localeId: 1,
      name: 'Electric Current Monitoring Service',
      description:
        'Full-stack system receiving and displaying electric current data for anomaly detection and cost reduction. Go, Next.js, Terraform, ECS.',
    },
    {
      projectId: 5,
      localeId: 1,
      name: 'Stream Monitoring Service',
      description:
        'Devices send stream to server, watchable via web app with low latency. Node.js/TypeScript, Vue.js, AWS.',
    },
    {
      projectId: 6,
      localeId: 1,
      name: 'OIDC Authentication Service (Traffic Sim)',
      description: 'Authentication with 2FA, integrated with all company applications.',
    },
    {
      projectId: 7,
      localeId: 1,
      name: 'Chemical Huff and Puff Module',
      description:
        'Module for Pertamina software. First ML implementation in the system.',
    },
    {
      projectId: 8,
      localeId: 1,
      name: 'Machine Learning for Oil & Gas',
      description: 'Research on ML application. Published paper in IATMI Journal.',
    },
    {
      projectId: 9,
      localeId: 1,
      name: 'Help - Delivery Aggregation App',
      description:
        'App to aggregate delivery services for cheapest fees. ShopeePay, queueing, SQL optimization.',
    },
    {
      projectId: 10,
      localeId: 1,
      name: 'Microservices Team (USJ)',
      description:
        'Monitored microservices, Azure Service Bus, Kafka. Elasticsearch, Kibana, distributed tracing.',
    },
    {
      projectId: 1,
      localeId: 2,
      name: 'E-dash',
      description:
        '企業向けCO2排出量計算・ESGレポートを自動化するクラウド型SaaS。460社以上に対応。',
    },
    {
      projectId: 2,
      localeId: 2,
      name: 'Cosmos',
      description:
        'CSチーム向け請求書管理ツール。コメント機能でチーム連携。月5000件以上の請求書を処理。',
    },
    {
      projectId: 3,
      localeId: 2,
      name: 'OIDC認証サービス（e-dash）',
      description:
        '複数社サービス向けユーザー管理。Auth0連携、モバイル対応。100社以上のエンタープライズユーザーを保護。',
    },
    {
      projectId: 4,
      localeId: 2,
      name: '電気監視サービス',
      description:
        '電流データの受信・表示、異常検知・コスト削減。Go、Next.js、Terraform、ECS。',
    },
    {
      projectId: 5,
      localeId: 2,
      name: 'ストリーム監視サービス',
      description:
        'デバイスからサーバーへストリーム配信、低遅延でWebアプリで視聴。Node.js/TypeScript、Vue.js、AWS。',
    },
    {
      projectId: 6,
      localeId: 2,
      name: 'OIDC認証サービス（Traffic Sim）',
      description: '2FA認証、全社アプリケーションと連携。',
    },
    {
      projectId: 7,
      localeId: 2,
      name: 'Chemical Huff and Puffモジュール',
      description: 'ペルタミナ向けモジュール。システム初のML実装。',
    },
    {
      projectId: 8,
      localeId: 2,
      name: '石油・ガス向け機械学習',
      description: 'ML応用の研究。IATMIジャーナルに論文発表。',
    },
    {
      projectId: 9,
      localeId: 2,
      name: 'Help - 配送集約アプリ',
      description:
        '最安値で荷物を送れる配送サービス集約アプリ。ShopeePay、キューイング、SQL最適化。',
    },
    {
      projectId: 10,
      localeId: 2,
      name: 'マイクロサービスチーム（USJ）',
      description:
        'マイクロサービス監視、Azure Service Bus、Kafka。Elasticsearch、Kibana、分散トレーシング。',
    },
  ]);
}
