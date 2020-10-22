import React, { Component } from "react";

import {Pagination} from 'react-bootstrap';

import {data} from './data'

export default class PageSelection extends Component{
    
    state = {
        data,
        active: 1
    }

    render(){
        const pages = Math.ceil(this.state.data.length/10)
        let items = [];
        for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === this.state.active}>
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