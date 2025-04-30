// src/types/global.d.ts
interface GreCAPTCHA {
  enterprise: {
    execute(siteKey: string, options: { action: string }): Promise<string>;
  };
}

declare var grecaptcha: GreCAPTCHA;