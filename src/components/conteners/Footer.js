import React, {Component} from 'react';
import './style.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className="container">

                    <div className="row">

                        <div className="col-lg-2 col-md-12 mb-4">

                            <div className="view overlay z-depth-1-half">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                                     className="img-fluid" alt=""/>
                                <a href="/">
                                    <div className="mask rgba-white-light"></div>
                                </a>
                            </div>

                        </div>

                        <div className="col-lg-2 col-md-6 mb-4">

                            <div className="view overlay z-depth-1-half">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                                     className="img-fluid" alt=""/>
                                <a href="/">
                                    <div className="mask rgba-white-light"></div>
                                </a>
                            </div>

                        </div>

                        <div className="col-lg-2 col-md-6 mb-4">

                            <div className="view overlay z-depth-1-half">
                                <img src="https://mdbootstrap.com/img/Photos/Others/images/87.jpg"
                                     className="img-fluid" alt=""/>
                                <a href="/">
                                    <div className="mask rgba-white-light"></div>
                                </a>
                            </div>

                        </div>

                        <div className="col-lg-2 col-md-6 mb-4">

                            <div className="view overlay z-depth-1-half">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg"
                                     className="img-fluid" alt=""/>
                                <a href="/">
                                    <div className="mask rgba-white-light"></div>
                                </a>
                            </div>

                        </div>
                        <div className="col-lg-2 col-md-6 mb-4">

                            <div className="view overlay z-depth-1-half">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(82).jpg"
                                     className="img-fluid" alt=""/>
                                <a href="/">
                                    <div className="mask rgba-white-light"></div>
                                </a>
                            </div>

                        </div>

                        <div className="col-lg-2 col-md-6 mb-4">

                            <div className="view overlay z-depth-1-half">
                                <img src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                                     className="img-fluid" alt=""/>
                                <a href="/">
                                    <div className="mask rgba-white-light"></div>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                </div>


            </div>
        );
    }
}

export default Footer;