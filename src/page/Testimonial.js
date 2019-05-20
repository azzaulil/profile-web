import React, { Component } from 'react';

class Testimonial extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="tab-pane active pt-page-moveFromRight" id="testimonial">
                    <div className="testimonia-area">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="single-testimonial">
                                    <p>“ What an incredible! He is so proffesional actor. Really animating his role
                                        and I've never seen him before but when I read some article, 
                                        actually he has a good personality. He is humble person. “</p>
                                    <div className="title">
                                        <h4>-Vania Paramita <span>Fans</span> </h4>
                                    </div>
                                    <div className="icon">
                                        <i className="flaticon-quote-button"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="single-testimonial">
                                    <p>“ I was watching his movie and I always like his performance. 
                                        His acting so awesome. I think he is really great actor in future. “</p>
                                    <div className="title">
                                        <h4>-Selena Gomez <span>Singer and Actress</span> </h4>
                                    </div>
                                    <div className="icon">
                                        <i className="flaticon-quote-button"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="single-testimonial">
                                    <p>“ You have to watch every his movie. He looks incredible in 
                                        animating his role. That's right. I like him “</p>
                                    <div className="title">
                                        <h4>-Rara<span>Fashion Designer</span> </h4>
                                    </div>
                                    <div className="icon">
                                        <i className="flaticon-quote-button"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="single-testimonial">
                                    <p>“ Nice dude! I like on your show, as always. Good job Ben. I'll waiting your next movie “</p>
                                    <div className="title">
                                        <h4>-Andry Fritzent<span>Actor</span> </h4>
                                    </div>
                                    <div className="icon">
                                        <i className="flaticon-quote-button"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                {/* <div className="pagenation-area fix">
                                    <div className="pagenation pull-left">
                                        <ul>
                                            <li className="active"><a href="#">01</a></li>
                                            <li><a href="#">02</a></li>
                                            <li><a href="#">03</a></li>
                                            <li><a href="#">04</a></li>
                                            <li><a href="#">05</a></li>
                                        </ul>
                                    </div>
                                    <div className="number-page pull-right">
                                        <span>page 1 of 2</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Testimonial;