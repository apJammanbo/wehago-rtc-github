
/**
 *  Message input 영역 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';

import ContentEditable from 'react-simple-contenteditable';
import keyCode from 'keycode';

class Message extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            chat: '',
        }
    }

    /**
     * 채팅입력창에서 keycode를 가져오는 이벤트 입니다.
     */
    handleKeyDown = (evt) => {
        // 엔터키 일때 전송
        // 쉬프트+엔터키 일때 줄바꿈
        if(evt.keyCode == 13) {
            if(!(evt.shiftKey && evt.keyCode == 13)) {
                this.handleChat();
                evt.preventDefault();
                // 채팅창 bottom 값 전달
                this.props.onChangeChatViewBottom(document.getElementById('inputMsg').offsetHeight);
            }
        }
    }

    /**
     * 채팅입력창 안에서 붙여넣기(ctrl+v)를 했을때
     * bottom으로 스크롤 이동시키는 이벤트 입니다.
     */
    handleScrollToBottom = () => {
        let inputMsg = document.getElementById('inputMsg');
        inputMsg.scrollTop = inputMsg.offsetHeight;
    }

    /**
     * 채팅 내용(인풋)이 변경되면 발생합니다.
     */
    handleChangeChat = (evt, value) => {
        this.setState({chat: value});
        // 채팅창 bottom 값 전달
        this.props.onChangeChatViewBottom(document.getElementById('inputMsg').offsetHeight);
    }

    /**
     * 채팅 테스트 입니다.
     */
    handleChat = () => {
        if(this.state.chat) {
            this.props.sendMessage(this.state.chat);

            // 채팅입력칸 초기화
            this.setState({chat: ''});
            document.getElementById('inputMsg').innerText = '';
            document.getElementById('inputMsg').focus();
        }
    }

    /**
     * Render
     */
    render() {
        return (
            <div className="chat_input">
                <div className="appending">
                    <button type="button" className="LUX_basic_btn Default basic appending_btn"><span className="sp_rtc">첨부</span></button>
                </div>

                <ContentEditable
                    id="inputMsg"
                    html={this.state.chat}
                    className="input_msg"
                    onChange={this.handleChangeChat}
                    onKeyDown={this.handleKeyDown}
                    onPaste={this.handleScrollToBottom}
                    contentEditable="plaintext-only"
                />

                <button type="button"
                        className="LUX_basic_btn Default basic chat_submit"
                        onClick={this.handleChat}>
                    전송
                </button>
            </div>
        );
    }
}

/**
 * PropType 정의
 */
Message.propTypes = {
    /**
     * 채팅을 추가하는 함수입니다.
     */
    onAddMessage: PropTypes.func,
    /**
     * 채팅리스트 bottom 값을 변경하는 함수입니다.
     */
    onChangeChatViewBottom: PropTypes.func,
};

export default Message;
