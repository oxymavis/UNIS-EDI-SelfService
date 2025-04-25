import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/docs - Get documentation list
export async function GET() {
  const documents = Array.from(db.documents.values());
  const categories = documents.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push({
      id: doc.id,
      title: doc.title,
      description: doc.description,
      category: doc.category,
    });
    return acc;
  }, {} as Record<string, any[]>);

  return NextResponse.json({
    categories: Object.entries(categories).map(([name, documents]) => ({
      name,
      documents,
    })),
  });
} 