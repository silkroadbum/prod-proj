import {useState} from "react";
import styles from './Counter.module.scss';

export const Counter = () => {
    const [count, setCounts] = useState(0);

    const increment = () => {
        setCounts(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className={styles.btn} onClick={increment}>increment</button>
        </div>
    )
}