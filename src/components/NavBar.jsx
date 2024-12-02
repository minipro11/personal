import logo from "../assets/monkeytype.png";
import { FaCrown } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";

function NavBar() {
    return ( 
        <>
            <div className = "row">
                <div className = "col">
                    <img className = "logo" src = {logo}/>
                    <button className = "btn"><FaRegKeyboard className = "img"/></button>    
                    <button className = "btn"><FaCrown className = "img"/></button> 
                    <button className = "btn"><FaInfo className = "img"/></button> 
                    <button className = "btn"><IoIosSettings className = "img2"/></button> 
                </div>
                <div className = "col">
                    <button className = "btn"><IoIosNotifications className = "img2"/></button>
                    <button className = "btn"><MdOutlinePerson className = "img2"/></button>
                </div>
            </div>
            <br/>
            <div className = "roboto-mono">Whereas recognition</div>
        </>

    )
}

export default NavBar;