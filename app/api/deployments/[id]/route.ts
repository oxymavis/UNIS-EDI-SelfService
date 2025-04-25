import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/deployments/[id] - Get deployment status
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const deployment = db.deployments.get(params.id);
  if (!deployment) {
    return NextResponse.json(
      { error: 'Deployment request not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(deployment);
} 