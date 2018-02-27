
/**
 * Header ToolBox 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';

import ChatButton from '../../components/ChatButton';
import ShareButton from '../../components/ShareButton';
import SettingButton from '../../components/SettingButton';
import ExitButton from '../../components/ExitButton';

class ToolBox extends React.PureComponent {
    /**
     * Render
     */
    render() {
        return (
            <div className="horizon_gnb">
                <button type="button" className="btn btn_menu"><span className="sp_gnb">메뉴</span></button>
                {
                    this.props.tool ?
                        <div className="horizon_gnb_section">
                            <ChatButton onChangeChatArea={this.props.onChangeChatArea}/>
                            <ShareButton/>
                            <SettingButton
                                speakSensor={this.props.speakSensor}
                                onChangeSpeakSensor={this.props.onChangeSpeakSensor}
                            />
                            {/*<ExitButton/>*/}
                        </div> : null
                }
            </div>
        );
    }
}

/**
 * PropType 정의
 */
ToolBox.propTypes = {
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

export default ToolBox;
