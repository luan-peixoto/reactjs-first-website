import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favoritos: [],
    favoritos_total: 0,
    adicionarFavorito: (pokemon) => {},
    removerFavorito: (pokemon_id) => {},
    ehFavorito: (pokemon_id) => {}
});

export function FavoritesContextProvider(props) {

    const [usuarioFavoritos, setUsuarioFavoritos] = useState([]);
    
    function adicionarFavoritoHandler(pokemon) {
        setUsuarioFavoritos((prevUsuarioFavoritos) => {return prevUsuarioFavoritos.concat(pokemon)});
    };
    
    function removerFavoritoHandler(pokemon_id) {
        setUsuarioFavoritos((prevUsuarioFavoritos) => {return prevUsuarioFavoritos.filter(pokemon => pokemon.id !== pokemon_id)});
    };

    function ehFavoritoHandler(pokemon_id) {
        return usuarioFavoritos.some((pokemon)=> {return pokemon.id === pokemon_id});
    };

    const context = {
        favoritos: usuarioFavoritos,
        favoritos_total: usuarioFavoritos.length,
        adicionarFavorito: adicionarFavoritoHandler,
        removerFavorito: removerFavoritoHandler,
        ehFavorito: ehFavoritoHandler
    };

    return (<FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>);
};

export default FavoritesContext;