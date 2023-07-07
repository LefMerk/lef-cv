import Rating from './Rating';

//dev logos
import { SiJavascript, SiVuedotjs, SiReact, SiBootstrap, SiTailwindcss, SiGit, SiSubversion, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiElectron } from "react-icons/si";
import { DiJqueryLogo, DiHtml5, DiCss3, DiSass, DiDotnet } from "react-icons/di";
import { AjaxIcon, TauriIcon } from './CustomIcon';

const categories = [
  {
    name:'Coding', 
    skill: [
      {name: 'JavaScript', icon: <SiJavascript />, rating: 5},
      {name: 'jQuery', icon: <DiJqueryLogo />, rating: 5},
      {name: 'AJAX', icon: <AjaxIcon />, rating: 5},
      {name: 'Vue JS', icon: <SiVuedotjs />, rating: 2},
      {name: 'React', icon: <SiReact />, rating: 2}
    ]
  },
  {
    name:'Markup & Style', 
    skill: [
      {name: 'HTML', icon: <DiHtml5 />, rating: 5},
      {name: 'CSS', icon: <DiCss3 />, rating: 5},
      {name: 'SASS', icon: <DiSass />, rating: 4},
      {name: 'Bootstrap', icon: <SiBootstrap />, rating: 4},
      {name: 'Tailwind', icon: <SiTailwindcss />, rating: 3}
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
      {name: 'Illustrator', icon: <SiAdobeillustrator />, rating: 3},
      {name: 'XD', icon: <SiAdobexd />, rating: 4}
    ]
  },
  {
    name:'Version Control', 
    skill: [
      {name: 'Git', icon: <SiGit />, rating: 3},
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
      <h1 className="skills-header">Skills</h1>
      <div className="skills-txt">
        {[...categories].map((category) => 
          <div key={category.name} className='skill-category'>
            <span>{category.name}</span>
            {category.skill.map((skill) => 
              <div className="skill-item">
                <Rating name={skill.name} icon={skill.icon} rating={skill.rating} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}