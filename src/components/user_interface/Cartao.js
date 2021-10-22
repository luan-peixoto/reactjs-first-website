import classes from "./Cartao.module.css"

function Cartao(props) {
    return (
        <div className={classes.card}>
            {props.children}
            <p></p>
        </div>
    );
};

export default Cartao;