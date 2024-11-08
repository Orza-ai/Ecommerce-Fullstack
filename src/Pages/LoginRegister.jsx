import React from 'react'
import '../Styles/LoginRegister.css'
import useForm from '../hooks/useForm'

const LoginRegister = () => {

    const Login = ( name, email, password, inputChange, resetForm ) => {
        const {} = useForm({
            name: '',
            email:'',
            password:'',
        })
    }



return (
    <>
        <div className='monitor-login-registration'>

            <div className='monitor-inicio-sesion-registro'>
                <h3 className='monitor-iniciar-sesion'>Iniciar Sesión</h3>
                <form className='monitor-form-login'>
                <div className='monitor-user-label-input-container'>
                    <label htmlFor='inicio-sesion-nombre'>Nombre de usuario:</label> <br/>
                    <input id='inicio-sesion-nombre' type='text' name='name' value={name} placeholder='Ingrese su nombre'></input>
                    </div>

                    <div className='monitor-user-label-input-container'>
                    <label htmlFor='inicio-sesion-correo'>Correo Electrónico:</label> <br/>
                    <input id='inicio-sesion-correo' type='email' name='email' value={email} placeholder='Ingrese su correo electrónico'></input>
                    </div>

                    <div className='monitor-user-label-input-container'>
                    <label htmlFor='inicio-sesion-contraseña'>Contraseña:</label> <br/>
                    <input id='inicio-sesion-contraseña' type='password' name='password' value={password} placeholder='Ingrese su contraseña'></input>
                    </div>
                    <button type='submit' className='monitor-form-submit-button'>Acceder</button>
                </form>
            </div>

            <div className='monitor-inicio-sesion-registro'>
            <h3>Registrarme</h3>
                <form className='monitor-form-register'>
                    <label htmlFor='registro-correo'>Ingrese su mail</label>
                    <input id='registro-correo' type='email'></input> <br/>

                    <label htmlFor='registro-contraseña'>Ingrese su contraseña</label>
                    <input id='registro-contraseña' type='password'></input> <br/>

                    <label htmlFor='registro-selector-documentacion'>Seleccione tu tipo de documento:</label>
                    <select id='registro-selector-documentacion'>
                        <option value={"DNI"}>DNI</option>
                        <option value={"CUIT"}>CUIT</option>
                        <option value={"CUIL"}>CUIL</option>
                        <option value={"CI"}>CI</option>
                        <option value={"LE"}>LE</option>
                        <option value={"LC"}>LC</option>
                        <option value={"Pasaporte, otro"}>Pasaporte, otro</option>
                    </select> <br/>

                    <label htmlFor='registro-ingrese-DNI'>Ingrese su DNI, CUIT o pasaporte:</label>
                    <input id='registro-ingrese-DNI' type='text'></input> <br/>
                    <button type='submit' className='monitor-form-submit-button'>Registrarse</button>
                </form>
            </div>

        </div>
    </>
)
}

export default LoginRegister