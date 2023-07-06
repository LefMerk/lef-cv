import unipi from '../assets/unipi.png';

export default function Studies() {
    return (
      <div id="Studies" className="studies">
        <h1 className="studies-header">Studies</h1>
        <div className="studies-txt">
          <div className="studies-txt-item">
            <img className="unipi" src={unipi} alt="unipi"/>
            <span>Master of Science, Advanced Informatics and Computing Systems</span>
            <span>University of Piraeus</span>
            <span>2016 - 2021</span>
          </div>
          <div className="studies-txt-item">
            <img className="unipi" src={unipi} alt="unipi"/>
            <span>Bachelor of Science, Digital Systems</span>
            <span>University of Piraeus</span>
            <span>2008 - 2016</span>
          </div>
        </div>
      </div>
    );
}