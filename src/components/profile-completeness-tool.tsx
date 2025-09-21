
'use client';

import { useState, useTransition } from 'react';
import { Lightbulb, Loader2, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { getProfileSuggestions } from '@/app/actions';
import type { Profile } from '@/lib/types';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function ProfileCompletenessTool({ profile }: { profile: Profile }) {
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setError(null);
    setSuggestions([]);
    startTransition(async () => {
      const result = await getProfileSuggestions(profile);
      if (result.success) {
        setSuggestions(result.suggestions);
      } else {
        setError(result.error || 'An unknown error occurred.');
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="bg-accent/10 border-accent/30 text-accent-foreground/80 hover:bg-accent/20">
          <Sparkles className="mr-2 h-4 w-4" />
          Suggestions
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Profile Completeness Suggestions</DialogTitle>
          <DialogDescription>
            Use AI to analyze your profile and get suggestions for improvement.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          {isPending && (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="ml-4">Analyzing your profile...</p>
            </div>
          )}
          {!isPending && suggestions.length === 0 && error === null && (
            <div className="text-center">
              <p className="mb-4 text-muted-foreground">Ready to get actionable insights on your profile?</p>
              <Button onClick={handleClick}>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Suggestions
              </Button>
            </div>
          )}
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {suggestions.length > 0 && (
            <div>
              <h3 className="mb-4 font-semibold">Here are some suggestions to improve your profile:</h3>
              <ul className="space-y-3">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Lightbulb className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{suggestion}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" onClick={handleClick} className="mt-6 w-full">
                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Regenerate
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
