export type PlatformType = 'mac' | 'windows' | 'android' | 'ios' | 'linux';

export interface DeviceInfo {
  platform: PlatformType;
  isMac: boolean;
  isWindows: boolean;
  isAndroid: boolean;
  isIOS: boolean;
  isMobile: boolean;
  platformName: string;
  modKey: string;
  modKeySymbol: string;
  searchShortcut: string;
}

export function detectDevice(): DeviceInfo {
  if (typeof window === 'undefined') {
    return {
      platform: 'windows',
      isMac: false,
      isWindows: true,
      isAndroid: false,
      isIOS: false,
      isMobile: false,
      platformName: 'Windows',
      modKey: 'Ctrl',
      modKeySymbol: 'Ctrl',
      searchShortcut: 'Ctrl + K',
    };
  }

  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = (window.navigator as unknown as { userAgentData?: { platform?: string } }).userAgentData?.platform?.toLowerCase() ||
                   window.navigator.platform?.toLowerCase() ||
                   '';

  const isAndroid = /android/i.test(userAgent);
  const isIOS = /iphone|ipad|ipod/i.test(userAgent) || (platform.includes('mac') && navigator.maxTouchPoints > 1);
  const isMac = !isIOS && (platform.includes('mac') || /macintosh|mac os x/i.test(userAgent));
  const isWindows = platform.includes('win') || /windows/i.test(userAgent);
  const isLinux = !isAndroid && (platform.includes('linux') || /linux/i.test(userAgent));
  const isMobile = isAndroid || isIOS || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0 && window.innerWidth < 768);

  let detectedPlatform: PlatformType = 'windows';
  let platformName = 'Windows PC';

  if (isAndroid) {
    detectedPlatform = 'android';
    platformName = 'Android';
  } else if (isIOS) {
    detectedPlatform = 'ios';
    platformName = 'Apple iOS / iPadOS';
  } else if (isMac) {
    detectedPlatform = 'mac';
    platformName = 'macOS (Apple)';
  } else if (isWindows) {
    detectedPlatform = 'windows';
    platformName = 'Windows';
  } else if (isLinux) {
    detectedPlatform = 'linux';
    platformName = 'Linux';
  }

  const modKey = isMac || isIOS ? '⌘' : 'Ctrl';
  const modKeySymbol = isMac || isIOS ? '⌘' : 'Ctrl';
  const searchShortcut = isMac || isIOS ? '⌘K' : 'Ctrl+K';

  return {
    platform: detectedPlatform,
    isMac: isMac || isIOS,
    isWindows,
    isAndroid,
    isIOS,
    isMobile,
    platformName,
    modKey,
    modKeySymbol,
    searchShortcut,
  };
}
