import Link from "next/link";
import Image from "next/image";
import delfinario from "../../../public/images/delfinario.jpg";

export default function ActivityCard({id, title,categoria, route}: {id: number,title: string,categoria: string, route: string}) {
    return (
        <Link  href={`/quehacer/${categoria}/${route}`}  className={'flex flex-col basis-full md:basis-1/4  my-2 pt-3 px-3 md:pe-3 rounded-md'}>
            <Image src={delfinario.src} alt={"Source"} width={130} height={100}
                   className=" w-full object-cover rounded-lg "/>
            <span
                  className={"hover:ms-2 transition-all duration-300 text-2xl font-bold font-karla"}>{title}</span>
        </Link>
    )
}