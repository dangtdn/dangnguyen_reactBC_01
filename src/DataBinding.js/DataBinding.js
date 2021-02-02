import React, { Component } from 'react'
import style from './DataBinding.module.css';

export default class DataBinding extends Component {

    sinhVien = {
        id:1,
        ten:'Nguyen An'
    }

    renderSinhVien = () => {
        // Binđing phương thức thì phương thức đó phải trả về nội dung là 1 số hoặc chuỗi hoặc 1 thẻ component bao phủ
        return  <div>
            id:{this.sinhVien.id} - ten: {this.sinhVien.ten}
        </div>
    }

    render() {
        let title = "Hello";
        let sanPham = {
            ten: 'Iphone 5s',
            gia: 1000,
            hinhAnh: 'https://i.imgur.com/lC22izJ.png'
        }

        return (
            <div>
                <div>
                    <p className={`text-center ${style.textGreen}`}>ABC</p>
                    {this.renderSinhVien()}
                    <h2 style={{backgroundColor:'green',color:'white'}}>{this.sinhVien.ten}</h2>
  <p id="title">{title}</p>
  <div classname="container-fluid">
    <div classname="row">
      <div classname="col-4">
        <div classname="card">
          <img classname="card-img-top w-100" src={sanPham.hinhAnh} alt />
          <div classname="card-body">
            <h4 classname="card-title">{sanPham.ten}</h4>
            <p classname="card-text">{sanPham.gia}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

        )
    }
}
