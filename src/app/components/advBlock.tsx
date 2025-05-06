import React from 'react';
import Advertisement from './advertisement';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import { AdvState } from '../../features/advButton/slice';


function AdvBlock() {
    const ads = useSelector((state: RootState) => state.adv)
    const currentUser = useSelector((state: RootState) => state.user)
    const myADS = ads.filter(element => element.creatorName === currentUser.username)
    let userAds: AdvState[] = []

    if (!currentUser.moderator) {
        userAds = ads.filter(element => element.isModer)

    } else userAds = ads

    return (
        <div className='advBlock'>
            <h1>Ближайшие события</h1>
            <div className='allADV'>
                {userAds.map(element => <Advertisement advObj={element} />)}
            </div>

            <div className='my'>
                <h1>Мои события</h1>
                <div className='myADV' id="myADV">
                    {myADS.map(element => <Advertisement advObj={element} />)}
                </div>
            </div>
        </div>

    )
}

export default AdvBlock