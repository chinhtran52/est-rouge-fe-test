import React, { Component } from "react";

import {Media} from 'react-bootstrap';

import {data} from './data'

export default class ListBlogs extends Component{

    state = {data}

    render(){
        const listBlogs = this.state.data.map((item,index)=>(
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
                        <h5 style={{textAlign:"left"}}>{item.title}</h5>
                        <p style={{textAlign:"left"}}>{item.content.length>=70?item.content.slice(0,70)+'...':item.content}</p>
                    </Media.Body>
                </Media>
                <br/>
            </div>
        ))
        return(
            <div>{listBlogs}</div>
        )
    }
}