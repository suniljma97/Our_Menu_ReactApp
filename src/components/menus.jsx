import React,{Component} from "react";
import "./menu.css"
class Menus extends Component{ 
addToCart=(id)=>{
    this.props.onSubmit(id);
}
    render(){
        let {type}=this.props.match.params;
        let {menus,cart,removeItems}=this.props
        let arr=type==="all"?menus:menus.filter((s1)=>s1.type===type);
        return(
               <div className="row">
                {arr.map((s1,index)=>
                <div className="col-5 m-1 br1" key={index}>
                   <div className="row">
                      <div className="col-4 img1">
                         <img src={s1.img} className="img2" alt="" />
                      </div>
                      <div className="col-8">
                         <div className="row border-bottom">
                             <div className="col-10 name1">
                               {s1.menuname}
                             </div>
                             <div className="col-2 price1">
                                 ${s1.price}
                             </div>
                         </div>
                         <div className="desc">
                             {s1.description}
                         </div>
                      </div>
                   </div>
                   <div className="text-center">
                       {cart.find(a=>a.id===s1.id)? 
                        <button className="btn btn-danger btn-sm" onClick={()=>removeItems(s1.id)}>
                          &nbsp;Remove to Cart</button> :
                        <button className="btn btn-success btn-sm" onClick={()=>this.addToCart(s1.id)}>
                        <i className="fas fa-shopping-cart text-white bg-success"></i>
                         &nbsp;Add to Cart</button>
                       }
                     
                   </div>
                   
                </div>
                )}
              </div>
            
        );
    }      
  }
export default Menus;
