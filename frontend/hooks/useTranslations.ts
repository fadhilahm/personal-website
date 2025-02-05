'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type Messages = Record<string, string>;

export function useTranslations() {
  const params = useParams();
  const [messages, setMessages] = useState<Messages>({});

  useEffect(() => {
    const loadMessages = async () => {
      const msgs = (await import(`@/locales/${params.lang || 'en'}.json`)).default;
      setMessages(msgs);
    };
    loadMessages();
  }, [params.lang]);
  
  return messages;
} 