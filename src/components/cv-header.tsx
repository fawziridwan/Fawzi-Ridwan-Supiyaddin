
'use client';

import { Download, Globe, Linkedin, Mail, Phone, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Profile } from '@/lib/types';
import { ProfileCompletenessTool } from './profile-completeness-tool';
import { useToast } from '@/hooks/use-toast';

export function CvHeader({ profile }: { profile: Profile }) {
  const { toast } = useToast();

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
          <p className="mt-2 text-sm text-muted-foreground">{profile.location}</p>
        </div>
        <div className="no-print flex items-center gap-2">
          <ProfileCompletenessTool profile={profile} />
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
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
          <Linkedin className="h-4 w-4" />
          <span>{profile.linkedin.replace('https://', '')}</span>
        </a>
        <a href={`tel:${profile.phone}`} className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
          <Phone className="h-4 w-4" />
          <span>{profile.phone}</span>
        </a>
        {profile.website && (
          <a href={profile.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
            <Globe className="h-4 w-4" />
            <span>{profile.website.replace('https://', '')}</span>
          </a>
        )}
      </div>
    </header>
  );
}
