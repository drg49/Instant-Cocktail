import data from '../data'
import Input from './Input'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Main = () => {

    const [ingredientsList, setInredientsList] = useState(data.map((item, index) => {
        return (
            <Link to={`/ingredient/${item.strIngredient1}`}>
                <li id="ing-item">{item.strIngredient1}</li>
            </Link>
        )
    }))

    const handleChange = (event) => {
        //This right here prevents whitespace! It is very important when conducting a search result.
        var key = event.keyCode;
        if (key === 32) {
          event.preventDefault();
        }
        let name = event.target.value.trim();
        setInredientsList(
          data.filter((item, index) =>
              item.strIngredient1
                .toLowerCase()
                .includes(name.toLowerCase().replace( /\s\s+/g, ' ' ))
            )
            .map((item, index) => {
              return (
                <Link to={`/ingredient/${item.strIngredient1}`}>
                    <li id="ing-item">{item.strIngredient1}</li>
                </Link>
              );
            })
        );
      };

    return (
    <>
    <Input handleChange={handleChange}/>
    <ul id="ing-list">{ingredientsList}</ul>
    </>
    )
}

export default Main