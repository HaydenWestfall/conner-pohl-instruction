/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BOOKING_URL: string;
  readonly VITE_GOOGLE_MAPS_URL: string;
  readonly VITE_FACEBOOK_URL: string;
  readonly VITE_INSTAGRAM_URL: string;
  readonly VITE_TIKTOK_URL: string;
  readonly VITE_CONTACT_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
