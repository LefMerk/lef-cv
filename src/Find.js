import { VscGithub } from "react-icons/vsc";
import { SiMaildotru } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io";

function Find() {
    return (
      <div id="Find-Me" className="findMe">
        <h1 className="findMe-header">
          Find me
        </h1>
        <div className="findMe-txt">
          <div className="findMe-txt-item">
            <a href="mailto:lefmerk@gmail.com">
              <SiMaildotru />
              {/* <img src='./at.png' alt='mail' /> */}
            </a>
          </div>
          <div className="findMe-txt-item">
            <a href="https://github.com/LefMerk">
              <VscGithub />
            </a>
          </div>
          <div className="findMe-txt-item">
            <a href="https://gr.linkedin.com/in/eleftherios-merkouriou">
              <IoLogoLinkedin />
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Find;
  