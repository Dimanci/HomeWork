import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Star";
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff1/OnOff";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    let [accordionValue, setAccordionValue] = useState<boolean>(false)
    let [switchOnOff, setSwitchOnOff] = useState(false)
    return (<div className={'app-wrapper'}>
            <PageTitle title={'This is new APP'}/>
            <PageTitle title={'My friends'}/>
            <Accordion titleValue={'Menu'} collapsed={() => setAccordionValue(!accordionValue)}
                       accordionValue={accordionValue}/>
            {/*<Accordion titleValue={'Users'}/>*/}
            <Rating/>
            {/*            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

            <OnOff switchOnOff={switchOnOff} setSwitch={setSwitchOnOff}/>
            <UncontrolledOnOff setSwitch={setSwitchOnOff}/> {switchOnOff.toString()}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h2>{props.title}</h2>
}

export default App;
