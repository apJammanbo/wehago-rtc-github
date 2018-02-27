
/**
 * Header 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';

import ToolBox from '../ToolBox';

// 이미지 로드
import '!file-loader?name=[name].[ext]!../../images/wehago_logo2.png';

class Header extends React.PureComponent {
    /**
     * Render
     */
    render() {
        return (
            <div id="header" className="header">
                <div className="horizon_header rtc_header">
                    <div className="main_title">
                        <h1><a href="#"><img src="/wehago_logo2.png" width={109} height={22} alt="WEHAGO" /></a></h1>
                    </div>

                    <div className="service_title">
                        <h2>{this.props.subHeaderText}</h2>
                    </div>

                    <ToolBox onChangeChatArea={this.props.onChangeChatArea}
                             onChangeSpeakSensor={this.props.onChangeSpeakSensor}
                             share={this.props.share}
                             setting={this.props.setting}
                             tool={this.props.tool}
                             speakSensor={this.props.speakSensor}
                    />
                </div>
            </div>
        );
    }
}

/**
 * PropType 정의
 */
Header.propTypes = {
    /**
     * SubHeader 타이틀 입니다.
     */
    subHeaderText: PropTypes.string,
    /**
     * 툴박스 노출여부 입니다.
     */
    tool: PropTypes.bool,
    /**
     * 말하기감지기능 설정 입니다.
     */
    speakSensor: PropTypes.bool,

    /**
     * 채팅창을 true,false로 컨트롤 할 수 있는 함수입니다.
     */
    onChangeChatArea: PropTypes.func,
    /**
     * 말하기 감지기능 설정하는 함수입니다.
     */
    onChangeSpeakSensor: PropTypes.func,
};

export default Header;
