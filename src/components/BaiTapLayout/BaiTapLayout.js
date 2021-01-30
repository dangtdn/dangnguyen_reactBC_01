import React, { Component } from 'react'
import BTCarousel from './BTCarousel'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTListProduct from './BTListProduct'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader/>
                <BTCarousel/>
                <BTListProduct/>
                <BTFooter/>
            </div>
        )
    }
}
