import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/testing/[appId] - Get test results for an application
export async function GET(
  request: Request,
  { params }: { params: { appId: string } }
) {
  const app = db.applications.get(params.appId);
  if (!app) {
    return NextResponse.json(
      { error: 'Application not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    results: app.testResults,
  });
} 