import React from 'react'
import { Row, Col } from 'antd';
import defaultOption from '../../lotties/defaultOption'
import Animacion from '../../lotties/profileAnimation.json'
import Lottie from 'react-lottie'

export default ()=>{
    return (<>
   <Row  className='rowClass' align='middle'>
        <Col xs={24} lg={12}>
                <h2 className='show'>
                    <span className='span'>A</span>
                    <span className='span'>b</span>
                    <span className='span'>o</span>
                    <span className='span'>u</span>
                    <span className='span'>t</span>
                    &nbsp;
                    <span className='span'>m</span>
                    <span className='span'>e</span>
                </h2>
            <p className='texto'>
                    soy un Desarrollador Web Full Stack con sólidas habilidades de trabajo en equipo, planificación y cumplimiento de metas adquiridas en mis 4 años de experiencia en el sector bancario, que complementan mis habilidades técnicas. 
            </p>
            <p className='texto'>
                Realicé un Coding Bootcamp buscando potenciar mi carrera en un campo que me apasiona. Descubrí en la tecnología un espacio donde puedo aplicar mi creatividad y capacidad de análisis a la resolución de problemas de un modo práctico.
            </p>

        </Col>
        <Col xs={24} lg={12}
        style={{padding:'30px'}} className='show lottie'>
        <Lottie options={{...defaultOption,animationData:Animacion}} />
        </Col>
            
   </Row>
    </>)
}