import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/docs/[id] - Get document content
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const document = db.documents.get(params.id);
  if (!document) {
    return NextResponse.json(
      { error: 'Document not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(document);
} 