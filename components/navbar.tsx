import styles from '@/styles/Home.module.css';

export default function NavBar() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
            </nav>
        </header>

    );
}