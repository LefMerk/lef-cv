import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
    return (
        <footer className="aspect-[3/2] md:aspect-[7/1] xl:aspect-[12/1] font-medium animate__animated animate__fadeInUp bg-[url('../assets/footer_bg.svg')] bg-cover bg-bottom bg-no-repeat">
            <div className="max-w-6xl h-full mx-auto text-white text-sm">
                {/* <div className="h-0.5 w-full bg-gray-700 md:mb-5"></div> */}
                <div className="flex flex-col-reverse h-full space-y-4 md:space-y-1 md:flex-row md:justify-between items-center gap-3 px-4 pb-3">
                    <div className="md:self-end">
                        <span>&copy; {new Date().getFullYear()} Eleftherios Merkouriou</span>
                    </div>
                    <div className="flex md:self-end gap-3">
                        <a href="https://www.linkedin.com/in/lefmerk/" target="_blank" className="hover:text-[#bef52d]">
                            <IoLogoLinkedin className="w-8 h-8" />
                        </a>
                        <a href="https://github.com/LefMerk" target="_blank" className="hover:text-[#bef52d]">
                            <IoLogoGithub className="w-8 h-8" />
                        </a>
                        <a href="mailto:lefmerk@gmail.com" className="hover:text-[#bef52d]">
                            <IoMdMail className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}