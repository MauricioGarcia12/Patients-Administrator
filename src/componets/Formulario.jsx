import React, {Fragment, useState} from 'react';
import { v4 as uuid } from 'uuid';




const Formulario = ({crearCita}) => {
        //CREAR STATE DE CITAS
    const [cita,actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });
    

    const [error, actualizarError]=useState(false)

    //Function que se ejecuta cada que el usuario escribe en el input

    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        })
    }

    //Cuando envia formulario
    const submitCita = e =>{
        e.preventDefault();
        // Validar
        if(mascota.trim() === '' ||propietario.trim() === ''||
          fecha.trim() === ''||hora.trim() === ''||sintomas.trim() === ''){
            
            actualizarError(true)
            return;
        }
        //Eliminar mensaje previo
        actualizarError(false);

        //Asignar ID
        cita.id = uuid();
        //Crear Cita
        crearCita(cita);


        //Reiniciar Form
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }
    const {mascota,propietario,fecha,hora,sintomas}=cita;

    return (  
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> :null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre de Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre de Dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre del dueño'
                    onChange={actualizarState}
                    value={propietario}


                />
                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={fecha}


                />
                <label>Hora de alta</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={hora}

                />
                <label>Sintomas</label>
                <textarea
                className='u-full-width'
                name='sintomas'
                onChange={actualizarState}
                value={sintomas}
                > </textarea>
                <button
                type='submit'
                className='u-full-width button-primary'
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;