import {Link} from 'react-router-dom'

const IngredientCards = (props) => {
    return(
    <Link to={`/drink/${props.idDrink}`}>
    <div id="drink-card">
        <img id="drink-img" src={props.strDrinkThumb}/>
        <h3 id="drink-title">{props.strDrink}</h3>
    </div>
    </Link>
    )
}

export default IngredientCards