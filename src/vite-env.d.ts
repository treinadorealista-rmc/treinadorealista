/// <reference types="vite/client" />

interface Window {
  fbq?: (action: string, event: string, params?: object) => void;
  utmify?: {
    send: (event: string, params?: object) => void;
    config?: (options: {
      autoPageView?: boolean;
      autoViewContent?: boolean;
      autoEvents?: boolean;
      captureUtm?: boolean;
    }) => void;
  };
  pixelId?: string;
  utmifyConfig?: {
    autoPageView?: boolean;
    autoViewContent?: boolean;
    autoEvents?: boolean;
    captureUtm?: boolean;
  };
}
