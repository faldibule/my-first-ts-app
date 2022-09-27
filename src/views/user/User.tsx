import React, { LegacyRef, useEffect, useRef, useState } from 'react'
import axios from 'axios'

type userType = {
    body?: string
    comment?: { 
        body?: string,
        date?: string,
        _id?: string,
    }[]
    date?: string
    _id?: string
}[]

const User = () => {
    const [user, setUser] = useState<userType>([])

    const getData = async () => {
        const res = await axios.get('https://wedding-api-2.herokuapp.com/post/fetch?page=1') 
        console.log(res.data)
        setUser([...res.data.data.data])
    }

    const clearData = () => {
        setUser([])
    }
    useEffect(() => {
        getData()
        // setTimeout(() => {
        //     clearData()
        // }, 2000);
        
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        console.log(ref.current.test.value)
        console.log(ref.current.body.value)
        // setUser([
        //     ...user,
        //     {
        //         _id: Date.now().toString(),
        //         body: value,
        //         comment: [],
        //         date: Date.now().toString()
        //     }
        // ])
    }

    const ref = useRef<any>({
        test: '',
        body: '',
    });
    return (
        <div className="">
            <input ref={el => ref.current.test = el} type="text" />
            <input ref={el => ref.current.body = el} type="text" />
            <button onClick={handleClick}>Add comment</button>

            {user.map(v => {
                return (
                    <div key={v._id}>
                        <p>{v.body}</p>
                    </div>
                )
            })}
            
        </div>
    )
}


export default User