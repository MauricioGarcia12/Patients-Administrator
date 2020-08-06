import React, {Fragment, useState} from 'react';



const Forumulario = () => {
        //CREAR STATE DE CITAS
    const [cita,actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    //Function que se ejecuta cada que el usuario escribe en el input

    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        })
    }

    const {mascota,propietario,fecha,hora,sintomas}=cita;

    return (  
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
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
 
export default Forumulario;