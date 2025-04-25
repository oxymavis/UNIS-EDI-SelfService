import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// DELETE /api/certificates/[id] - Delete certificate
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const certificate = db.certificates.get(params.id);
  if (!certificate) {
    return NextResponse.json(
      { error: 'Certificate not found' },
      { status: 404 }
    );
  }

  // Remove certificate from all applications
  for (const app of db.applications.values()) {
    app.certificates = app.certificates.filter(cert => cert.id !== params.id);
    db.applications.set(app.id, app);
  }

  db.certificates.delete(params.id);
  return new NextResponse(null, { status: 204 });
} 