'use client';

import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { InternshipCard } from './internship-card';
import type { Internship } from '@/lib/types';
import { Filter } from 'lucide-react';

interface InternshipListProps {
  internships: Internship[];
  locations: string[];
  initialLocation: string;
}

export function InternshipList({ internships, locations, initialLocation }: InternshipListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!value || value === 'all') {
      current.delete('location');
    } else {
      current.set('location', value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-1">
        <Card className="sticky top-20 shadow-sm">
          <CardHeader className="flex flex-row items-center gap-2">
            <Filter className="h-5 w-5" />
            <h3 className="font-semibold text-lg">Filters</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <label htmlFor="location-filter" className="font-medium text-sm">Location</label>
              <Select value={selectedLocation} onValueChange={handleLocationChange}>
                <SelectTrigger id="location-filter">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc === 'all' ? 'All Locations' : loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-3">
        {internships.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {internships.map((internship) => (
              <InternshipCard key={internship.id} internship={internship} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No internships found for the selected location.</p>
          </div>
        )}
      </div>
    </div>
  );
}
