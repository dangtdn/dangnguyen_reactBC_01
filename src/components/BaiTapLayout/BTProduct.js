import React, { Component } from 'react'

export default class BTProduct extends Component {

    render() { 
        let {tenSP,hinhAnh} = this.props.sanPham;

        return (
          <div>
            <div className="card bg-light" style={{ width: 300 }}>
              <img className="card-img-top" src={hinhAnh} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
              <div className="card-body text-center">
                <h4 className="card-title text-center">{tenSP}</h4>
                <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
                <div className='d-flex'>
                  <a href="#" className="btn btn-primary">Detail</a>
                  <a href="#" className="btn btn-danger ml-3">Cart</a>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
