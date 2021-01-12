import React from 'react'
import { Row, Col } from 'antd';
import defaultOption from '../../lotties/defaultOption'
import Animacion from '../../lotties/skillAnimation.json'
import Lottie from 'react-lottie'
import react from '../../img/react.png'
import redux from '../../img/redux.png'
import firebase from '../../img/firebase.png'
import git from '../../img/git.png'
import js from '../../img/las tres marias.png'
import mongo from '../../img/mongo.png'
import node from '../../img/node.png'
import webpack from '../../img/webpack.png'
import psql from '../../img/psql.png'
import sass from '../../img/sass.png'

export default ()=>{
    return (<>
   <Row  className='rowClass' align='middle'>
        <Col  xs={24} lg={12}>
                <h4 className='show '>
                    <span className='span adv'>A</span>
                    <span className='span adv'>v</span>
                    <span className='span adv'>a</span>
                    <span className='span adv'>n</span>
                    <span className='span adv'>z</span>
                    <span className='span adv'>a</span>
                    <span className='span adv'>d</span>
                    <span className='span adv'>o</span>
                </h4>
            <p className='texto'>
            React, Redux, Git, Recoil.js, Firebase Service, Postgres, HTML, CSS, JavaScript, Node.js, Express.js, Sequelize, jQuery       </p>
            <h4 className='show'>
                    <span className='span int'>I</span>
                    <span className='span int'>n</span>
                    <span className='span int'>t</span>
                    <span className='span int'>e</span>
                    <span className='span int'>r</span>
                    <span className='span int'>m</span>
                    <span className='span int'>e</span>
                    <span className='span int'>d</span>
                    <span className='span int'>i</span>
                    <span className='span int'>o</span>
                </h4>
            <p className='texto'>
            MongoDB, SQL, Webpack, Sass
                </p>
            <h4 className='show'>
                    <span className='span bas'>B</span>
                    <span className='span bas'>á</span>
                    <span className='span bas'>s</span>
                    <span className='span bas'>i</span>
                    <span className='span bas'>c</span>
                    <span className='span bas'>o</span>
                </h4>
            <p className='texto'>
            Socket.io, Docker, Mocha, Chai, Jasmine
            </p>
        </Col>
        <Col  xs={24} lg={12} style={{padding:'30px'}} className='show lottie'>
            <Lottie options={{...defaultOption,animationData:Animacion}} />
            <img src={react} className='img-skill react'></img>
            <img src={redux} className='img-skill redux'></img>
            <img src={psql} className='img-skill psql'></img>
            <img src={mongo} className='img-skill mongo'></img>
            <img src={sass} className='img-skill sass'></img>
            <img src={webpack} className='img-skill webpack'></img>
            <img src={firebase} className='img-skill firebase'></img>
            <img src={node} className='img-skill node'></img>
            <img src={git} className='img-skill git'></img>
            <img src={js} className='img-skill js'></img>
        </Col>
   </Row>
    </>)
}