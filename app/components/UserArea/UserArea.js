
/**
 * Sidebar의 사용자영역 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';

import UserList from '../../components/UserList';
import ImmutablePropTypes from 'react-immutable-proptypes';

class UserArea extends React.PureComponent {
    /**
     * Render
     */
    render() {
        return (
            <div className="user_area">
                <h3 className="pseudo-a">화상대화 참여자(<span className="data">{this.props.userList.count()}</span>/{this.props.maxUser})</h3>
                <UserList userList={this.props.userList}/>
            </div>
        );
    }
}

/**
 * PropType 정의
 */
UserArea.propTypes = {
    /**
     * 접속자 리스트입니다.
     */
    userList: ImmutablePropTypes.list,
    /**
     * 접속자 제한 수 입니다.
     */
    maxUser: PropTypes.number,
};

export default UserArea;
