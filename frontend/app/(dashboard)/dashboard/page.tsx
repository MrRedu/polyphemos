'use client';
import { DASHBOARD_OPTIONS } from '@/lib/constants';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="rounded shadow-xs bg-background w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 p-8 h-full w-full gap-4">
        {DASHBOARD_OPTIONS.map((option) => (
          <Link
            href={option.url}
            key={option.name}
            className="flex flex-col items-center justify-center gap-2 rounded border p-8 hover:bg-muted/50"
          >
            <h3 className="text-2xl font-bold">{option.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
