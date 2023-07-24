import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </nav>
            <span style={{fontSize:"1.5rem", fontWeight:'bold'}}>Felipe Macedo</span>
            <div style={{display: 'flex', gap: "10px"}}>
                <Image alt="laravel framework icon" width={35} height={35} style={{filter:"invert(100%) brightness(100%) contrast(100%)"}} src="/php.svg"/>
                <Image alt="laravel framework icon" width={35} height={35} style={{filter:"invert(100%) brightness(100%) contrast(100%)"}} src="/laravel.svg"/>
                <Image alt="laravel framework icon" width={35} height={35} style={{filter:"invert(100%) brightness(100%) contrast(100%)"}} src="/python.svg"/>
                <Image alt="laravel framework icon" width={35} height={35} style={{filter:"invert(100%) brightness(100%) contrast(100%)"}} src="/mysql.svg"/>
            </div>
        </header>

    );
}