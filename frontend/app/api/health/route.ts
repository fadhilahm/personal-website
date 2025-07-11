import { NextRequest, NextResponse } from 'next/server';

import { paths } from '@/types/api';

type HealthResponse = paths['/health']['get']['responses'][200]['content']['application/json'];

export async function GET(_request: NextRequest) {
  try {
    const response: HealthResponse = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    const response: HealthResponse = {
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };

    return NextResponse.json(response, { status: 503 });
  }
}
