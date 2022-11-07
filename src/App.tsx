import React, {useEffect, useContext, Suspense} from "react";
import { MobileContext } from "./context/MobileContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./helpers/logoFader";

const Navigation = React.lazy(() => import("./components/Navigation/Navigation"))
const SocialMediaBar = React.lazy(() => import("./components/SocialMediaBar"))
const SocialMediaFooter = React.lazy(() => import("./components/SocialMediaFooter"))
const MobileNavigation = React.lazy(() => import("./components/Navigation/MobileNavigation"))


const App:React.FC = () => {

  const {mobile, setMobile} = useContext(MobileContext);

  // Ipad could be added.
  const mobileCheck = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  useEffect(() => {
    if(mobileCheck){
      setMobile(true)
    }else{
      setMobile(false)
      // logoFader();
      // animation();
    }

  })
  
  return(
    <>
        <Home />
        <About />
        <Portfolio />
        {/* <Lab /> */}
        <Contact />
        <Suspense>
          {mobile ?
            <>
              <MobileNavigation />
              <SocialMediaFooter />
            </>
            :
            <>
              <Navigation />
              <SocialMediaBar />
            </>
          }
        </Suspense>
        <Footer /> 
    </>
  )
}

export default App;