
'use server';

import { profileCompletenessSuggestions } from '@/ai/flows/profile-completeness-suggestions';
import type { Profile } from '@/lib/types';

export async function getProfileSuggestions(profile: Profile) {
  try {
    const profileString = JSON.stringify(profile, null, 2);
    const result = await profileCompletenessSuggestions({ profileData: profileString });
    return { success: true, suggestions: result.suggestions };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to get suggestions from AI." };
  }
}
