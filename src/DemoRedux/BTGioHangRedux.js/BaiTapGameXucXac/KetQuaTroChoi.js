import React, { Component } from 'react'
import {connect} from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        const {banChon,soBanThang,tongSoBan,mangXucXac} = this.props.stateGame;
        return (
            <div className="container text-center">
                <div className="display-4">
                    Bạn chọn : <span className="text-success">{banChon}</span>
                </div>
                <div className="display-4">
                    Số bàn thắng : <span className="text-warning">{soBanThang}</span>
                </div>
                <div className="display-4">
                    Số bàn chơi : <span className="text-primary">{tongSoBan}</span>
                </div>
                <div className="display-4">
                    <button onClick={this.props.playGame} className='btn btn-success p-3 mt-3'><span className=' display-4 w-25'>Play game</span></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stateGame: state.gameReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: (banChon) => {
            // let count = 0;
            // const random = setInterval(() => {
            //     const action = {
            //         type: 'PLAY_GAME',
            //         banChon
            //     }
    
            //     dispatch(action)
            //     count++;

            // if(count>10){
            //     clearInterval(random);
            //     dispatch(
            //         {type: 'END_GAME'}
            //     )
            // }
            // }, 100)
            const action = {
                type: 'PLAY_GAME',
                banChon
            }

            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(KetQuaTroChoi)