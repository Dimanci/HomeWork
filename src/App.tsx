import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Star";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    console.log('Rendering App');
    return (<div>
            <PageTitle title={'This is new APP'}/>
            <PageTitle title={'My friends'}/>
            <Rating value={2}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <Rating value={4}/>
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}
function PageTitle (props: PageTitlePropsType) {
    return <h2>{props.title}</h2>
}

export default App;
