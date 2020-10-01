import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends React.Component {
    render(){
        return(
            <div>
                <Header/>
                <section className="py-5">
                    <div className="container py-5">
                        <div className="row py-4">
                            <div className="col text-center">
                                <h1 className="section-title">Featured Service that We Provide</h1>
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-sm-12 col-md-6 col-lg-4 taskia-card-holder">
                                <a className="text-decoration-none" href="#">
                                    <div className="card taskia-card light bg-blue" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                                        <img alt="" className="card-img-top w-100 d-block" src="assets/img/day80-tea.png"/>
                                        <h4 className="title px-4">Keep tasks in one place</h4>
                                        <p className="description mt-3">Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 pt-3 pt-md-5 taskia-card-holder">
                                <a className="text-decoration-none" href="#">
                                    <div className="card taskia-card dark bg-grey" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300" data-aos-once="true">
                                        <img alt="" className="card-img-top w-100 d-block" src="assets/img/day78-wallet.png"/>
                                        <h4 className="title px-4">Keep tasks in one place</h4>
                                        <p className="description mt-3">Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 pt-3 taskia-card-holder">
                                <a className="text-decoration-none" href="#">
                                    <div className="card taskia-card dark bg-yellow" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600" data-aos-once="true"><img alt="" className="card-img-top w-100 d-block" src="assets/img/day80-tea.png"/>
                                        <h4 className="title px-4">Keep tasks in one place</h4>
                                        <p className="description mt-3">Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-0 py-md-5">
                    <div className="container py-5">
                        <div className="row py-5">
                            <div className="col-12 col-md-12 col-lg-6 py-3 py-lg-0">
                                <img alt="" data-aos="fade-right" data-aos-duration="600" data-aos-once="true" className="img-fluid" src="assets/img/Image%208.png"/>
                            </div>
                            <div className="col-12 col-md-12 col-lg-5">
                                <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="300" data-aos-once="true" className="d-flex flex-column align-items-start justify-content-between">
                                    <h1 className="section-title">Why do you need<br/>task management <br/>software?</h1>
                                    <p className="section-description">Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</p>
                                    <button className="btn btn-taskia-primary" type="button">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-0 py-md-5">
                    <div className="container py-5">
                        <div className="row justify-content-end py-5">
                            <div className="col-12 col-md-12 col-lg-5">
                                <div data-aos="fade-right" data-aos-duration="600" data-aos-delay="300" data-aos-once="true" className="d-flex flex-column align-items-start justify-content-between">
                                    <h1 className="section-title"><strong>Seamless Team </strong><br/><strong>Workflow &amp; Efficient </strong><br/><strong>Task Management</strong></h1>
                                    <p className="section-description"><strong>Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</strong></p>
                                    <div>
                                        <a href="https://www.apple.com/"><img alt="" src="assets/img/Image%206.png"/></a>
                                        <a href="https://play.google.com/store/"><img alt="" className="icon-play-store" src="assets/img/Image%209.png"/></a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 py-3 py-lg-0">
                                <img alt="" data-aos="fade-left" data-aos-duration="600" data-aos-once="true" className="img-fluid" src="assets/img/Image%207.png"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-0 py-md-5">
                    <div className="container py-5">
                        <div className="row justify-content-end py-5">
                            <div className="col text-center">
                                <h1 className="section-title"><strong>Trust us and feel free to try our service</strong></h1>
                            </div>
                        </div>
                        <div className="row align-items-center py-5">
                            <div className="col">
                                <div className="justify-content-center d-none d-lg-flex">
                                    <div data-aos="zoom-in" data-aos-duration="2900" data-aos-once="true" className="image-circle big client-1">
                                        <img alt="" className="rounded-circle" src="assets/img/michael-dam-258165-unsplash.png"/>
                                    </div>
                                    <div data-aos="zoom-in" data-aos-duration="2900" data-aos-delay="400" data-aos-once="true" className="image-circle med client-2">
                                        <img alt="" className="rounded-circle" src="assets/img/azamat-zhanisov-1427757-unsplash.png"/>
                                    </div>
                                    <div data-aos="zoom-in" data-aos-duration="2900" data-aos-delay="800" data-aos-once="true" className="image-circle small client-3">
                                        <img alt="" className="rounded-circle" src="assets/img/michael-dam-258165-unsplash.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 text-center"><span className="likes-counter">100 000</span></div>
                            <div className="col">
                                <div className="justify-content-start d-none d-lg-flex">
                                    <div data-aos="zoom-in" data-aos-duration="2900" data-aos-once="true" className="image-circle med client-4">
                                        <img alt="" className="rounded-circle" src="assets/img/azamat-zhanisov-1427757-unsplash.png"/>
                                    </div>
                                    <div data-aos="zoom-in" data-aos-duration="2900" data-aos-delay="400" data-aos-once="true" className="image-circle small client-5">
                                        <img alt="" className="rounded-circle" src="assets/img/azamat-zhanisov-1427757-unsplash.png"/>
                                    </div>
                                    <div data-aos="zoom-in" data-aos-duration="2900" data-aos-delay="800" data-aos-once="true" className="image-circle big client-6">
                                        <img alt="" className="rounded-circle" src="assets/img/michael-dam-258165-unsplash.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}export default Home;