import { Inter } from 'next/font/google';
import NavBar from '@/components/navbar';
const inter = Inter({ variable: '--inter-font', subsets: ['latin'] });
import styles from '@/styles/About.module.css';
import Footer from '@/components/footer';

export default function About(){
    return (<main className={inter.variable}>
        <div className={styles.content}>
        <NavBar/>
        <div className={styles.info}>
            <section className={styles.aboutSection}>
                <h2>Well, here we go...</h2>
                <div style={{textAlign:"justify"}}>
                    Ok, i am a brazilliam programmer capable of resolving your problems. I am always looking for challenges, try me if you dare.
                    I have experience with PHP, Laravel, MySQL, Python. More recently i've be using PHP to re-build an ERP.
                    About 2 years of professional programming on local industry, in this timespan, databases, scraping, websites and other software challenges were in my daily routine.
                </div>
            </section>
            <Footer/>
        </div>
        </div>
      </main>);
}