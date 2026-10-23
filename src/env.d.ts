interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL?: string;
  readonly PUBLIC_SUPABASE_ANON_KEY?: string;
  readonly PUBLIC_CAPTACAO_SLUG?: string;
  readonly PUBLIC_NOINDEX?: string;
}
interface ImportMeta { readonly env: ImportMetaEnv }
