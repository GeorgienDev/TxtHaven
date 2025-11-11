import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./nav.module.css"

export default function Nav(){
    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <a className={`navbar-brand p-3 fs-3 ${style.navtext}`} href="#">Txt Haven</a>
        </div>
        </nav>
        </>
    );

}