'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    chatbaseUserConfig?: {
      identityVerification: {
        token: string;
      };
    };
  }
}

let scriptLoaded = false;

export default function ChatWidget() {
  const tokenFetchedRef = useRef(false);

  useEffect(() => {
    const botId = process.env.NEXT_PUBLIC_CHATBASE_BOT_ID;

    if (!botId || scriptLoaded) {
      return;
    }

    if (document.getElementById(botId)) {
      scriptLoaded = true;
      return;
    }

    const loadChatbase = async () => {
      if (tokenFetchedRef.current) return;
      tokenFetchedRef.current = true;

      try {
        const response = await fetch('/api/chatbase-token');
        const data = await response.json();

        if (data.token) {
          window.chatbaseUserConfig = {
            identityVerification: {
              token: data.token,
            },
          };
        }
      } catch (error) {
        // Continue without identity if token fails
      }

      const script = document.createElement('script');
      script.src = 'https://www.chatbase.co/embed.min.js';
      script.id = botId;
      script.defer = true;

      script.onload = () => {
        scriptLoaded = true;
      };

      document.body.appendChild(script);
    };

    loadChatbase();
  }, []);

  return null;
}

