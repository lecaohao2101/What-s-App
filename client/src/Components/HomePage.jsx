import React, {useState} from 'react';
import {TbCircleDashed} from "react-icons/tb";
import {BiCommentDetail} from "react-icons/bi";
import {AiOutlineSearch} from "react-icons/ai";
import {BsEmojiSmile, BsFilter, BsMicFill, BsThreeDotsVertical} from "react-icons/bs";
import {ImAttachment} from "react-icons/im";
import ChatCard from "./ChatCard/ChatCard";
import MessageCard from "./MessageCard/MessageCard";
// import "./HomePage.css"

const HomePage = () => {
    const [querys, setQuerys] = useState(null)
    const [currentChat, setCurrentChat] = useState(null)
    const [content, setContent] = useState("")
    const handleOnClickChatCard = () => {
        setCurrentChat(true);
    };


    const handleSearch = () => {}
    const handleCreateNewMessage = () => {}
    return (
        <div className={'relative'}>
            <div className={'w-full py-14 bg-[#00a884]'}></div>
            <div className={'flex bg-[#f0f2f5] h-[90vh] absolute left-[2vw] top-[vh] w-[96vw]'}>
                <div className={'left w-[30%] bg-[#e8e9ec] h-full'}>
                    <div className={'w-full'}>
                        <div className={'flex justify-between items-center p-3'}>
                            <div className={'flex items-center space-x-3'}>
                                <img className={'rounded-full w-10 h-10 cursor-pointer'}
                                     src={'https://img.freepik.com/free-photo/vibrant-gold-blue-macaw-perched-nature-generated-by-ai_188544-15513.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709251200&semt=ais'}
                                     alt={'Image'}/>
                                <p>username</p>
                            </div>

                            <div className={'space-x-3 text-2xl flex'}>
                                <TbCircleDashed/>
                                <BiCommentDetail/>
                            </div>
                        </div>

                        <div className={'relative flex justify-center items-center bg-white py-4 px-3'}>
                            <input
                                className={'border-none outline-one bg-slate-200 rounded-md w-[93%] pl-9 py-2'}
                                type={'text'}
                                placeholder={'Search or start new chat'}
                                onChange={(e) => {
                                    setQuerys(e.target.value)
                                    handleSearch(e.target.value)
                                }}
                                value={querys}
                            />
                            <AiOutlineSearch className={'left-5 top-7 absolute'}/>
                            <div>
                                <BsFilter className={'ml-4 text-3xl'}/>
                            </div>
                        </div>


                        {/* all user */}
                        <div className={'bg-white overflow-y-scroll h-[70vh] px-3'}>
                            {querys &&
                                [1, 1, 1, 1, 1].map((item) => (
                                    <div onClick={handleOnClickChatCard}>
                                        {" "}
                                        <hr /><ChatCard/>{" "}
                                    </div>
                                    ))}
                        </div>



           =
                    </div>
                </div>
                {/* defaut whats up page page*/}
                {! currentChat &&  <div className={'w-[70%] flex flex-col items-center justify-center h-full'}>
                    <div className={'max-2-[70%] text-center'}>
                        <img
                            src={'https://photo-cms-viettimes.zadn.vn/w800/Uploaded/2024/zdjwpvrwq/2023_04_26/whatsapp-5036.png'}
                            alt={''}/>
                        <h1 classNaem={'text-4xl text-gray-600'}>WhatsApp Web</h1>
                        <p className={'my-9'}>send and reveive message without keeping your phone online.</p>
                    </div>
                </div>}

                {/*MessageCard part*/}
                {currentChat && (
                    <div className={'w-[70%] relative bg-blue-200'}>
                    <div classname={'header absolute top-0 w-full bg-[#f0f2f5]'}>
                        <div className={'flex justify-between'}>
                            <div className={'py-3 space-x-4 flex items-center px-3'}>
                                <img className={'w-10 h-10 rounded-full'} src={'data:image/jpeg;base64,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'} alt={''}

                                />
                                <p>
                                    username
                                </p>
                            </div>
                            <div className={'py-3 flex space-x-4 items-center px-3'}>
                                <AiOutlineSearch className={'text-2xl'}/>
                                <BsThreeDotsVertical className={'text-2xl'}/>
                            </div>
                        </div>
                    </div>

                        {/*messsage section*/}
                        <div className={'px-10 h-[85vh] overflow-y-scroll '}>
                            <div className={'space-y-1 flex flex-col justify-center mt-20-py-2'}>
                                {[1,1,1,1,1].map((item,i)=><MessageCard isReqUserMessage={i%2===0} conntent={"message"}/>)}
                            </div>
                        </div>

                        {/*footer part*/}
                        <div className={'footer bg-[#f0f2f5 absolute bottom-0 w-full py-3 text-2xl'}>
                            <div className={'flex justify-between items-center px-5 relative'}>

                                    <BsEmojiSmile className={'cursor-pointer'}/>
                                    <ImAttachment/>

                                <input
                                    className={'py-2 outline-none border-none bg-white pl-4 rounded-md w-[85%]'}
                                    type={"text"}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder={'Type a message'}
                                    value={content}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            handleCreateNewMessage();
                                            setContent('')
                                        }
                                    }}

                                />
                                <BsMicFill/>
                            </div>

                        </div>

                    </div>)}

            </div>
        </div>
    );
};

export default HomePage;
