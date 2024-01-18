import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '21fcdcf8-57d0-4077-80ce-c3b8054a9f95',
        props.user.username,
        props.user.secret
    );
    return (
    <div style={{ height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
    )
}

export default ChatsPage