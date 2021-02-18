import React from 'react'
export const Boginosson = (props) => {
    const { urt, bogino } = props;
    return (
        <div className='font-ubuntu flex w-9 flex-wrap'>
            <div className='ph-5'>
                <p className='fs-16 ln-18 o-05'>Өгөгдсөн холбоос:</p>
                <p>{urt}</p>
            </div>
            <div className='ph-5'>
                <p className='fs-16 ln-18 o-05'>Богино холбоос:</p>
                <a href={bogino}>{bogino}</a>
            </div>
        </div>
    );
}