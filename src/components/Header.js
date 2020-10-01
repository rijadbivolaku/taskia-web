import React from 'react';

class Header extends React.Component {
    render(){
        return(
            <header>
                <div className="container py-2">
                    <div className="d-flex align-items-center justify-content-between py-3"><a className="navbar-brand" href="">Taskia</a>
                  <a className="btn btn-taskia-secondary" href="">Try free</a></div>
                    <div className="row py-5 align-items-center">
                        <div className="col-12 col-md-6 order-1 order-md-0">
                                <div>
                                    <h1 data-aos="fade" data-aos-duration="600" data-aos-once="true" className="main-title">Task management and lists Tool<br/></h1>
                                    <p data-aos="fade" data-aos-duration="600" data-aos-delay="600" data-aos-once="true" className="main-subtitle">We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.</p>
                                    <div className="d-flex flex-wrap justify-content-center justify-content-lg-between py-4"><input type="text" data-aos="fade-right" data-aos-duration="600" data-aos-delay="600" data-aos-once="true" className="input-taskia-primary form-control mr-4 mx-lg-0 my-3 my-lg-0" placeholder="name@company.com"/>
                                    <button className="btn btn-taskia-primary my-3 my-lg-0" data-aos="fade-left" data-aos-duration="600" data-aos-delay="900" data-aos-once="true" type="button">Try it free</button>
                                    </div>
                                </div>
                            </div>
                        <div className="col-12 col-md-6 order-0 order-md-1">
                            <img alt="" className="img-fluid" src="assets/img/Image-5.png"/>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}export default Header;