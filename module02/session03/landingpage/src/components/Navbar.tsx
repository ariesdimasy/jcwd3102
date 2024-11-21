import { AiOutlineMenu } from "react-icons/ai";
import style from "./Navbar.module.css"

export default function Navbar(){
    return (<nav className={style['navbar']}>
        <div className='container'>
            <a href='#' className={style['logo']}>LOGO</a>
            <AiOutlineMenu />
        </div>
    </nav>)
}