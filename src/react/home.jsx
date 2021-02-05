import React from 'react'
import Lottie from 'react-lottie'
import Animacion from '../../lotties/homeAnimation.json'
import defaultOption from '../../lotties/defaultOption'
import { Row, Col } from 'antd';

export default ({setStep})=>{
    return(<>
        <Row className='rowClass' align='middle'>
            <Col xs={24} lg={12}>
                <h3 className='show'><span className='span'>H</span>
                <span className='span'>o</span>
                <span className='span'>l</span>
                <span className='span'>a</span>
                <span className='span'>,</span></h3>

                <h3 className='show'>
                <span className='span'>s</span>
                <span className='span'>o</span>
                <span className='span'>y</span>
                &nbsp;
                <span className='span'>W</span>
                <span className='span'>i</span>
                <span className='span'>l</span>
                <span className='span'>l</span>
                <span className='span'>i</span>
                <span className='span'>a</span>
                <span className='span'>m</span>
                <span className='span'>s</span>
                &nbsp;
                <span style={{display:'inline-block'}}>
                <span className='span'>S</span>
                <span className='span'>a</span>
                <span className='span'>y</span>
                <span className='span'>a</span>    
                </span>  
                </h3>

                <p className='subTittel show'>Developer Full Stack / React.js / Node.js</p>

                <button className='boton show' onClick={()=>setStep(6)}>
                    contact me!
                </button>
            </Col>

            <Col xs={24} lg={12} className='show lottie'>
                <Lottie options={{...defaultOption,animationData:Animacion}}/>
            </Col>

        </Row>
        
    </>)
}