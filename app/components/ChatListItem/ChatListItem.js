
/**
 *  채팅리스트 아이템 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

class ChatList extends React.PureComponent {
    /**
     * Render
     */
    render() {
        // userList의 첫번째 사용자 id와 채팅을 친 사용자 id와 비교해서 본인 표시
        let userId = this.props.userList.get(0).get('userid');
        let chatId = this.props.chat.get('userid');

        // 채팅내용 개행
        let msg = this.props.chat.get('data').split('\n');

        // 현재 날짜,시간 표시
        let d = new Date();
        let month = (d.getMonth()+1)<10 ? "0"+(d.getMonth()+1):(d.getMonth()+1);
        let date = d.getDate()<10 ? "0"+d.getDate():d.getDate();
        let hour = d.getHours()<10 ? "0"+d.getHours():d.getHours();
        let min = d.getMinutes()<10 ? "0"+d.getMinutes():d.getMinutes();
        let now = d.getFullYear()+"-"+month+"-"+date+" "+hour+":"+min;

        return (
            // [D] 나의 채팅일 경우 mychat 클래스 추가
            <div className={userId===chatId?"chat mychat":"chat"}>
                    <span className="namebx">
                        <strong className="name ellipsis">
                            {this.props.chat.get('extra').get('name')}
                            {userId===chatId? <span>(나)</span>:null}
                        </strong>
                        <span className="chat_date">{now}</span>
                    </span>
                <p className="msg">
                    {
                        msg.map((line,index) => {
                            if(index < msg.length-1) {
                                return <span key={index}>{line}<br/></span>
                            } else {
                                return <span key={index}>{line}</span>
                            }
                        })
                    }
                </p>
            </div>
        );
    }
}

/**
 * PropType 정의
 */
ChatList.propTypes = {
    /**
     * 접속자 리스트입니다.
     */
    userList: ImmutablePropTypes.list,
    /**
     * 채팅 리스트 입니다.
     */
    chatList: ImmutablePropTypes.list,
};

export default ChatList;
