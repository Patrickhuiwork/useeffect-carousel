import Link from "next/link"
import { useEffect,useState } from "react"
import styles from '/styles/useEffectOne.module.css'

export default function useEffectOne() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    })

    return(
        <main className={styles.main}>
            <Link className="link" href="/">Home</Link>
            <div>
                <h1>useEffectOne</h1>
            </div>
            <div>
                {number}
            </div>
        
        </main>
    )
}