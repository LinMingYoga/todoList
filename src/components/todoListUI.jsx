import React from 'react';
import logo from "../logo.svg";
import "antd/dist/antd.css";
import "../App.css";
import { List } from "antd";
import AddInput from "../components/addInput";

const ToDoListUI = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddInput addHandle={props.addBtn}></AddInput>
        <div style={{ width: "500px", marginTop: "10px" }}>
          <List
            className="lm-list"
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={() => {
                  props.delItem(index);
                }}
              >
                {item.type}
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

// class ToDoListUI extends Component {
//   render() { 
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <AddInput addHandle={this.props.addBtn}></AddInput>
//           <div style={{ width: "500px", marginTop: "10px" }}>
//             <List
//               className="lm-list"
//               bordered
//               dataSource={this.props.list}
//               renderItem={(item, index) => (
//                 <List.Item onClick={() => { this.props.delItem(index); }}>
//                   {item.type}
//                 </List.Item>
//               )}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
 
export default ToDoListUI;