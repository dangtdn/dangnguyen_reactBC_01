import React, { Component } from 'react'

export default class GioHang extends Component {
    render() {
        const {gioHang} = this.props;
        return (
            <div className='table'>
                <table>
                        <thead>
                            <tr>
                                <th>Mã SP</th>
                                <th>Tên SP</th>
                                <th>Hình ảnh</th>
                                <th>Giá SP</th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {gioHang.map((sp,index) => {
                                return <tr key={index}>
                                        <td>{sp.maSP}</td>
                                        <td>{sp.tenSP}</td>
                                        <td>{sp.hinhAnh}</td>
                                        <td>{sp.giaBan}</td>
                                        <td>{sp.soLuong}</td>
                                        <td>{sp.giaBan * sp.soLuong}</td>
                                        <td><button className='btn btn-danger' onClick={() => {
                                            this.props.xoaGioHang(sp)
                                        }}>Delete</button></td>
                                    </tr>
                            })}
                        </tbody>
                    </table>
            </div>
        )
    }
}
