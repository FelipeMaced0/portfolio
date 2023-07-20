import styles from '@/styles/Home.module.css';

export default function WorkExperience(props: any) {
    
    return (
        <a href={props.url}>
            <div className={styles.card}>
                <div className={styles.projectname}>
                    <span>{props.companyName}</span>
                    <div>
                    <span>{props.period.start?.month}/{props.period.start?.year}</span>
                    -
                    <span>{props.period.end ? props.period.end?.month+"/"+props.period.end?.year : "now"}</span>
                    </div>
                    
                </div>
                <div className={styles.projectdesc}>
                    <p>{props.description}</p>
                </div>
                <div>
                    <div>
                    {props.techStack}
                    </div>
                </div>
            </div>
        </a>
    );
}