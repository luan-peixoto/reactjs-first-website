import { useHistory } from "react-router";
import NovoPokemonForm from "./NovoPokemonForm"

function NovoPoke(props) {
    const history = useHistory();

    function enviarDataHandler(meetup) {
        fetch("https://pokemon-database-13-default-rtdb.firebaseio.com/pokemon.json", 
        {method: "POST",
         body: JSON.stringify(meetup),
         headers: {
             'Content-Type': "applications/json"
         }
        }
        ).then(() => {history.replace('/');} );
        alert("Formulário enviado com sucesso!");
        props.onSendingForm(); // a propriedade onForm atualiza um estado que diz que um novo pokemon foi adicionado
        // isso faz com que o gatilho do use effect em "TodosPoke" seja ativado e a pagina seja recarregada
        // isso em conjunto com o replace, volta para apagina inicial atualizada
        //d
    };


    return (
            <NovoPokemonForm onCancel={props.onCancel} onEnviarData={enviarDataHandler}></NovoPokemonForm>
    );
};

export default NovoPoke;