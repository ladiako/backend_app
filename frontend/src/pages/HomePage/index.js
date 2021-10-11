import React, { useState } from "react";
import Sidemenu from "./SideMenu";
import Routes from "../../routes";
//<Preloader />

export default function HomePage(props) {
    const [inactive, setInactive] = useState(false);
    return (
       
        <>    
            <Sidemenu onCollapse={  (inactive) =>{
              console.log(inactive);
              setInactive(inactive);}
             
            }/>
            <div className={`container ${inactive ? "inactive" : ""}`}>
              <Routes />
            </div>
            
       </>
            )

}