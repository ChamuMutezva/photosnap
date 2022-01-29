import React from 'react';
import { useContext } from 'react'
import { DataContext } from '../context/Context'
import check from '../../assets/pricing/desktop/check.svg'

function Products() {
    const { pricing } = useContext(DataContext)
    console.log(pricing.features)
    return (
        <div className="features">
            <h2 className="main-features-title">Compare</h2>
            <div className="title-container container">
                <h2 className="features-title">The Features</h2>
                <p className="flex feature-content">
                    <span className="feature-content-title">basic</span>
                    <span className="feature-content-title">pro</span>
                    <span className="feature-content-title">business</span>
                </p>
            </div>
            {pricing && pricing.features.map(elm => <div key={elm.name} className="container product-container">
                <h3 className="product-title">{elm.title}</h3>
                <ul className="product-list">
                    <li className="product-list-item">
                        <p>basic {elm.basic} </p>
                        <div className="product-status"> <img src={elm.basic ? check : ""} alt="" /></div>
                    </li>
                    <li className="product-list-item">
                        <p>pro</p>
                        <div className="product-status"> <img src={elm.pro ? check : ""} alt="" /></div>
                    </li>
                    <li className="product-list-item">
                        <p>business</p>
                        <div className="product-status"> <img src={elm.business ? check : ""} alt="" /></div>
                    </li>
                </ul>
            </div>
            )}
        </div>
    )
}

export default Products;
