import { 
  PiBuildingsDuotone, 
  PiGlobeHemisphereWestDuotone, 
  PiCakeDuotone, 
  PiHandWavingDuotone, 
  PiAirplaneTiltBold
} from "react-icons/pi";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function About() {
  const about = [
    "Hi there! My name is Eleftherios Merkouriou,",
    "<span class='italic'>Ελευθέριος Μερκουρίου</span> in Greek.", 
    "I'm a Frontend Developer from Greece", 
    "and I love creating with React JS."
  ];

  const personalInfo = [
    {
      icon: <PiBuildingsDuotone/>, 
      txt: 'Athens Metropolitan Area'
    },
    {
      icon: <PiCakeDuotone/>,
      txt: '20 Sep 1990'},
    { 
      icon: <PiGlobeHemisphereWestDuotone/>,
      txt: 'Languages:', 
      languages: ['Greek (Native)', 'English (Proficient)', 'French (B1, but a bit rusty)']
    },
    {
      icon: <PiAirplaneTiltBold/>,
      countries: ['fr', 'it', 'va', 'tr', 'bg', 'nl', 'hu', 'at', 'sk', 'fi', 'ee']
    }
  ];

  return (
    <div id="About" className="about text-white px-4 flex flex-col gap-y-14">
      <div className="text-lg flex flex-col gap-y-2 items-center md:items-end md:mr-20">
        <PiHandWavingDuotone className="text-2xl"/>
        {about.map((paragraph, index) => <p key={index} className="text-center md:text-right" dangerouslySetInnerHTML={{__html: paragraph}} />)}
      </div>
      <div className="flex flex-col border rounded-xl border-slate-600 p-5 max-w-fit md:ml-20 m-auto">
        <div className="font-medium text-2xl mb-3">Some infos...</div>
        {personalInfo.map((info, i) =>
          <div key={i} className="ml-3 mb-3">
            <div className="flex items-center gap-x-2">
              <div className="text-2xl self-start">{info.icon}</div>
              {info.txt && <div>{info.txt}</div>}
              {info.countries && 
                <div className="flex flex-wrap gap-2 text-center mt-1 w-52">
                    {info.countries.map((country, y) => <span key={y} className={"fi fi-" + country}></span>)}
                </div>
              }
            </div>
            {info.languages && 
              <div className="flex flex-col pl-10">
                {info.languages.map((language, x) => <div key={x}>{language}</div>)}
              </div>
            }
          </div>
        )}
      </div>
    </div>
  );

}