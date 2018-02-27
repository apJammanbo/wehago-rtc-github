
/**
 * 사용자리스트 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';


import UserListItem from '../../components/UserListItem';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Scrollbars } from 'react-custom-scrollbars';

class UserList extends React.PureComponent {
    /**
     * Render
     */
    render() {
        let height = this.props.userList.size * 60;
        return (
            <div className="user_listbx" style={{height: height + "px"}}>
                <Scrollbars className="custom_scroll">
                    <ul
                        ref="ul"
                        className="user_list">
                        {
                            this.props.userList.map((user, index) => {
                                return <UserListItem
                                    key={index}
                                    user={user}
                                    index={index}
                                />
                            })
                        }
                    </ul>
                </Scrollbars>
            </div>
        );
    }
}

/**
 * PropType 정의
 */
UserList.propTypes = {
    /**
     * 접속자 리스트입니다.
     */
    userList: ImmutablePropTypes.list,
};

export default UserList;
