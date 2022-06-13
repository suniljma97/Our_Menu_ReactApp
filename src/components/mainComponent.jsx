import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { getMenus } from "./data.js"
import NavBar from "./navbar";
import Menus from "./menus";
import "./menu.css"
class MainComponent extends Component {
    state = {
        cart: [],
        menus: getMenus(),
    }
    handleSubmit = (id) => {
        let s1 = { ...this.state };
        let p2=s1.cart.find(s=>s.id===id);
        if(p2)
         p2.qty=p2.qty+1;
        else{
            let p3 = s1.menus.find(s1 => s1.id === id);
            s1.cart.push({ ...p3, qty: 1 });
        }
        this.setState(s1);
    }
    Inc=(id)=>{
        let  s1={...this.state}
        let s2=s1.cart.find((s)=>s.id===id);
        s2.qty=s2.qty+1;
        this.setState(s1);
    }
    Dec=(id)=>{
        let  s1={...this.state}
        let s2=s1.cart.find((s)=>s.id===id);
        if(s2.qty>1) 
           s2.qty=s2.qty-1
            else
           this.onDelete(id);
        this.setState(s1);
    }
    onDelete=(id)=>{
        let  s1={...this.state}
        let index=s1.cart.findIndex((s)=>s.id===id);
        s1.cart.splice(index,1)
        this.setState(s1);
    }
    handleThis=(value)=>{
    this.setState({search:value})
    }
    getQty=(arr)=>arr.reduce((acc,curr)=>acc+curr.qty,0);
    render() {
        let { cart, menus ,search } = this.state;
        let qTy=this.getQty(cart);
        let arr1=search?menus.filter((k1)=>k1.menuname.toLowerCase().includes(search.toLowerCase())):menus;
        return (
            <div className="container">
                   <div className="row">
                    <div className="col-3 col3 border">
                     {cart.length === 0 ?
                     <h5 className="info">Cart is Empty</h5> :
                    <div>
                     {cart.map((s2,index) =>
                        <div className="row" key={index}>
                            <div className="col-4">
                                <img src={s2.img} className="img3" alt="" />
                           </div>
                            <div className="col-8">
                                <div className="name1 border-bottom">{s2.menuname}</div>
                                <div className="desc">{s2.description}</div>
                            </div>
                                <div className="text-right border-bottom float-end">
                                    <button className="btn btn-success btn-sm" onClick={()=>this.Inc(s2.id)}>+</button>
                                    <button className="btn btn-secondary btn-sm m-1" disabled>{s2.qty}</button>
                                    <button className="btn btn-warning btn-sm" onClick={()=>this.Dec(s2.id)}>-</button>
                                    <button className="btn btn-danger btn-sm m-1" onClick={()=>this.onDelete(s2.id)}>x</button>
                                </div>
                             </div>
                        )}
                    </div>}
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-6 text">Our Menu</div>

                            <div className="col-3 item1">
                                <div className="position-relative"><i className="fas fa-shopping-cart item"></i>
                                    {cart.length === 0 ? "" 
                                    : <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
                                        {qTy}
                                     </span>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="hrr"></div>
                        <br />
                        <NavBar onOptionChange={this.handleThis} />
                        <br />
                        <Switch>
                            <Route path="/:type"
                             render={(props) => <Menus {...props} cart={cart} removeItems={this.onDelete} menus={arr1} onSubmit={this.handleSubmit} />} />

                            <Redirect from="/" to="/all" />
                        </Switch>
                    </div>
                </div>

            </div>

        );
    }
}
export default MainComponent;
