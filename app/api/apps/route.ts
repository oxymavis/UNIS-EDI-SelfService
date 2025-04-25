import { NextResponse } from 'next/server';
import { db, type Application } from '@/lib/db';

// GET /api/apps - Get all applications
export async function GET() {
  const applications = Array.from(db.applications.values());
  return NextResponse.json(applications);
}

// POST /api/apps - Create new application
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newApp: Application = {
      id: `app-${Date.now()}`,
      name: body.name,
      code: body.code,
      description: body.description,
      protocol: body.protocol,
      interfaces: body.interfaces,
      status: 'active',
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      certificates: [],
      testResults: [],
    };

    db.applications.set(newApp.id, newApp);
    return NextResponse.json(newApp, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
} 