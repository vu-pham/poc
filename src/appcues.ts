// (C) 2021 GoodData Corporation

const APPCUES_SCRIPT_ID = 'appcues-script';
//const APPCUES_SCRIPT_SRC = '//fast.appcues.com/70214.js';
//const APPCUES_SCRIPT_SRC = '//fast.appcues.com/70214.js';
const APPCUES_SCRIPT_SRC = '/70214.js';

const loadExternalScript = (id: string, src: string, async = false) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.id = id;
    script.src = src;
    script.async = async;
    script.onload = resolve;
    document.body.appendChild(script);
  });
};

export const loadAppcueScript = () => {
  const appCuesScript = document.getElementById(APPCUES_SCRIPT_ID);
  if (!appCuesScript) {
    loadExternalScript(APPCUES_SCRIPT_ID, APPCUES_SCRIPT_SRC).finally(() => {
      window.Appcues?.anonymous();
    });
  }
};