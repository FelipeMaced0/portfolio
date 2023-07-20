import styles from '@/styles/Home.module.css';
import Link from 'next/link';
export default function NavBar() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </nav>
        </header>

    );
}