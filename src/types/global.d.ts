// src/types/global.d.ts
interface GreCAPTCHA {
  enterprise: {
    execute(siteKey: string, options: { action: string }): Promise<string>;
  };
}

declare const grecaptcha: GreCAPTCHA;