import style from "./Header.module.css"
import imageSrc from "./../assets/mountains.png"

export default function Header(){
    return (<div className={style.header}>
        <img src={imageSrc} width={"100%"} height={"270px"} />
    </div>)
}