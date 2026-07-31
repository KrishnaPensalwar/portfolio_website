// Types for Cloudflare environment bindings
interface CloudflareEnv {
  ASSETS: Fetcher;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_FORMSPREE_ENDPOINT?: string;
  }
}
