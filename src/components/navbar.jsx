import React,{Component} from "react";
import "./menu.css"
import { Link } from "react-router-dom";
class NavBar extends Component{
  state={
     person:{search:''},
  }
  handlechange=(e)=>{
    const { currentTarget : input}=e;
    let s1={...this.state};
    s1.person[input.name]= input.value;
    console.log(s1);
    this.setState(s1);
    this.props.onOptionChange(s1.person.search)
}
    render(){
       let {search}=this.state.person;
        return (
          <nav className="navbar navbar-expand-lg navbar-light ">
            <Link to={"/"} className="navbar-brand"></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link text-warning" to={'/all'}>All</Link>        
                </li>
                <li className="nav-item">
              <Link className="nav-link text-warning" to={'/breakfast'}>BreakFast</Link>        
                </li>
                <li className="nav-item">
              <Link className="nav-link text-warning" to={'/lunch'}>Lunch</Link>        
                </li>
                <li className="nav-item">
              <Link className="nav-link text-warning" to={'/shakes'}>Shakes</Link>        
                </li>
                <li className="nav-item">
                <div className="form-group">
                   <input 
                   className="form-control border-danger"
                   type="text"   
                   id="search"
                   name="search" 
                   value={search} 
                   onChange={this.handlechange}
                   placeholder="Search by name..."
                   />
               </div>   
                </li>
               </ul>
               
              
            </div>
        </nav>
        );
    }
}
export default NavBar;
