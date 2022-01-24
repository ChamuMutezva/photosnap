import React from 'react'
// https://www.sarasoueidan.com/blog/toggle-switch-design/
function PriceSwitcher() {
    return (
        <div className="price-switcher container">
            <fieldset className="radio-price-switch">
                <legend>Terms and price selector</legend>
                <input type="radio" name="price" id="monthly" />
                <label htmlFor="monthly">Monthly</label>
                <input type="radio" name="price" id="yearly" />
                <label htmlFor="yearly">Yearly</label>
            </fieldset>
        </div>
    )
}

export default PriceSwitcher
