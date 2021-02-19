import React, { Component } from 'react'

export default class DemoSP extends Component {
    render() {

        let {hinhAnh,tenSP,giaBan} = this.props.sanPham
        return (
            <div className="card">
                <img className="card-img-top" src={hinhAnh} alt />
                <div className="card-body text-left">
                    <h4 className="card-title">{tenSP}</h4>
                    <p className="card-text">Giá: {giaBan}đ</p>
                    <div className='d-flex'>
                        <button onClick={() => { this.props.xemChiTiet(this.props.sanPham) }} className="btn btn-primary">Detail</button>
                        <button className="btn btn-danger ml-3">Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
