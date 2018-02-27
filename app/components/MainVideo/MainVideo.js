
/**
 * ControlBox 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';


class MainVideo extends React.PureComponent {
    constructor() {
        super();
        this.videoId = "";
    }

    componentDidUpdate() {
        let media = null;
        if(this.props.mainUser) {

            media = this.props.mainUser.get('mediaElement');

            // 메인 유저가 설정이 되어있고 비디오 ID가 다르면 비디오 컴포넌트를 설정한다.
            if(this.videoId !== media.getAttribute("id")) {
                let container = this.refs.mainVideo;
                if(container.children.length === 2) {
                    container.removeChild(container.children[1]);
                }
                media.controls = false;
                media.className = "reverse"
                media.style.width = "100%";
                media.style.height = "100%";
                container.appendChild(media);

                // 설정이 완료되면 비디오 아이디를 설정된 값으로 갱신한다.
                this.videoId = media.getAttribute("id");

                setTimeout(() => {media.play();}, 1000);
            }
        }
    }
    /**
     * Render
     */
    render() {
        return (
            <div className="active_mov" ref="mainVideo" style={{backgroundColor: '#000'}}>
                {
                    this.props.mainUser ?
                        <div className="floating_namebx">
                            <div className="namebx active">
                                <button type="button" className="LUX_basic_btn Default basic btn_mic on"><span className="sp_rtc">마이크</span></button>
                                {/* [D] 마이크 활성화시 on 클래스 추가 */}
                                <strong className="name ellipsis">{this.props.mainUser.getIn(['extra', 'name'])}</strong>
                                <div className="mic_state active">
                                    {/* [D] 말을 하고 있을 경우.mic_state, .namebx DIV 에 active 클래스 추가*/}
                                    <span className="wave pseudo-a pseudo-b"><span /></span>
                                    {/*<span class="pulse pseudo-a pseudo-b"></span>*/}
                                </div>
                            </div>
                        </div> : null
                }
            </div>
        );
    }
}

/**
 * PropType 정의
 */
MainVideo.propTypes = {
    /**
     * 메인에 보여줘야할 유저 입니다.
     */
    mainUser: ImmutablePropTypes.map,
};

export default MainVideo;
