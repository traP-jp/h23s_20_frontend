import { Combobox,Pane } from 'evergreen-ui'
import { User } from '../types/user'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import axios from "axios"

export default function UserID({users}:{users:string[]}) {
   
    const router = useRouter()

    const handleSelect=(userId:string)=>{
    router.push(userId)
    }

    return (
        <Pane position="fixed" top="60px" right="10px">
            <Combobox
            openOnFocus
            items={users}
            onChange={(selected) => handleSelect(selected)}
            placeholder="userID"
            />
        </Pane>
    )
  }


// page move ->
// const router= useRouter()
// router.push("sample.com/Orange")