
/**
 * 로그인 페이지 입니다.
 */

// region NPM 라이브러리 import
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// Redux 관련 유틸 import
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';

// Actions
import { changeUsername } from './actions';

// Selector
import { makeSelectUsername } from './selectors';

import Header from '../../components/Header/Header';

// 이미지 로드
import '!file-loader?name=[name].[ext]!../../images/wehago_logo2.png';

class LoginPage extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            focus: false,
        }
    }

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
        let name = this.props.username;
        let url = url_string.split('?')[0].replace('/login','/') + "?room=" + room + "&name=" + name;

        return url;
    }

    handleUrl = () => {
        location.href = this.getUrl();
    }

    /**
     * Render
     */
    render() {

        return (
            <div>
                <Helmet>
                    <title>Login : WebRTC</title>
                    <meta name="description" content="wehago video login page" />
                </Helmet>

                <div id="wrap" className="wrap login">
                    <Header tool={false}/>

                    <div className="content">
                        <div className="chat_namebx">
                            <p className="title">서비스 기획팀 프로젝트 화상대화에 참여합니다.</p>
                            <div className="id_bx">
                                <p className="txt pseudo-a pseudo-b">대화방에서 사용할 이름을 입력하세요.</p>
                                <div className="LUX_basic_text" style={{margin: '16px 0 30px'}}>
                                    {/* 입력창에 포커스 - inpbx class="on" 추가  */}
                                    <div className={this.state.focus?"inpbx on":"inpbx"} style={{height: 52, padding: '15px 6px 0'}}>
                                        {/*<p className="placeholder" style={{padding: '16px 6px 0', textAlign: 'left', fontSize: 18}}>입력해주세요</p>*/}
                                        <input type="text"
                                               id="textField_text"
                                               onFocus={()=>this.setState({focus:true})}
                                               onBlur={()=>this.setState({focus:false})}
                                               onChange={this.props.onChangeUsername}
                                               placeholder={"입력해주세요"}
                                               style={{fontSize: 18}}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="LUX_basic_btn Confirm basic2"
                                    onClick={this.handleUrl}
                                    style={{width: 222, height: 64, fontSize: 22, border: '0 none', backgroundColor: '#003c8e'}}>
                                    <span>참여하기</span>
                                    <span className="sp_rtc" style={{width: 20, height: 8, marginLeft: 9, verticalAlign: 'middle', backgroundPosition: '-51px -175px'}} />
                                </button>
                            </div>
                        </div>
                        <span className="dimmed1" />
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * PropType 정의
 */
LoginPage.propTypes = {
    /**
     * 툴박스 노출여부 입니다.
     */
    tool: PropTypes.bool,
    /**
     * 대화명 입니다.
     */
    username: PropTypes.string,

    /**
     * 대화명을 바꾸는 함수입니다.
     */
    onChangeUsername: PropTypes.func,
};

/**
 * mapDispatchToProps
 */
export function mapDispatchToProps(dispatch) {
    return {
        onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    };
}

/**
 * mapStateToProps
 */
const mapStateToProps = createStructuredSelector({
    username: makeSelectUsername(),
});

/**
 * 프로퍼티 바인딩
 */
const withConnect = connect(mapStateToProps, mapDispatchToProps);

/**
 * 리듀서
 */
const withReducer = injectReducer({ key: 'login', reducer });

/**
 * compose
 */
export default compose(
    withReducer,
    withConnect,
)(LoginPage);
