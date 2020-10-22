import React, { Component } from "react";

import {InputGroup,FormControl} from 'react-bootstrap';

export default class SearchBar extends Component{
    render(){
        return(
            <InputGroup>
                <FormControl
                placeholder="Search..."
                aria-label="SearchBar"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
        )
    }
}