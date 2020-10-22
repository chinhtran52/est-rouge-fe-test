import React, { Component } from "react";

import { Container,Col,Row ,Button,ButtonGroup,DropdownButton,Dropdown} from 'react-bootstrap';

import SearchBar from '../components/SearchBar';
import ListBlogs from '../components/ListBlogs';
import Pagination from '../components/Pagination';

export default class BlogsPage extends Component {

    state= {
      sortType : 'Sort type...?'
    }

    selectSortType = (param) =>{
      this.setState({
        sortType : param
      })
    }

    render(){
      return(
        <Container fluid='md'>
          <br/>
          <Row>
            <Col sm={8}>
              <SearchBar/>
            </Col>
            <Col sm={4}>
            <ButtonGroup>
              <DropdownButton variant="outline-primary" as={ButtonGroup} title={this.state.sortType} id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1" onSelect={()=>this.selectSortType('Name')}>Name</Dropdown.Item>
                <Dropdown.Item eventKey="2" onSelect={()=>this.selectSortType('Date')}>Date</Dropdown.Item>
              </DropdownButton>
              <Button>Search</Button>
            </ButtonGroup>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
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