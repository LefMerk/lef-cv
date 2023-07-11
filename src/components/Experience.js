import { FaAngleRight } from "react-icons/fa6";
import upcom from '../assets/upcom.png';
import hedno from '../assets/hedno.png';
import prime from '../assets/prime.png';
import focus from '../assets/focus.png';

export default function Experience() {
    const experience = [
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
            id: 'hedno',
            img: hedno,
            name: 'Hellenic Electricity Distribution Network Operator S.A. (HEDNO)',
            link: 'https://deddie.gr/en/',
            duration: 'Nov 2022 - Present', 
            job: 'Front End Developer', 
            tasks: [
                {id: 1, text: 'APE'},
                {id: 2, text: 'SAV Project'}
            ]
        },
        {
            id: 'prime',
            img: prime,
            name: 'Prime Educational Software Applications',
            link: 'https://primesoftapps.com/',
            duration: 'Jul 2020 - Nov 2022', 
            job: 'Lead Front End Developer', 
            tasks: [
                {id: 1, text: 'APE'},
                {id: 2, text: 'SAV Project'}
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
                {id: 1, text: 'APE'},
                {id: 2, text: 'SAV Project'}
            ]
        },
    ];

    return (
        <div className="experience">
            <div>
                {experience.map((exp, i, {length}) => 
                    <div className="flex flex-col items-center">
                        <div key={exp.id} className="w-96 flex flex-col rounded-2xl border-slate-300 border-2 p-4">
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
                                    {exp.tasks.map( task =>
                                        <div className="flex items-top">
                                            <FaAngleRight className="mr-1 basis-1/12 mt-0.5" />
                                            <div className="basis-11/12 leading-5" key={task.id}>{task.text}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {!(length - 1 === i) && <div class="h-12 w-0.5 bg-slate-300"></div>}
                    </div>
                )}
            </div>
        </div>
    );
}