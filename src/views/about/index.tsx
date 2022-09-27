import React, { memo } from "react";

type indexprops = {
    name: string,
    onClick: (event: React.MouseEvent<HTMLElement>) => void,
    isValid: boolean,
}
const index = memo((props: indexprops) => {
    console.log("about render")
    return (
        <div className="">
            {props.name} <br />
            <button onClick={props.onClick}>Click Me !</button>
        </div>
    )
}, (prev, next) => prev.name == next.name)



export default index;