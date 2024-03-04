import {useEffect , useState} from 'react'

function usecurrencyInfo(currency = 'INR') {

   const [data, setData] = useState({})

     useEffect(() => {

        fetch(`https://openexchangerates.org/api/latest.json?app_id=088310d9e24c49dd996c3747bdcd3e18&base=USD`.json)
        .then((res) => res.json())
        .then((data) => {
           console.log(data)
          return setData(data[rates])
        })
        .catch()

     },([currency]))
    
    return data
}

export default usecurrencyInfo