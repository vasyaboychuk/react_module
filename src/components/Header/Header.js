import {useNavigate} from "react-router-dom";

import css from './Header.module.css';

function Header(props) {
    const navigate= useNavigate()

    return (
        <div className={css.Header}>
            <div className={css.btns}>

                <button onClick={() => navigate('/login')}>LOGIN</button>
                <button onClick={() => navigate('/register')}>REGISTER</button>
            </div>
        </div>
    );
}

export {Header};