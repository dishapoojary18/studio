import { internships } from '@/lib/data';
import { InternshipCard } from '@/components/internships/internship-card';
import { InternshipList } from '@/components/internships/internship-list';
import type { Internship } from '@/lib/types';
import { Briefcase } from 'lucide-react';

export default function InternshipsPage({
  searchParams,
}: {
  searchParams?: {
    location?: string;
  };
}) {
  const location = searchParams?.location || 'all';

  const filteredInternships = internships.filter(
    (internship) => location === 'all' || internship.location === location
  );

  const locations = ['all', ...new Set(internships.map((i) => i.location))];

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Find Your Next Internship
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore opportunities to gain valuable industry experience.
        </p>
      </div>

      <InternshipList
        locations={locations}
        initialLocation={location}
        internships={filteredInternships}
      />
    </div>
  );
}
