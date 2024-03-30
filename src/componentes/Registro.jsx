import Formulario from "./Formulario";
import Social from "./Social-button";

const Registro = () => {

    return (
        <>
            <div className='container'>
                <h2>Crea una cuenta</h2>
                <div className="logos">
                    <Social img="./src/img/facebook-circular-logo.png" />
                    <Social img="./src/img/github.png" />
                    <Social img="./src/img/linkedin.png" />
                </div>
                <p>O usa tu email para registrarte</p>
                <Formulario />       
            </div>
        </>
            
        
    )
}

export default Registro

