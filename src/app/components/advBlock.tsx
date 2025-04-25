import React from 'react';
import Advertisement from './advertisement';

function AdvBlock() {
    return (
        <div className='advBlock'>
            <h1>Ближайшие события</h1>
            <div className='allADV'>
                <Advertisement creatorName={''} title={'Новый год'} description={'dasdasdasdasdasddasdasdasdasdasddasdasdasdas  dasddasd  asdasdasda sddas das asdas asd dasdasdasdasdasddasdasdasdasdasd'} eventDate={'12.02.2133'} isModer={true} />
                <Advertisement creatorName={''} title={'День рождения'} description={'аываыфмвсч паывп ывапа вгыпавыправп шавыпаывпр лывап рвыап лвыапвыап выап выап ывап вап выап ыва'} eventDate={'21.54.3421'} isModer={true} />
                <Advertisement creatorName={''} title={'Пасха'} description={'sd fsdg fksdagfh jasdgfsgad kjasdf jksdgfsgakfsdgfhgsdakf sadf gsdafkjsd kfsdf sakfgksajgfskjadgfsadgfkjas'} eventDate={'12.23.5125'} isModer={true} />
                <Advertisement creatorName={''} title={'9 мая'} description={' sdfhjk dsafjdksafahslkfshdajklfasdh fsadfasdfjksadhlfgsdagfhjksadgfsald fgsldafglsafslad'} eventDate={'02.18.2913'} isModer={true} />
                <Advertisement creatorName={''} title={'Лето'} description={'нут тут твыфвосяочл солдфывол фыолваыаоитывитсмырифыврлоа прывфамрывф армыфвам рывфмалорп ывфмапролывфма оывфмафырвоамырфовлмалроыфв мроамыфврома роыфвмаорывфма роымфвоамы фвомаолрыфвм оа'} eventDate={'10.20.1028'} isModer={true} />
            </div>

            <div className='my'>
                <h1>Мои события</h1>
                <div className='myADV'>
                    <Advertisement creatorName={''} title={'NTvf'} description={'dasdasdasdasdasddasdasdasdasdasddasdasdasdas  dasddasd  asdasdasda sddas das asdas asd dasdasdasdasdasddasdasdasdasdasd'} eventDate={''} isModer={false} />
                    <Advertisement creatorName={''} title={'NTvf'} description={'dasdasdasdasdasddasdasdasdasdasddasdasdasdas  dasddasd  asdasdasda sddas das asdas asd dasdasdasdasdasddasdasdasdasdasd'} eventDate={''} isModer={true} />
                    <Advertisement creatorName={''} title={'NTvf'} description={'dasdasdasdasdasddasdasdasdasdasddasdasdasdas  dasddasd  asdasdasda sddas das asdas asd dasdasdasdasdasddasdasdasdasdasd'} eventDate={''} isModer={true} />
                    <Advertisement creatorName={''} title={'NTvf'} description={'dasdasdasdasdasddasdasdasdasdasddasdasdasdas  dasddasd  asdasdasda sddas das asdas asd dasdasdasdasdasddasdasdasdasdasd'} eventDate={''} isModer={true} />
                    <Advertisement creatorName={''} title={'NTvf'} description={'dasdasdasdasdasddasdasdasdasdasddasdasdasdas  dasddasd  asdasdasda sddas das asdas asd dasdasdasdasdasddasdasdasdasdasd'} eventDate={''} isModer={true} />
                    <Advertisement creatorName={''} title={'NTvf'} description={'dasdasdasdasdasddasdasdasdasdasddasdasdasdas  dasddasd  asdasdasda sddas das asdas asd dasdasdasdasdasddasdasdasdasdasd'} eventDate={''} isModer={true} />

                </div>
            </div>
        </div>

    )
}

export default AdvBlock