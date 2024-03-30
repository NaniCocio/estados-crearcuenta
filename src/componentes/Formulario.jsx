import { useState } from 'react';
import Alert from './Alert';

const Formulario = () => {
    const [nombre, setNombre] = useState ('')
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [mostrar, setMostrar] = useState (false)
    const [alerta, setAlerta] = useState ({message:'',color:''})

    const enviar =(event)=>{
        event.preventDefault()
        if (nombre.trim()=== '' || email.trim()=== '' || password.trim()=== ''){
            setMostrar(true)
            setAlerta({message:'Completa todos los campos !', color:'danger'})
        }else{
            setNombre('')
            setEmail('')
            setPassword('')
            setMostrar(false)
            setAlerta({message:'Felicidades acabas de crear tu cuenta' , color:'sucess'})}

    }

    return (
        <>
        <form onSubmit={enviar}>
        <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputName" placeholder="Nombre" value={nombre} onChange={(event)=> setNombre(event.target.value)}/>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="tuemail@ejemplo.com" value={email} onChange={(event)=> setEmail(event.target.value)}/>
            </div>
            <div class="mb-3">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" value={password}
                onChange={(event)=> setPassword(event.target.value)}/>
            </div>
            <div class="mb-3">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirma tu contraseña"/>
            </div>
            <div className="d-grid mx-auto">
                <button type="submit" className="btn btn-success">Registrarse</button>
            </div>
            {mostrar && <Alert message={alerta.message} color ={alerta.color}/>}

        </form>
        </>
    )


}

export default Formulario;