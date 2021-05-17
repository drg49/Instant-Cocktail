import { useEffect, useState } from "react"
import IngredientCards from "../components/IngredientCards"

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
            <h2 id="page-title">Cocktails Containing {ingredient}</h2>
            <div id="drink-flex">
                {drinks}
            </div>
            </>
        )
    }

    const loading = () => {
        return <h2>Loading...</h2>
    }

    return drinks ? loaded() : loading()
}

export default IngredientFilterPage