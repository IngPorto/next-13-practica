import React, { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
    const [cartLenght, setCartLenght] = useState(0);
    return (
        <nav className={styles.mainNav}>
            <menu className={styles.navMenu}>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
            </menu>
            <div className={styles.navCart}>
                <img src='image/canasta.png'/>
                <p>Canasta ({cartLenght})</p>
            </div>
        </nav>
    )
}

export default Navbar;