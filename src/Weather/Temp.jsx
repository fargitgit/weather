import { useEffect, useState } from "react";
import ShowTemp from './ShowTemp';

const Temp = () =>{
    const [apiVal, setApiData] = useState('No Data');
    const [val, setVal] = useState('');
    const getVal = (e) =>{
        setVal(e.target.value);
        getWeattherData();
    }

    const getWeattherData = async () => {
        try {
            const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=5a6d68087a0856c7ba388f63e569e30a`);
            const result = await res.json();
            setApiData(result);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(()=>{
        getWeattherData();
    }, [val])



    return (
        <>
            <div className="temp">
                <input type="text" value={val} onChange={getVal} />
                <h3>{val}</h3>
               { (apiVal && apiVal.name && apiVal.main.temp) ? <ShowTemp name={apiVal.name} temp={apiVal.main.temp} /> : <h3>City not found</h3>} 
            </div>
        </>
    )
}
export default Temp;