import { NextApiRequest, NextApiResponse } from 'next';
import { paths } from '@/types/api';

type HealthResponse = paths['/health']['get']['responses'][200]['content']['application/json'];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse>
) {
  try {
    const response: HealthResponse = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    };

    res.status(200).json(response);
  } catch (error) {
    const response: HealthResponse = {
      status: 'unhealthy', 
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    };

    res.status(503).json(response);
  }
} 