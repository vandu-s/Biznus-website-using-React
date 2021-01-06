import { Component } from "react";
import React from 'react';
import {NavLink} from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
         <div className='herosection'>
            <div className='container'>
                <div className='hero_wrapper'>
                    <h1 className='hero-heading'>
                        Serving you <br/> since 1989 .
                    </h1>
                    <p className='hero-paragraph'>
                    Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.
                    </p>
                    <div className='hero-button-wrapper'>
                    <NavLink className='btn light'  to='/shop'>Shop Merch</NavLink>

                    </div>
                </div>
           </div>           
        
         </div>
  );

    }
}
 
export default Home;