import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';


import axios from 'axios';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
class TopBanner extends Component {

     // constructor() {
     //      super();
     //      this.state = {
     //           title: "",
     //           subtitle: "",
     //           loaderClass: "text-center",
     //           mainDivClass: "d-none"
     //      }
     // }

     // componentDidMount() {
     //      RestClient.GetRequest(AppUrl.HomeTopTitle).then(result => {
     //           this.setState({ title: result[0]['home_title'], subtitle: result[0]['home_subtitle'], loaderClass: "d-none", mainDivClass: "text-center" });
     //      }).catch(error => {
     //           this.setState({ title: "????", subtitle: "????" })
     //      });

     // }



     render() {
          return (
               <Fragment>
                    <Container fluid={true} className="topFixedBanner p-0" >
                         <div className="topBannerOverlay">
                              <Container className="topContent">
                                   <Row>
                                        {/* <Col >
                                             <Loading />
                                        </Col> */}

                                        <Col >
                                             <Fade top>
                                                  <h1 className="topTitle">What is Lorem Ipsum?</h1>
                                                  <h4 className="topSubTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h4>
                                             </Fade>
                                             <Button variant="primary">Learn More</Button>

                                        </Col>
                                   </Row>
                              </Container>
                         </div>
                    </Container>

               </Fragment>
          )
     }
}

export default TopBanner
