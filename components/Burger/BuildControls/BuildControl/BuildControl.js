import React from 'react';
import './BuildControl.css'

const buildControl = (props) => (
    <div className ="BuildControl">
        <div className ="Label">{props.ingridientMark}</div>
        <button className="BuildControlLess" 
                onClick = {props.removing} 
                disabled = {props.disabling}>Убрать</button>
        <button className="BuildControlMore" 
                onClick = {props.adding}>Добавить</button>
    </div>
)

export default buildControl;