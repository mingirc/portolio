import React from "react";
import LinkElement from "./LinkElement";
import PortfolioCardElement from "./PortfolioCardElement";
import StackElement from "./StackElement";
import portfolio from "../../data/portfolio.json";
import styles from "../../styles/component/portfolioCards.module.scss";

const portfolioList = ():JSX.Element[] => {
    return portfolio.map((p, index) => {
        return (
            <PortfolioCardElement
            key={p.id}
            caption={p.caption}
            description={p.description}
            roles={p.roles}
            links={<LinkElement links={p.links} />}
            img={p.img}
            fallbackimg={p.fallbackimg}
            imgtype={p.imgtype}
            alt={p.alt}
            stack={<StackElement stack={p.stack} />}
            reverse={index%2 === 0 ? false : true}
            />
        )
    })
}

const PortfolioCards:React.FC = () => {
    return(
        <div className={styles.portfolioCards}>
            {portfolioList()}
        </div>
    )
}

export default PortfolioCards;