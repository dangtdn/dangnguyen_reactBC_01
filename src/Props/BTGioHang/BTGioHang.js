import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import ModalGioHang from './ModalGioHang'
import phoneData from '../../data/phoneData.json'

export default class BTGioHang extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='text-center text-success'>Bài tập giỏ hàng</h3>
                <ModalGioHang/>
                <div className='text-right'>
                    <span className='text-danger' style={{cursor:'pointer',fontSize:'17px',fontWeight:'bold'}} data-toggle="modal" data-target="#modelId">
                        Giỏ hàng (0)
                    </span>
                </div>
                <DanhSachSanPham mangSanPham={phoneData}/>
            </div>
        )
    }
}
