import "./Header.css";
import { FiSun } from "react-icons/fi";
import { BsMoonFill } from "react-icons/bs";

export default function Header({theme, setTheme}){

    function toggleTheme(){
        if(theme === "light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }

    return(
        <nav>
            <h1>โปรแกรมคำนวณหาค่าดัชนีมวลกาย BMI</h1>
            <span onClick={toggleTheme}>
                {theme === "dark" ? <FiSun/> : <BsMoonFill/>}
            </span>
        </nav>

    );
}