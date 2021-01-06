import { Component } from "react";
import React from 'react';
import { NavLink } from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='home-section'>
                <div className='herosection'>
                    <div className='container'>
                        <div className='hero_wrapper'>
                            <h1 className='hero-heading'>
                                Serving you <br /> since 1989 .
                    </h1>
                            <p className='hero-paragraph'>
                                Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.
                    </p>
                            <div className='hero-button-wrapper'>
                                <NavLink className='btn light' to='/shop'>Shop Merch</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='support-section'>
                    <div className='container'>
                        <div className="support-top-wrapper">
                            <div className='support-top-wrapper'>
                                <div className="support-top-left">
                                    <div className="support-top-details-text">Ways to support</div>
                                    <h2 className="support-top-heading">Support Acme Outdoors.</h2>
                                </div>
                                <div className="support-top-right">
                                    <p>COVID-19 has forced us to close our retail space, but we need support from patrons like yourself now more than ever. Below, we’ve listed the best ways to help us through this season.</p>
                                </div>
                            </div>
                        </div>
                        <div className='support-wrapper'>
                            <div className='support-column'>
                                <div className='support-square'>
                                    <div className="support-square-number">01</div>
                                    <div className="support-square-text">SHOP<br />PRODUCTS</div>
                                    <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57a5836db2a07bab0e3_Circle.svg" alt="Circle Decoration in Shop Products Block" className="support-square-image" />
                                </div>
                                <p>Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!</p>
                            </div>
                            <div className="support-column">
                                <div className="support-square">
                                    <div className="support-square-number">02</div>
                                    <div className="support-square-text">Donate</div>
                                    <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adc54453434efb9ee_Triangle.svg" alt="Triangle Decoration in Donate Block" className="support-square-image triangle" />
                                </div>
                                <p>Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.</p></div>
                            <div className="support-column">
                                <div className="support-square">
                                    <div className="support-square-number">03</div>
                                    <div className="support-square-text">Buy <br />GIFT CARDS</div>
                                    <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57afea9a31a44d66db0_Rectangle.svg" alt="Rectangle Decoration in Buy Gift Cards Block" className="support-square-image rectangle" />
                                </div>
                                <p>Have all the outdoor gear you need for now?&nbsp;Buy a gift card and use it later or share it with friends and family. </p></div>
                        </div>

                    </div>
                </div>
                <div className='safe-section'>
                    <div className='container'>
                        <div className='safe-wrapper'>
                            <h2 class="safe-heading">How we're keeping you safe during COVID-19</h2>
                            <p class="safe-paragraph">As an outdoor shop, we’ve taken precautionary measures to ensure the safety of all our customers and team members.</p>
                            <div className='safe-button-wrapper'>
                                <a class="btn  white">Read Our Statement</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='products-section'>
                    <div className='container'>
                        <div className='shop-top-wrapper'>
                            <div class="support-top-left">
                                <div class="support-top-details-text">shop products</div>
                                <h2 class="support-top-heading">Open 24/7/365.</h2>
                            </div>
                            <div class="support-top-right"></div>
                        </div>
                        <div role='list' className='products-list-wrapper w-dyn-list'>
                            <div className='product-list'>
                                <div role="listitem" class="w-dyn-item">
                                    <div class="shop-item-wrapper">
                                        <a class="shop-item-link-wrapper w-inline-block">
                                            <div class="shop-image tumbler-1">
                                                <div class="pill-2 badge primary sale w-condition-invisible">Sale</div>
                                            </div>
                                            <div class="shop-details-wrapper">
                                                <div class="shop-details-left">
                                                    <div class="shop-item-name">White Tent</div>
                                                    <div class="price-wrapper">
                                                        <div class="shop-item-price">$&nbsp;200.00&nbsp;USD</div>
                                                        <div class="shop-item-price compare w-condition-invisible w-dyn-bind-empty">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="shop-button-wrapper">
                                            <a class="pink black">Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" class="w-dyn-item">
                                    <div class="shop-item-wrapper">
                                        <a class="shop-item-link-wrapper w-inline-block">
                                            <div class="shop-image tumbler-2">
                                                <div class="pill-2 badge primary sale w-condition-invisible">Sale</div>
                                            </div>
                                            <div class="shop-details-wrapper">
                                                <div class="shop-details-left">
                                                    <div class="shop-item-name">Tin Coffee Tumbler</div>
                                                    <div class="price-wrapper">
                                                        <div class="shop-item-price">$&nbsp;35.00&nbsp;USD</div>
                                                        <div class="shop-item-price compare w-condition-invisible w-dyn-bind-empty">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="shop-button-wrapper">
                                            <a class="pink black">Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" class="w-dyn-item">
                                    <div class="shop-item-wrapper">
                                        <a class="shop-item-link-wrapper w-inline-block">
                                            <div class="shop-image tumbler-3">
                                                <div class="pill-2 badge primary sale w-condition-invisible">Sale</div>
                                            </div>
                                            <div class="shop-details-wrapper">
                                                <div class="shop-details-left">
                                                    <div class="shop-item-name">Blue Canvas Pack</div>
                                                    <div class="price-wrapper">
                                                        <div class="shop-item-price">$&nbsp;95.00&nbsp;USD</div>
                                                        <div class="shop-item-price compare w-condition-invisible w-dyn-bind-empty">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="shop-button-wrapper">
                                            <a class="pink black">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div> 
                        <div class="shop-more">
                        <a  class="btn dark ">View All Products</a></div>
                    </div>
                </div>

            </div>//Home section
        );

    }
}

export default Home;