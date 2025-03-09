"use client";

import { useEffect } from 'react';

export default function LocalStorageClearer() {
  useEffect(() => {
    // Clear localStorage to ensure the popup shows every time
    if (typeof window !== 'undefined') {
      localStorage.removeItem('hasSeenContactPopup');
    }
  }, []);

  // This component doesn't render anything
  return null;
}
