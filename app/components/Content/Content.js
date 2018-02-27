
/**
 * Content 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';

import ControlBox from '../ControlBox';
import MainVideo from '../MainVideo';
import SubVideoPanel from '../SubVideoPanel';
import ImmutablePropTypes from 'react-immutable-proptypes';

class Content extends React.PureComponent {
    /**
     * Render
     */
    render() {
        const {
            mainUserId,
            userList,
            onChangeMainUser,
        } = this.props;

        let mainUser = userList.find((user) => {
            return mainUserId === user.get('userid');
        });

        let subUserList = userList.filter(user => user.get('userid') !== mainUserId);
        let subUserCount = subUserList.size;

        return (
            <div className="content">
                {/*<ControlBox/>*/}
                <MainVideo
                    mainUser={mainUser}
                />
                {subUserCount > 0 ?
                    <SubVideoPanel
                        subUserList={subUserList}
                        onChangeMainUser={onChangeMainUser}
                    />: null}
            </div>
        );
    }
}

/**
 * PropType 정의
 */
Content.propTypes = {
    /**
     * 접속자 리스트입니다.
     */
    userList: ImmutablePropTypes.list,
    /**
     * 메인에 보여져야하는 유저 입니다.
     */
    mainUserId: PropTypes.string,

    /**
     * 메인에 보여질 유저가 바뀔때 발생하는 함수입니다.
     */
    onChangeMainUser: PropTypes.func,
};

export default Content;
