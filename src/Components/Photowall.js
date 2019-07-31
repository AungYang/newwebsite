import React, {Component} from 'react'
import Photo from './Photo'

class Photowall extends Component {

    render(){
        return <div className="photoGrid">
        {this.props.expList.map((item, index) => <Photo key={index}item={item}/>)}        
        </div>
    }
}

export default Photowall