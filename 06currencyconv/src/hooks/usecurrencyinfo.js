import {useEffect, useState} from "react"


function Usecurrencyinfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)
        .then((res) => res.json())
        .then((res) => setData(res.rates))
        console.log(data);
    }, [currency]) //. without dependency -->> infinite loop
                         //. Old = USD // with dependency no infinite
                         //. New = EUR
                         //     ↓
                         //  Different
                         //     ↓
                         //  Run useEffect

    console.log(data);
    return data
}
export default Usecurrencyinfo;


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//                       App Render

//                           ↓

//                  useCurrencyInfo("usd")
  
//                           ↓

//                         data={}

//                           ↓

//                       API Request

//                           ↓

//                        Response

//                           ↓

//                        setData()

//                           ↓

//                     App Render Again

//                           ↓

//                     currencyInfo mil gaya   



