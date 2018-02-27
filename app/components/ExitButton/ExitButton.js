
/**
 * 툴박스의 나가기버튼 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';

class ExitButton extends React.PureComponent {
    /**
     * 주소 및 입력된 정보로 URL을 가져온다.
     */
    getUrl = () => {
        let url_string = window.location.href;
        let room = new URL(url_string).searchParams.get('room');
        // 현재 받아오는 roomid가 없어서 임시로 넣음
        if(!room) {
            room = "test";
        }
        let url = url_string.split('?')[0] + "login?room=" + room;

        return url;
    }

    handleUrl = () => {
        location.href = this.getUrl();

        // 탭닫기
        // window.close();
    }

    /**
     * Render
     */
    render() {
        return (
            <div className="gnb_popover gnb_pop_exit">
                <div className="gnb_btn">
                    <button type="button"
                            className="btn btn_rtcexit"
                            onClick={this.handleUrl}
                    >
                        <span className="sp_rtc">대화방 나가기</span>
                    </button>
                </div>
            </div>
        );
    }
}

/**
 * PropType 정의
 */
ExitButton.propTypes = {

};

export default ExitButton;
