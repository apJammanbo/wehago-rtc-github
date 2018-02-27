
/**
 * TestContent 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Chat from './Chat';

import { fromJS } from "immutable";

class TestContent extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            chat: '',
        }
    }

    // 테스트용 input user
    handleAddUser = () => {
        let user = {
            extra: {
                name:this.props.inputUser,
            },
            userid:this.props.inputUser,
        };
        this.props.onAddUser(user);
    }

    /**
     * 채팅 내용(인풋)이 변경되면 발생합니다.
     */
    handleChangeChat = (event) => {
        this.setState({chat: event.target.value});
    }

    /**
     * 채팅 테스트 입니다.
     */
    handleChat = () => {
        if(this.state.chat) {
            this.props.sendMessage(this.state.chat);
        }
    }

    /**
     * Render
     */
    render() {
        const {
            chatList,
        } = this.props;

        return (
            <div className="content">
                <div>
                    {/*서브헤더 타이틀을 바꾸기 위한 임시테스트*/}
                    <input type="text"
                           value={this.props.inputSubHeaderText}
                           onChange={this.props.onChangeInputSubHeaderText}
                           placeholder={"서브헤더타이틀 입력"}
                    />
                    <button onClick={this.props.onChangeSubHeaderText}>확인</button>
                </div>

                <div>
                    {/*사용자 추가를 위한 임시테스트*/}
                    <input type="text"
                           value={this.props.inputUser}
                           onChange={this.props.onChangeInputUser}
                           placeholder={"사용자 입력"}
                    />
                    <button onClick={this.handleAddUser}>추가</button>
                </div>

                <div>
                    {/*채팅 토글버튼 임시테스트*/}
                    <button onClick={this.props.onChangeChatArea}>채팅창</button>
                </div>
                <br/>
                <br/>
                <h2>채팅창 테스트</h2>
                <h4>채팅입력</h4>

                {/*채팅 추가를 위한 임시테스트*/}
                <input type="text"
                       value={this.state.chat}
                       onChange={this.handleChangeChat}
                       placeholder={"사용자 입력"}
                       style={{width: "400px"}}
                />
                <button onClick={this.handleChat}>채팅입력</button>

                <h4>채팅내용</h4>
                {chatList.map((chat, index) => {
                    return <Chat key={index} chat={chat} />
                })}
            </div>
        );
    }
}

/**
 * PropType 정의
 */
TestContent.propTypes = {
    /**
     * 서브헤더 타이틀 입력값입니다.
     */
    inputSubHeaderText: PropTypes.string,
    /**
     * 사용자 입력값 입니다.
     */
    inputUser: PropTypes.string,

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
     * 사용자 입력값을 바꾸는 함수입니다.
     */
    onChangeInputUser: PropTypes.func,
};

export default TestContent;
