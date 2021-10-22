import classes from "./BarraNav.module.css"
import { Link } from 'react-router-dom';
import { useContext } from "react";
import FavoritesContext from "../../store/favoritos-context";

function BarraNav() {
    const favoritosCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Pokédex</div>
            <nav>
                <ul>
                    <li><Link to="/">Todos os Pokémon</Link></li>
                    <li><Link to="/favoritos">Favoritos</Link> <span className={classes.badge}>{favoritosCtx.favoritos_total}</span></li>
                </ul>
            </nav>
            
        </header>
    );
};

export default BarraNav;