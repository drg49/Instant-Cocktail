import { useEffect, useState } from "react"
import IngredientCards from "../components/IngredientCards"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import load from "../loading.gif"

const backBtn = <FontAwesomeIcon icon={faArrowLeft} size="1x"/>

const IngredientFilterPage = (props) => {
    const ingredient = props.match.params.ingredient
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`

    const [drinks, setDrinks] = useState(null)

    const getDrinks = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setDrinks(data.drinks.map((item, index) => {
          return (
              <IngredientCards 
                strDrink={item.strDrink}
                strDrinkThumb={item.strDrinkThumb}
                idDrink={item.idDrink}
                key={index}
              />
          )  
        }))
    }

    useEffect(() => {getDrinks()}, [])

    const loaded = () => {
        return (
            <>
            <Link to="/" id="home"><span>{backBtn}</span></Link>
            <h2 id="page-title">Cocktails Containing {ingredient}</h2>
            <div id="drink-flex">
                {drinks}
            </div>
            </>
        )
    }

    const loading = () => {
        return <img id="load" src={load} alt="The page is loading"/>
    }

    return drinks ? loaded() : loading()
}

export default IngredientFilterPage