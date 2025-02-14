import Image from 'next/image';
import constructionImage from '@images/construction.png';
import StripedProgress from '@components/StripedProgress';

export const metadata = {
  title: "Under Construction",
  description: "I&apos;m currently crafting my portfolio to showcase my work. Stay tuned for an exciting collection of projects and experiences!"
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 bg-[url('/grid.png')] bg-repeat p-4">
      <div className="relative w-full max-w-[320px] sm:max-w-[540px] lg:max-w-[720px] text-center space-y-8 p-6 sm:p-12 bg-base-100/90 rounded-xl border-4 border-primary shadow-2xl backdrop-blur-sm">
        <div className="w-60 sm:w-72 lg:w-80 mx-auto transform hover:scale-105 transition-transform duration-300">
          <Image 
            src={constructionImage}
            alt="Under Construction"
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-primary animate-pulse min-h-[40px] sm:min-h-[56px] lg:min-h-[72px]">
          <span className="text-warning">🚧</span> Under Construction <span className="text-warning">🚧</span>
        </h1>
        
        <p className="text-base sm:text-lg lg:text-xl text-base-content font-medium px-2 min-h-[48px] sm:min-h-[64px] lg:min-h-[72px]">
          I&apos;m currently crafting my portfolio to showcase my work. Stay tuned for an exciting collection of projects and experiences!
        </p>
        
        <div className="w-60 sm:w-72 lg:w-80 mx-auto">
          <StripedProgress />
        </div>
      </div>
    </main>
  );
} 