import BarraNav from "./BarraNav";
import classes from "./Layout.module.css"

function Layout(props) {
    return (
        <div>
            <BarraNav></BarraNav>
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}

export default Layout;