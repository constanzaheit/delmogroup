import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Delmo Group - Changing the Landscape";
  }, []);

  return (
    <section className="relative">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/attached_assets/Screenshot 2025-06-16 191447_1750115790765.png')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Changing the Landscape
            </h1>
            <p className="text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
              Delmo Group applies its global expertise to address today's critical environmental challenges. 
              Leveraging Blue Economy innovation, we are developing scalable solutions for sargassum management 
              and advancing ecological preservation across Latin America and the Caribbean.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
