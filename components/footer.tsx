export default function Footer(){
    const date = new Date();

    return (
        
        <footer>Felipe Macedo - {date.toLocaleDateString('pt-BR')}</footer>
    );
}