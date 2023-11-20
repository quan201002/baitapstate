import React, { Component } from 'react'
import {data} from "./data"
import './Styling.css'
export default class Changeglass extends Component {
state = {
  item: null,
};
renderGlasses = () => {
  return data.map( (item)=>{
    return (
      <div className="glass-selection p-3 col-4"> 
          <img src={item.url} className="glass" onClick={()=>{
            this.setState({
              item:item,
            });
            this.renderModalGlass(this.state.item);
            this.renderInfoGlass(this.state.item);
          }}
          />
      </div>
    )
  });
}
renderModalGlass = (item) => {
  if(item !== null && item.url !== null){
    return <img src={item.url} className="model-glass"></img>
  };
}
renderInfoGlass = (item) => {
  if(item !== null && item.desc !== null){
    return <div className="glass-info">{item.desc}</div>
  }
}
render(){
  return (
    <div>
      <div className="bg-container">
        <div className="model">
          <img className="leftImg" src="./glassesImage/model.jpg" alt="" />
          <img className="rightImg" src="./glassesImage/model.jpg" alt="" />
          {this.renderModalGlass(this.state.item)}
          {this.renderInfoGlass(this.state.item)}
        </div>
        <div className="row list-glasses container">
          {this.renderGlasses()}
        </div>
      </div>
    </div>
  )
}

}
