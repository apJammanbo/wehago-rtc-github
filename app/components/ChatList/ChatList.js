
/**
 *  채팅리스트 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Scrollbars } from 'react-custom-scrollbars';

import ChatListItem from '../../components/ChatListItem'

class ChatList extends React.PureComponent {
    constructor() {
        super();
        this.scrollFix = false;
    }

    componentDidUpdate() {
        if(!this.scrollFix) {
            this.refs.scrollbars.scrollToBottom();
        }
    }

    // 채팅 추가 될 때마다 맨아래로 고정 (스크롤 밑에서 100px까지는 맨아래로)
    // 스크롤이 중간에 있을 경우는 스크롤 유지
    handleScroll = (evt) => {
        let scrollTop = evt.target.scrollTop;
        let scrollHeight = evt.target.scrollHeight;
        let clientHeight = evt.target.clientHeight;
        const px = 100;
        const calc = ((scrollTop + px) / (scrollHeight - clientHeight));

        if(calc > 1) {
            this.scrollFix = false;
        }else {
            this.scrollFix = true;
        }
    }

    /**
     * Render
     */
    render() {
        return (
            // [D] chat_view bottom 값은 chat_input 높이 값 변화에 따라 삽입
            <div className="chat_view" style={{bottom: this.props.chatViewBottom}}>
                <Scrollbars
                    className="custom_scroll"
                    ref="scrollbars"
                    autoHide
                    autoHideTimeout={500}
                    autoHideDuration={100}
                    onScroll={this.handleScroll}
                    style={{overflow: "hidden", boxSizing: 'border-box'}}
                >
                    {
                        this.props.chatList.map((chat, key) => {
                            return <ChatListItem key={key} chat={chat} userList={this.props.userList}/>
                        })
                    }
                </Scrollbars>
            </div>
        );
    }
}

/**
 * PropType 정의
 */
ChatList.propTypes = {
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
};

export default ChatList;
