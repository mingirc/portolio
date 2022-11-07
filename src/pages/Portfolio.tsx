import React from "react";
import PageContainer from "./PageContainer";
import PortfolioCards from "../components/PortfolioCards/PortfolioCards";


const Portfolio:React.FC = () => {
    return(
        <PageContainer theme="dark" id="portfolio" name="portfolio">
            <span className="verticalCaptionText darkCaption">Portfolio</span>
            <span className="horizontalCaptionText darkCaption">Portfolio</span>
            <PortfolioCards />
        </PageContainer>
    )
}

export default Portfolio;