import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';

import recent1 from '../../asset/image/page1.png';

class ClientReview extends Component {

     // constructor() {
     //      super();
     //      this.state = {
     //           myData: [],
     //           loading: true
     //      }
     // }

     // componentDidMount() {
     //      RestClient.GetRequest(AppUrl.ClientReview).then(result => {
     //           this.setState({ myData: result, loading: false });
     //      })
     // }


     render() {


          var settings = {
               autoPlaySpeed: 3000,
               autoPlay: true,
               dots: true,
               infinite: true,
               speed: 3000,
               arrows: false,
               vertical: true,
               verticalSwiping: true,
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 1,
               responsive: [
                    {
                         breakpoint: 1024,
                         settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              infinite: true,
                              dots: true
                         }
                    },
                    {
                         breakpoint: 600,
                         settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              initialSlide: 1
                         }
                    },
                    {
                         breakpoint: 480,
                         settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                         }
                    }
               ]
          };


          // const MyList = this.state.myData;
          // const MyView = MyList.map(MyList => {

          //      return <div>
          //           <Row className="text-center justify-content-center">
          //                <Col lg={6} md={6} sm={12}>
          //                     <Zoom top>
          //                          <img className="circleImg" src={MyList.client_img} />
          //                          <h2 className="reviewName">{MyList.client_title}</h2>
          //                          <p className="reviewDescription">{MyList.client_description}</p>
          //                     </Zoom>

          //                </Col>
          //           </Row>
          //      </div>

          // })

          return (
               <Fragment>

                    <Container fluid={true} className="siderBack text-center">

                         <h1 className="reviewMainTitle p-3">TESTIMOIAL</h1>
                         <div className="reviewbottom"></div>

                         <Slider {...settings}>
                              <div>
                                   <Row className="text-center justify-content-center">
                                        <Col lg={6} md={6} sm={12}>

                                             <img className="circleImg" src={recent1} />
                                             <h2 className="reviewName">data</h2>
                                             <p className="reviewDescription">If you are looking to use custom breakpoints, you must wrap your application with a theme provider and use the breakpoints prop to specify the breakpoints you will use. This ensures that components such as Row or Col can parse the correct custom breakpoint props.</p>


                                        </Col>
                                   </Row>
                              </div>
                              <div>
                                   <Row className="text-center justify-content-center">
                                        <Col lg={6} md={6} sm={12}>

                                             <img className="circleImg" src={recent1} />
                                             <h2 className="reviewName">data</h2>
                                             <p className="reviewDescription">If you are looking to use custom breakpoints, you must wrap your application with a theme provider and use the breakpoints prop to specify the breakpoints you will use. This ensures that components such as Row or Col can parse the correct custom breakpoint props.</p>


                                        </Col>
                                   </Row>
                              </div>


                         </Slider>



                    </Container>
               </Fragment>
          )
     } // end Else

}

export default ClientReview
