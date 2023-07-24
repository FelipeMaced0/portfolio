import styles from '@/styles/Home.module.css';

type work = {
    url: string,
    companyName: string,
    period: {
        start: { month: number, year: number },
        end: { month: number, year: number }
    }
}

export default function WorkExperience(props: work) {

    return (
        <a href={props.url}>
            <div className={styles.card}>

                <div className={styles.projectname}>
                    <span>{props.companyName}</span>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                    <span>{props.period.start?.month.toString().padStart(2, "0")}/{props.period.start?.year}</span>
                    -
                    <span>{props.period.end ? props.period.end?.month.toString().padStart(2, "0") + "/" + props.period.end?.year : "now"}</span>
                </div>

            </div>
        </a>
    );
}