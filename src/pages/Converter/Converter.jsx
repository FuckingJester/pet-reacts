import React, { useEffect, useRef, useState } from 'react'
import classes from './Converter.module.css'
import Block from './Block'

 function Converter() {
    const ratesRef = useRef({})
    const [fromCur, setFromCur] = useState('UAH')
    const [toCur, setToCur] = useState('USD')
    const [fromPrice,setFromPrice] = useState(0)
    const [toPrice,setToPrice] = useState(0)

    useEffect( () => {
        fetch('https://v6.exchangerate-api.com/v6/d888ae065a28fe890d42cbb5/latest/USD/')
            .then(res => res.json())
            .then(data => {
                ratesRef.current = data.conversion_rates
                onChangeToPrice(1)
            })
            .catch(err => console.error(err))
    }, [])

    const onChangeFromPrice = (value) => {
        const price = value / ratesRef.current[fromCur]
        const result = price * ratesRef.current[toCur]
        setToPrice(result)
        setFromPrice(value)
    }
    const onChangeToPrice = (value) => {
        const result = ( ratesRef.current[fromCur] / ratesRef.current[toCur] ) * value
        setFromPrice(result)
        setToPrice(value)
    }
    useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [fromCur])

    useEffect(() => {
        onChangeToPrice(toPrice)
    }, [toCur])
    
    return (
        <div className={classes.Converter}>
            <Block 
                value={fromPrice} 
                currency={fromCur} 
                onChangeCurrency={setFromCur}
                onChangeValue={onChangeFromPrice} />
            <Block 
                value={toPrice}
                currency={toCur} 
                onChangeCurrency={setToCur}
                onChangeValue={onChangeToPrice}/>
        </div>
  )
}

export default Converter
