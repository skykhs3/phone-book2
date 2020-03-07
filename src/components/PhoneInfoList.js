import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove:()=>console.warn('OnRemove not defined'),
    onUpdate:()=>console.warn('OnUpdate not defined')
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }
  render() {
    const { data,onRemove,onUpdate } = this.props;
    const list = data.map(
      (x)=> (<PhoneInfo 
      key={x.id}
      infoProp={x}
      onRemove={onRemove}
      onUpdate={onUpdate}
      />)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default PhoneInfoList;