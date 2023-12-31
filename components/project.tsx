import Image from 'next/image';
export default function Project(props: any) {

    return (
        <a href={props.url}>
            <div className="w-[330px] min-[925px]:w-[370px] flex flex-col gap-3 bg-[#4D4E4E] text-[#9C9BC8] p-2 m-2 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <div>
                    <div className="uppercase font-bold text-white">
                        {props.name}
                    </div>
                    <div>
                        <div>
                            <p>{props.description}</p>
                        </div>
                        <div>
                            <span>Tech: {props.language}</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row w-full justify-end'><Image width={25} height={25} alt="colorized-github-logo" src="/github.png" /></div>
            </div>
        </a>
    );
}