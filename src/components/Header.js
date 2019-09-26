import React, {Component} from 'react';
import "./Header.css"

class Header extends Component {

   render(){
       return (
           <div>
               <h1>LxL , Blog</h1>
               <h2 id="describe">this is blog used to describe my learning</h2>
           </div>
       )
   } 
}

export default Header;