import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import './BaiTapGameXucXac.css'
import {connect} from 'react-redux'

class BaiTapGameXucXac extends Component {
    
    renderKetQua = () => {
        let sumPoint = this.props.stateGame.mangXucXac.reduce((sum,item,index) => {
            return sum += item.diem;
        },0)

        return (sumPoint >= 11) ? <div className="text-danger display-4">{sumPoint}: Tài</div> : <div className="text-danger display-4">{sumPoint}: Xỉu</div>
    }

    render() {
        const {banChon} = this.props.stateGame
        return (
            <div className="bgGameXucXac">
                <h1 className="text-center">Bài tập game xúc xắc</h1>
                <XucXac/>
                <h3 className="text-danger display-4">Kết quả</h3>
                {this.renderKetQua()}
                <KetQuaTroChoi/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    // // C2:
    // //Lấy mảng xuc1 xắc từ reducer về
    // let mangXucXac = state.BaiTapGameReducer.mangXucXac;
    // //Tính tổng điểm từ mảng xúc xắc
    // let tongDiem = mangXucXac.reduce((td,xucXac,index) => {
    //     return td += xucXac.diem;
    // },0)
    // //Lấy tổng điểm tạo ra kết quả
    // let ketQua = tongDiem > 11 ? 'Tài':'Xỉu'
    // return {
    //     tongDiem:tongDiem,
    //     ketQua:ketQua
    return {
        stateGame: state.gameReducer
    }
}

export default connect(mapStateToProps,null)(BaiTapGameXucXac)