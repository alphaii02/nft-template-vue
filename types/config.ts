import type { PublicRuntimeConfig } from '@nuxt/schema';

export enum AppEnv {
  PROD = 'production',
  DEV = 'development',
}

declare global {
  interface ConfigInterface extends PublicRuntimeConfig {
    CHAIN_ID: String;
    CONTRACT_ADDRESS: String;0x4EccA0AF71742c8426a36094B7fB5f22D10B1E7d
  }
}
