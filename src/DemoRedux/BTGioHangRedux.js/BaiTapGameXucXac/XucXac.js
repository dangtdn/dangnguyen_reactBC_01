import React, { Component } from 'react'
import {connect} from 'react-redux'

class XucXac extends Component {
    render() {
        const {mangXucXac} = this.props.stateGame;
        return (
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col-4">
                        <button style={{boder:'none'}} className="bg-danger" onClick={() => {this.props.clickBanChon('Tài')}}>
                            <div className="p-5 bg-danger text-white w-100 h-100" style={{fontSize:50}}>
                                Tài
                            </div>
                        </button>
                    </div>
                    <div className="col-4">
                        {mangXucXac.map((item,index) => {
                            return <img key={index} src={item.hinhAnh} width="50" />
                        })}
                    </div>
                    <div className="col-4">
                        <button style={{boder:'none'}} className="bg-dark" onClick={() => {this.props.clickBanChon('Xỉu')}}>
                            <div className="p-5 bg-dark text-white w-100 h-100" style={{fontSize:50}}>
                                Xỉu
                            </div>
                        </button>
                    </div>
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
        clickBanChon: (banChon) => {
            const action = {
                type: 'BAN_CHON',
                banChon
            }

            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(XucXac)