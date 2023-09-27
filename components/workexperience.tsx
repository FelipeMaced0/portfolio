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
            <div className="flex flex-col gap-3 w-[400px] bg-[#4D4E4E] text-[#9C9BC8] p-2 m-2 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">

                <div className="text-xl font-bold text-white">
                    <span>{props.companyName}</span>
                </div>
                <div className='flex gap-3'>
                    <span>{props.period.start?.month.toString().padStart(2, "0")}/{props.period.start?.year}</span>
                    -
                    <span>{props.period.end ? props.period.end?.month.toString().padStart(2, "0") + "/" + props.period.end?.year : "now"}</span>
                </div>

            </div>
        </a>
    );
}