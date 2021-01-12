import React, { Component } from 'react';
import axios from 'axios'
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData:[]
        }
    }
    componentDidMount(){
          axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product')
        .then(response=>{
             console.log('rensponsedata',response.data); 
             this.setState({apiData:response.data})
         })

    }
    render() {
        let {apiData}=this.state;
        return (<div className='section-wrapper'>
            <div class="page-title-section">
                <div class="container">
                    <h1 class="page-title">Shop Our Products </h1>
                </div>
            </div>
            <div className="content-section featured-section">
                <div className="container">
                    <div className="w-dyn-list">
                        <div role='list' className="w-dyn-items">
                            <div role='listitem' className="w-dyn-item">
                                <a className='featured-wrapper w-inline-block'>
                                    <div class="pill-2 badge primary featured">Featured Item</div>
                                    <div class="feature-text-wrapper">
                                        <h3 class="featured-item-name">White Tent</h3>
                                        <div class="featured-price">$&nbsp;200.00&nbsp;USD</div></div>
                                    <div class="featured-gradient-overlay"></div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-section">
                <div className="container">
                    <div className="shop-page-wrapper">
                        <div className="shop-category-menu">
                            <h2 class="category-menu-heading">Shop by Category</h2>
                            <div className="w-dyn-list">
                                <div role='list' className="w-dyn-items">
                                    <div role='listitem' className="category-menu-item w-dyn-item">
                                        <a href="/category/gift-cards" class="btn blackandwhite">Gift Cards</a>
                                    </div>
                                    <div role="listitem" class="category-menu-item w-dyn-item">
                                        <a href="/category/tents" class="btn blackandwhite">Tents</a>
                                    </div>
                                </div>
                                <div role="listitem" class="category-menu-item w-dyn-item">
                                    <a href="/category/accessories" class="btn blackandwhite">Accessories</a>
                                </div>
                            </div>
                            <div role="listitem" class="category-menu-item w-dyn-item">
                                <a href="/category/packs" class="btn blackandwhite">Packs</a>
                            </div>
                        </div>
                        <div className="shop-list">
                            <div className="products-list-wrapper w-dyn-list">
                                <div className="products-list w-dyn-items">
                                  <div className="w-dyn-item">
                                  <div className="shop-item-wrapper">
                                {apiData?.map((item,key)=><div className="col-4">
                                    <div>
                                        <img src={item.preview} alt=""/>
                                        <p>{item.price}</p>
                                    </div>
                            </div>
                        )}

                                  </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>// shop wrapper
        );
    }
}

export default Shop;