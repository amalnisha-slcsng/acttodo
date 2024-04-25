import React from 'react';
import Header from "../components/header";
import Card from "../components/card";
import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom";

function Landing() {
    const data = useLocation();

    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <Header name={data.state.user}></Header>
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23°"} subtitle={"Madurai"}></Card>
                    <Card bgcolor={"#FD6663"} title={"April"} subtitle={"10.30.25"}></Card>
                    <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}></Card>
                </div>
                <Todocontainer></Todocontainer>
            </div>
        </div>
    );
}

export default Landing;
