import React, { Component } from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import Photowall from './Photowall'
import ProfilePic from './ProfilePic'


const expList =[{
  desc: "Job X",
  imageLink: "https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg"
}, {
   desc: "Job Y",
   imageLink: "https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg"
}, {
   desc: "Job Z",
   imageLink: "https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg"
}]




class Main extends Component {
    render() {
        return <div>
            <ProfilePic/>
            <Title title={'Aung Yang'} />
            <Subtitle title={'Design-Oriented Thinker'} />
            <Photowall expList={expList}/>
        </div>
    }
}


export default Main