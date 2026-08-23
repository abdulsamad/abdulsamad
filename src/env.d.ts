interface PortfolioAnalytics {
  capture(eventName: string, properties?: Record<string, unknown>): void;
  headers(): Record<string, string>;
}

interface Window {
  portfolioAnalytics?: PortfolioAnalytics;
}
