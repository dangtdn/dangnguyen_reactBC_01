import React, { Component } from 'react'
import BTProduct from './BTProduct'

export default class BTListProduct extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center pt-5">BEST SMART PHONE</h1>
                <div className="row pb-3">
                    <div className="col-3">
                        <BTProduct/>
                    </div>
                    <div className="col-3">
                        <BTProduct/>
                    </div>
                    <div className="col-3">
                        <BTProduct/>
                    </div>
                    <div className="col-3">
                        <BTProduct/>
                    </div>
                </div>
            </div>
        )
    }
}
