import React, { useEffect, useState } from 'react';
import Advertisement from './advertisement';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import { AdvState } from '../../features/advButton/slice';
import { fetchAdvGetRequest } from '../../pages/mainPage/advSlice';

function AdvBlock() {
    const dispatch = useDispatch();
    const ads = useSelector((state: RootState) => state.allAdv.data)
    const currentUser = useSelector((state: RootState) => state.user)

    const [page, setPage] = useState(0);

    useEffect(() => {
        dispatch(fetchAdvGetRequest(page))
      }, [page, dispatch]);

    const safeAds = Array.isArray(ads) ? ads : [];
    const myADS = safeAds.filter(ad => ad.creatorName === currentUser.username);
    const userAds: AdvState[] = currentUser.moderator ? safeAds : []; // если нужно — добавь фильтрацию

    const handleNext = () => setPage(prev => prev + 1);
    const handlePrev = () => setPage(prev => Math.max(prev - 1, 0));

    return (
        <div className='advBlock'>
            <h1>Ближайшие события</h1>
            <div className='allADV'>
                {userAds.map((element, index) => <Advertisement key={index} advObj={element} />)}
            </div>

            <div className='my'>
                <h1>Мои события</h1>
                <div className='myADV' id="myADV">
                    {myADS.map((element, index) => <Advertisement key={index} advObj={element} />)}
                </div>
            </div>

            <div>
                <button onClick={handlePrev} disabled={page === 0}>← Назад</button>
                <button onClick={handleNext}>→ Далее</button>
            </div>
        </div>
    )
}

export default AdvBlock;