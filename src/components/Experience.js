import { FaAngleRight } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import upcom from '../assets/upcom.png';
import hedno from '../assets/hedno.png';
import prime from '../assets/prime.png';
import focus from '../assets/focus.png';

export default function Experience() {
    const experience = [
        {
            id: 'hedno',
            img: hedno,
            name: 'Hellenic Electricity Distribution Network Operator S.A. (HEDNO)',
            link: 'https://deddie.gr/en/',
            duration: 'Nov 2022 - Present', 
            job: 'Front End Developer', 
            tasks: [
                {id: 1, text: 'SAV web application'},
                {id: 2, text: 'APE and SITHIA station web application'}
            ]
        },
        {
            id: 'upcom',
            img: upcom,
            name: 'UpcoMinds S.A.',
            link: 'https://upcominds.com/',
            duration: 'Nov 2022 - Present', 
            job: 'Front End Developer', 
            tasks: [
                {id: 1, text: 'Assigned to Hellenic Electricity Distribution Network Operator S.A. (HEDNO)'}
            ]
        },
        {
            id: 'prime',
            img: prime,
            name: 'Prime Educational Software Applications',
            link: 'http://primesoftapps.com/',
            duration: 'Jul 2020 - Nov 2022', 
            job: 'Lead Front End Developer', 
            tasks: [
                {id: 1, text: 'All MM Educational Group websites'},
                {id: 2, text: 'Frontend team guidance'},
                {id: 3, text: 'Frontend tasks & projects assignment'}
            ]
        },
        {
            id: 'focus',
            img: focus,
            name: 'Focus on Digital Services',
            link: 'https://www.mmedugroup.com/Focus-On-Digital-Services', 
            duration: 'Mar 2015 - Jul 2020', 
            job: 'Front End Developer', 
            tasks: [
                {id: 1, text: 'Educational HTML Games'},
                {id: 2, text: 'Interactive WhiteBoards (IWB) - Educational Software'}
            ]
        },
    ];

    return (
        <div className="experience">
            <div className="hidden rg:flex text-[#bef52d80] text-4xl font-black justify-center ps-2 h-8">
                <FontAwesomeIcon icon={faChevronUp} size="xl" style={{color: "#bef52d80",}} />
            </div>
            <div className="flex flex-col max-md:items-center gap-y-5 xs:max-rg:gap-y-0 xs:gap-y-5 lg:px-20 px-4 after:content-[] rg:after:content-[''] after:h-[calc(100%-3rem)] after:w-2 after:bg-[#bef52d80] after:rounded after:absolute after:left-1/2 ">
                {experience.map((exp, i, {length}) => 
                    <div key={i} className="flex flex-col rg:flex-row w-full rg:w-1/2 rg:odd:self-end rg:even:self-start items-center">
                        {i%2 === 0 && <div className="hidden rg:block ms-2 h-1 w-[calc(100%-10px)] bg-[#bef52d80]"></div>}
                        <div className="flex flex-col max-rg:items-center ">
                            <div className="w-96 rg:basis-3/4 flex flex-col xs:rounded-2xl xs:border xs:border-[#bef52d80] xs:shadow-[3px_3px_0px_0px_#bef52d] p-4">
                                <div className="right-4 font-semibold text-slate-300 text-md text-end italic">{exp.duration}</div>
                                <div className='flex items-center text-white mb-2'>
                                    <a className="basis-1/6" href={exp.link} target='_blank' rel="noreferrer nofollow">
                                        <img className='w-11 h-11 rounded-md grow' src={exp.img} alt={exp.id} />
                                    </a>
                                    <div className='basis-5/6 flex flex-col text-lg px-2 py-3'>
                                        <div className="font-medium">{exp.job}</div>
                                        <a href={exp.link} target='_blank' rel="noreferrer nofollow">
                                            <div className='text-slate-300 text-base leading-5'>{exp.name}</div>
                                        </a>
                                    </div>
                                </div>
                                <div className='text-white'>
                                    <div className='flex flex-col gap-2'>
                                        {exp.tasks.map((task, index) =>
                                            <div key={index} className="flex items-top">
                                                <FaAngleRight className="mr-1 basis-1/12 mt-0.5" />
                                                <div className="basis-11/12 leading-5" key={task.id}>{task.text}</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {i%2 !== 0 && <div className="hidden rg:block h-1 w-[calc(100%-10px)] bg-[#bef52d80]"></div>}
                        {!(length - 1 === i) && <div className="h-12 w-1 bg-[#bef52d80] hidden xs:max-rg:flex"></div>}
                        {!(length - 1 === i) && <div className="h-1 w-full bg-[#bef52d80] flex mt-6 xs:hidden"></div>}
                    </div>
                )}
            </div>
        </div>
    );
}