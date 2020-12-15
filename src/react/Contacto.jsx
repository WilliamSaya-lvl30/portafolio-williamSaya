import React from 'react'
import { Row, Col } from 'antd';
import defaultOption from '../../lotties/defaultOption'
import Animacion from '../../lotties/dolowload.json'
import Lottie from 'react-lottie'
import github from '../../lotties/github.json'
import linkedin from '../../lotties/linkedin.json'

export default ()=>{
    return (<>
   <Row  className='rowClass' align='middle'>
        <Col span={12}>
                <h2 className='show'>
                    <span className='span'>C</span>
                    <span className='span'>o</span>
                    <span className='span'>n</span>
                    <span className='span'>t</span>
                    <span className='span'>a</span>
                    <span className='span'>c</span>
                    <span className='span'>t</span>
                    &nbsp;
                    <span className='span'>m</span>
                    <span className='span'>e</span>
                </h2>
                <div><a href="mailto:williams.sand25@gmail.com" target="_blank" rel="noopener noreferrer" className='adv'>williams.sand25@gmail.com</a></div>
            <div className="link-row">
                <div className='link'>
                <a href="https://github.com/WilliamSaya-lvl30" target="_blank" rel="noopener noreferrer">
                    <Lottie options={{...defaultOption,animationData:github}} />
                    </a>          
            </div>
            <div className='link'>
                <a href="https://www.linkedin.com/in/williams-saya-developer/" target="_blank" rel="noopener noreferrer">
                    <Lottie options={{...defaultOption,animationData:linkedin}} />
                    </a>
            </div>
            </div>

        </Col>
        <Col span={12} style={{padding:'30px'}} className='show'>
            <a href='https://drive.google.com/file/d/1VRCCON_b6jxE_3jHxfoEe0ZJL_IBVtgk/view?usp=sharing' target="_blank">
            <Lottie options={{...defaultOption,animationData:Animacion}} />
            </a>
        </Col>
   </Row>
    </>)
}