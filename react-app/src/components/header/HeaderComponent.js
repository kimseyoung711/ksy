import React, { useRef, useEffect } from 'react';
import { Input } from 'semantic-ui-react';

const HeaderComponent = () => {
    const dref = useRef();

    useEffect(() => {
        const useDref = dref.current;
        const event = useDref.querySelector('div.search-wrap > span.orderIcon');
    });

    const onChange = (e, data) => {
        console.log('@@@@', data);
        const value = data.value;
        if(value) {
            
        }
    }

    

    // const onChange = (e, data) => {
    //     const dataValue = data.value;
    //     if(dataValue) {
    //         orderIcon(dref);
    //     }
    // };

    return (
        <div>
            <div className="useHeaderComponents">
                <div className="useHeader__wrapper">
                    <div className="logo_wrap after">
                        <h1 className="logo ft14">
                            ux/ui
                        </h1>
                    </div>
                    <div className="search-wrap after" ref={dref}>
                        <Input className="pxw-200" icon="search" iconPosition="left" onChange={onChange}/>
                        <span className="orderIcon">x</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;