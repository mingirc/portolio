import React from "react";
import PageContainer from "./PageContainer";
import LabCards from "../components/LabCards/LabCards";

const Lab:React.FC = () => {
    return(
        <PageContainer theme="light" id="lab" name="lab">
            <span className="verticalCaptionText darkCaption">Lab</span>
            <span className="horizontalCaptionText darkCaption">Lab</span>
            <LabCards />
        </PageContainer>
    )
}

export default Lab;