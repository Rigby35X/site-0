function localKey(orgId: number): string {
  return `barkhausOnboardingComplete_${orgId}`;
}

export function isWizardComplete(orgId: number): boolean {
  return localStorage.getItem(localKey(orgId)) === 'true';
}

export function markWizardComplete(orgId: number): void {
  localStorage.setItem(localKey(orgId), 'true');
}

export function resetWizard(orgId: number): void {
  localStorage.removeItem(localKey(orgId));
}
