import React from 'react'
import Products from './Products'

function Plans(props) {
    console.log(props)
    return (
        <>
            <div className="cards container">
                <ul className="card-list">
                    <li className="card-item container">
                        <h3 className="card-item-title">Basic</h3>
                        <p className="card-content">
                            Includes basic usage of our platform.Recommended for new and aspiring photographers.
                        </p>
                        <p className="card-cost" aria-live="polite">
                            <span className="monthly-yearly-cost" >
                                {props.option === "yearly" ? "$190.00 " : "$19.00 "}
                            </span>
                            <span className="duration-term">
                                {props.option === "yearly" ? " per year" : " per month"}
                            </span>
                        </p>
                        <button>
                            Pick Plan
                        </button>
                    </li>
                    <li className="card-item container">
                        <h3 className="card-item-title">Pro</h3>
                        <p className="card-content">
                            More advanced features available.Recommended for photography veterans and professionals
                        </p>
                        <p className="card-cost">
                            <span className="monthly-yearly-cost" aria-live="polite">
                                {props.option === "yearly" ? "$390.00 " : "$39.00 "}
                            </span>
                            <span className="duration-term">
                                {props.option === "yearly" ? " per year" : " per month"}
                            </span>
                        </p>
                        <button>
                            Pick Plan
                        </button>
                    </li>
                    <li className="card-item container">
                        <h3 className="card-item-title">Business</h3>
                        <p className="card-content">
                            Additional features available such as more detailed metrics.Recommended for business owners.
                        </p>
                        <p className="card-cost">
                            <span className="monthly-yearly-cost" aria-live="polite">
                                {props.option === "yearly" ? "$990.00 " : "$99.00 "}
                            </span>
                            <span className="duration-term">
                                {props.option === "yearly" ? " per year" : " per month"}
                            </span>
                        </p>
                        <button>
                            Pick Plan
                        </button>
                    </li>

                </ul>

            </div>
            <div className="producs">
                <Products />
            </div>
        </>
    )
}

export default Plans
