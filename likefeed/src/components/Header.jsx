import styles from "./Header.module.css"

import likelogo from '../assets/like-logo.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={likelogo} alt="Logotipo do Like"/>
        </header>
    )
}