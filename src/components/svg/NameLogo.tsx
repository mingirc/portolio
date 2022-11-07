import React from "react";

interface Props{
    id:string
    small?:boolean
    medium?:boolean
    light?:boolean
}

const NameLogo:React.FC<Props> = ({id, small, medium, light}) => {

       
        let fill = "#082453"
        if(light){
            fill = "#DEC8A3"
        }

        if(small){
            return(
                <svg id={id} xmlns="http://www.w3.org/2000/svg" width="150" height="27" viewBox="0 0 150 27">
                    <text id="NavigationLogo" transform="translate(0 18)" fill={fill} fontSize="20" fontFamily="WindSong-Medium, WindSong" fontWeight="500">
                        <tspan x="0" y="0">Cemal Mingir</tspan>
                    </text>
                </svg>
            )
        }
        else if(medium){
            return(
                <svg id={id} xmlns="http://www.w3.org/2000/svg" width="170" height="32" viewBox="0 0 225 42">
                    <text id="NavigationLogo" transform="translate(0 28)" fill={fill} fontSize="30" fontFamily="WindSong-Medium, WindSong" fontWeight="500">
                        <tspan x="0" y="0">Cemal Mingir</tspan>
                    </text>
                </svg>
            )
        }
        else{
            return(
                <svg id={id} className="topNavigationLogo" xmlns="http://www.w3.org/2000/svg" width="225" height="42" viewBox="0 0 225 42">
                    <text id="NavigationLogo" transform="translate(0 27)" fill={fill} fontSize="30" fontFamily="WindSong-Medium, WindSong" fontWeight="500">
                        <tspan x="0" y="0">Cemal Mingir</tspan>
                    </text>
                </svg>
            )
        }
}

export default NameLogo;