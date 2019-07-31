import React, {Component} from 'react'

class Photo extends Component{
    render(){
        const item = this.props.item
        return <figure className="figure" >
            <img className="photo"src={item.imageLink} alt={item.desc}/>
            <figcaption> <p> {item.desc} </p>  </figcaption>
           
        </figure>
    }
}

export default Photo