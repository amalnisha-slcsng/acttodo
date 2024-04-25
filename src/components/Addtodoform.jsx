import { useState } from "react";

function Addtodoform(props) {
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    const [newactivity, setNewactivity] = useState("");

    const handlechange = (e) => {
        setNewactivity(e.target.value);
    };

    const addactivity = () => {
        const newActivityObj = {
            id: activityArr.length + 1,
            activity: newactivity
        };
        setActivityArr([...activityArr, newActivityObj]);
        setNewactivity(""); // Clearing the input field
    };

    return (
        <div>
            <h1 className="text-2xl font-medium my-2">Manage Activities</h1>
            <div>
                <input
                    value={newactivity}
                    onChange={handlechange}
                    type="text"
                    className="border border-black bg-transparent p-1"
                    placeholder="Next Activity"
                />
                <button onClick={addactivity} className="bg-black text-white p-1 border border-black">Add</button>
            </div>
        </div>
    );
}

export default Addtodoform;
