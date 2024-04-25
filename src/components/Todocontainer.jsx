import React, { useState } from 'react';
import Addtodoform from "./Addtodoform";
import Addtodolist from "./Addtodolist";

function Todocontainer() {
    const [activityArr, setActivityArr] = useState([
        {
          id: 1,
          activity: "Go for a Walk",
        },
        {
            id:2,
            activity:"Eat a Break Fast"
        }
    ]);

    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-5 flex-wrap">
                <Addtodoform activityArr={activityArr} setActivityArr={setActivityArr}/>
                <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
                <Addtodolist activityArr={activityArr} setActivityArr={setActivityArr} />

                </div>
            </div>
        </div>
    );
}

export default Todocontainer;
