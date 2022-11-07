import React from "react";
import {ReactComponent as Codepen} from "../../assets/svg/socialMedia/codepen.svg";
import {ReactComponent as Linkedin} from "../../assets/svg/socialMedia/linkedin.svg";
import {ReactComponent as Dribbble} from "../../assets/svg/socialMedia/dribbble.svg";
import {ReactComponent as Github} from "../../assets/svg/socialMedia/github.svg";
import {ReactComponent as Email} from "../../assets/svg/socialMedia/email.svg";
import {ReactComponent as PortfolioLinkYoutube} from "../../assets/svg/portfolioCards/Youtube.svg";
import {ReactComponent as PortfolioLinkGithub} from "../../assets/svg/portfolioCards/Github.svg";
import {ReactComponent as PortfolioLinkExternalLink} from "../../assets/svg/portfolioCards/ExternalLink.svg";
import {ReactComponent as Angular} from "../../assets/svg/stack/angular.svg";
import {ReactComponent as Aws} from "../../assets/svg/stack/aws.svg";
import {ReactComponent as Bootstrap} from "../../assets/svg/stack/bootstrap.svg";
import {ReactComponent as Cloudinary} from "../../assets/svg/stack/cloudinary.svg";
import {ReactComponent as Css3} from "../../assets/svg/stack/css3.svg";
import {ReactComponent as Django} from "../../assets/svg/stack/django.svg";
import {ReactComponent as Dotnet} from "../../assets/svg/stack/dotnet.svg";
import {ReactComponent as Eslint} from "../../assets/svg/stack/eslint.svg";
import {ReactComponent as Formik} from "../../assets/svg/stack/formik.svg";
import {ReactComponent as Html5} from "../../assets/svg/stack/html5.svg";
import {ReactComponent as Javascript} from "../../assets/svg/stack/javascript.svg";
import {ReactComponent as Materialui} from "../../assets/svg/stack/materialui.svg";
import {ReactComponent as Mssql} from "../../assets/svg/stack/mssql.svg";
import {ReactComponent as Postgresql} from "../../assets/svg/stack/postgresql.svg";
import {ReactComponent as Python} from "../../assets/svg/stack/python.svg";
import {ReactComponent as ReactSvg} from "../../assets/svg/stack/react.svg";
import {ReactComponent as Redux} from "../../assets/svg/stack/redux.svg";
import {ReactComponent as Sass} from "../../assets/svg/stack/sass.svg";
import {ReactComponent as Stripe} from "../../assets/svg/stack/stripe.svg";
import {ReactComponent as Typescript} from "../../assets/svg/stack/typescript.svg";
import {ReactComponent as Arrow} from "../../assets/svg/Arrow.svg";

import "../../styles/abstract/_svgEffects.scss";

interface Props{
  opt: string | undefined
  className?: string | undefined
  id?:string
}

const selectHandler = (opt:string | undefined, className: string | undefined, id:string | undefined) => {
    switch(opt){
    case "codepen":{
      return (
        <Codepen className={className || "svgGrayToYellow-stroke"} />
      )
    }
    case "linkedin":{
      return (
        <Linkedin className={className || "svgGrayToYellow-stroke"} />
      )
    }
    case "dribbble":{
      return(
        <Dribbble className={className || "svgGrayToYellow-fill"} />
      )
    }
    case "github":{
      return(
        <Github className={className || "svgGrayToYellow-stroke"} />
      )
    }
    case "email":{
      return(
        <Email className={className || "svgGrayToYellow-fill"} id={id} />
      )
    }
    case "portfolioLink_github":{
      return(
        <PortfolioLinkGithub className={className || "svgDarkBlueToLightBlue-stroke"} />
      )
    }
    case "portfolioLink_externalLink":{
      return(
        <PortfolioLinkExternalLink className={className || "svgDarkBlueToLightBlue-stroke"} />
      )
    }
    case "portfolioLink_youtube":{
      return(
        <PortfolioLinkYoutube className={className || "svgDarkBlueToLightBlue-fill"} />
      )
    }
    case "angular":{
      return(
        <Angular className={className} />
      )
    }
    case "aws":{
      return(
        <Aws className={className} />
      )
    }
    case "bootstrap":{
      return(
        <Bootstrap className={className} />
      )
    }
    case "cloudinary":{
      return(
        <Cloudinary className={className} />
      )
    }
    case "css":{
      return(
        <Css3 className={className} />
      )
    }
    case "django":{
      return(
        <Django className={className} />
      )
    }
    case "dotnet":{
      return(
        <Dotnet className={className} />
      )
    }
    case "eslint":{
      return(
        <Eslint className={className} />
      )
    }
    case "formik":{
      return(
        <Formik className={className} />
      )
    }
    case "html":{
      return(
        <Html5 className={className} />
      )
    }
    case "js":{
      return(
        <Javascript className={className} />
      )
    }
    case "materialui":{
      return(
        <Materialui className={className} />
      )
    }
    case "mssql":{
      return(
        <Mssql className={className} />
      )
    }
    case "postgresql":{
      return(
        <Postgresql className={className} />
      )
    }
    case "python":{
      return(
        <Python className={className} />
      )
    }
    case "react":{
      return(
        <ReactSvg className={className} />
      )
    }
    case "redux":{
      return(
        <Redux className={className} />
      )
    }
    case "sass":{
      return(
        <Sass className={className} />
      )
    }
    case "stripe":{
      return(
        <Stripe className={className} />
      )
    }
    case "ts":{
      return(
        <Typescript className={className} />
      )
    }
    case "arrow":{
      return(
        <Arrow className={className} />
      )
    }
    default:{
      return <></>
    }
    case undefined:{
      return <></>
    }
  }
}

const SocialMediaSvg:React.FC<Props> = ({opt, className, id}:Props) => {
  return <>{selectHandler(opt, className, id)}</>

}

export default SocialMediaSvg;