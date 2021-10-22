import classes from './PokemonItem.module.css'
import Cartao from '../user_interface/Cartao';
import FavoritesContext from '../../store/favoritos-context';
import { useContext } from 'react';

function PokemonItem(props) {
    const favoritosCtx = useContext(FavoritesContext);

    const item_eh_favorito = favoritosCtx.ehFavorito(props.id);

    function apertarBotaoFavoritoHandler() {
        if (item_eh_favorito) {
            favoritosCtx.removerFavorito(props.id);
        }
        else {
            favoritosCtx.adicionarFavorito(
                {   
                    id: props.id,
                    nome: props.nome,
                    imagem: props.imagem,
                    dex_id: props.dex_id,
                    tipo: props.tipo,
                    descricao: props.descricao,
                }
            );
        }
    }

    return (
        <li>
            <Cartao>
                <div className={classes.image}>
                    <img src={props.imagem} alt={props.nome}></img>
                </div>
                <div className={classes.content}>
                    <h3>#{props.dex_id} {props.nome}</h3>
                    <div>
                        <span>Tipo: </span>
                        {props.tipo.split(" ").map(
                            (valor) => {
                                return (<span className={classes[`${valor.toLowerCase()}`]}>{valor}</span>)
                            })}
                    </div>

                    <p>{props.descricao}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={apertarBotaoFavoritoHandler}>
                        {item_eh_favorito ? "Remover Favorito" : "Adicionar Favorito"}
                    </button>
                </div>
            </Cartao>
        </li>
    );
};

export default PokemonItem;