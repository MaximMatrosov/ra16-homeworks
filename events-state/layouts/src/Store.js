import React, {useState} from 'react';
import CardsView from './CardsView';
import IconSwitch from './IconSwitch';
import ListView from './ListView';

export default function Store({data}) {
    const [icon, setIcon] = useState("view_list");

    const onSwitch = () => {
        setIcon((prevIcon) => {
            return prevIcon === "view_list" ? "view_module" : "view_list";
        });
    }

    return <div className='store'>
        <IconSwitch icon={icon} onSwitch={onSwitch}/>
        {icon === "view_list" && <CardsView cards={data} />}
        {icon === "view_module" && <ListView items={data} />}
    </div>
}