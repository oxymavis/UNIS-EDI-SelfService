import { NextResponse } from 'next/server';
import { db, type TestResult } from '@/lib/db';

// POST /api/testing - Run test
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

    // Simulate test execution
    const success = Math.random() > 0.3; // 70% success rate
    const testResult: TestResult = {
      id: `test-${Date.now()}`,
      timestamp: new Date().toISOString(),
      interface: body.interface,
      status: success ? 'success' : 'failed',
      message: success
        ? 'Test completed successfully. All validation checks passed.'
        : 'Test failed. Invalid EDI format in segment ST01.',
    };

    app.testResults.unshift(testResult);
    db.applications.set(app.id, app);

    return NextResponse.json(testResult, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

// GET /api/testing/[appId] route will be in a separate file 