import style from "./Card3.module.css"

export default function Card3(){
    return (<div className={style['card']}>
        {/* class    ="card3 container" */}
        <h3 className={style['my-font']+' container'}> Card 3 </h3>
    </div>)
}