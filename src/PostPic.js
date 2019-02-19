import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class PostPic extends React.Component {

    constructor() {
        super();
        this.state = {
            'pics': []
            
        }
    }
    
    componentDidMount() {
        this.getPics();
        
    }
    
    getPics() {
        fetch('https://api.unsplash.com/collections/4297159?&client_id=4fc5dec670dc9f6f8fa81b1c5abfe37c988fab2a510da8183f940463d8482203')
            .then(results => results.json())
            .then(results => this.setState({'pics': results}));
    }
    
    render () {
    return (
        <ul>
            {this.state.pics.map(function(pic, index) {
                return <li>{pic.cover_photo.user.name}</li>
                }
            )}
        </ul>
        
    )
    }
}

export default PostPic