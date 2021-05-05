/// <reference types="react-scripts" />
interface Window {
    Appcues: {
      anonymous: () => void;
      show: (hash: string) => void;
      track: (eventName: string) => void;
    };
  }