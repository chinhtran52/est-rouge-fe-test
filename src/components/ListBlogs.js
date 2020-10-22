import React, { Component } from "react";

import {Media,Button} from 'react-bootstrap';

import { connect } from "react-redux";

class ListBlogs extends Component{

    getRedux = () => {
        console.log(this.props)
      }
    
    render(){
        const {blogs,page} = this.props
        // const listBlogs = 'list...'
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
                        <h5 style={{textAlign:"left"}}>{item.title}</h5>
                        <p style={{textAlign:"left"}}>{item.content.length>=70?item.content.slice(0,70)+'...':item.content}</p>
                        <p style={{textAlign:"right",fontSize:12, fontStyle:'italic'}}>{item.createdAt}</p>
                    </Media.Body>
                </Media>
                <br/>
            </div>
        ))
        return(
            <div>
                {listBlogs}
                <Button onClick={this.getRedux}>Test</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blogs : state.blogs,
        page : state.page
    }
}

export default connect(mapStateToProps,null)(ListBlogs);