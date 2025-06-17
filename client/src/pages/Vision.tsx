import { useEffect } from "react";
import { Leaf, Droplets, Sprout, Building2, Handshake, Globe } from "lucide-react";

export default function Vision() {
  useEffect(() => {
    document.title = "Vision & Capabilities - Delmo Group";
  }, []);

  const capabilities = [
    {
      icon: Leaf,
      title: "Environmental Advisory",
      description: "Comprehensive environmental consulting and strategic planning for sustainable development initiatives.",
      color: "text-eucalyptus"
    },
    {
      icon: Droplets,
      title: "Blue Economy Development",
      description: "Innovative marine ecosystem solutions that balance economic growth with environmental preservation.",
      color: "text-ocean"
    },
    {
      icon: Sprout,
      title: "Sargassum Processing",
      description: "Advanced collection and processing techniques converting sargassum into valuable biostimulants.",
      color: "text-eucalyptus"
    },
    {
      icon: Building2,
      title: "Biostimulant Production",
      description: "Sustainable production of organic biostimulants from marine algae waste materials.",
      color: "text-ocean"
    },
    {
      icon: Handshake,
      title: "Public-Private Partnerships",
      description: "Strategic collaboration with governments and international institutions for scalable solutions.",
      color: "text-eucalyptus"
    },
    {
      icon: Globe,
      title: "International Development",
      description: "Cross-regional project management with focus on sustainable development outcomes.",
      color: "text-ocean"
    }
  ];

  return (
    <section className="py-24 bg-sage bg-opacity-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-8 text-charcoal">Vision & Capabilities</h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            At Delmo Group, our vision is driven by the principles of the Blue Economy — fostering 
            innovative solutions that balance economic growth with responsible stewardship of marine 
            and terrestrial ecosystems.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our multidisciplinary capabilities span project structuring, financial modeling, 
            environmental management, strategic advisory, and stakeholder coordination — enabling 
            us to design and execute complex sustainability-driven projects across diverse sectors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className={`${capability.color} text-xl`} size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
