
/**
 * 서브비디오 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';
import SubVideo from './SubVideo';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Scrollbars } from 'react-custom-scrollbars';

class SubVideoPanel extends React.PureComponent {
    /**
     * Render
     */
    render() {
        const {
            subUserList,
            onChangeMainUser,
        } = this.props;

        let subVideos = subUserList.map((user) => {
            return (
                <SubVideo
                    key={user.get('userid')}
                    user={user}
                    onChangeMainUser={onChangeMainUser}
                />
            )
        })

        return (
            <div className="user_mov">
                {subVideos}
            </div>
        );
    }
}

/**
 * PropType 정의
 */
SubVideoPanel.propTypes = {
    /**
     * 서비 비디오에 표시해야하는 접속자 리스트 입니다.
     */
    subUserList: ImmutablePropTypes.list,

    /**
     * 메인에 보여질 유저가 바뀔때 발생하는 함수입니다.
     */
    onChangeMainUser: PropTypes.func,
};

export default SubVideoPanel;
