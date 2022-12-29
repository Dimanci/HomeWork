import React, {useState} from 'react';
import './UncontrolledOnOff.css'

type uncontrolledPropsType = {
    setSwitch: (on: boolean) => void
}
const UncontrolledOnOff = (props: uncontrolledPropsType) => {
    let [on, setOn] = useState(false)
    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '2px',
        padding: '3px',
        backgroundColor: on ? '#7fff00' : '#fff'

    }
    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '2px',
        padding: '3px',
        backgroundColor: on ? '#fff' : '#dc143c'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '2px',
        backgroundColor: on ? '#7fff00' : '#dc143c'
    }
    const switchOn = () => {
        setOn(true)
        props.setSwitch(true)
    }
    const switchOff = () => {
        setOn(false)
        props.setSwitch(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={switchOn}>On</div>
            <div style={offStyle} onClick={switchOff}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UncontrolledOnOff;