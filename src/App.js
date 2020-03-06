import React, { Component } from 'react';
import './App.css';
import PhoneInfoList from'./components/PhoneInfoList' ;
import PhoneForm from './components/PhoneForm';
class App extends Component{
  num=1;
  state ={
    information:[
      {
        name:'김현수',
        phone:'01055775942',
        id:0
      }
    ]
  }
  handleCreate = (data)=>{
    console.log(data);
    const{information}=this.state;
    var tmp=data.phone.replace(/-/g,'');
    var tmp2={...data,phone:tmp};
    this.setState({
      information:information.concat({id:this.num++,...tmp2})
    })
  }
  handleRemove = (id)=>{
    const{information}=this.state;
    this.setState({
      information:information.filter(xy => xy.id != id)
    })
  }
  handleUpdate = (id,data)=>{
    const{information}=this.state;
    var tmp=data.phone.replace(/-/g,'');
    var tmp2={...data,phone:tmp};
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...tmp2 } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 유지
      )
    })
  }
  render(){

    return(
      <div>
        <p >
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cUMT4pw0Q78?rel=0&start=1&end=55&loop=1&autoplay=1&playlist=cUMT4pw0Q78" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen ></iframe>
        </p>

       <PhoneForm onCreate={this.handleCreate }/> 
      <PhoneInfoList 
      data={this.state.information}
      onRemove={this.handleRemove}
      onUpdate={this.handleUpdate}
      />
      
      </div>
    );
  }
}


export default App;
