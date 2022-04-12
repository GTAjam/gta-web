import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';


const show = (e) => {
    alert("Sorry! You are not eligible to Login.");
    // e.preventDefault();
}

const LoginPage = () => {

    return (
        <div class="login-container">
            <form action="/">

                <FontAwesomeIcon icon={faUserCircle} className="avt" style={{ fontSize: "7rem" }} />
                <h2 className="text-center" style={{ fontSize: "3.5rem", fontFamily: "Marcellus SC", fontWeight: "900", color: "#fff", marginBottom: "2px" }}>
                    WELCOME
                </h2>
                <p style={{ fontSize: "2rem", fontFamily: "Roboto Condensed", fontWeight: "600" }}>(GTA Members Only)</p>

                <div className="input-div one">
                    <div className="icon">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="holder">
                        <input type="text" className="input" placeholder="Username" />
                    </div>
                </div>
                <div className="input-div two">
                    <div className="icon">
                        <FontAwesomeIcon icon={faLock} />
                    </div>
                    <div className="holder">
                        <input type="password" className="input" placeholder="Password" />
                    </div>
                </div>
                <button className="btnLogin text-white" style={{ fontFamily: "Marcellus SC" }} onClick={() => { show() }}>Login</button>
            </form>
        </div>
    );
}
export default LoginPage;
