import React, { Component } from "react";

import {Pagination} from 'react-bootstrap';

import {connect} from 'react-redux';

import * as actions from '../actions/ListActions'

class PageSelection extends Component{

    changePage = (al) => {
        this.props.onChangePage(al)
    }

    render(){
        const pages = Math.ceil(this.props.blogs.length/10)
        let items = [];
        for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item onClick={()=>this.changePage(number)} key={number} active={number === this.props.page}>
            {number}
            </Pagination.Item>,
        );
        }

        return(
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                {items}
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
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
        onChangePage : (page)=>{
            dispatch(actions.changePage(page))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PageSelection);