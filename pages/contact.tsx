import { Inter } from 'next/font/google';
import NavBar from '@/components/navbar';
const inter = Inter({ variable: '--inter-font', subsets: ['latin'] });
import Footer from '@/components/footer';
import ContactInfo from '@/components/contactInfo';
export default function Contact(){
    
    return (<main className={inter.variable}>
        <div className="flex flex-col items-center justify-between h-screen max-h-full">
        <NavBar/>
        <div className="h-full flex flex-col items-center justify-around">
            <section className="flex flex-col justify-center w-80 h-96 gap-y-4">
                <h2>You can reach me through</h2>
                <div>
                    Feal Free to make contact and research
                </div>
                <ContactInfo/>
            </section>
            <Footer/>
        </div>
        </div>
      </main>);
}