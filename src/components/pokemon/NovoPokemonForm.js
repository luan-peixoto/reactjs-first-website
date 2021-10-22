import classes from "./NovoPokemonForm.module.css"
import { useRef } from 'react';

function NovoPokemonForm(props) {

    
    const nome_input = useRef();
    const imagem_input = useRef();
    const dex_id_input = useRef();
    const tipo_input = useRef();
    const descricao_input = useRef();

    function enviarHandler(event) {
        event.preventDefault();

        const nome_inserido = nome_input.current.value;
        const imagem_inserido = imagem_input.current.value;
        const dex_id_inserido = dex_id_input.current.value;
        const tipo_inserido = tipo_input.current.value;
        const descricao_inserido = descricao_input.current.value;

        const pokemon_data = {
            nome: nome_inserido,
            imagem: imagem_inserido,
            dex_id: dex_id_inserido,
            tipo: tipo_inserido,
            descricao: descricao_inserido,
        };

        props.onEnviarData(pokemon_data);
        props.onCancel();
    };


    return (
        <div className={classes.modalbox}>
            <form className={classes.form} onSubmit={enviarHandler} id="form_1">
                <div className={classes.control}>
                    <label htmlFor="nome">Nome do Pokémon</label> 
                    <input type="text" id="nome" required ref={nome_input}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="imagem">Imagem</label> 
                    <input type="url" id="imagem" placeholder="https://url.com" required ref={imagem_input}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="dex_id">ID Dex</label> 
                    <input type="text" id="dex_id" placeholder="ex: 001" required ref={dex_id_input}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="tipo">Tipo</label> 
                    <input type="text" id="tipo" placeholder="ex: Grass Poison" required ref={tipo_input}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Descrição</label> 
                    <textarea id="description" required rows="5" ref={descricao_input}></textarea>
                </div>
            </form>
            <div className={classes.buttondiv}>
                <button className={classes.novopokealtbutton} onClick={props.onCancel}>Fechar</button>
                <button className={classes.novopokebutton} type="submit" form="form_1" value="Submit">Enviar</button>
            </div>
        </div>
    );
};

export default NovoPokemonForm;