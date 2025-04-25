import { NextResponse } from 'next/server';
import { db, type Certificate } from '@/lib/db';

// GET /api/certificates - Get all certificates
export async function GET() {
  const certificates = Array.from(db.certificates.values());
  return NextResponse.json({ certificates });
}

// POST /api/certificates - Upload new certificate
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

    const certificate: Certificate = {
      id: `cert-${Date.now()}`,
      name: body.name,
      expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year from now
      status: 'active',
    };

    app.certificates.push(certificate);
    db.applications.set(app.id, app);
    db.certificates.set(certificate.id, certificate);

    return NextResponse.json(certificate, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
} 