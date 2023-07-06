import { IoMdImages } from "react-icons/io";

function Footer() {
    return (
        <footer>
            <span>{new Date().getFullYear()} &copy; Developed by EM - </span> <IoMdImages /> <span>from</span> <a href="https://www.freepik.com/">Freepik</a>
        </footer>
    );
}

export default Footer;