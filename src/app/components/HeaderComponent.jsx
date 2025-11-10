import { IoIosNotificationsOutline } from "react-icons/io";

const headerComponent = () => {
    return ( 
    <div className="grid col-[content] bg-white p-4">
        <div className="flex justify-between ">
        <a href="/" className="font-bold">FamilyFriends</a>
        <IoIosNotificationsOutline />
        </div>
    </div> );
}
 
export default headerComponent;