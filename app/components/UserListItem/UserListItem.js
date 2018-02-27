
/**
 * 사용자리스트 아이템 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';

// 이미지 로드
import '!file-loader?name=[name].[ext]!../../images/@img2.gif';
import ImmutablePropTypes from 'react-immutable-proptypes';

class UserListItem extends React.PureComponent {
    /**
     * Render
     */
    render() {
        const {
            user,
        } = this.props;

        return (
            // [D] 본인일 경우 me 클래스 추가
            <li className={this.props.index===0?"me":null}>
                <span className="imgbx">
                    <span className="photo" style={{backgroundImage: 'url(/@img2.gif)'}} />
                </span>
                <span className="namebx ellipsis">{user.getIn(['extra','name'])}
                    <span style={{visibility:user.getIn(['extra','wehagoid'])?"visible":"hidden"}}>
                        ({user.getIn(['extra','wehagoid'])})
                    </span>
                </span>
                <span className="label smallfont" style={{visibility:!user.getIn(['extra','wehagoid'])?"visible":"hidden"}}>외부참여자</span>
                {/*[D] 마이크 활성화시 mic_on 클래스 추가*/}
                <div className="btnbx">
                    <button type="button" className="LUX_basic_btn Default basic btn_speaker on" style={{visibility:this.props.index===0?"visible":"hidden"}}><span className="sp_rtc">스피커</span></button>
                    <button type="button" className="LUX_basic_btn Default basic btn_mov on" style={{visibility:this.props.index===0?"visible":"hidden"}}><span className="sp_rtc">영상</span></button>
                    <button type="button" className="LUX_basic_btn Default basic btn_mic on"><span className="sp_rtc">마이크</span></button>
                </div>
            </li>
        );
    }
}

/**
 * PropType 정의
 */
UserListItem.propTypes = {
    /**
     * 접속자리스트에 표시해야하는 접속자 입니다.
     */
    user: ImmutablePropTypes.map,
};

export default UserListItem;
