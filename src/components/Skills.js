import Rating from './Rating';

//dev logos
import { SiJavascript, SiVuedotjs, SiReact, SiBootstrap, SiTailwindcss, SiGit, SiSubversion, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiElectron, SiNextdotjs } from "react-icons/si";
import { DiJqueryLogo, DiHtml5, DiCss3, DiSass, DiDotnet } from "react-icons/di";
import { AjaxIcon, TauriIcon, MuiIcon } from './CustomIcon';

const categories = [
  {
    name:'Coding', 
    skill: [
      {name: 'JavaScript', icon: <SiJavascript />, rating: 5},
      {name: 'React JS', icon: <SiReact />, rating: 4},
      {name: 'Next JS', icon: <SiNextdotjs />, rating: 3},
      {name: 'Vue JS', icon: <SiVuedotjs />, rating: 2}, 
      {name: 'jQuery', icon: <DiJqueryLogo />, rating: 5},
      {name: 'AJAX', icon: <AjaxIcon />, rating: 5},
    ]
  },
  {
    name:'Markup & Style', 
    skill: [
      {name: 'HTML', icon: <DiHtml5 />, rating: 5},
      {name: 'CSS', icon: <DiCss3 />, rating: 5},
      {name: 'SASS', icon: <DiSass />, rating: 5},
      {name: 'Bootstrap', icon: <SiBootstrap />, rating: 5},
      {name: 'Tailwind', icon: <SiTailwindcss />, rating: 5},
      {name: 'Material UI', icon: <MuiIcon />, rating: 4},
    ]
  },
  {
    name:'Microsoft Technologies', 
    skill: [
      {name: 'ASP.NET MVC', icon: <DiDotnet />, rating: 5},
      {name: 'ASP.NET Core', icon: <DiDotnet />, rating: 3},
      {name: 'ASP.NET Razor', icon: <DiDotnet />, rating: 3}
    ]
  },
  {
    name:'Adobe Software', 
    skill: [
      {name: 'Photoshop', icon: <SiAdobephotoshop />, rating: 4},
      {name: 'Illustrator', icon: <SiAdobeillustrator />, rating: 2},
      {name: 'XD', icon: <SiAdobexd />, rating: 4}
    ]
  },
  {
    name:'Version Control', 
    skill: [
      {name: 'Git', icon: <SiGit />, rating: 5},
      {name: 'SVN', icon: <SiSubversion />, rating: 5}
    ]
  },
  {
    name:'Building Frameworks', 
    skill: [
      {name: 'Electron', icon: <SiElectron />, rating: 2},
      {name: 'Tauri', icon: <TauriIcon />, rating: 3}
    ]
  }
];

export default function Skills() {

  return (
    <div id="Skills" className="skills">
      <div className="flex flex-wrap justify-evenly gap-5 text-sm text-white z-10">
        {categories.map((category) => 
          <div key={category.name} className='max-w-fit flex flex-col p-4 gap-2 border rounded-xl border-slate-600'>
            <span className='mb-2.5 font-semibold text-lg'>{category.name}</span>
            {category.skill.map((skill) => 
              <Rating name={skill.name} icon={skill.icon} rating={skill.rating} />
            )}
          </div>
        )}
      </div>
    </div>
  )
}