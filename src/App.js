import React, {useState} from "react";
import { hot } from 'react-hot-loader/root';
import { Layout } from 'antd';
import { HomeOutlined, UserOutlined, DingtalkOutlined,FolderOpenOutlined,ReadOutlined,MailOutlined } from '@ant-design/icons';
import Descripcion from '../src/react/Descripcion'
import Home from '../src/react/home'
import Skills from '../src/react/skill'
import Educacion from '../src/react/Educacion'
import Contacto from '../src/react/Contacto'
import Projects from '../src/react/Projects'

const { Header, Footer, Content,Sider } = Layout;


const App = ()=> {
  const [step , setStep] = useState(1)
  
    return (
      <>
      <Layout>
        <Sider
        className='sidebar'
        width='10vh'
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        >
          <div className='icon-content'>
            <div className='icon-sider' onClick={()=>setStep(1)}>
            <HomeOutlined />
            <span>Home</span>
            </div>
            <div className='icon-sider' onClick={()=>setStep(2)}>
            <UserOutlined />
            <span>About me</span>
            </div>
            <div className='icon-sider' onClick={()=>setStep(3)}>
            <DingtalkOutlined />
            <span>Skills</span>
            </div>
            <div className='icon-sider' onClick={()=>setStep(4)}>
            <FolderOpenOutlined />
            <span>Projects</span>
            </div>
            <div className='icon-sider' onClick={()=>setStep(5)}>
            <ReadOutlined />
            <span>Education</span>
            </div>
            <div className='icon-sider' onClick={()=>setStep(6)}>
            <MailOutlined />
            <span>Contact me</span>
            </div>
          </div>

        </Sider>
      <Layout>
        <Content
        className='contenedor'
        >
          {step == 1 && 
          <Home setStep={setStep}/>}
           {step == 2 && 
          <Descripcion/>}
           {step == 3 && 
          <Skills/>}
          {step == 4 && 
          <Projects/>}
           {step == 5 && 
          <Educacion/>}
          {step == 6 && 
          <Contacto/>}

        </Content>
      </Layout>
    </Layout>
     </>
    );
  
}

export default hot(App);