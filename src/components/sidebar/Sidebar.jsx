import React from 'react'
import './Sidebar.css'
import admin from '../../../public/admin-icon.png'
import mainLogo from '../../../public/log-in.png'
import dashboard from '../../../public/dashboard-icon.png'
import product from '../../../public/products-icon.png'
import createProduct from '../../../public/create-product-icon.png'
import expiredProduct from '../../../public/expired-product-icon.png'
import lowStocks from '../../../public/low-stocks-icon.png'
import category from '../../../public/category-icon.png'
import subCategory from '../../../public/sub-category-icon.png'
import brands from '../../../public/brands-icon.png'
import units from '../../../public/units-icon.png'
import variant from '../../../public/variant-icon.png'
import warranties from '../../../public/warranties-icon.png'
import print from '../../../public/print-icon.png'
import qrcode from '../../../public/qrcode-icon.png'
import stock from '../../../public/stock-icon.png'
import adjusment from '../../../public/adjusment-icon.png'
import transfer from '../../../public/transfer-icon.png'

const Sidebar = () => {
    return (
        <div style={{borderRight: "1px solid #E6EAED" }}>
            <div className="logo-container">
                <img className='main-logo' src={mainLogo} alt="logo" />
            </div>

            <div className="main-container1">
                <p className='main-title1'>Main</p>
                <div className='dashboard-box'>
                    <img src={dashboard} alt="icon" />
                    <p className='dashboard-title'>Dashboard</p>
                </div>
                <div className='admin-box'>
                    <img src={admin} alt="icon" />
                    <p className='admin-title'>Super Admin</p>
                </div>
            </div>

            <div className="inventory-container">
                <h1 className='inventory-title'>Inventory</h1>
                <div className="products-box">
                    <img src={product} alt="icon" />
                    <p className='products-title'>Products</p>
                </div>
                <div className="create-product-box">
                    <img src={createProduct} alt="icon" />
                    <p className='create-product-title'>Create Product</p>
                </div>
                <div className="expired-products-box">
                    <img src={expiredProduct} alt="icon" />
                    <p className='expired-products-title'>Expired Products</p>
                </div>
                <div className="low-stocks-box">
                    <img src={lowStocks} alt="icon" />
                    <p className='low-stocks-title'>Low Stocks</p>
                </div>
                <div className="category-box">
                    <img src={category} alt="icon" />
                    <p className='category-title'>Category</p>
                </div>
                <div className="sub-category-box">
                    <img src={subCategory} alt="icon" />
                    <p className='sub-category-title'>Sub Category</p>
                </div>
                <div className="brands-box">
                    <img src={brands} alt="icon" />
                    <p className='brands-title'>Brands</p>
                </div>
                <div className="units-box">
                    <img src={units} alt="icon" />
                    <p className='units-title'>Units</p>
                </div>
                <div className="variant-box">
                    <img src={variant} alt="icon" />
                    <p className='variant-title'>Variant Attributes</p>
                </div>
                <div className="warranties-box">
                    <img src={warranties} alt="icon" />
                    <p className='warranties-title'>Warranties</p>
                </div>
                <div className="print-box">
                    <img src={print} alt="icon" />
                    <p className='print-title'>Print Barcode</p>
                </div>
                <div className="qrcode-box">
                    <img src={qrcode} alt="icon" />
                    <p className='qrcode-title'>Print QR Code</p>
                </div>
            </div>

            <div className="stock-div">
                <h1 className='stock-main'>Stock</h1>

                <div className="stock-box">
                    <img src={stock} alt="icon" />
                    <p className='stock-title'>Manage Stock</p>
                </div>
                <div className="adjusment-box">
                    <img src={adjusment} alt="icon" />
                    <p className='adjusment-title'>Stock Adjustment</p>
                </div>
                <div className="transfer-box">
                    <img src={transfer} alt="icon" />
                    <p className='transfer-title'>Stock Transfer</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
