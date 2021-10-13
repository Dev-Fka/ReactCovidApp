import React from 'react'
import CovidInfo from './CovidInfo'
import Loading from './Loading'


const Covid19 = ({loading ,ınfo}) => {
    if(loading){
        return <Loading/>
    }else{
        return (
            <CovidInfo ınfo={ınfo}/>
        ) 
    }
   
}

export default Covid19