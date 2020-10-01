import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <footer className="py-5">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="px-3">
                            <h1 className="section-title text-center"><strong>Get better work done</strong><br/></h1>
                            <p className="footer-description"><strong>See why millions of people across 195 countries use Dash.</strong></p>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center justify-content-lg-between py-4">
                            <input type="text" className="input-taskia-primary form-control mr-4 mx-lg-0 my-3 my-lg-0" placeholder="name@company.com"/>
                            <button className="btn btn-taskia-primary my-3 my-lg-0" type="button">Try it free</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}export default Footer;