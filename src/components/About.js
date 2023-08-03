import { 
  PiBuildingsDuotone, 
  PiGlobeHemisphereWestDuotone, 
  PiCakeDuotone, 
  PiHandWavingDuotone, 
  PiAirplaneTiltBold,
  PiBarbellBold,
  PiThumbsUpBold
} from "react-icons/pi";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function About() {
  const about = [
    {
      id: 1, 
      txt: "Hi there, my name is Eleftherios Merkouriou"
    },
    {
      id: 2,
      txt: `and I'm a Front End Developer from Greece`,
      icon: <span class="fi fi-gr"></span>
    },
    // {
    //   id: 3, 
    //   txt: "I made this with React & Tailwind."
    // }
  ];

  const personalInfo = [
    {txt: 'Athens Metropolitan Area', icon: <PiBuildingsDuotone/>},
    {txt: '20 Sep 1990', icon: <PiCakeDuotone/>},
    { 
      txt: 'Languages:', 
      icon: <PiGlobeHemisphereWestDuotone/>, 
      languages: ['Greek (Native)', 'English (Proficient)', 'French (B1, but a bit rusty)']
    },
    {
      txt: <div className="flex flex-col gap-2 text-center mt-1">
              <div className="flex gap-2">
                <span class="fi fi-it"></span>
                <span class="fi fi-va"></span>
                <span class="fi fi-fr"></span>
                <span class="fi fi-tr"></span>
                <span class="fi fi-bg"></span>
                <span class="fi fi-nl"></span>
                <span class="fi fi-hu"></span>
              </div>
              <div className="flex gap-2">
                <span class="fi fi-at"></span>     
                <span class="fi fi-fi"></span>
                <span class="fi fi-ee"></span>
              </div>
            </div>, 
      icon: <PiAirplaneTiltBold/>
    }
  ];

  return (
    <div id="About" className="about text-white px-4 flex flex-col gap-y-20">
      <div className="text-lg flex flex-col gap-y-5 items-center md:items-end md:mr-20">
        <PiHandWavingDuotone className="text-2xl"/>
        {about.map((paragraph) => <p key={paragraph.id} className="text-center md:text-right">{paragraph.txt} {paragraph.icon ? paragraph.icon : ''}</p>)}
      </div>
      <div className="flex flex-col border rounded-xl border-slate-600 p-5 max-w-fit md:ml-20 m-auto">
        <div className="font-medium text-2xl mb-3">Some infos...</div>
        {personalInfo.map((info, i) =>
          <div key={i} className="ml-3 mb-3">
            <div className="flex items-center gap-x-2">
              <div className="text-2xl self-start">{info.icon}</div>
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
      {/* <div className="flex gap-x-2 text-center justify-end md:mr-20">
        <span class="fi fi-gr"></span>
        <span class="fi fi-it"></span>
        <span class="fi fi-fr"></span>
        <span class="fi fi-tr"></span>
        <span class="fi fi-bg"></span>
        <span class="fi fi-nl"></span>
        <span class="fi fi-hu"></span>
        <span class="fi fi-at"></span>     
        <span class="fi fi-fi"></span>
        <span class="fi fi-ee"></span>
        <PiAirplaneTiltBold className="text-2xl ml-3" />
      </div> */}
    </div>
  );

}