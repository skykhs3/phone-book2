import React, {Component} from 'react';
class PhoneInfo extends Component{
    static defaultProps ={
        infoProp:{
            name:'이름',
            phone:'010-0000-0000',
            id:0
        }
    }
    state={
        editing: false,
        name:'',
        phone:''
    }
    handleRemove=()=>{
        const{infoProp,onRemove}=this.props;
        onRemove(infoProp.id);
    }
    handleToggleEdit=()=>{
        const { editing } = this.state;
         this.setState({ editing: !editing });
    }
    handleChange=(e)=>{
        const { name, value } = e.target;
        this.setState({
        [name]: value
        });
    }
    componentDidUpdate(prevProps, prevState) {
        // 여기서는, editing 값이 바뀔 때 처리 할 로직이 적혀있습니다.
        // 수정을 눌렀을땐, 기존의 값이 input에 나타나고,
        // 수정을 적용할땐, input 의 값들을 부모한테 전달해줍니다.
    
        const { infoProp, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing) {
          // editing 값이 false -> true 로 전환 될 때
          // info 의 값을 state 에 넣어준다
          // 텍스트 창에서 입력창으로
          this.setState({
            name: infoProp.name,
            phone: infoProp.phone
          })
        }
    
        if (prevState.editing && !this.state.editing) {
          // editing 값이 true -> false 로 전환 될 때
          onUpdate(infoProp.id, {
            name: this.state.name,
            phone: this.state.phone
          });
        }
    }
    render(){
        const style={
            border:'1px solid black',
            padding:'8px',
            margin:'8px'
        };
        const {name,phone}=this.props.infoProp;
        const {editing}=this.state;
        if(editing==false){
        return(
            <div style={style}>
                <div><strong>{name}</strong></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>수정</button>
            </div>
        );
        }
        else{
        return(
            <div style={style}>
                <input value={this.state.name} onChange={this.handleChange} name='name'>
                
                </input>
                <input value={this.state.phone} onChange={this.handleChange}
                name='phone'
                >
                </input>
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>적용</button>
            </div>
        );
        }

    }
}
export default PhoneInfo;