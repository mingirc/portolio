import React, {useContext} from "react";
import { MobileContext } from "../context/MobileContext";
import SvgSelector from "../components/svg/SvgSelector";
import externalClick from "../helpers/externalClickHelper";
import Button from "./Button";

interface Props{
    styles:any
    type: "verticalbar" | "footer" | "mobile"
    line?: boolean
    resume?:boolean
}
const SocialMedia:React.FC<Props> = ({styles, type, line, resume}:Props) => {

    const {mobile} = useContext(MobileContext);

    const determineType = ():string => {
        if(type === "verticalbar"){
            return "smb"
        } else if(type === "footer"){
            return "smf"
        } else if(type === "mobile"){
            return "mobile"
        }
        else{
            return ""
        }
    }    

    return(
        <div className={`${styles[`${determineType()}Container`]} ${mobile && styles.mobile}`} id="smbWrapper">
            <div className={styles[`${determineType()}InnerContainer`]}>
                <div className={styles[`${determineType()}SvgWrapper`]} onClick={() => externalClick("https://www.linkedin.com/in/cemal-mingir", "_blank")}>
                    <SvgSelector opt="linkedin" />
                </div>
                <div className={styles[`${determineType()}SvgWrapper`]} onClick={() => externalClick("https://github.com/mingirc", "_blank")}>
                    <SvgSelector opt="github" />
                </div>
                <div className={styles[`${determineType()}SvgWrapper`]} onClick={() => externalClick("https://codepen.io/mingirc", "_blank")}>
                    <SvgSelector opt="codepen" />
                </div>
                <div className={styles[`${determineType()}SvgWrapper`]} onClick={() => externalClick("https://dribbble.com/mingirc", "_blank")}>
                    <SvgSelector opt="dribbble" />
                </div>
                <div className={styles[`${determineType()}SvgWrapper`]} onClick={() => externalClick("mailto:cemal.mingir@roylimited.co.uk", "_blank")}>
                    <SvgSelector opt="email" id="smbEmail"/>
                </div>
            </div>
            {line && <div className={styles[`${determineType()}Line`]} />}
            {resume && (                 
            <div className={styles.mobileSvgWrapper}>
                <Button type="button" buttonLabel="Resume" buttonType="button button-small button-mobile" onClick={() => externalClick('../../assets/Cemal_Mingir_Resume.pdf', "self")} />
            </div>
            )}
        </div>
    )
}

export default SocialMedia;