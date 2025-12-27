'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { SkillGapLogo } from '@/components/icons';
import { Briefcase, FileText, Menu, X } from 'lucide-react';

const components: { title: string; href: string; description: string, icon: React.ElementType }[] = [
  {
    title: 'Internships',
    href: '/internships',
    description:
      'Find relevant internships to gain practical experience.',
    icon: Briefcase
  },
  {
    title: 'Resume Templates',
    href: '/templates',
    description:
      'Browse professionally designed resume templates.',
    icon: FileText
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <SkillGapLogo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline text-lg">
              SkillGap AI
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/qa" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Q/A
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/rating" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Rating
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Mobile Nav */}
        <div className="flex md:hidden items-center">
           <Link href="/" className="mr-6 flex items-center space-x-2">
            <SkillGapLogo className="h-6 w-6 text-primary" />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden md:flex gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X/> : <Menu />}
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden p-4 border-t bg-white">
          <nav className="grid gap-4 text-lg">
            <Link href="/" className="font-semibold" onClick={closeMobileMenu}>Home</Link>
            <Link href="/internships" className="text-muted-foreground" onClick={closeMobileMenu}>Internships</Link>
            <Link href="/templates" className="text-muted-foreground" onClick={closeMobileMenu}>Templates</Link>
            <Link href="/about" className="font-semibold" onClick={closeMobileMenu}>About</Link>
            <Link href="/qa" className="font-semibold" onClick={closeMobileMenu}>Q/A</Link>
            <Link href="/rating" className="font-semibold" onClick={closeMobileMenu}>Rating</Link>
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="ghost" asChild>
                <Link href="/login" onClick={closeMobileMenu}>Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup" onClick={closeMobileMenu}>Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            <Icon className="h-5 w-5 text-primary" />
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';