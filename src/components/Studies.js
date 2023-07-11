import unipi from '../assets/unipi.png';

export default function Studies() {
  const studies = [
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
          <div key={study.id} className="flex items-center gap-5 mb-10 ml-10">
            <div className="w-24 z-10 relative">
              <img className="drop-shadow-[0_0_7px_rgba(255,255,255,0.7)]" src={study.img} alt="unipi"/>
            </div>
            <div className='flex flex-col text-base'>
              <div className='font-medium'>{study.title}</div>
              <a href={study.link} target='_blank' rel="noreferrer nofollow">
                <div><span>{study.name}</span></div>
              </a>
              <div className='italic'>{study.duration}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}