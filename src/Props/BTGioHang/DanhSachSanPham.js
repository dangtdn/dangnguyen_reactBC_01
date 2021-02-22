import React, { Component } from 'react'
import SanPhamGioHang from './SanPhamGioHang'

export default class DanhSachSanPham extends Component {
    render() {
        const {mangSanPham} = this.props;
        return (
            <div className='container'>
                <div className='row'>
                    {mangSanPham.map((sp,index) => {
                        return (
                            <div className='col-4' key={index}>
                                <SanPhamGioHang sanPham={sp}/>
                            </div>
                            )
                    })}
                </div>
            </div>
        )
    }
}
