
/**
 * Sidebar 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';

import UserArea from '../../components/UserArea';
import ChatArea from '../../components/ChatArea';
import ImmutablePropTypes from 'react-immutable-proptypes';

class Sidebar extends React.PureComponent {
    /**
     * Render
     */
    render() {
        return (
            <div className="sidebar">
                <UserArea userList={this.props.userList}
                          maxUser={this.props.maxUser}/>
                <ChatArea onAddMessage={this.props.onAddMessage}
                          chatList={this.props.chatList}
                          userList={this.props.userList}
                          sendMessage={this.props.sendMessage}
                />
            </div>
        );
    }
}

/**
 * PropType 정의
 */
Sidebar.propTypes = {
    /**
     * 접속자 리스트입니다.
     */
    userList: ImmutablePropTypes.list,
    /**
     * 접속자 제한 수 입니다.
     */
    maxUser: PropTypes.number,
    /**
     * 채팅 리스트 입니다.
     */
    chatList: ImmutablePropTypes.list,

    /**
     * 채팅을 추가하는 함수입니다.
     */
    onAddMessage: PropTypes.func,
};

export default Sidebar;
