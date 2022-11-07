import React from "react";
import styles from "../../styles/component/stackElement.module.scss";
import SvgSelector from "../svg/SvgSelector";
import stackList from "../../data/stack.json";

interface Props{
    stack:string[]
}

interface IStackElement{
    name:string,
    displayName:string,
    imgName:string
}

const stackListHandler = (stack:string[]):(JSX.Element | null)[] => {

    let foundStack:IStackElement | undefined;

    return stack.map((s:string) => {
        foundStack = stackList.find(st => st.name === s)
        if(foundStack){ 
            return(
                <div className={styles.stackContainer} key={foundStack.name}>
                    <div className={styles.stackInnerContainer}>
                        <SvgSelector className={styles.stackImg} opt={foundStack.name} />
                        <span>{foundStack.displayName}</span>
                    </div>
                </div>
            )    
        }else{
            return null;
        }
    })
}

const StackElement:React.FC<Props> = ({stack}) => {
    return(
    <>{stackListHandler(stack)}</>
    )
}

export default StackElement;