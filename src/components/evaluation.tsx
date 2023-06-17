import React, { useState } from "react";
import { Evaluation } from '@/types/evaluation'
import styles from './evaluation.module.css'
import {PointType} from "@/types/evaluation"
import axios from "axios"

export default function Evaluation(): JSX.Element {
  const [hidebutton, setHidebutton]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(true as boolean);

  const buttonPush=async(type:PointType)=>{
      const requestData:Evaluation={
        point_type:type
      }
      console.log(requestData)
      const res=await axios.put("http://localhost:8000/me/config",requestData)
  }

  return (
    <React.Fragment>
      <div className="evaluation">
        <button className={styles.plusbutton} onClick={() => toggle()} >
          +
        </button>
        {hidebutton ? <div>
            <button className={styles.button1} onClick={()=>buttonPush("one")}>👍</button>
            <button className={styles.button2}  onClick={()=>buttonPush("three")}>👍</button>
            <button className={styles.button3} onClick={()=>buttonPush("five")}>👍</button>
        </div>:null}
      </div>
    </React.Fragment>
  );
  function toggle(): void {
    setHidebutton(!hidebutton);
  }
}