
/**
 * Sidebar의 채팅영역 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';

import ChatList from '../../components/ChatList';
import Message from '../../components/Message';
import ImmutablePropTypes from 'react-immutable-proptypes';

class ChatArea extends React.PureComponent {
    constructor() {
        super();
        this.state ={
            chatViewBottom: 62
        }
    }

    /**
     * 채팅리스트 bottom 값을 변경하는 함수입니다.
     */
    handleChangeChatViewBottom = (bottom) => {
        this.setState({chatViewBottom: bottom});
    }

    /**
     * Render
     */
    render() {
        // user_area 사이즈에 맞게 chat_area 줄어들게
        // 사용자 5명 이상일 경우 user_area 358px로 고정
        let top = (this.props.userList.size*61) + 60;
        if(this.props.userList.size > 4) {
            top = 358;
        }

        return (
            // [D] chat_area의 top 값은 user_area의 높이 값을 삽입
            <div className="chat_area" style={{top: top}}>
                <ChatList
                    chatList={this.props.chatList}
                    userList={this.props.userList}
                    chatViewBottom={this.state.chatViewBottom}
                />
                <Message
                    onAddMessage={this.props.onAddMessage}
                    sendMessage={this.props.sendMessage}
                    onChangeChatViewBottom={this.handleChangeChatViewBottom}
                />
            </div>
        );
    }
}

/**
 * PropType 정의
 */
ChatArea.propTypes = {
    /**
     * 접속자 리스트입니다.
     */
    userList: ImmutablePropTypes.list,
    /**
     * 채팅 리스트 입니다.
     */
    chatList: ImmutablePropTypes.list,
    /**
     * 채팅리스트 bottom 값 입니다.
     */
    chatViewBottom: PropTypes.number,

    /**
     * 채팅을 추가하는 함수입니다.
     */
    onAddMessage: PropTypes.func,
    /**
     * 채팅리스트 bottom 값을 변경하는 함수입니다.
     */
    onChangeChatViewBottom: PropTypes.func,
};

export default ChatArea;
