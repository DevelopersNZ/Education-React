import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';
class AboutDescription extends Component {
     // constructor() {
     //      super();
     //      this.state = {
     //           aboutdesc: "...",
     //           loading: true,
     //           error: false
     //      }
     // }

     // componentDidMount() {
     //      RestClient.GetRequest(AppUrl.Information).then(result => {

     //           if (result == null) {
     //                this.setState({ error: true, loading: false })
     //           } else {
     //                this.setState({ aboutdesc: result[0]['about'], loading: false });
     //           }
     //      }).catch(error => {
     //           this.setState({ error: true })
     //      })
     // }


     render() {


          return (
               <Fragment>
                    <Container className="mt-5">
                         <Row>
                              <Col sm={12} lg={12} md={12}>

                                   <Zoom top>
                                        {/* { ReactHtmlParser(this.state.aboutdesc) } */}
                                        <h1>Lorem Ipsum</h1>
                                        <h5>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h5>
                                        <h5>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>
                                        <h2>What is Lorem Ipsum?</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                        <h2>Why do we use it?</h2>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                                   </Zoom>
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     } // end Else


}

export default AboutDescription
