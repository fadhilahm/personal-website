import { NextRequest } from 'next/server';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { GET } from './route';

describe('GET /api/health', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('returns 200 with healthy status', async () => {
    const request = new NextRequest('http://localhost:3000/api/health');
    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.status).toBe('healthy');
    expect(typeof body.timestamp).toBe('string');
    expect(typeof body.uptime).toBe('number');
  });

  it('returns a valid ISO timestamp', async () => {
    const request = new NextRequest('http://localhost:3000/api/health');
    const response = await GET(request);
    const body = await response.json();

    expect(() => new Date(body.timestamp)).not.toThrow();
    expect(new Date(body.timestamp).toISOString()).toBe(body.timestamp);
  });

  it('returns 503 with unhealthy status when an error occurs', async () => {
    vi.spyOn(process, 'uptime')
      .mockImplementationOnce(() => { throw new Error('uptime failed'); })
      .mockReturnValueOnce(0);

    const request = new NextRequest('http://localhost:3000/api/health');
    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(503);
    expect(body.status).toBe('unhealthy');
  });
});
