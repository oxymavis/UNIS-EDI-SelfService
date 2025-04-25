import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/apps/[id] - Get application details
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const app = db.applications.get(params.id);
  if (!app) {
    return NextResponse.json(
      { error: 'Application not found' },
      { status: 404 }
    );
  }
  return NextResponse.json(app);
}

// PUT /api/apps/[id] - Update application
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const app = db.applications.get(params.id);
    if (!app) {
      return NextResponse.json(
        { error: 'Application not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const updatedApp = {
      ...app,
      name: body.name ?? app.name,
      code: body.code ?? app.code,
      description: body.description ?? app.description,
      protocol: body.protocol ?? app.protocol,
      interfaces: body.interfaces ?? app.interfaces,
      lastModified: new Date().toISOString(),
    };

    db.applications.set(params.id, updatedApp);
    return NextResponse.json(updatedApp);
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

// DELETE /api/apps/[id] - Delete application
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const app = db.applications.get(params.id);
  if (!app) {
    return NextResponse.json(
      { error: 'Application not found' },
      { status: 404 }
    );
  }

  db.applications.delete(params.id);
  return new NextResponse(null, { status: 204 });
} 