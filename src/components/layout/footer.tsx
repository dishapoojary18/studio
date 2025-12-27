import { SkillGapLogo } from '@/components/icons';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <SkillGapLogo className="h-6 w-6 text-primary" />
            <span className="font-semibold font-headline text-lg">SkillGap AI</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/internships" className="hover:text-primary transition-colors">
              Internships
            </Link>
            <Link href="/qa" className="hover:text-primary transition-colors">
              Q/A
            </Link>
            <Link href="/templates" className="hover:text-primary transition-colors">
              Templates
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SkillGap AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
