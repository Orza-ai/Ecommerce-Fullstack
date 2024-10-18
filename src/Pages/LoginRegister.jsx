import React from 'react'

const LoginRegister = () => {
return (
    <>
        <div className='monitor-login-registration'>
            <div className='monitor-inicio-sesion'>
                <h3>Iniciar Sesión</h3>
                <form className='monitor-form-login'>
                    <label htmlFor='inicio-sesion-correo'>Correo Electrónico</label>
                    <input id='inicio-sesion-correo' type='email' placeholder='Ingrese su correo electrónico'></input>

                    <label htmlFor='inicio-sesion-contraseña'>Contraseña</label>
                    <input id='inicio-sesion-contraseña' type='password' placeholder='Ingrese su contraseña'></input>

                    <button type='submit' className='monitor-form-submit-button'>Acceder</button>
                </form>
            </div>
            <div className='monitor-registro'>
            <h3>Registrarme</h3>
                <form className='monitor-form-register'>
                    <label htmlFor='registro-correo'>Ingrese su mail</label>
                    <input id='registro-correo' type='email'></input>

                    <label htmlFor='registro-contraseña'>Ingrese su contraseña</label>
                    <input id='registro-contraseña' type='password'></input>

                    <label htmlFor='registro-selector-documentacion'>Seleccione tu tipo de documento</label>
                    <select id='registro-selector-documentacion'>
                        <option value={"DNI"}>DNI</option>
                        <option value={"CUIT"}>CUIT</option>
                        <option value={"CUIL"}>CUIL</option>
                        <option value={"CI"}>CI</option>
                        <option value={"LE"}>LE</option>
                        <option value={"LC"}>LC</option>
                        <option value={"Pasaporte, otro"}>Pasaporte, otro</option>
                    </select>

                    <label htmlFor='registro-ingrese-DNI'>Ingrese su DNI, CUIT o pasaporte</label>
                    <input id='registro-ingrese-DNI' type='text'></input>

                    <button type='submit' className='monitor-form-submit-button'>Registrarse</button>
                </form>
            </div>
        </div>
    </>
)
}

export default LoginRegister