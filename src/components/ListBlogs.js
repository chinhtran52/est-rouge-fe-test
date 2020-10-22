import React, { Component } from "react";

import {Media,Modal,Container,Col,Row} from 'react-bootstrap';

import { connect } from "react-redux";

class ListBlogs extends Component{

    showDetail = (value) => {
        this.setState({
            index:value
        })
        this.toggleModal()
    }

    state = {
        modal: false,
        index: 0
    }

    toggleModal = () =>{
        this.setState({
            modal : !this.state.modal
        })
    }

    render(){
        const {blogs,page} = this.props
        const listBlogs = blogs.slice((page-1)*10,page*10).map((item,index)=>(
            <div key={index}>
                <Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src='https://penrosecare.co.uk/wp-content/uploads/2019/06/2019-05-07-Quita-The-Kitty-Photo-at-Pergola-Hampstead-for-Youtube-280x300.jpg'
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5 onClick={(value)=>this.showDetail(index)} style={{textAlign:"left",cursor:'pointer'}}>{item.title}</h5>
                        <p style={{textAlign:"left"}}>{item.content.length>=70?item.content.slice(0,70)+'...':item.content}</p>
                        <p style={{textAlign:"right",fontSize:12, fontStyle:'italic'}}>{item.createdAt}</p>
                    </Media.Body>
                </Media>
                <br/>
                <Modal
                    show={this.state.modal}
                    onHide={this.toggleModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {blogs[this.state.index].title}
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col md="auto">
                                    <img
                                        width={128}
                                        height={128}
                                        className="mr-3"
                                        src='https://penrosecare.co.uk/wp-content/uploads/2019/06/2019-05-07-Quita-The-Kitty-Photo-at-Pergola-Hampstead-for-Youtube-280x300.jpg'
                                        alt="Generic placeholder"
                                    />
                                </Col>
                                <Col>
                                    <Row>
                                        <p style={{fontStyle:'italic'}}>{blogs[this.state.index].createdAt}</p>
                                    </Row>
                                    <Row>
                                        <p style={{fontSize:22}}>{blogs[this.state.index].content}</p>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        ))
        return(
            <div>
                {listBlogs}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blogs : state.searchResult,
        page : state.page
    }
}

export default connect(mapStateToProps,null)(ListBlogs);