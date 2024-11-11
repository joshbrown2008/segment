// src/analytics-package.d.ts
declare module 'analytics-package' {
  export class AnalyticsService {
    constructor(writeKey: string);
    identify(data: {
      userId: string;
      traits: { email: string };
    }): Promise<void>;
    trackEvent(data: {
      userId: string;
      event: string;
      properties: { name: string; value: number };
    }): Promise<void>;
  }
}
