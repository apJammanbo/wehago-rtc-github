
/**
 * TestContent 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { fromJS } from "immutable";

class Chat extends React.PureComponent {

    /**
     * Render
     */
    render() {
        const {
            chat,
        } = this.props;

        return (
            <div>
                {chat.get('data')}
            </div>
        );
    }
}

/**
 * PropType 정의
 */
Chat.propTypes = {
};

export default Chat;
