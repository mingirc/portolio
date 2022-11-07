import React from "react";
import SvgSelector from "../svg/SvgSelector";
import externalClick from "../../helpers/externalClickHelper";
import styles from "../../styles/component/linkElement.module.scss";

interface Link{
    name: string
    to: string
}

interface Props{
    links:Link[]
}


const listHandler = (links: Link[]):JSX.Element[] => {
    return links.map((link: Link) => {
        return <div key={link.name} className={styles.svgLinkWrapper} onClick={() => externalClick(link.to, "_blank")}><SvgSelector opt={link.name} /></div>
    })

}

const LinkElement:React.FC<Props> = ({links}:Props) => {
    return(
        <div className={styles.linkContainer}>
                {listHandler(links)}
        </div>
    )
}

export default LinkElement