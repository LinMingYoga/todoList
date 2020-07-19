import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  delItem(index) {
    this.props.delItem(index)
  }
  componentWillUnmount() {
    console.log('ddddd');
  }
  render() { 
    return (
      <div>
        <li style={{ cursor: 'pointer' }} onDoubleClick={this.delItem.bind(this, this.props.index)}>{this.props.content}</li>
      </div>
    );
  }
}

// 传参校验
ListItem.propTypes = {
  content: PropTypes.string.isRequired, // 必传且是字符串
  index: PropTypes.number,
  delItem: PropTypes.func
}

// 设置默认值
ListItem.defaultProps = {
  content: '',
}
 
export default ListItem;