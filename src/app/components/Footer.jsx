import { FiHome } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";

const Footer = () => {
    return ( 
    <div className="bg-white shadow-xl col-[content] ">
        <ul className="flex justify-around p-4 ">
            <li><FiHome /></li>
            <li><FaRegStar /></li>
            <li><LuMessageCircle /></li>
            <li><FaRegUser /></li>
        </ul>
    </div> 
);
}
 
export default Footer;