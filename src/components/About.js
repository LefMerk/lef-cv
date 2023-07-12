import { PiBuildingsDuotone, PiGlobeHemisphereWestDuotone, PiCakeDuotone, PiHandWavingDuotone } from "react-icons/pi";

export default function About() {
  const about = [
    {
      id: 1, 
      txt: "Hi there, my name is Eleftherios Merkouriou and I'm a Front End Developer from Greece."
    },
    {
      id: 2, 
      txt: "I made this with React, Tailwind, SASS."
    }
  ];

  const personalInfo = [
    {txt: 'Athens Metropolitan Area', icon: <PiBuildingsDuotone/>},
    {txt: '20 Sep 1990', icon: <PiCakeDuotone/>},
    { 
      txt: 'Languages:', icon: <PiGlobeHemisphereWestDuotone/>, 
      languages: ['Greek (Native)', 'English (Proficient)', 'French (B1, but a bit rusty)']
    }
  ];

  return (
    <div id="About" className="about text-white px-4 flex flex-col gap-y-20">
      <div className="text-lg flex flex-col gap-y-5 items-end mr-20">
        <PiHandWavingDuotone className="text-2xl"/>
        {about.map((paragraph) => <p key={paragraph.id}>{paragraph.txt}</p>)}
      </div>
      <div className="flex flex-col border rounded-xl border-slate-600 p-5 max-w-fit ml-20">
        <div className="font-medium text-2xl mb-3">Some infos...</div>
        {personalInfo.map((info, i) =>
          <div key={i} className="ml-3 mb-3">
            <div className="flex items-center gap-x-2">
              <div className="text-2xl">{info.icon}</div>
              <div>{info.txt}</div>
            </div>
            <div className="flex flex-col pl-10">
              {info.languages && info.languages.map((language, x) =>
                  <div key={x}>{language}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

}