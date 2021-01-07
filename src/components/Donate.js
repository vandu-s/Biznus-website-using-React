import React, { Component } from 'react';
import Footer from "../components/Footer";

class Donate extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
        <div className='section-wrapper'>
            <div className='donate-explainer'>
                <div className='container'>
                    <div className="donate-heading-1">Here at Acme Outdoors</div>
                    <div className="donate-heading-2">every dollar counts</div>
                    <p className="donate-paragraph">Acme Outdoors is more than just a company, we're a community of people who care for one another and for our city. During this time, due to shelter in place orders, only a select few of our staff are able to work. Any donations you make to Acme will help make sure our employees are cared for and can stay safe in these uncertain times. </p>
                </div>
            </div>
            <div className='content-section'>
                <div className='container'>
                    <div className='donate-wrapper'>
                        <div className='donate-collection w-dyn-list'>
                            <div role="list" class="w-dyn-items">
                                <div role="listitem" class="w-dyn-item">
                                    <a href="/product/donate-100" class="donate-link-block w-inline-block">
                                        <div class="text-block">Donate $100</div>
                                    </a>
                                </div>
                                <div role="listitem" class="w-dyn-item">
                                    <a href="/product/donate-50" class="donate-link-block w-inline-block">
                                        <div class="text-block">Donate $50</div>
                                    </a>
                                </div>
                                <div role="listitem" class="w-dyn-item">
                                    <a href="/product/donate-25" class="donate-link-block w-inline-block">
                                        <div class="text-block">Donate $25</div>
                                    </a>
                                </div>
                                <div role="listitem" class="w-dyn-item">
                                    <a href="/product/donate-15" class="donate-link-block w-inline-block">
                                        <div class="text-block">Donate $15</div>
                                    </a>
                                </div>
                                <div role="listitem" class="w-dyn-item">
                                    <a href="/product/donate-5" class="donate-link-block w-inline-block">
                                        <div class="text-block">Donate $5</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>//section-wrapper
        );
    }
}

export default Donate;