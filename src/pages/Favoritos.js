import { useContext } from "react";
import PokemonList from "../components/pokemon/PokemonList";
import FavoritesContext from "../store/favoritos-context";
import classes from "./Pages.module.css"

function Favoritos() {
    const favoritosCtx = useContext(FavoritesContext);

    function comparar_dex_id( a, b ) {
        if ( parseInt(a.dex_id.replace(/^0+/, '')) < parseInt(b.dex_id.replace(/^0+/, '')) ){
          return -1;
        }
        if ( parseInt(a.dex_id.replace(/^0+/, '')) > parseInt(b.dex_id.replace(/^0+/, '')) ){
          return 1;
        }
        return 0;
     }

    return (
        <section>
            <h1 className={classes.title}>Favoritos</h1>
            <PokemonList poke_list={favoritosCtx.favoritos.sort(comparar_dex_id)}></PokemonList>
        </section>
    );
};

export default Favoritos;