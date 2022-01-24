import React from 'react'

function Plans() {
    return (
        <div className="cards container">
            <ul className="card-list">
                <li className="card-item">
                    <h3>Basic</h3>
                    <p className="card-content">
                        Includes basic usage of our platform.Recommended for new and aspiring photographers.
                    </p>
                    <p className="card-cost">
                        $19.00 per month
                        $190.00 per year
                    </p>
                    <button>
                        Pick Plan
                    </button>
                </li>
                <li className="card-item">
                    <h3>Pro</h3>
                    <p className="card-content">
                        More advanced features available.Recommended for photography veterans and professionals
                    </p>
                    <p className="card-cost">
                        $39.00 per month
                        $390.00 per year
                    </p>
                    <button>
                        Pick Plan
                    </button>
                </li>
                <li className="card-item">
                    <h3>Business</h3>
                    <p className="card-content">
                        Additional features available such as more detailed metrics.Recommended for business owners.
                    </p>
                    <p className="card-cost">
                        $99.00 per month
                        $990.00 per year
                    </p>
                    <button>
                        Pick Plan
                    </button>
                </li>

            </ul>

        </div>
    )
}

export default Plans
