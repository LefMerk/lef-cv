import { PiArrowCircleRightFill } from "react-icons/pi";
import upcom from '../assets/upcom.png';
import hedno from '../assets/hedno.png';

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
    ];

    return (
        <div className="experience">
            <div>
                {experience.map((exp, i, {length}) => 
                    <div className="flex flex-col items-center">
                        <div key={exp.id} className="w-96 flex flex-col rounded-2xl border-slate-300 border-2 p-4">
                            <div className="right-4 font-bold text-slate-300 text-md text-end italic">{exp.duration}</div>
                            <div className='flex items-center text-white'>
                                <a className="basis-1/6" href={exp.link} target='_blank' rel="noreferrer nofollow">
                                    <img className='w-11 h-11 rounded-md grow' src={exp.img} alt={exp.id} />
                                </a>
                                <div className='basis-5/6 flex flex-col font-medium text-lg px-2 py-3'>
                                    <span>{exp.job}</span>
                                    <a href={exp.link} target='_blank' rel="noreferrer nofollow">
                                        <span className='text-slate-300'>{exp.name}</span>
                                    </a>
                                </div>
                            </div>
                            <div className='text-white'>
                                <div className='list-image-none'>
                                    {exp.tasks.map( task =>
                                        <div className="flex items-center">
                                            <PiArrowCircleRightFill className="mr-3 basis-1/12" />
                                            <span className="basis-11/12" key={task.id}>{task.text}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {!(length - 1 === i) && <div class="h-12 w-0.5 bg-slate-300"></div>}
                    </div>
                )}
            </div>
            <div></div>
        </div>
    );
}