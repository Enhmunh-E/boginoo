import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player'
export const Loading = (props) => {
    const { plays } = props;
    const [animationData,setAnimationData] = useState();
    useEffect(() => {
        import('../json/loading.json').then(setAnimationData);
    }, [])
    if (!animationData) return <div>Loading...</div>
    return <Lottie loop animationData={animationData} play={plays} />
}