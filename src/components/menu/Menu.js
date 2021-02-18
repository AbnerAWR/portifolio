import React from 'react'

import './Menu.css'

const Menu = () => (
    <nav class="app-menu">
        <ul className="app-menu__list">
            <li className="app-menu__item">
                <a href="#id-sobre" className="app-menu__link">
                    Home
                </a>
            </li>
            <li className="app-menu__item">
                <a href="#id-sobre" className="app-menu__link">
                    Contact
                </a>
            </li>
            <li className="app-menu__item">
                <a href="#id-sobre" className="app-menu__link">
                    About
                </a>
            </li>
        </ul>
    </nav>
)

export default Menu

