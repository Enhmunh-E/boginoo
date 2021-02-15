import React from 'react';
import { IconDash, IconEndBracket, IconStartBracket} from './';
export const Logo = () => {
    return (
        <div className='flex-center w100'>
            <div className='flex justify-between items-center boginoo-icon'>
                <div className=''><IconStartBracket /></div>
                <div className='pb-2'><IconDash /></div>
                <div className=''><IconEndBracket /></div>
            </div>
        </div>
    );
}