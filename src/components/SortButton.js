import React, { Component } from "react";

import {Button,ButtonGroup,DropdownButton,Dropdown} from 'react-bootstrap';

import {connect} from 'react-redux'

import * as actions from '../actions/ListActions'

class SortButton extends Component{

    state = {
        type : 'Title',
    }

    selectSortType = (info) => {
        this.setState({
            type: info
        })
    }

    onSort = () =>{
        this.props.onSort(this.state)
    }

    render(){
        return(
            <ButtonGroup>
                <DropdownButton variant="outline-primary" as={ButtonGroup} title={this.state.type} id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1" onSelect={()=>this.selectSortType('Title')}>Title</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onSelect={()=>this.selectSortType('Date')}>Date</Dropdown.Item>
                </DropdownButton>
                <Button onClick={this.onSort}>Sort</Button>
            </ButtonGroup>
        )
    }
}

const mapStateToProps = state => {
    return {
        blogs : state.blogs,
    }
}

const mapDispatchToProps = (dispatch,props) =>{
    return {
        onSort : (info)=>{
            dispatch(actions.sort(info))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SortButton);