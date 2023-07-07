import { IoMdImages } from "react-icons/io";

export default function Footer() {
    return (
        <footer className="font-medium animate__animated animate__fadeInUp">
            <span className="border-r-2 border-r-white pr-2 mr-1">{new Date().getFullYear()} &copy; Developed by EM</span>
            <IoMdImages />
            <span>from</span> 
            <a href="https://www.freepik.com/">Freepik</a>
        </footer>
    );
}