import ICard from "../interfaces/ICard";

function Card(props:ICard){
    return (<div className="card">
        <h1> My Card : {props.name} </h1>
        <p>is married : {JSON.stringify(props.isMarried)}</p>
    </div>)
}

export default Card;