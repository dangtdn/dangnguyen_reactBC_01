import React, { Component } from 'react'
import BTProduct from './BTProduct'

export default class BTListProduct extends Component {
    
    arrProduct = [
        { maSP: 1, tenSP: 'Black Berry',hinhAnh:'./img/sp_blackberry.png', gia: 1000 },
        { maSP: 2, tenSP: 'Iphone X',hinhAnh:'./img/sp_iphoneX.png', gia: 2000 },
        { maSP: 3, tenSP: 'Note 7',hinhAnh:'./img/sp_note7.png', gia: 3000 },
        { maSP: 3, tenSP: 'Vivo 850',hinhAnh:'./img/sp_vivo850.png', gia: 3000 }
    ]

    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center pt-5">BEST SMART PHONE</h1>
                <div className="row pb-3">
                    {this.arrProduct.map((sp,index) => {
                        return <div className="col-3" key={index}>
                                    <BTProduct sanPham = {sp}/>
                                </div>
                    })}
                </div>
            </div>
        )
    }
}
