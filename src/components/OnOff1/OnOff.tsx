import React, {useState} from 'react';
import './OnOff.css'

type onOffPropsType = {
    switchOnOff: boolean
    setSwitch: (switchOnOff:boolean)=>void
}

const OnOff = (props: onOffPropsType) => {

    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '2px',
        padding: '3px',
        backgroundColor: props.switchOnOff ? '#7fff00' : '#fff'

    }
    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '2px',
        padding: '3px',
        backgroundColor: props.switchOnOff ? '#fff' : '#dc143c'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '2px',
        backgroundColor: props.switchOnOff ? '#7fff00' : '#dc143c'
    }
    const onClicked =()=> {
        props.setSwitch(true)
    }
    const offClicked =()=> {
        props.setSwitch(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;