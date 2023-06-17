import React, { useState } from "react";
import styles from './evaluation.module.css'
export default function Evaluation(): JSX.Element {
  const [hidebutton, sethidebutton]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(true as boolean);
  return (
    <React.Fragment>
      <div className="evaluation">
        <button className={styles.plusbutton} onClick={() => toggle()} >
          +
        </button>
        {hidebutton ? <div>
            <button className={styles.button1}>👍</button>
            <button className={styles.button2}>👍</button>
            <button className={styles.button3}>👍</button>
        </div>:null}
      </div>
    </React.Fragment>
  );
  function toggle(): void {
    sethidebutton(!hidebutton);
  }
}