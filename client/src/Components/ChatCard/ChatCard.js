import React from 'react';

const ChatCard = () => {
    return (
        <div className={'flex item-center justify-center py-2 group cursor-pointer'}>
            <div className={'w=[20%'}>
                <image className={'h-14 w-14 rounded-full'} src={'https://static-cdn.icons8.com/l/3d/images/2_thumb_up_man_2.webp'} alt={''}/>
            </div>
            <div className={'pl-5 w-[80%]'}>
                <div className={'flex justify-between items-center'}>
                    <p className={'text-lg'}>username</p>
                    <p className={'text-sm'}>timestamp</p>
                </div>
                <div className={'flex justify-between items-center'}>
                    <p>message...</p>
                    <div classname={'flex space-x-2 items-center'}>
                        <p className={'text-xs py-1 px-2 text-white bg-green-500 rounded-full'}></p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ChatCard;
