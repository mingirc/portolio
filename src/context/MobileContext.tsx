import React, {createContext, useState} from 'react';

interface Props {
    children: React.ReactNode;
  }
  

export const MobileContext = createContext<any>({mobile:true, undefined});

export const MobileProvider: React.FC<Props> = ({children}:Props) => {
    
    const [mobile, setMobile] = useState(false);

    return <MobileContext.Provider value={{mobile, setMobile}}>
        {children}
    </MobileContext.Provider>
}
