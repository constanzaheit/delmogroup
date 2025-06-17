import { useEffect } from "react";

export default function Awards() {
  useEffect(() => {
    document.title = "Awards & Industry Recognition - Delmo Group";
  }, []);

  const awardsList = [
    {
      project: "FINGER WHARF - WOOLLOOMOOLOO",
      awards: [
        "2000 Excellence on the Waterfront, Top Honour (Waterfront Centre, Washington DC)",
        "2001 Best Refurbishment/Renovation/Extension $50 million plus (MBA)",
        "2001 Finalist, Australian Construction Achievement Awards (Institute of Engineers)",
        "2001 High Commendation, Projects over $30 million (Australian Institute of Building)"
      ]
    },
    {
      project: "WALSH BAY - SYDNEY",
      awards: [
        "2005 Outstanding Urban Design Award (Royal Australian Institute of Architects)",
        "2005 Development Excellence Award (Urban Taskforce NSW)",
        "2005 Development Award (National Trust of Australia)",
        "2004 Award for Excellence - Residential (ULI)",
        "2004 Excellence in Building (Year of the Built Environment Exemplars Program)",
        "2004 Heritage Waterfront (Australia Award for Urban Design)",
        "2004 Integrated Housing Open (Master Builders Association)",
        "2003 Presidents Award (UDIA)",
        "2003 Engineering Contract of the Year (CCFA)"
      ]
    },
    {
      project: "BINARY CENTRE - NORTH RYDE",
      awards: [
        "2002 Highly Commended, Excellence in Property Awards (Australian Property Institute)",
        "2003 Nominee, Ryder Hunt Award (Property Council of Australia)"
      ]
    },
    {
      project: "THE BOND - MILLERS POINT",
      awards: [
        "2004 Building of the Decade (Royal Australian Institute of Architects)",
        "2004 Development Excellence Award (Urban Taskforce NSW)",
        "2004 Excellence in Construction Award (Master Builders Association)",
        "2004 Year of the Built Environment Award (NSW Government)",
        "2005 Heritage Award (National Trust of Australia)",
        "2005 Five Star Energy Status Award (Sustainable Energy Development Authority)",
        "2005 Ecologically Sustainable Design Award (Royal Australian Institute of Architects)"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-8 text-charcoal">
            Awards & Industry Recognition
          </h1>
        </div>
        
        <div className="space-y-12">
          {awardsList.map((projectAwards, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-charcoal">{projectAwards.project}</h2>
              <ul className="space-y-3">
                {projectAwards.awards.map((award, awardIndex) => (
                  <li key={awardIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-eucalyptus rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{award}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
