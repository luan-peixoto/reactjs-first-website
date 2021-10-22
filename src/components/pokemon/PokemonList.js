import classes from './PokemonList.module.css'
import PokemonItem from './PokemonItem'

function PokemonList(props) {
    return (
        <ul className={classes.list}>
            {props.poke_list.map(function(poke_item) { return <PokemonItem key={poke_item.id} 
                id={poke_item.id} dex_id={poke_item.dex_id} imagem={poke_item.imagem} nome={poke_item.nome} 
                    tipo={poke_item.tipo} descricao ={poke_item.descricao}/>})}
        </ul>
    );
};

export default PokemonList;