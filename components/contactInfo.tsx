import Image from "next/image";

interface props {style?:object}
export default function ContactInfo(props:props) {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "3vw" , ...props.style}}>
            <a href="https://github.com/FelipeMaced0" target="_blank"><Image width={50} height={50} alt="colorized-github-logo" src="/../public/github.png" /></a>
            <a href="https://www.linkedin.com/in/felipemaced0/" target="_blank"><Image width={50} height={50} alt="colorized-linkedin-logo" src="/../public/linkedin.png" /></a>
            <a href="mailto:fmacedo746@gmail.com?subject=Job Oportunity from xxxxx&body=Would you like to do an interview"><Image width={50} height={50} alt="colorized-gmail-logo" src="/../public/gmail.png" /></a>
        </div>
    );
}