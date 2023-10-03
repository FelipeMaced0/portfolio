import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (
        <header className="sticky-0 w-full flex justify-between items-center px-3 bg-[#2A2A2A]">
            <nav className="h-14 flex flex-row justify-between items-center gap-x-4">
                <Link className='hover:border-b-2' href='/'>Home</Link>
                <Link className='hover:border-b-2' href='/about'>About</Link>
                <Link className='hover:border-b-2' href='/contact'>Contact</Link>
            </nav>
            <span className='text-xl min-[400px]:text-2xl font-bold'>Felipe Macedo</span>
            <div className='hidden sm:flex gap-3 '>
                <Image alt="php icon" width={35} height={35} style={{filter:"invert(100%) brightness(100%) contrast(100%)"}} src="/php.svg"/>
                <Image alt="laravel framework icon" width={35} height={35} style={{filter:"invert(100%) brightness(100%) contrast(100%)"}} src="/laravel.svg"/>
                <Image alt="python icon" width={35} height={35} style={{filter:"invert(100%) brightness(100%) contrast(100%)"}} src="/python.svg"/>
                <Image alt="mysql framework icon" width={35} height={35} style={{filter:"invert(100%) brightness(100%) contrast(100%)"}} src="/mysql.svg"/>
            </div>
        </header>

    );
}