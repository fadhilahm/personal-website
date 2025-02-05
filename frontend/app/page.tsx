import Image from 'next/image';
import constructionImage from '@images/construction.png';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 bg-[url('/grid.png')] bg-repeat">
      <div className="text-center space-y-8 p-12 bg-base-100/90 rounded-xl border-4 border-primary shadow-2xl backdrop-blur-sm">
        <div className="w-80 mx-auto transform hover:scale-105 transition-transform duration-300">
          <Image 
            src={constructionImage}
            alt="Under Construction"
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>

        <h1 className="text-6xl font-black text-primary animate-pulse">
          <span className="text-warning">🚧</span> Under Construction <span className="text-warning">🚧</span>
        </h1>
        
        <p className="text-2xl text-base-content font-medium">
          We&apos;re working hard to bring you something amazing. Check back soon!
        </p>
        
        <div className="w-80 mx-auto">
          <progress className="progress progress-primary h-4"></progress>
        </div>
      </div>
    </main>
  );
}
