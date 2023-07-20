import { Inter } from 'next/font/google';
import NavBar from '@/components/navbar';
const inter = Inter({ variable: '--inter-font', subsets: ['latin'] });
import styles from '@/styles/About.module.css';
import Image from 'next/image';
import Footer from '@/components/footer';
import ContactInfo from '@/components/contactInfo';
export default function Contact(){
    
    return (<main className={inter.variable}>
        <div className={styles.content}>
        <NavBar/>
        <div className={styles.info}>
            <section className={styles.aboutSection}>
                <h2>You can reach me through</h2>
                <div>
                    Fill Free to make contact and research
                </div>
                <ContactInfo/>
            </section>
            <Footer/>
        </div>
        </div>
      </main>);
}