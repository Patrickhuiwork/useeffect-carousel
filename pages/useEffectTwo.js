import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '../styles/UseEffectTwo.module.css'


export default function useEffectTwo() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, [])

    return(
        <main className={styles.main}>
            <Link href="/" className="link">Home</Link>
            <div>
                <h1>useEffectTwo</h1>
            </div>
            <div>
                {number}
            </div>
        
        </main>
    )
}