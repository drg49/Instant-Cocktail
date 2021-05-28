import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const backBtn = <FontAwesomeIcon icon={faArrowLeft} size="1x"/>

const DrinkPage = (props) => {
    const drink = props.match.params.drink
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`

    const [singleDrink, setSingleDrink] = useState(null)

    const getDrink = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setSingleDrink(data.drinks[0])
    }

    useEffect(() => {getDrink()}, [])
    console.log(singleDrink)
    
    const loaded = () => {
        return (
            <>
            <Link to="/" id="home"><span>{backBtn}</span></Link>
                <h3>{singleDrink.strDrink}</h3>
                <img id="drink-thumb" src={singleDrink.strDrinkThumb} />
                <h4>Ingredients</h4>
                <ul id="list">
                    <li id="item">{singleDrink.strIngredient1}</li>
                    <li id="item">{singleDrink.strIngredient2}</li>
                    <li id="item">{singleDrink.strIngredient3}</li>
                    <li id="item">{singleDrink.strIngredient4}</li>
                    <li id="item">{singleDrink.strIngredient5}</li>
                    <li id="item">{singleDrink.strIngredient6}</li>
                    <li id="item">{singleDrink.strIngredient8}</li>
                    <li id="item">{singleDrink.strIngredient9}</li>
                    <li id="item">{singleDrink.strIngredient10}</li>
                    <li id="item">{singleDrink.strIngredient11}</li>
                    <li id="item">{singleDrink.strIngredient12}</li>
                    <li id="item">{singleDrink.strIngredient13}</li>
                    <li id="item">{singleDrink.strIngredient14}</li>
                    <li id="item">{singleDrink.strIngredient15}</li>
                </ul>
                
                <p>{singleDrink.strInstructions}</p>
            </>
        )
    }

    const loading = () => {
        return <h2>Loading...</h2>
    }

    return singleDrink ? loaded() : loading()

}

export default DrinkPage