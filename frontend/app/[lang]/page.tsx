import Image from 'next/image';
import constructionImage from '@images/construction.png';
import LanguageSwitcher from '@components/LanguageSwitcher';
import StripedProgress from '@components/StripedProgress';

async function getMessages(locale: string) {
  try {
    return (await import(`@/locales/${locale}.json`)).default;
  } catch {
    return (await import('@/locales/en.json')).default;
  }
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ja' },
    { lang: 'id' }
  ];
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const messages = await getMessages(lang || 'en');

  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 bg-[url('/grid.png')] bg-repeat">
      <div className="text-center space-y-8 p-12 bg-base-100/90 rounded-xl border-4 border-primary shadow-2xl backdrop-blur-sm">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>
        
        <div className="w-80 mx-auto transform hover:scale-105 transition-transform duration-300">
          <Image 
            src={constructionImage}
            alt={messages.title}
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>

        <h1 className="text-6xl font-black text-primary animate-pulse">
          <span className="text-warning">🚧</span> {messages.title} <span className="text-warning">🚧</span>
        </h1>
        
        <p className="text-2xl text-base-content font-medium">
          {messages.description}
        </p>
        
        <div className="w-80 mx-auto">
          <StripedProgress />
        </div>
      </div>
    </main>
  );
} 