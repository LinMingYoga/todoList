import React, { useState } from "react";
// import store from '../store'
import ToDoListUI from '../components/todoListUI'
// import {addItemAction, delItemAction } from "../store/actionCrearors";

function ToDoList() {
  //  const { inputVal, list } = store.getState();
  const listArr = [
    {
      id: 1,
      type: "React",
    },
    {
      id: 2,
      type: "Vue",
    },
    {
      id: 3,
      type: "Angela",
    }
  ];
  const [inputVal] = useState('')
  const [list, setList] = useState(listArr);

  const addBtn = (val) => {
    // this.setState({
    //   list: [...this.state.list, val]
    // }, () => {
    //   console.log(this.ul.querySelectorAll('li').length);
    // })
    // console.log("val", val);
    // const action = addItemAction(val);
    // store.dispatch(action);
    setList([...list, { id: 4, type: val }]);
    // console.log(setList());
  };
  const delItem = (index) => {
    const newList = list
    newList.splice(index, 1);
    setList([...newList])
    // console.log(index);
    // let list = this.state.list;
    // list.splice(index, 1);
    // this.setState({
    //   list: list,
    // });
    // const action = {
    //   type: DEL_ITEM,
    //   value: index,
    // };
    // const action = delItemAction(index);
    // store.dispatch(action);
    // console.log("store", store.getState());
  };
  return (
    <ToDoListUI
      list={list}
      inputVal={inputVal}
      addBtn={addBtn}
      delItem={delItem}
    ></ToDoListUI>
  );
}

export default ToDoList;