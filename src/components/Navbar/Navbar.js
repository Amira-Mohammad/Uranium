import React , {Component} from 'react';


import './Navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  
  render(){
    return (
      <div className="Navbar">
      <div>
      <i class="far fa-abacus"></i>
      
  


      </div>
      <div>MASTERCLASS</div>
        
        <div className="searchLogin" >
          <span>
            <i className="fas fa-search"></i>
            <a className="search" >Search</a>
            <a className="login">login</a>
            </span>  
        </div>
      </div>
    );

  }
 
}

export default Navbar;
