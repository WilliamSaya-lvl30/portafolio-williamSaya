import React,{useState} from 'react'
import { Row, Col,Carousel, Modal } from 'antd';
import omdb1 from '../../projects/omdb1.png'
import omdb2 from '../../projects/omdb2.png'
import omdb3 from '../../projects/omdb3.png'
import omdb4 from '../../projects/omdb4.png'
import ecomerce1 from '../../projects/ecomerce1.png'
import ecomerce2 from '../../projects/ecomerce2.png'
import ecomerce3 from '../../projects/ecomerce3.png'
import ecomerce4 from '../../projects/ecomerce4.png'
import ecomerce5 from '../../projects/ecomerce5.png'
import portafolio1 from '../../projects/portafolio1.png'
import portafolio2 from '../../projects/portafolio2.png'
import portafolio3 from '../../projects/portafolio3.png'
import itesa1 from '../../projects/itesa1.png'
import itesa2 from '../../projects/itesa2.png'
import itesa3 from '../../projects/itesa3.png'
import itesa4 from '../../projects/itesa4.png'
import itesa5 from '../../projects/itesa5.png'
import itesa6 from '../../projects/itesa6.png'
import itesa7 from '../../projects/itesa7.png'


const projects=[{
    title: "Talentos Itesa",
    fotos:[itesa1,itesa2,itesa3,itesa4,itesa5,itesa6,itesa7],
    link:'https://talentos-itesa.web.app/login'
},
{
    title: "Ecommerce",
    fotos:[ecomerce1,ecomerce2,ecomerce3,ecomerce4,ecomerce5],
    link:'https://www.linkedin.com/feed/update/urn:li:activity:6740473302541762560/'

},
{
    title: "OMDB",
    fotos:[omdb1,omdb2,omdb3,omdb4],
    link:'https://www.linkedin.com/feed/update/urn:li:activity:6740471037533724672/'
},
{
    title: "Portafolio fotográfico",
    fotos:[portafolio1,portafolio2,portafolio3],
    link:'https://williamsaya-lvl30.github.io/portafolio-fotografico/'
}]

export default ()=>{

    const [show , setShow] = useState(false)
    const [index , setIndex] = useState(0)

    const verMas=(e)=>{
        setIndex(e.target.value)
        setShow(true)
    }

    const back =()=>setShow(false)
 
    return (<>
   <Row  className='rowClass' align='middle' justify='center' >
        <Col  xs={24} lg={12} className='show proj'>
                <div className="ih-item square effect6 from_top_and_bottom" key='0'><span>
                    <div className="img"><img src={itesa7} alt="img"/></div>
                    <div className="info">
                    <h3>Talentos Itesa</h3>
                    <p>Portal para centralizar toda la información relevante para los perfiles que trabajan en proyectos freelance con Itesa. <br/>
                    {/* Tegnologías : React.js - Recoil.js - Firebase Services. */}
                    </p>
                    <button className='boton-vm' onClick={verMas}  value={0}>
                        Ver mas...
                    </button>
                </div></span></div>
        </Col>
        <Col   xs={24} lg={12} className='show proj'>
                <div className="ih-item square effect6 from_top_and_bottom"><span>
                    <div className="img"><img src={ecomerce1} alt="img"/></div>
                    <div className="info">
                    <h3>Ecommerce</h3>
                    <p>Proyecto académico grupal donde se desarrolló un ecommerce de utensilios gastronómicos utilizando metodologías ágiles como SCRUM. <br/>
                    {/* Tegnologías : React.js - Redux - Node.js - Express.js - Postgres - SQL. */}
                    </p>
                    <button className='boton-vm ' onClick={verMas} value={1}>
                        Ver mas...
                    </button>
                </div></span></div>
        </Col>
        <Col   xs={24} lg={12} className='show proj'>
                <div className="ih-item square effect6 from_top_and_bottom"><span>
                    <div className="img"><img src={omdb4} alt="img"/></div>
                    <div className="info">
                    <h3>OMDB</h3>
                    <p>Interfaz que consume la Open Movie Database, Busca y muestra películas/series con toda su información, registra usuarios y guarda sus películas favoritas. <br/>
                    {/* Tegnologías : React.js - Redux - Node.js - Express.js - Postgres - SQL. */}
                    </p>
                    <button className='boton-vm ' onClick={verMas} value={2}>
                        Ver mas...
                    </button>
                </div></span></div>
        </Col>
        <Col xs={24} lg={12}   className='show proj'>
                <div className="ih-item square effect6 from_top_and_bottom"><span>
                    <div className="img"><img src={portafolio1} alt="img"/></div>
                    <div className="info">
                    <h3>Portafolio fotográfico</h3>
                    <p> Proyecto personal donde desarrolló un portafolio fotográfico dinámico utilizando solamente html, css, y javascript. <br/>
                    {/* Tegnologías : HTML - CSS - JavaScript. */}
                    </p>
                    <button className='boton-vm show' onClick={verMas} value={3}>
                        Ver mas...
                    </button>
                </div></span></div>
        </Col>
        <Modal
                title={projects[index].title}
                centered
                visible={show}
                onCancel={back}
                width={1000}
                bodyStyle={{backgroundColor:"#151513" }}
                footer={[
                    <button className='boton-modal' onClick={back} >
                        Regresar
                    </button>,
                    <button className='boton-modal' >
                        <a href={projects[index].link} target="_blank" rel="noopener noreferrer">
                        ir a la pagina
                        </a>
                    </button>
                ,
                ]}
                >
                    <Carousel autoplay  >
                    {projects[index].fotos.map((foto,i)=>{
                        return(<div key={i}>
                            <img src={foto} className='img-projects'/>
                        </div>)
                    })}
                    </Carousel>     
            </Modal>
   </Row>
    </>)
}