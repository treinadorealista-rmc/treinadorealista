/// <reference types="vite/client" />

interface Window {
  fbq?: (action: string, event: string, params?: object) => void;
  utmify?: {
    send: (event: string, params?: object) => void;
  };
}
