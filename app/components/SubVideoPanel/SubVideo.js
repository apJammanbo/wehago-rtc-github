
/**
 * 서브비디오 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

class SubVideo extends React.PureComponent {
    constructor() {
        super();
        this.videoId = "";
    }

    componentDidMount() {
        this.setVideo();
    }

    componentDidUpdate() {
        this.setVideo();
    }

    /**
     * 유저가 변경되면 변견된 유저에 따라서 비디오 컴포넌트를 설정해준다.
     */
    setVideo = () => {
        let media = this.props.user.get('mediaElement');

        // 비디오 ID가 다르면 비디오 컴포넌트를 설정한다.
        if(this.videoId !== media.getAttribute("id")) {
            let container = this.refs.subVideo;
            if(container.children.length === 1) {
                container.removeChild(container.children[0]);
            }
            media.controls = false;
            media.style.width = "100%";
            media.style.height = "100%";
            media.className = "reverse";
            container.appendChild(media);

            // 설정이 완료되면 비디오 아이디를 설정된 값으로 갱신한다.
            this.videoId = media.getAttribute("id");

            setTimeout(() => {media.play();}, 1000);
        }
    }

    /**
     * 클릭이 되면 메인유저를 변경한다.
     */
    handleClick = () => {
        if(this.props.onChangeMainUser) {
            this.props.onChangeMainUser(this.props.user);
        }
    }

    /**
     * Render
     */
    render() {
        const {
            user,
        } = this.props;

        return (
            // [D] 외부 참여자일 경우 guest 클래스 추가
            <div className={user.getIn(['extra','wehagoid'])?"item":"item guest"} onClick={this.handleClick}>
                <div className="movbx">
                    <div ref={"subVideo"} style={{width: "100%", height: "100%"}}>
                    </div>
                </div>
                <span className="namebx active">
                    <button type="button" className="LUX_basic_btn Default basic btn_mic on"><span className="sp_rtc">마이크</span></button>
                    {/*[D] 마이크 활성화시 on 클래스 추가*/}
                    <strong className="name ellipsis" style={{marginLeft:"5px"}}>{user.getIn(['extra','name'])}</strong>
                    {
                        !user.getIn(['extra','wehagoid']) ?
                            <span className="label smallfont">외부</span> : null
                    }
                    <div className="mic_state active">
                        {/*[D] 말을 하고 있을 경우.mic_state, .namebx DIV 에 active 클래스 추가*/}
                        <span className="wave pseudo-a pseudo-b"><span /></span>
                        {/*<span className="pulse pseudo-a pseudo-b"></span>*/}
                    </div>
                </span>
            </div>
        );
    }
}

/**
 * PropType 정의
 */
SubVideo.propTypes = {
    /**
     * 서브 비디오에 표시해야하는 접속자 입니다.
     */
    user: ImmutablePropTypes.map,

    /**
     * 메인에 보여질 유저가 바뀔때 발생하는 함수입니다.
     */
    onChangeMainUser: PropTypes.func,
};

export default SubVideo;
