import React from "react";

interface Props{
    styles:any;
    id:string;
}

const Logo:React.FC<Props> = ({styles, id}:Props) => {

    return(
        <div className={styles.logoWrapper} id="logoWrapper">
            <div className={styles.logoInnerWrapper}>
                <div className={styles.logoLayer1}>
                    M
                </div>
                <div className={styles.logoLayer2}>
                    <div className={styles.logoLayer3}>
                        Cemal Mingir
                    </div>
                    <div className={styles.logoLayer4}>
                        Front-End Developer & UI/UX Designer
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Logo;