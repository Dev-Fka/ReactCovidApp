import React from 'react'

const CovidInfo = ({ınfo}) => {
    if (ınfo.Country_text==="World") {
        return (
            <div className="bg-green-100 flex my-32 flex-col items-center py-4 px-5 rounded-md shadow-2xl">
                <p className="underline mt-2">PLEASE WRİTE CORRECT COUNTRY NAME.</p>
                <ul className="border-2 border-gray-900 rounded-sm shadow-2xl mt-4 px-6 py-1">
                    <li>
                       Name : {ınfo.Country_text}
                    </li>
                    <li>
                        Last Update :{ınfo["Last Update"]}
                    </li>
                    <li>
                        New Death : {ınfo["New Deaths_text"]}
                    </li>
                    <li>
                        New Case : {ınfo["New Cases_text"]}
                    </li>
                    <li>
                       Total Cases : {ınfo["Total Cases_text"]}
                    </li>
                    <li>
                        Total Death : {ınfo["Total Deaths_text"]}
                    </li>
                    <li>
                        Total Recovered : {ınfo["Total Recovered_text"]}
                    </li>
                </ul>
            </div>
        )
    }else{
        return(
        <>
            {ınfo.Country_text ? (
            <div className="bg-green-100 flex my-32 flex-col items-center py-4 px-5 rounded-md shadow-2xl">          
            <ul className="border-2 border-gray-900 rounded-sm shadow-2xl mt-6 px-6 py-1">
                <li>
                   Name: {ınfo.Country_text}
                </li>
                <li>
                    Last Update :{ınfo["Last Update"]}
                </li>
                    {ınfo["New Cases_text"] ? <li>New Case :{ınfo["New Cases_text"]} </li>: <li>New Case :ALREADY KNOWN DATA</li>}
                    {ınfo["New Deaths_text"] ?  <li>New Death : {ınfo["New Deaths_text"]}</li>: <li>New Death :ALREADY KNOWN DATA</li>}
                <li>
                    Total Case : {ınfo["Total Cases_text"]}
                </li>
                <li>
                    Total Death : {ınfo["Total Deaths_text"]}
                </li>
                <li>
                    Total Recovered : {ınfo["Total Recovered_text"]}
                </li>
            </ul>
            </div>) : (
                <></>
            )}
        </>
        )
    }
}

export default CovidInfo
