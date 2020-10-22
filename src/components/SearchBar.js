import React, { Component } from "react";

import {InputGroup,FormControl} from 'react-bootstrap';

import {connect} from 'react-redux';
import * as actions from '../actions/ListActions'

class SearchBar extends Component{

    state ={
        search : ''
    }

    updateSearch = (event) => {
        const value = event.target.value
        this.setState({
            search : value
        })
        this.props.onSearch(value)
    }

    render(){
        return(
            <InputGroup>
                <FormControl
                onChange={(event)=>this.updateSearch(event)}
                placeholder="Search..."
                aria-label="SearchBar"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
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
        onSearch : (info)=>{
            dispatch(actions.search(info))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);