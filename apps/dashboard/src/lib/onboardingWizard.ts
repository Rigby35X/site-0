import { supabase } from './supabase';
import { updateOrganization } from './api';

function localKey(orgId: number): string {
  return `barkhausOnboardingComplete_${orgId}`;
}

/** Checks organizations.onboarding_complete; falls back to localStorage if the column doesn't exist yet. */
export async function isWizardComplete(orgId: number): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('organizations')
      .select('onboarding_complete')
      .eq('id', orgId)
      .single();
    if (error) throw error;
    if (data && typeof data.onboarding_complete === 'boolean') {
      return data.onboarding_complete;
    }
  } catch {
    // Column may not exist yet — fall back to localStorage below.
  }
  return localStorage.getItem(localKey(orgId)) === 'true';
}

/** Marks onboarding complete in Supabase; always also sets localStorage as a safety net. */
export async function markWizardComplete(orgId: number): Promise<void> {
  try {
    await updateOrganization(orgId, { onboarding_complete: true });
  } catch {
    // Column may not exist yet — localStorage below still records completion.
  }
  localStorage.setItem(localKey(orgId), 'true');
}
