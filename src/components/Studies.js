import unipi from '../assets/unipi.png';
import udacity from '../assets/udacity.png';
import stockholm from '../assets/stockholm.png';

export default function Studies() {
  const studies = [
    // {
    //   id: 'bsc2',
    //   img: stockholm,
    //   link: 'https://www.su.se/english/',
    //   name: 'Stockholm University',
    //   title: 'One Year Master\'s Programme in IT Project Management',
    //   duration: '2024 - present'
    // },
    {
      id: 'nanodegree',
      img: udacity,
      link: 'https://www.udacity.com/course/react-nanodegree--nd019',
      name: 'Udacity',
      title: 'React Nanodegree Program',
      duration: '2023'
    },
    { 
      id: 'msc',
      img: unipi,
      link: 'https://www.unipi.gr/unipi/en/',
      name: 'University of Piraeus',
      title: 'Master of Science, Advanced Informatics and Computing Systems',
      duration: '2016 - 2021'
    },
    {
      id: 'bsc',
      img: unipi,
      link: 'https://www.unipi.gr/unipi/en/',
      name: 'University of Piraeus',
      title: 'Bachelor of Science, Digital Systems',
      duration: '2008 - 2016'
    }
  ];

  return (
    <div id="Studies" className="studies">
      <div className="text-white">
        {studies.map(study =>
          <div key={study.id} className="flex flex-col md:flex-row items-center gap-5 mb-10 ml-2 md:ml-10">
            <div className="w-20 z-10 relative">
              <img className="shrink-0 drop-shadow-[0_0_7px_rgba(255,255,255,0.7)]" src={study.img} alt="unipi"/>
            </div>
            <div className='flex flex-col items-center md:items-start text-base'>
              <div className='font-medium text-center'>{study.title}</div>
              <a href={study.link} target='_blank' rel="noreferrer nofollow">
                <div>{study.name}</div>
              </a>
              <div className='italic text-sm font-light '>{study.duration}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}