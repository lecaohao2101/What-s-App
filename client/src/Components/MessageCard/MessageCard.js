import React from 'react';

const MessageCard = ({isResqUseMessage, content}) => {
    return (
        <div className={`py-2 px-2 rounded-md max-w-[50%] ${isResqUseMessage?"self-start bg-white": "self-end bg-[#d9fdd3"}`}>
            <p>{content}</p>

        </div>
    )
}

export default MessageCard;
