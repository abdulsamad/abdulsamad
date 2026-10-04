const PLAIN = '/favicon-plain.svg';
const DOT = '/favicon-dot.svg';

type FaviconState = 'plain' | 'dot';

export interface FaviconController {
  /** Show the dot icon now. */
  showDot(): void;
  /** Show the plain icon now and cancel any pending dot. */
  clearDot(): void;
  /** Show the dot icon after `delayMs`, unless cleared first. */
  scheduleDot(delayMs: number): void;
}

declare global {
  interface Window {
    __favicon?: FaviconController;
  }
}

/**
 * Tab-away behavior. `null` disables it.
 * Set `delayMs` > 0 to wait before the dot appears after the user leaves the tab.
 */
const HIDDEN_TAB_DOT: { delayMs: number } | null = { delayMs: 0 };

let state: FaviconState = 'plain';
let timer: number | undefined;

const apply = () => {
  const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  const href = state === 'dot' ? DOT : PLAIN;
  if (link && link.getAttribute('href') !== href) link.setAttribute('href', href);
};

const cancel = () => {
  window.clearTimeout(timer);
  timer = undefined;
};

const set = (next: FaviconState) => {
  state = next;
  apply();
};

const controller: FaviconController = {
  showDot: () => {
    cancel();
    set('dot');
  },
  clearDot: () => {
    cancel();
    set('plain');
  },
  scheduleDot: (delayMs) => {
    cancel();
    timer = window.setTimeout(() => set('dot'), delayMs);
  },
};

export function initDynamicFavicon() {
  if (window.__favicon) return;
  window.__favicon = controller;

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      controller.clearDot();
    } else if (HIDDEN_TAB_DOT) {
      controller.scheduleDot(HIDDEN_TAB_DOT.delayMs);
    }
  });

  // ClientRouter swaps <head>, which resets the icon link to the server-rendered href.
  document.addEventListener('astro:after-swap', apply);
}
