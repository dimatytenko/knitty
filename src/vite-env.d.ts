/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FINGER_PRINT_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}