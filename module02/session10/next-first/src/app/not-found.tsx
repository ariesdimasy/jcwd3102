import Link from "next/link"

export default function NotFound(){
    return (<div>
        <h1> yaaah gak ketemu </h1>
        <Link href={'/'}> Back to Home </Link>
    </div>)
}