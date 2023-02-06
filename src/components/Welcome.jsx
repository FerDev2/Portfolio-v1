import React from 'react'
import '../styles/port.css'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'
import Contact from './Contact'
import { Link } from 'react-scroll'
import { useInView } from 'react-intersection-observer'


export default function Welcome() {


  /*PROCESO DE DETECCION DE VIEWPORT CON 'INTERSERCTIONOBSERVER' E INDICADOR
  DE ESTADO EN NAVBAR */

  /*
  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  console.log('myElementIsVisible',myElementIsVisible)
  useEffect(() => {
      const oberver = new IntersectionObserver((entries) =>{
        const entry = entries[0];
        setMyElementIsVisible(entry.isIntersecting)

      })
      oberver.observe(myRef.current);
  
  },[])*/

  const {ref: componentRef, inView: componentIsVisible } = useInView();
  
  return (
    <>

    <main className='containt-navbar'>
        <div id='Home'><Home></Home></div>
        <div id='Skills'><Skills></Skills></div>
        <div id='Projects'><Projects></Projects></div>
        <div id='Contact'><Contact></Contact></div>
    </main>
    
    </>
  )
}
