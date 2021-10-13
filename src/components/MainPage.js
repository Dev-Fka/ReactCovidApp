import axios from 'axios'
import React,{useState} from 'react'
import Covid19 from './Covid19'
import CovidImg from "../assets/covid.png"

const MainPage = () => {

    const [country,setCountry]=useState("")
    const [valCountry,setValCountry]=useState("")
    const [alert,setAlert]=useState(false)
    const [control,setControl]=useState("")


    const SearchCountry=()=>{
        if(country.length>0){
        setAlert(true)
        setTimeout(() => {
            axios.get(`https://covid-19.dataflowkit.com/v1/${country}`)
            .then(res=> {setValCountry(res.data); setAlert(false); setCountry("");setControl(null) ; console.log(res.data)})
            .catch(err=> console.log(err))
            
        }, 1000);
        }else{
            setControl("PLEASE DONT LEAVE BLANK")
        }

    }
    
    return (
        <div className="bg-green-300 h-screen flex justify-between px-24">
            <img src={CovidImg} alt="Covid" className="w-1/4 h-2/4 mt-64"/>
            <div className="flex flex-col rounded-sm shadow-2xl my-20 bg-green-200 px-10 py-16">
                <div className="bg-green-100 flex flex-col items-center px-5 rounded-md shadow-2xl">
                    <h1 className="mt-14 underline">SEARCH COUNTRY</h1>
                    <div className="mt-10">
                        <input value={country} onChange={e => setCountry(e.target.value)} className="h-10 rounded-md border-2 border-gray-400 bg-gray-200 text-black" placeholder="Search a Country.." type="text"/>
                        <button onClick={SearchCountry} className="hover:bg-green-900 hover:text-white mx-5 border-2 rounded bg-green-400 text-gray-900 p-2">SEARCH</button> 
                        <p className="underline mt-4">{control}</p>
                    </div>
                </div>
                <Covid19 loading={alert} ınfo={valCountry}/>
            </div>
            <img src={CovidImg} alt="Covid" className="w-1/4 h-2/4 mt-64"/>
        </div>
    )
}

export default MainPage