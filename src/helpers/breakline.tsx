import React from "react";

interface Props{
    str?:string
}

const breakline = (str:string):JSX.Element[] => {
    const arr = str.split("\n")
    return arr.map(e => {
        return (<div key={e}>{e}<br /><br /></div>)
    })

}


const Breakline:React.FC<Props> = ({str}) => {
    return (
        <>
        {typeof str === "string" ? breakline(str) : " "}
        </>
    )
}

export default Breakline;