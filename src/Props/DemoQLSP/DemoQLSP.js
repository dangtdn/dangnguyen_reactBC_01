import React, { Component } from 'react'
import DemoSP from './DemoSP'

export default class DemoQLSP extends Component {

    arrProduct = [
        {
          "maSP": 1,
          "tenSP": "VinSmart Live",
          "manHinh": "AMOLED, 6.2\", Full HD+",
          "heDieuHanh": "Android 9.0 (Pie)",
          "cameraTruoc": "20 MP",
          "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
          "ram": "4 GB",
          "rom": "64 GB",
          "giaBan": 5700000,
          "hinhAnh": "./img/vsphone.jpg"
        },
      
        {
          "maSP": 2,
          "tenSP": "Meizu 16Xs",
          "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
          "heDieuHanh": "Android 9.0 (Pie); Flyme",
          "cameraTruoc": "20 MP",
          "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
          "ram": "4 GB",
          "rom": "64 GB",
          "giaBan": 7600000,
          "hinhAnh": "./img/meizuphone.jpg"
        },
      
        {
          "maSP": 3,
          "tenSP": "Iphone XS Max",
          "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
          "heDieuHanh": "iOS 12",
          "cameraSau": "Chính 12 MP & Phụ 12 MP",
          "cameraTruoc": "7 MP",
          "ram": "4 GB",
          "rom": "64 GB",
          "giaBan": 27000000,
          "hinhAnh": "./img/applephone.jpg"
        }
    ]
    state = {
        spChiTiet: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
          },// Dùng để lưu trữ thông tin điện thoại
        gioHang: [
            {
                "maSP": 1,
                "tenSP": "VinSmart Live",
                "manHinh": "AMOLED, 6.2\", Full HD+",
                "heDieuHanh": "Android 9.0 (Pie)",
                "cameraTruoc": "20 MP",
                "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
                "ram": "4 GB",
                "rom": "64 GB",
                "giaBan": 5700000,
                "hinhAnh": "./img/vsphone.jpg",
                "soLuong": 1
              }
        ]
    }

    renderSanPham = () => {
        return this.arrProduct.map((sp,index) => {
            return <div className='col-3' key={index}>
                <DemoSP sanPham={sp} xemChiTiet={this.xemChiTiet} themGioHang={this.themGioHang}/>
            </div>
        })
    }

    xemChiTiet = (spClick) => {
        this.setState({
            spChiTiet: spClick
        })
    }

    themGioHang = (sanPhamClick) => {
        // Sau khi click thì tạo ra 1 sp giống obj trong giỏ hàng
        let spGH = {
            maSP: sanPhamClick.maSP,
            tenSP: sanPhamClick.tenSP,
            giaBan: sanPhamClick.giaBan,
            soLuong: 1,
            hinhAnh: sanPhamClick.hinhAnh
        }

        let gioHangUpdate = [...this.state.gioHang]
        // Xử lý ktra state giỏ hàng có chứa dữ liệu 

        let indexSPGH = gioHangUpdate.findIndex(sp => sp.maSP === sanPhamClick.maSP)

        if(indexSPGH !== -1){
            gioHangUpdate[indexSPGH].soLuong += 1
        }else{
            gioHangUpdate.push(spGH)
        }

        this.setState({
            gioHang: gioHangUpdate
        })
    }

    xoaGioHang = (spClick) => {
        
        let gioHangUpdate = [...this.state.gioHang]

        let indexGH = gioHangUpdate.findIndex(sp => sp.maSP === spClick.maSP)
        
        if(indexGH !== -1 & gioHangUpdate[indexGH].soLuong > 1){
            gioHangUpdate[indexGH].soLuong -= 1
        }else if (indexGH !== -1 & gioHangUpdate[indexGH].soLuong === 1){
            gioHangUpdate.splice(indexGH,1)
        }else{
            alert('Sản phẩm không tồn tại')
        }

        this.setState({
            gioHang: gioHangUpdate
        })
    }

    render() {
        let {hinhAnh,tenSP,giaBan,manHinh,heDieuHanh,cameraSau,cameraTruoc} = this.state.spChiTiet
        return (
            <div className='container'>
                <h3 className='p-2'>DANH SÁCH SẢN PHẨM</h3>
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
                            {this.state.gioHang.map((sp,index) => {
                                return <tr>
                                        <td>{sp.maSP}</td>
                                        <td>{sp.tenSP}</td>
                                        <td>{sp.hinhAnh}</td>
                                        <td>{sp.giaBan}</td>
                                        <td>{sp.soLuong}</td>
                                        <td>{sp.giaBan * sp.soLuong}</td>
                                        <td><button className='btn btn-danger' onClick={() => {
                                            this.xoaGioHang(sp)
                                        }}>Delete</button></td>
                                    </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='row'>
                    {this.renderSanPham()}
                </div>

                <div className='row mt-3'>
                    <div className='col-4'>
                        <h3>{tenSP}</h3>
                        <img className="card-img-top" src={hinhAnh} alt />
                    </div>
                    <div className='col-8'>
                        <table className='table text-left'>
                            <thead>
                                <h3>Thông số kĩ thuật</h3>
                                <tr>
                                    <td>Màn hình:</td>
                                    <td>{manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ diều hành:</td>
                                    <td>{heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước:</td>
                                    <td>{cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau:</td>
                                    <td>{cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM:</td>
                                    <td>4 GB</td>
                                </tr>
                                <tr>
                                    <td>ROM:</td>
                                    <td>64 GB</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
