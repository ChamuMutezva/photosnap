import React from 'react'
import { useState, useEffect } from 'react'
import Plans from './Plans'
// https://www.sarasoueidan.com/blog/toggle-switch-design/
function PriceSwitcher() {
    const [selectVal, setSelect] = useState("yearly")
    function handleSelect(e) {
        setSelect(e.target.id)
    }

    useEffect(() => {
    }, [selectVal])
    return (
        <>
            <div className="price-switcher">
                <fieldset className="radio-price-switch">
                    <legend>Terms and price selector</legend>
                    <input type="radio" name="price" id="monthly" onClick={handleSelect} />
                    <label htmlFor="monthly">Monthly</label>
                    <input type="radio" name="price" id="yearly" onClick={handleSelect} />
                    <label htmlFor="yearly">Yearly</label>
                </fieldset>
            </div>
            <Plans option={selectVal} />
        </>
    )
}

export default PriceSwitcher
