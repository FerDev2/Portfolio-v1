import React from 'react'
import '../styles/port.css'
import header from '../styles/header.module.css'
import { Link } from 'react-scroll'

export default function Home() {

  const menuItems = [
    {
      id: 1,
      title: 'Home',
      data: 'Home',
      cla: header.active,

    },
    {
      id: 2,
      title: 'Skills',
      data: 'Skills',
      cla: '',
    },
    {
      id: 3,
      title: 'Projects',
      data: 'Projects',
      cla: '',
    },
    {
      id: 5,
      title: 'Contact',
      data: 'Contact',
      cla: '',
    }

  ];


  return (
    <div className={header.port}>
      <header>
        <nav className={header.head}>
          <h1>PORTFOLIO</h1>

        <ul className={header.options}>
          {menuItems.map((menu) => (
            <li className={menu.cla}>
              <Link to={menu.title} smooth={true} offset={0} duration={500}>{menu.title}</Link>
            </li>
          ))}
        </ul>
        
  
        </nav>
      </header>
  
      <section className={header.info_home}>
        <div className={header.info}>
          <h1>HELLO, WORLD</h1>
          <span>I´m Fernando Varas</span>
          <p>I'm front end developer jr with expirence in responsive design and
            creation of landing page.
          </p>

          <a className={header.button_cv} href="./CV_FERNANDO VARAS_2023.pdf" download >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            DESCARGAR CV</a>
        </div>

        <div className={header.info2}>
          <div className={header.perfil}></div>
        </div>
  
      </section>

    </div>
  )
}
