
/**
 * ControlBox 입니다.
 * 메인화면에 카메라와 마이크등을 설정하는 박스
 */

import React from 'react';
import PropTypes from 'prop-types';

class ControlBox extends React.PureComponent {
    /**
     * Render
     */
    render() {
        return (
            <div className="func_bx">
                {/* [D] 활성화시 on 클래스 추가 */}
                <button type="button" className="LUX_basic_btn Default basic btn_mic"><span className="sp_rtc">마이크</span></button>
                <button type="button" className="LUX_basic_btn Default basic btn_speaker on"><span className="sp_rtc">스피커</span></button>
                <button type="button" className="LUX_basic_btn Default basic btn_mov on"><span className="sp_rtc">영상</span></button>
            </div>
        );
    }
}

/**
 * PropType 정의
 */
ControlBox.propTypes = {

};

export default ControlBox;
