import { useState } from 'react';
import type { OrgConfig } from '../lib/api';
import { updateOrganization, createAnimal } from '../lib/api';
import { uploadImage } from '../lib/upload';
import type { TabKey } from './Sidebar';

interface OnboardingWizardProps {
  orgId: number;
  orgConfig: OrgConfig;
  onComplete: () => void;
  onNavigateTab: (tab: TabKey) => void;
}

const HEADING_FONT_OPTIONS = ['Noto Serif Display', 'Playfair Display', 'Lora', 'Merriweather'];
const BODY_FONT_OPTIONS = ['Poppins', 'DM Sans', 'Inter', 'Source Sans 3'];
const SPECIES_OPTIONS = ['Dog', 'Cat', 'Rabbit', 'Bird', 'Other'];
const STATUS_OPTIONS = ['Available', 'Pending', 'Adopted'];

const TOTAL_STEPS = 5;

const inputCls = 'w-full border border-silver-gray rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-warm-brown bg-white text-deep-taupe';

function Spinner() {
  return (
    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <label className="block text-xs font-semibold text-stone uppercase tracking-wide">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function OnboardingWizard({ orgId, orgConfig, onComplete, onNavigateTab }: OnboardingWizardProps) {
  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  // Step 2 — Organization info
  const [orgInfo, setOrgInfo] = useState({
    name: orgConfig.name ?? '',
    phone: orgConfig.contact?.phone ?? '',
    email: orgConfig.contact?.email ?? '',
    address: orgConfig.contact?.address ?? '',
    city: '',
    state: '',
    zip_code: '',
    website: '',
    mission_statement: '',
    ein: '',
  });

  // Step 3 — Branding
  const [branding, setBranding] = useState({
    logo_url: orgConfig.logo ?? '',
    primary_color: orgConfig.colors?.primary ?? '#804e3f',
    heading_font: 'Noto Serif Display',
    body_font: 'Poppins',
  });
  const [logoUploading, setLogoUploading] = useState(false);

  // Step 4 — First animal
  const [animal, setAnimal] = useState({
    name: '',
    species: 'Dog',
    breed: '',
    age: '',
    gender: '',
    status: 'Available',
    image_url: '',
  });
  const [animalUploading, setAnimalUploading] = useState(false);
  const [animalAdded, setAnimalAdded] = useState(false);

  const goTo = (n: number) => {
    setError('');
    setStep(n);
  };

  const handleLogoUpload = async (file: File) => {
    setLogoUploading(true);
    try {
      const url = await uploadImage(file, 'logos', orgId);
      setBranding((p) => ({ ...p, logo_url: url }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Logo upload failed.');
    } finally {
      setLogoUploading(false);
    }
  };

  const handleAnimalImageUpload = async (file: File) => {
    setAnimalUploading(true);
    try {
      const url = await uploadImage(file, 'animals', orgId);
      setAnimal((p) => ({ ...p, image_url: url }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Image upload failed.');
    } finally {
      setAnimalUploading(false);
    }
  };

  const handleSaveOrgInfo = async () => {
    if (!orgInfo.name.trim()) {
      setError('Organization name is required.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      await updateOrganization(orgId, {
        org: orgInfo.name,
        phone: orgInfo.phone,
        email: orgInfo.email,
        address: orgInfo.address,
        city: orgInfo.city,
        state: orgInfo.state,
        zip_code: orgInfo.zip_code,
        website: orgInfo.website,
        mission_statement: orgInfo.mission_statement,
        ein: orgInfo.ein,
      });
      goTo(3);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save organization info.');
    } finally {
      setSaving(false);
    }
  };

  const handleSaveBranding = async () => {
    setSaving(true);
    setError('');
    try {
      await updateOrganization(orgId, {
        logo_dark_url: branding.logo_url,
        primary_color: branding.primary_color,
        heading_font: branding.heading_font,
        body_font: branding.body_font,
      });
      goTo(4);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save branding.');
    } finally {
      setSaving(false);
    }
  };

  const handleSaveAnimal = async () => {
    if (!animal.name.trim()) {
      setError('Animal name is required.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      await createAnimal({ ...animal, org_id: orgId });
      setAnimalAdded(true);
      goTo(5);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add animal.');
    } finally {
      setSaving(false);
    }
  };

  const previewUrl = orgConfig.subdomain
    ? `https://${orgConfig.subdomain}.preview.barkhaus.io`
    : orgConfig.siteUrl ?? 'https://barkhaus.io';

  return (
    <div className="fixed inset-0 z-[10000] bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[640px] max-h-[90vh] flex flex-col overflow-hidden">
        {/* Progress bar */}
        {step > 1 && (
          <div className="px-6 pt-5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-stone uppercase tracking-wider">
                Step {step} of {TOTAL_STEPS}
              </span>
            </div>
            <div className="h-1.5 w-full bg-cloud rounded-full overflow-hidden">
              <div
                className="h-full bg-warm-brown rounded-full transition-all"
                style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
              />
            </div>
          </div>
        )}

        <div className="overflow-y-auto flex-1 p-8">
          {error && (
            <p className="text-sm text-red-600 bg-red-50 rounded-xl px-3 py-2 mb-4">{error}</p>
          )}

          {/* ── Step 1: Welcome ── */}
          {step === 1 && (
            <div className="text-center py-8">
              <h2 className="text-3xl font-serif font-bold text-deep-taupe mb-4">Welcome to Barkhaus! 🐾</h2>
              <p className="text-stone max-w-md mx-auto mb-8">
                Let us help you get set up in 5 minutes. We will walk you through adding your organization
                details, branding, and your first animals.
              </p>
              <button
                onClick={() => goTo(2)}
                className="px-8 py-3 font-semibold bg-warm-brown text-white rounded-xl hover:opacity-90 transition"
              >
                Get Started
              </button>
            </div>
          )}

          {/* ── Step 2: Organization Info ── */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-deep-taupe">Organization Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Organization Name" required>
                  <input className={inputCls} value={orgInfo.name} onChange={(e) => setOrgInfo((p) => ({ ...p, name: e.target.value }))} />
                </Field>
                <Field label="Phone">
                  <input className={inputCls} value={orgInfo.phone} onChange={(e) => setOrgInfo((p) => ({ ...p, phone: e.target.value }))} />
                </Field>
                <Field label="Email">
                  <input type="email" className={inputCls} value={orgInfo.email} onChange={(e) => setOrgInfo((p) => ({ ...p, email: e.target.value }))} />
                </Field>
                <Field label="Website">
                  <input type="url" className={inputCls} value={orgInfo.website} onChange={(e) => setOrgInfo((p) => ({ ...p, website: e.target.value }))} placeholder="https://…" />
                </Field>
                <Field label="Address">
                  <input className={inputCls} value={orgInfo.address} onChange={(e) => setOrgInfo((p) => ({ ...p, address: e.target.value }))} />
                </Field>
                <Field label="EIN / Tax ID">
                  <input className={inputCls} value={orgInfo.ein} onChange={(e) => setOrgInfo((p) => ({ ...p, ein: e.target.value }))} placeholder="XX-XXXXXXX" />
                </Field>
                <Field label="City">
                  <input className={inputCls} value={orgInfo.city} onChange={(e) => setOrgInfo((p) => ({ ...p, city: e.target.value }))} />
                </Field>
                <Field label="State">
                  <input className={inputCls} value={orgInfo.state} onChange={(e) => setOrgInfo((p) => ({ ...p, state: e.target.value }))} maxLength={2} />
                </Field>
                <Field label="ZIP">
                  <input className={inputCls} value={orgInfo.zip_code} onChange={(e) => setOrgInfo((p) => ({ ...p, zip_code: e.target.value }))} />
                </Field>
              </div>
              <Field label="Mission Statement">
                <textarea
                  className={`${inputCls} min-h-[80px] resize-y`}
                  value={orgInfo.mission_statement}
                  onChange={(e) => setOrgInfo((p) => ({ ...p, mission_statement: e.target.value }))}
                />
              </Field>
            </div>
          )}

          {/* ── Step 3: Branding ── */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-deep-taupe">Branding</h3>
              <Field label="Logo">
                <div className="flex items-center gap-3">
                  {branding.logo_url ? (
                    <img src={branding.logo_url} alt="Logo" className="h-[60px] w-[60px] rounded-lg object-contain border border-silver-gray bg-cloud" />
                  ) : (
                    <div className="h-[60px] w-[60px] rounded-lg bg-cloud flex items-center justify-center text-xs text-stone">No logo</div>
                  )}
                  <label className="flex items-center gap-1.5 px-3 py-2 text-xs border border-silver-gray rounded-lg hover:bg-cloud transition cursor-pointer">
                    {logoUploading && <Spinner />}
                    {logoUploading ? 'Uploading…' : 'Upload Logo'}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      disabled={logoUploading}
                      onChange={(e) => { const f = e.target.files?.[0]; if (f) void handleLogoUpload(f); e.target.value = ''; }}
                    />
                  </label>
                </div>
              </Field>
              <Field label="Primary Color">
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={branding.primary_color}
                    onChange={(e) => setBranding((p) => ({ ...p, primary_color: e.target.value }))}
                    className="w-10 h-9 rounded-lg border border-silver-gray cursor-pointer p-0.5"
                  />
                  <input
                    type="text"
                    value={branding.primary_color}
                    onChange={(e) => setBranding((p) => ({ ...p, primary_color: e.target.value }))}
                    maxLength={7}
                    className="flex-1 border border-silver-gray rounded-lg px-2 py-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-warm-brown bg-white"
                  />
                </div>
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Heading Font">
                  <select className={inputCls} value={branding.heading_font} onChange={(e) => setBranding((p) => ({ ...p, heading_font: e.target.value }))}>
                    {HEADING_FONT_OPTIONS.map((f) => <option key={f}>{f}</option>)}
                  </select>
                </Field>
                <Field label="Body Font">
                  <select className={inputCls} value={branding.body_font} onChange={(e) => setBranding((p) => ({ ...p, body_font: e.target.value }))}>
                    {BODY_FONT_OPTIONS.map((f) => <option key={f}>{f}</option>)}
                  </select>
                </Field>
              </div>
            </div>
          )}

          {/* ── Step 4: First Animal ── */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-deep-taupe">Add Your First Animal</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name" required>
                  <input className={inputCls} value={animal.name} onChange={(e) => setAnimal((p) => ({ ...p, name: e.target.value }))} />
                </Field>
                <Field label="Species">
                  <select className={inputCls} value={animal.species} onChange={(e) => setAnimal((p) => ({ ...p, species: e.target.value }))}>
                    {SPECIES_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Breed">
                  <input className={inputCls} value={animal.breed} onChange={(e) => setAnimal((p) => ({ ...p, breed: e.target.value }))} />
                </Field>
                <Field label="Age">
                  <input className={inputCls} value={animal.age} onChange={(e) => setAnimal((p) => ({ ...p, age: e.target.value }))} placeholder="e.g. 2 years" />
                </Field>
                <Field label="Gender">
                  <select className={inputCls} value={animal.gender} onChange={(e) => setAnimal((p) => ({ ...p, gender: e.target.value }))}>
                    <option value="">Unknown</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </Field>
                <Field label="Status">
                  <select className={inputCls} value={animal.status} onChange={(e) => setAnimal((p) => ({ ...p, status: e.target.value }))}>
                    {STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="Photo">
                <div className="flex items-center gap-3">
                  {animal.image_url ? (
                    <img src={animal.image_url} alt="Animal" className="h-[60px] w-[60px] rounded-lg object-cover border border-silver-gray bg-cloud" />
                  ) : (
                    <div className="h-[60px] w-[60px] rounded-lg bg-cloud flex items-center justify-center text-xs text-stone">No photo</div>
                  )}
                  <label className="flex items-center gap-1.5 px-3 py-2 text-xs border border-silver-gray rounded-lg hover:bg-cloud transition cursor-pointer">
                    {animalUploading && <Spinner />}
                    {animalUploading ? 'Uploading…' : 'Upload Photo'}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      disabled={animalUploading}
                      onChange={(e) => { const f = e.target.files?.[0]; if (f) void handleAnimalImageUpload(f); e.target.value = ''; }}
                    />
                  </label>
                </div>
              </Field>
            </div>
          )}

          {/* ── Step 5: Ready ── */}
          {step === 5 && (
            <div className="text-center py-4">
              <h2 className="text-3xl font-serif font-bold text-deep-taupe mb-3">You are all set! 🎉</h2>
              <p className="text-stone max-w-md mx-auto mb-6">
                {orgInfo.name || 'Your organization'} is ready to go — we saved your organization info,
                branding{animalAdded ? ', and added your first animal' : ''}.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-silver-gray rounded-xl p-4 hover:bg-cloud transition"
                >
                  <p className="font-semibold text-deep-taupe text-sm">View Your Website ↗</p>
                  <p className="text-xs text-stone mt-1">See your live public site.</p>
                </a>
                <button
                  onClick={() => { onNavigateTab('animals'); onComplete(); }}
                  className="border border-silver-gray rounded-xl p-4 hover:bg-cloud transition text-left"
                >
                  <p className="font-semibold text-deep-taupe text-sm">Add More Animals →</p>
                  <p className="text-xs text-stone mt-1">Grow your adoptable list.</p>
                </button>
                <button
                  onClick={() => { onNavigateTab('website-content'); onComplete(); }}
                  className="border border-silver-gray rounded-xl p-4 hover:bg-cloud transition text-left"
                >
                  <p className="font-semibold text-deep-taupe text-sm">Edit Website Content →</p>
                  <p className="text-xs text-stone mt-1">Customize your public pages.</p>
                </button>
              </div>
              <button
                onClick={onComplete}
                className="px-8 py-3 font-semibold bg-warm-brown text-white rounded-xl hover:opacity-90 transition"
              >
                Go to Dashboard
              </button>
            </div>
          )}
        </div>

        {/* Footer nav — steps 2-4 */}
        {step > 1 && step < 5 && (
          <div className="flex items-center justify-between px-8 py-4 border-t border-silver-gray">
            <button
              onClick={() => goTo(step - 1)}
              disabled={saving}
              className="px-4 py-2 text-sm border border-stone rounded-lg text-deep-taupe hover:bg-cloud transition disabled:opacity-50"
            >
              Back
            </button>
            <div className="flex items-center gap-2">
              {step === 4 ? (
                <button
                  onClick={() => goTo(5)}
                  disabled={saving}
                  className="px-4 py-2 text-sm text-stone hover:text-deep-taupe transition"
                >
                  I will add animals later
                </button>
              ) : (
                <button
                  onClick={() => goTo(step + 1)}
                  disabled={saving}
                  className="px-4 py-2 text-sm text-stone hover:text-deep-taupe transition"
                >
                  Skip
                </button>
              )}
              <button
                onClick={() => {
                  if (step === 2) void handleSaveOrgInfo();
                  else if (step === 3) void handleSaveBranding();
                  else if (step === 4) void handleSaveAnimal();
                }}
                disabled={saving}
                className="flex items-center gap-2 px-6 py-2 text-sm font-semibold bg-warm-brown text-white rounded-xl hover:opacity-90 disabled:opacity-50 transition"
              >
                {saving && <Spinner />}
                {saving ? 'Saving…' : 'Next'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
