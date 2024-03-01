import {useEffect , useState} from 'react'

function usecurrencyInfo(currency = 'inr') {

   const [data, setData] = useState({})

     useEffect(() => {

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((data) => {
           console.log(data)
          return setData(data)
        })
        .catch()

     },([currency]))
    
    return data
}

export default usecurrencyInfo