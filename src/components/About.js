const about = [
  {id: 1, txt: "Hi there, my name is Eleftherios Merkouriou and I'm Front End Developer from Greece."},
  {id: 2, txt: "For this website, I used React JS, SASS with custom CSS using Flexbox & Grid. The UI design is mine."}
];

export default function About() {

  return (
    <div id="About-Me" className="aboutMe">
      <h1 className="aboutMe-header">
        About me
      </h1>
      <div className="aboutMe-txt">
        {about.map((paragraph) => <p key={paragraph.id}>{paragraph.txt}</p>)}
      </div>
    </div>
  );

}

//credits
//about<a href="https://www.freepik.com/free-photo/beautiful-architecture-building-tokyo-cityscape_4188629.htm#query=city%20night&position=4&from_view=search&track=sph">Image by lifeforstock</a> on Freepik
//skills<a href="https://www.freepik.com/free-photo/turned-gray-laptop-computer_12661377.htm#query=coding%20black&position=6&from_view=search&track=sph">Image by lucabravo</a> on Freepik
//studies Image by <a href="https://www.freepik.com/free-photo/books-stack-with-dark-background_13130623.htm#query=books%20dark&position=27&from_view=search&track=sph">Freepik</a>
//projects <a href="https://www.freepik.com/free-vector/colorful-infographic-graphs-diagrams-illustration_2807581.htm#query=dashboard%20black%20theme&position=7&from_view=search&track=ais">Image by rawpixel.com</a> on Freepik
//find <a href="https://www.freepik.com/free-photo/gadgets-office-supplies_9723414.htm#query=office%20black%20theme&position=47&from_view=search&track=ais">Image by Racool_studio</a> on Freepik
