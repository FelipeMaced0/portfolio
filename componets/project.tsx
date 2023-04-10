import styles from '@/styles/Home.module.css';

interface ProInfo {
    full_name: String;

}

export default function Project(props: any) {

    return (
        <a href={props.url}>
            <div className={styles.card}>
                <div className={styles.projectname}>
                    {props.name}
                </div>
                <div className={styles.projectdesc}>
                    <p>{props.description}</p>
                </div>
            </div>
        </a>
    );
}