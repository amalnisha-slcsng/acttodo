import { useState } from "react";
import Todoitem from "./Todoitem";


function Addtodolist(props) {
  const activityArr=props.activityArr
const setActivityArr=props.setActivityArr
    
  

  return (
    <div>
      <h1 className="font-medium text-2xl">Today's Activity</h1>
      {activityArr.length===0?<p>You haven't added anything yet</p>:""}

      {
        activityArr.map(function(item,index){
            return (
                <Todoitem id={item.id} item={item} index={index} setActivityArr={setActivityArr} activityArr={activityArr}></Todoitem>
            )
        })
      }
    </div>
  );
}

export default Addtodolist;
