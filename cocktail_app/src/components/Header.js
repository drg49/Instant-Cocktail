import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const cocktail = <FontAwesomeIcon icon={faCocktail} />

const Header = () => {
    return (
        <section id="header">
            <h1><Link to="/">Instant Cocktail {cocktail}</Link></h1>
        </section>
    )
}

export default Header