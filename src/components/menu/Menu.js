import React from 'react'

import './Menu.css'

const Menu = () => (
    <nav class="app-menu">
        <ul className="app-menu__list">
            <li className="app-menu__item">
                <a href="#id-sobre" className="app-menu__link">
                    Início
                </a>
            </li>
            <li className="app-menu__item">
                <a href="#id-sobre" className="app-menu__link">
                    Sobre
                </a>
            </li>
            <li className="app-menu__item">
                <a href="#id-sobre" className="app-menu__link">
                    Projetos
                </a>
            </li>
        </ul>
    </nav>
)

export default Menu

