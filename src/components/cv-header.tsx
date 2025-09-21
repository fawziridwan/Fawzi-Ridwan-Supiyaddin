
'use client';

import { Download, Globe, Linkedin, Mail, Phone, Share2, Briefcase, User, GraduationCap, History, Lightbulb, MapPin, Moon, Sun, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Profile } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import React from 'react';

const navLinks = [
  { href: '#summary', label: 'Summary', icon: <User /> },
  { href: '#experience', label: 'Experience', icon: <Briefcase /> },
  { href: '#skills', label: 'Skills', icon: <Lightbulb /> },
  { href: '#education', label: 'Education', icon: <GraduationCap /> },
  { href: '#employment-history', label: 'History', icon: <History /> },
  { href: '#personal-data', label: 'Personal', icon: <UserCircle /> },
];

export function CvHeader({ profile }: { profile: Profile }) {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = React.useState('summary');
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  React.useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.substring(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied!",
      description: "You can now share your CV with others.",
    });
  };

  return (
    <header className="relative flex flex-col items-start gap-8 rounded-xl bg-card p-6 shadow-sm sm:p-8">
      <div className="flex w-full flex-col-reverse items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="font-headline text-4xl font-bold text-primary">{profile.name}</h1>
          <p className="mt-1 text-lg text-muted-foreground">{profile.headline}</p>
        </div>
        <div className="no-print flex items-center gap-2">
           <Button variant="outline" size="icon" onClick={toggleTheme}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Download className="mr-2 h-4 w-4" />
            PDF
          </Button>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
        <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
          <Mail className="h-4 w-4" />
          <span>{profile.email}</span>
        </a>
        <a href={`tel:${profile.phone}`} className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
          <Phone className="h-4 w-4" />
          <span>{profile.phone}</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
          <Linkedin className="h-4 w-4" />
          <span>{profile.linkedin.replace('https://', '')}</span>
        </a>
        <div className="flex items-center gap-3 text-muted-foreground">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span>{profile.location}</span>
        </div>
        {profile.website && (
          <a href={profile.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
            <Globe className="h-4 w-4" />
            <span>{profile.website.replace('https://', '')}</span>
          </a>
        )}
      </div>
       <nav className="no-print sticky top-4 z-10 -mx-4 -mt-2 w-[calc(100%+2rem)] self-center rounded-lg bg-background/80 p-2 backdrop-blur-sm sm:w-[calc(100%+4rem)]">
        <ul className="flex items-center justify-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                  activeSection === link.href.substring(1)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
                )}
              >
                {React.cloneElement(link.icon, { className: 'h-4 w-4' })}
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
