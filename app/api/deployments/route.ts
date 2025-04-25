import { NextResponse } from 'next/server';
import { db, type DeploymentRequest } from '@/lib/db';

// POST /api/deployments - Submit deployment request
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const app = db.applications.get(body.appId);
    if (!app) {
      return NextResponse.json(
        { error: 'Application not found' },
        { status: 404 }
      );
    }

    const deploymentRequest: DeploymentRequest = {
      id: `deploy-${Date.now()}`,
      appId: body.appId,
      status: 'pending',
      notes: body.notes,
      checklist: body.checklist,
    };

    db.deployments.set(deploymentRequest.id, deploymentRequest);
    return NextResponse.json(deploymentRequest, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
} 