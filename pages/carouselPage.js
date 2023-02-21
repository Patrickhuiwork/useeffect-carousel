import Carousel from "../components/carousel";
import styles from '/styles/useEffectOne.module.css'
import Link from "next/link";


export default function CaouselPage() {
    return(
        <main className={styles.main}>
            <Link href="/" className="link">Home</Link>
            <Carousel/>
        </main>
    )
}