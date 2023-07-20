import styles from '@/styles/Home.module.css';
import Image from 'next/image';
export default function Project(props: any) {

    return (
        <a href={props.url}>
            <div className={styles.card} style={{ gap: "10px" }}>
                <div>
                    <div className={styles.projectname}>
                        {props.name}
                    </div>
                    <div style={{}}>
                        <div className={styles.projectdesc}>
                            <p>{props.description}</p>
                        </div>
                        <div>
                            <span>Tech: {props.language}</span>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"end"}}><Image width={25} height={25} alt="colorized-github-logo" src="/../public/github.png" /></div>
            </div>
        </a>
    );
}