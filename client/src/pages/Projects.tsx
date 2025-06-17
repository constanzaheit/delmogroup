import { useEffect } from "react";
import { MapPin, Handshake, Building2, Target } from "lucide-react";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects - Delmo Group";
  }, []);

  const currentProjectHighlights = [
    {
      icon: MapPin,
      title: "Location",
      value: "Punta Cana, Dominican Republic",
      color: "text-eucalyptus"
    },
    {
      icon: Handshake,
      title: "Partner",
      value: "Inter-American Development Bank (IDB)",
      color: "text-ocean"
    },
    {
      icon: Building2,
      title: "Sector",
      value: "Blue Economy — Environmental Solutions",
      color: "text-eucalyptus"
    },
    {
      icon: Target,
      title: "Objective",
      value: "Ecological Preservation & Sustainable Development",
      color: "text-ocean"
    }
  ];

  const historicalProjects: Array<{
    title: string;
    description: string;
    location: string;
    sector: string;
    focus: string;
    objective: string;
    value?: string;
    image: string;
    gallery?: string[];
  }> = [
    {
      title: "Cruz Malta — Buenos Aires",
      description: "Cruz Malta is a large heritage-listed building located in the center of Buenos Aires. This project involved the adaptive reuse of the existing structure while preserving its architectural integrity. The design challenge was to introduce a mezzanine level within limited ceiling height constraints, while maintaining adequate natural light and ventilation. The solution incorporated two large atriums at the core of the building, enhancing openness and functionality.",
      location: "Buenos Aires, Argentina",
      sector: "Heritage Redevelopment",
      focus: "Adaptive Reuse",
      objective: "Architectural Preservation",
      image: "/attached_assets/cruzmalta1_1749935023929.jpeg",
      gallery: [
        "/attached_assets/cruzmalta1_1749935023929.jpeg",
        "/attached_assets/cruzmalta2_1749935023930.jpeg",
        "/attached_assets/cruzmalta3_1749935023930.jpeg",
        "/attached_assets/cruzmalta5_1749935023930.jpeg",
        "/attached_assets/cruzmalta6_1749935023931.jpeg"
      ]
    },
    {
      title: "Walsh Bay — Sydney",
      description: "This multi award-winning urban renewal project covers 17 hectares in the heart of Sydney's historic Rocks precinct. The high-profile development required the restoration of historic wharves and foreshore buildings, as well as the sensitive redevelopment of surrounding properties. Delmo Group's previous experience in re-piling techniques on the Finger Wharf proved vital to the project's success. Of utmost importance was the ability to preserve and adapt valuable industrial archaeology, now displayed on site as a reminder of Sydney's maritime heritage. The completed project comprises over 350 residences together with a vibrant mix of cultural, commercial, retail and public facilities.",
      location: "Sydney, Australia",
      sector: "Urban Redevelopment",
      focus: "Heritage Preservation & Adaptive Reuse",
      objective: "Mixed-Use Residential, Commercial & Cultural Hub",
      value: "$650 million",
      image: "/attached_assets/walshbayppal_1749936461976.jpeg",
      gallery: [
        "/attached_assets/walshbay_1749936450607.jpeg",
        "/attached_assets/walshbay1_1749936457251.jpeg",
        "/attached_assets/walshbay2_1749936457252.jpeg"
      ]
    },
    {
      title: "Finger Wharf — Sydney",
      description: "The Finger Wharf project entailed the redevelopment and conversion of the largest wharf structure in the southern hemisphere. Implementation was dependent upon adopting an engineering solution for replacing the 100-year-old decaying timber piles that measured up to 90 feet in length. In conjunction with two international engineering firms, Delmo Group employed 250 divers to install new steel cased 600mm concrete reinforced piles, guaranteed to last over 100 years. With this solid foundation, the timber wharf was restored and transformed into 350 luxury apartments, a premium hotel, retail stores, a marina and a promenade of fine dining restaurants.",
      location: "Sydney, Australia",
      sector: "Adaptive Reuse",
      focus: "Structural Engineering",
      objective: "Mixed-Use Redevelopment",
      value: "$300 million",
      image: "/attached_assets/finger1_1749935023931.jpeg",
      gallery: [
        "/attached_assets/finger1_1749935023931.jpeg",
        "/attached_assets/finger2_1749935023931.jpeg", 
        "/attached_assets/finger3_1749935023932.jpeg",
        "/attached_assets/finger4_1749935023932.jpeg",
        "/attached_assets/finger5_1749935023936.jpeg",
        "/attached_assets/finger6_1749935023937.jpeg",
        "/attached_assets/finger7_1749935023937.jpeg"
      ]
    },
    {
      title: "The Bond — Sydney",
      description: "Located on Sydney's waterfront, The Bond project required full site remediation of environmental contamination from the city's first gasworks facility. The completed development includes Australia's first 5-star eco-rated commercial office building (Lend Lease global headquarters), 49 residential apartments, refurbished heritage Bond Stores, and a new public plaza. The project exemplifies the integration of environmental sustainability with adaptive reuse of historical industrial sites.",
      location: "Sydney, Australia",
      sector: "Environmental Remediation",
      focus: "Sustainable Development",
      objective: "Mixed-Use Redevelopment",
      value: "$180 million",
      image: "/attached_assets/thebondppal_1749936878721.jpeg",
      gallery: [
        "/attached_assets/thebond1_1749936878720.jpeg",
        "/attached_assets/thebond2_1749936878721.jpeg"
      ]
    },
    {
      title: "The Peninsula — Sydney",
      description: "Delmo Group undertook the remediation and redevelopment of the former heritage-listed Colgate Palmolive factory in East Balmain. The site presented complex contamination challenges due to its industrial maritime history. After extensive remediation, excavation, and preservation works, the building was converted into 111 high-end apartments and 10 townhouses, set on approximately 3 acres of waterfront land, with associated parking and public open spaces.",
      location: "Sydney, Australia",
      sector: "Site Remediation",
      focus: "Heritage Redevelopment",
      objective: "Residential Conversion",
      value: "$60 million",
      image: "/attached_assets/peninsulappal_1749937479122.jpeg",
      gallery: [
        "/attached_assets/peninsula1_1749937479121.jpeg",
        "/attached_assets/peninsula2_1749937479122.jpeg"
      ]
    },
    {
      title: "Binary Centre — Sydney",
      description: "The Binary Centre is a 17,700 sqm, purpose-built office complex located in Riverside Corporate Park. Designed to achieve a 4-star rating under the Australian Building Greenhouse Rating (ABGR) scheme, the building accommodates over 1,000 staff across two six-level office towers, with three levels of basement parking for 600 vehicles. The project reflects Delmo Group's technical capacity in delivering institutional-grade commercial assets incorporating sustainable design principles.",
      location: "Sydney, Australia",
      sector: "Commercial Development",
      focus: "Sustainable Design",
      objective: "Institutional-Grade Office Complex",
      value: "$80 million",
      image: "/attached_assets/binaryppal_1749937467684.jpeg",
      gallery: [
        "/attached_assets/binary1_1749937467683.jpeg",
        "/attached_assets/binary2_1749937467684.jpeg"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-8 text-charcoal">Projects</h1>
        </div>

        {/* Current Environmental Project */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-12 text-charcoal text-center">Current Environmental Project</h2>
          <div className="bg-gradient-to-r from-eucalyptus to-ocean bg-opacity-10 rounded-2xl p-8 lg:p-12" style={{
            background: 'linear-gradient(135deg, rgba(169, 203, 183, 0.1) 0%, rgba(74, 144, 164, 0.1) 100%)'
          }}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-semibold mb-6 text-charcoal">
                  Sargassum Management Feasibility — Punta Cana, Dominican Republic
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                  <p>
                    Delmo Group, in partnership with the Inter-American Development Bank (IDB), is leading 
                    a comprehensive feasibility study for the large-scale collection, processing, and management of 
                    sargassum algae in Punta Cana, Dominican Republic.
                  </p>
                  <p>
                    This Blue Economy initiative addresses one of the region's most pressing environmental 
                    challenges, with the goal of converting sargassum into sustainable bio-based products while 
                    protecting local marine ecosystems.
                  </p>
                  <p>
                    Through strategic collaboration with international financial institutions and public agencies, 
                    Delmo Group develops scalable models that support ecological preservation and responsible 
                    economic development throughout the Caribbean.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {currentProjectHighlights.map((highlight, index) => {
                    const IconComponent = highlight.icon;
                    return (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center mb-2">
                          <IconComponent className={`${highlight.color} mr-2`} size={20} />
                          <span className="font-medium text-charcoal">{highlight.title}</span>
                        </div>
                        <p className="text-gray-600">{highlight.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <img 
                  src="/attached_assets/sargassum_1750119576596.jpg"
                  alt="Sargassum algae collection and environmental management operations" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
            
            {/* Sargassum Project Gallery */}
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <img 
                    src="/attached_assets/sargassum2_1750119532524.png"
                    alt="Sargassum accumulation on Dominican Republic coastline"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="relative">
                  <img 
                    src="/attached_assets/sargassum1_1750119617920.jpg"
                    alt="Sargassum accumulation on Caribbean coastline"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Projects */}
        <div>
          <h2 className="text-2xl font-semibold mb-12 text-charcoal text-center">Historical Projects</h2>
          <div className="space-y-16">
            {historicalProjects.map((project, index) => (
              <div key={index} className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h3 className="text-2xl font-semibold mb-4 text-charcoal">{project.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center mb-1">
                          <MapPin className="text-eucalyptus mr-2" size={16} />
                          <span className="font-medium text-charcoal text-sm">Location</span>
                        </div>
                        <p className="text-gray-600 text-sm">{project.location}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center mb-1">
                          <Building2 className="text-ocean mr-2" size={16} />
                          <span className="font-medium text-charcoal text-sm">Sector</span>
                        </div>
                        <p className="text-gray-600 text-sm">{project.sector}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center mb-1">
                          <Target className="text-eucalyptus mr-2" size={16} />
                          <span className="font-medium text-charcoal text-sm">Focus</span>
                        </div>
                        <p className="text-gray-600 text-sm">{project.focus}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center mb-1">
                          <Handshake className="text-ocean mr-2" size={16} />
                          <span className="font-medium text-charcoal text-sm">Objective</span>
                        </div>
                        <p className="text-gray-600 text-sm">{project.objective}</p>
                      </div>
                      {project.value && (
                        <div className="bg-gray-50 p-3 rounded-lg sm:col-span-2">
                          <div className="flex items-center mb-1">
                            <Target className="text-eucalyptus mr-2" size={16} />
                            <span className="font-medium text-charcoal text-sm">Project Value</span>
                          </div>
                          <p className="text-gray-600 text-sm">{project.value}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <img 
                      src={project.image}
                      alt={`${project.title} development project`} 
                      className="rounded-xl shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
                
                {/* Image Gallery for Finger Wharf */}
                {project.gallery && (
                  <div className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {project.gallery.map((imagePath, imgIndex) => (
                        <div key={imgIndex} className="relative">
                          <img 
                            src={imagePath}
                            alt={`${project.title} gallery image ${imgIndex + 1}`}
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
