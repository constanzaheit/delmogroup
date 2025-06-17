import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About Us - Delmo Group";
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-semibold mb-8 text-charcoal">About Us</h1>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Delmo Group is a private international company specialized in structuring and delivering complex projects across multiple sectors and jurisdictions.
              </p>
              <p>
                With extensive experience in large-scale project development, Delmo Group works in close collaboration with governments, institutional partners, development banks, private investors, and regulatory authorities to implement sustainable, scalable initiatives throughout Latin America, Australia and selected international markets.
              </p>
              <p>
                The company's expertise spans infrastructure development, environmental solutions, urban redevelopment, industrial transformation, and strategic advisory services. Delmo Group applies an integrated, multidisciplinary approach that combines technical knowledge, financial structuring, regulatory navigation, and operational management to successfully deliver projects under complex regulatory and institutional frameworks.
              </p>
              <p>
                The company's work reflects a strong commitment to responsible development, sustainable growth, and long-term value creation, always balancing economic progress with environmental stewardship and social responsibility.
              </p>
            </div>
          </div>
          <div className="lg:pl-8">
            <img 
              src="/attached_assets/aboutUs_1750116394082.avif"
              alt="Global satellite map aerial view representing international scope" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
