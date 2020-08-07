import React, {Fragment,useState} from 'react';
import Formulario from './componets/Formulario'
import Cita from './componets/Cita';

function App() {
  //ARREGLO DE CITAS
  const [citas,guardarCitas]=useState([]);

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita =>{
    guardarCitas([...citas,cita])
  }

  //FUNCION QUE ELIMINA UNA CITA POR SU ID
  const eliminarCita = id=>{
    const nuevaCitas= citas.filter(cita => cita.id !== id);
    guardarCitas(nuevaCitas)
  }


  return (
    <Fragment>
       <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
                <Formulario
                crearCita={crearCita}
                />
          </div>
          <div className='one-half column'>
                <h2>Administrador de citas</h2>
                {citas.map(cita =>(
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
                ))}
          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default App;
