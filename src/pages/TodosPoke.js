import PokemonList from "../components/pokemon/PokemonList";
import classes from "./Pages.module.css";
import { useState, useEffect } from "react";
import Backdrop from "../components/pokemon/Backdrop";
import NovoPoke from "../components/pokemon/NovoPoke";

function TodosPoke() {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonCarregados, setPokemonCarregados] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formIsSent,setFormIsSent] = useState(false);

    function comparar_dex_id( a, b ) {
        if ( parseInt(a.dex_id.replace(/^0+/, '')) < parseInt(b.dex_id.replace(/^0+/, '')) ){
          return -1;
        }
        if ( parseInt(a.dex_id.replace(/^0+/, '')) > parseInt(b.dex_id.replace(/^0+/, '')) ){
          return 1;
        }
        return 0;
     }

    function abrirModalHandler() {
        setModalIsOpen(true);
    };

    function fecharModalHandler() {
        setModalIsOpen(false);
    };

    function formIsSentHandler() {
        setFormIsSent(true);
    };

    useEffect(
        () => {
            setIsLoading(true);
            fetch(
                "https://pokemon-database-13-default-rtdb.firebaseio.com/pokemon.json"
            ).then(
                response => {
                    return response.json();
                }
            ).then(
                dados => {
                    const pokemon_list = [];
                    for (const valores in dados) {
                        const pokemon = {
                        id: valores,
                        ...dados[valores]
                        };
                    pokemon_list.push(pokemon);
                    };
                    setIsLoading(false);
                    setPokemonCarregados(pokemon_list.sort(comparar_dex_id));
                }
            )
        },
        [formIsSent]
    );

    
    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1 className={classes.title}>Lista de Pokemon</h1>
            <PokemonList poke_list={pokemonCarregados}></PokemonList>

            {modalIsOpen && <NovoPoke onSendingForm={formIsSentHandler} onCancel={fecharModalHandler}></NovoPoke>}
            {modalIsOpen && <Backdrop onClick={fecharModalHandler} />} 

            <button className={classes.novopokebutton} onClick={abrirModalHandler}>Adicionar Pokémon</button>
        </section>
    );
};

export default TodosPoke;