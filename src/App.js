import React, {Fragment,useState,useEffect} from 'react';
import Formulario from './componets/Formulario'
import Cita from './componets/Cita';

function App() {
  //CITAS EN LOCAL STORAGE
  let citasIniciales =JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales){
    citasIniciales=[];
  }

  //ARREGLO DE CITAS
  const [citas,guardarCitas]=useState([]);

  //useefect para realizar operaciones cuanod el state cambia
  //metiendo las citas al local storage cuando haya sino el arreglo es vacio
  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas))
    }
    else{
      localStorage.setItem('citas',JSON.stringify([]))
    }
    
  }, [citas])

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita =>{
    guardarCitas([...citas,cita])
  }

  //FUNCION QUE ELIMINA UNA CITA POR SU ID
  const eliminarCita = id=>{
    const nuevaCitas= citas.filter(cita => cita.id !== id);
    guardarCitas(nuevaCitas)
  }

  //mensaje condicional
  const titulo=citas.length ===0 ? 'No hay citas':'Administra tus Citas';


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

                <h2>{titulo}</h2>
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
