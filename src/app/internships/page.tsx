import { internships } from '@/lib/data';
import { InternshipList } from '@/components/internships/internship-list';

export default function InternshipsPage({
  searchParams,
}: {
  searchParams?: {
    location?: string;
  };
}) {
  const location = searchParams?.location || 'all';

  const karnatakaInternships = internships.filter(
    (internship) => internship.location === 'Bangalore'
  );

  const filteredInternships =
    location === 'all'
      ? karnatakaInternships
      : karnatakaInternships.filter((internship) => internship.location === location);

  const locations = [
    'all',
    ...new Set(internships.map((i) => i.location)),
  ];

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Find Your Next Internship
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore opportunities to gain valuable industry experience in Karnataka.
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
