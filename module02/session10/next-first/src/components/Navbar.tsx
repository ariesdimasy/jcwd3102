import Link from "next/link"

export default function Navbar(){
    return (<nav>
        <Link href="/"> Home </Link> | 
        <Link href="/service"> Service </Link> | 
        <Link href="/service/detail"> Service Detail </Link>
    </nav>)
}