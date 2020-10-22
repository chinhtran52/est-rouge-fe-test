import React, { Component } from "react";

import { Container,Col,Row } from 'react-bootstrap';

import * as blogApi from '../api/BlogApi';

import SearchBar from '../components/SearchBar';
import ListBlogs from '../components/ListBlogs'

const getListBlogs = async () => {
  const result = (await blogApi.getAllBlogs()).data
  console.log(result)
}

export default class BlogsPage extends Component {
    render(){
      return(
        <Container fluid='md'>
          <br/>
          <Row className="justify-content-center">
            <Col>
              <SearchBar/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <ListBlogs/>
            </Col>
          </Row>
        </Container>
      )
    }
  }
  