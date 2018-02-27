
/**
 * 메인 페이지 입니다.
 */

// region NPM 라이브러리 import
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {Map, fromJS, List} from 'immutable';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// Redux 관련 유틸 import
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';

// Actions
import {
    changeSubHeaderText,
    changeInputSubHeaderText,
    changeChatArea,
    addUser,
    removeUser,
    changeInputUser,
    changeMainUser,
    addMessage,
    changeSpeakSensor,
} from './actions';

// Selector
import {
    makeSelectSubHeaderText,
    makeSelectInputSubHeaderText,
    makeSelectChatArea,
    makeSelectUserList,
    makeSelectMainUserId,
    makeSelectInputUser,
    makeSelectMaxUser,
    makeSelectChatList,
    makeSelectSpeakSensor,
} from './selectors';

import Header from '../../components/Header';
import Content from '../../components/Content';
import TestContent from '../../components/TestContent';
import Sidebar from '../../components/Sidebar';
import WehagoConnection from '../../rtcutils/WehagoConnection';

class MainPage extends React.PureComponent {
    componentDidMount() {
        // RTC 커넥션 생성
        this.connection = new WehagoConnection();

        // region RTC 이벤트 연결

        // 접속자 추가
        this.connection.onAddUser = this.handleAddUser;
        // 접속자 제거
        this.connection.onRemoveUser = this.handleRemoveUser;
        // 말하기 감지 시작 이벤트
        this.connection.onSpeaking = this.handleSpeeking;
        // 말하기 감지 종료 이벤트
        this.connection.onSilence = this.handleSilence;
        // 방이 다 찼을때 발생하는 이벤트
        this.connection.onRoomFull = this.handleRoomFull;
        // 메세지를 수신받으면 발생하는 이벤트
        this.connection.onAddMessage = this.handleAddMessage;

        // endregion RTC 이벤트 연결
    }

    // region RTC Events

    /**
     * 새로운 참여자가 접속했을때 발생합니다.
     * @param user
     */
    handleAddUser = (user) => {
        this.props.onAddUser(user);
    }

    /**
     * 접속한 참여자가 접속을 종료했을때 발생합니다.
     */
    handleRemoveUser = (user) => {
        this.props.onRemoveUser(user);
    }

    /**
     * 방이 다 찾을때 발생하는 이벤트
     */
    handleRoomFull = () => {
        console.log('handleRoomFull');
    }

    /**
     * 대화 참가자가 말을 하면 발생하는 이벤트
     */
    handleSpeeking = (event) => {
        // 화상대화설정에서 말하기 감지 사용일때만 발생
        if(this.props.speakSensor) {
            let user = new Map({
                userid: event.userid
            });
            this.props.onChangeMainUser(user);
            // console.log('onSpeeking: ', event.userid);
        }
    }

    /**
     * 대화 참가자가 말을 멈추면 발생하는 이벤트
     */
    handleSilence = (event) => {
        // console.log('onSilence: ', event.userid);
    }

    /**
     * 메세지를 수신받으면 발생하는 이벤트
     */
    handleAddMessage = (message) => {
        this.props.onAddMessage(message);
    }

    /**
     * 메세지를 보내는 함수
     */
    sendMessage = (chat) => {
        this.connection.sendMessage(chat);

        let me = this.props.userList.get(0);

        let message = Map({
            data: chat,
            extra: Map({
                name: me.getIn(["extra", "name"]),
                wehagoid: me.get("userid"),
            }),
            userid: me.get("userid"),
        });

        this.props.onAddMessage(message);
    }

    // endregion

    /**
     * Render
     */
    render() {
        const {
            chat,
            chatList,
            userList,
            subHeaderText,
            mainUserId,
            maxUser,

            onAddMessage,
            onChangeChatArea,
            onChangeMainUser,

        } = this.props;

        let userCount = userList.size;

        let className = "wrap";
        if(chat) {
            className += " chat_on";
        }
        if(userCount < 2) {
            className += " alone";
        }

        return (
            <div>
                <Helmet>
                    <title>WebRTC</title>
                    <meta name="description" content="wehago video main page" />
                </Helmet>

                <div id="wrap" className={className}>
                    <Header {...this.props} tool={true}/>

                    {/*<TestContent*/}
                    {/*sendMessage={this.sendMessage}*/}
                    {/*{...this.props}/>*/}

                    <Content
                        mainUserId={mainUserId}
                        userList={userList}
                        onChangeMainUser={onChangeMainUser}
                    />

                    <Sidebar userList={userList}
                             maxUser={maxUser}
                             onAddMessage={onAddMessage}
                             chatList={chatList}
                             sendMessage={this.sendMessage}
                    />
                </div>

            </div>
        );
    }
}

/**
 * PropType 정의
 */
MainPage.propTypes = {
    /**
     * 서브헤더 타이틀 입니다.
     */
    subHeaderText: PropTypes.string,
    /**
     * 서브헤더 타이틀 입력값입니다.
     */
    inputSubHeaderText: PropTypes.string,
    /**
     * 툴박스 노출여부 입니다.
     */
    tool: PropTypes.bool,
    /**
     * 채팅 토글버튼 값 입니다.
     */
    chat: PropTypes.bool,
    /**
     * 접속자 리스트입니다.
     */
    userList: ImmutablePropTypes.list,
    /**
     * 메인에 보여져야하는 유저 입니다.
     */
    mainUserId: PropTypes.string,
    /**
     * 사용자 입력값 입니다.
     */
    inputUser: PropTypes.string,
    /**
     * 접속자 제한 수 입니다.
     */
    maxUser: PropTypes.number,
    /**
     * 채팅 리스트 입니다.
     */
    chatList: ImmutablePropTypes.list,
    /**
     * 말하기감지기능 설정 입니다.
     */
    speakSensor: PropTypes.bool,

    /**
     * 서브헤더 타이틀을 바꾸는 함수입니다.
     */
    onChangeSubHeaderText: PropTypes.func,
    /**
     * 서브헤더 타이틀 입력값을 바꾸는 함수입니다.
     */
    onChangeInputSubHeaderText: PropTypes.func,
    /**
     * 채팅창을 true,false로 컨트롤 할 수 있는 함수입니다.
     */
    onChangeChatArea: PropTypes.func,
    /**
     * 새로운 사용자가 접속하면 발생하는 함수입니다.
     */
    onAddUser: PropTypes.func,
    /**
     * 사용자가 접속을 종료하면 발생하는 함수입니다.
     */
    onRemoveUser: PropTypes.func,
    /**
     * 사용자 입력값을 바꾸는 함수입니다.
     */
    onChangeInputUser: PropTypes.func,
    /**
     * 메인에 보여질 유저가 바뀔때 발생하는 함수입니다.
     */
    onChangeMainUser: PropTypes.func,
    /**
     * 채팅을 추가하는 함수입니다.
     */
    onAddMessage: PropTypes.func,
    /**
     * 말하기 감지기능 설정하는 함수입니다.
     */
    onChangeSpeakSensor: PropTypes.func,
};

/**
 * mapDispatchToProps
 */
export function mapDispatchToProps(dispatch) {
    return {
        onChangeSubHeaderText: () => dispatch(changeSubHeaderText()),
        onChangeInputSubHeaderText: (evt) => dispatch(changeInputSubHeaderText(evt.target.value)),
        onChangeChatArea: () => dispatch(changeChatArea()),
        onAddUser: (user) => dispatch(addUser(user)),
        onRemoveUser: (user) => dispatch(removeUser(user)),
        onChangeInputUser: (evt) => dispatch(changeInputUser(evt.target.value)),
        onChangeMainUser: (user) => dispatch(changeMainUser(user)),
        onAddMessage: (msg) => dispatch(addMessage(msg)),
        onChangeSpeakSensor: (evt,value) => dispatch(changeSpeakSensor(value)),
    };
}

/**
 * mapStateToProps
 */
const mapStateToProps = createStructuredSelector({
    subHeaderText: makeSelectSubHeaderText(),
    inputSubHeaderText: makeSelectInputSubHeaderText(),
    chat: makeSelectChatArea(),
    userList: makeSelectUserList(),
    mainUserId: makeSelectMainUserId(),
    inputUser: makeSelectInputUser(),
    maxUser: makeSelectMaxUser(),
    chatList: makeSelectChatList(),
    speakSensor: makeSelectSpeakSensor(),
});

/**
 * 프로퍼티 바인딩
 */
const withConnect = connect(mapStateToProps, mapDispatchToProps);

/**
 * 리듀서
 */
const withReducer = injectReducer({ key: 'main', reducer });

/**
 * compose
 */
export default compose(
    withReducer,
    withConnect,
)(MainPage);
