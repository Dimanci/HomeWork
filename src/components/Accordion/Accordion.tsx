import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: () => void
    accordionValue: boolean
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.collapsed}/>
        {!props.accordionValue && <AccordionBody/>}
    </div>

}

type AccordionPropsTitleType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionPropsTitleType) {
    return <h3 onClick={props.onClick}>---{props.title}---</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}