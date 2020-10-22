import React, { Component } from "react";

import { Container,Col,Row} from 'react-bootstrap';

import SearchBar from '../components/SearchBar';
import ListBlogs from '../components/ListBlogs';
import Pagination from '../components/Pagination';
import SortButton from '../components/SortButton';

import {connect} from 'react-redux'
import * as actions from '../actions/ListActions'
import * as api from '../api/BlogApi'

class BlogsPage extends Component {
  componentDidMount(){
    api.getAllBlogs().then(res=>{
      this.props.fetchBlogs(res.data)
    })
  }

  render(){
    return(
      <Container fluid='md'>
        <br/>
        <Row>
          <Col sm={9}>
            <SearchBar/>
          </Col>
          <Col sm={3}>
            <SortButton/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <p style={{fontStyle:'italic'}}>"Click title to see more detail"</p>
            <ListBlogs/>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <Pagination/>
          </Col>
        </Row>
      </Container>
    )
  }
}

  const mapStateToProps = state => {
    return {
        blogs : state.blogs,
        page : state.page
    }
}

const mapDispatchToProps = (dispatch,props) =>{
    return {
        fetchBlogs : (data)=>{
            dispatch(actions.fetchBlogs(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogsPage);