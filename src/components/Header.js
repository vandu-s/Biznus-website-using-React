import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <nav>
            <div className='banner'>
                <button className='announcement_btn'>Announcement</button>
                <div className='alert'>How we're responding to COVID-19</div>
            </div>
            <div className='navbar'>
                <div className='Logo_wrapper'>
                <NavLink to='/'><img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg'/ >
                </NavLink>
                </div>
               <div className='menu_wrapper'>
               <NavLink className='menu' to='/'>Home</NavLink>
               <NavLink className='menu'  to='/about'>About</NavLink>
               <NavLink className='menu'  to='/shop'>Shop</NavLink>
               <NavLink className='menu'  to='/donate'>Donate</NavLink>
               <NavLink className='menu'  to='/contact'>Contact</NavLink>
               <div className='cartWrapper'>
                <img className='cart_icon' src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg'/>
                <div className='count'>0</div>
               </div>
               </div>
            </div>
               
        </nav> );
    }
}
 
export default Header;