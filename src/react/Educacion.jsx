import React from 'react'
import { Row, Col } from 'antd';
import defaultOption from '../../lotties/defaultOption'
import Animacion from '../../lotties/educacion.json'
import Lottie from 'react-lottie'



export default ()=>{
    return (<>
   <Row  className='rowClass' align='middle'>
   <Col span={12}>
        <h2 className='show'>
            <span className='span'>E</span>
            <span className='span'>d</span>
            <span className='span'>u</span>
            <span className='span'>c</span>
            <span className='span'>a</span>
            <span className='span'>c</span>
            <span className='span'>i</span>
            <span className='span'>ó</span>
            <span className='span'>n</span>
        </h2>
       <p className='educacion show'>
        Desarrollador Web Full Stack
       </p>
       <p className='subTittel show'> Coding Bootcamp | Plataforma 5 (Septiembre 2020 - Diciembre 2020)
        </p>

       <p className='texto'>
        Curso intensivo de 820 horas donde aprendí las últimas tecnologías de
        desarrollo web en un formato teórico práctico. Utilizamos SCRUM como
        metodología ágil para encarar los proyectos grupales.  
        </p>

        <p className='educacion show'>
        Licenciado en Administración de Recursos Materiales Y
        Financieros
        </p>
       <p className='subTittel show'> 
       Universidad Nacional Experimental “Simón Rodríguez” (2007 - 2013)
        </p>

       <p className='texto'>
       Licenciatura que tiene por objeto maximizar el patrimonio de una empresa, optimizando el manejo de sus recursos financieros para el logro de objetivos e incrementación de la eficacia y rentabilidad.
        </p>

   </Col>
   <Col span={12} style={{padding:'30px'}} className='show'>
   <Lottie options={{...defaultOption,animationData:Animacion}} />
   </Col>
      
   

   </Row>
    </>)
}