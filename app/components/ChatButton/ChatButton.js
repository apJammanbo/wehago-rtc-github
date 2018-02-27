
/**
 * 툴박스의 채팅버튼 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';

class ChatButton extends React.PureComponent {
    /**
     * Render
     */
    render() {
        return (
            <div className="gnb_popover gnb_pop_chat">{/* [D] 활성화시 active 클래스 추가 */}
                <div className="gnb_btn">
                    <button type="button" className="btn btn_rtcchat" onClick={this.props.onChangeChatArea}><span className="sp_rtc">동영상가이드</span></button>
                    {/* [D] 버튼 눌렀을 경우 .wrap 에 chat_on 클래스 추가 */}
                </div>
            </div>
        );
    }
}

/**
 * PropType 정의
 */
ChatButton.propTypes = {
    /**
     * 채팅창을 true,false로 컨트롤 할 수 있는 함수입니다.
     */
    onChangeChatArea: PropTypes.func,
};

export default ChatButton;
