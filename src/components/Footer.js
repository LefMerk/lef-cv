import { IoMdImages } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";
import { SiMaildotru } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
    return (
        <footer className="font-medium animate__animated animate__fadeInUp">
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div class="h-0.5 w-full bg-gray-700 mb-5"></div>
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-2">
                    <div>
                        <span>&copy; {new Date().getFullYear()} Eleftherios Merkouriou</span>
                    </div>
                    <div className="flex gap-3">
                        <a href="https://www.linkedin.com/in/lefmerk/" target="_blank">
                            <IoLogoLinkedin />
                        </a>
                        <a href="https://github.com/LefMerk" target="_blank">
                            <IoLogoGithub />
                        </a>
                        <a href="mailto:lefmerk@gmail.com">
                            <IoMdMail />
                        </a>
                    </div>
                </div>
            </div>
            {/* <IoMdImages />
            <span>from</span> 
            <a href="https://www.freepik.com/">Freepik</a> */}
        </footer>
    );
}