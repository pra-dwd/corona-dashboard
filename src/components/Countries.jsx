import { fetchCountries } from "../service/api";
import { useEffect,useState } from "react";
import { Typography,NativeSelect } from "@material-ui/core";


const Countries = ({handleCountryChange}) => {

    const [countries,setCountries] = useState([]);
    useEffect(() => { 
        const fetchApi = async() =>{    
         setCountries(await fetchCountries());
        }
        fetchApi();
    }, [])

    return (
        <>
            <Typography style={{marginButtom: 20}} variant ="h5" color="textSecondary">
                Reported Cases or Death in Countries
            </Typography>
            <NativeSelect onChange ={(e) => handleCountryChange(e.target.value)}>
                <option value="">United States</option>
                {countries.map((country,i) => {
                    return (
                    <option key={i} value={country}>{country}</option>
                    )
                })}
            </NativeSelect>
        </>
    )
}

export default Countries;