'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Messages = Record<string, string>;
const TranslationContext = createContext<Messages>({});

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const [messages, setMessages] = useState<Messages>({});

  useEffect(() => {
    const loadMessages = async () => {
      const msgs = (await import(`@/locales/${params.lang || 'en'}.json`)).default;
      setMessages(msgs);
    };
    loadMessages();
  }, [params.lang]);

  return (
    <TranslationContext.Provider value={messages}>
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslations = () => useContext(TranslationContext); 