
/**
 * 테스트 페이지 입니다.
 */

// region NPM 라이브러리 import

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// endregion

// Redux 관련 유틸 import
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';

// Actions
import { changeUsername, addNumber, subNumber } from './actions';

// Selector
import { makeSelectUsername, makeSelectNumber} from './selectors';


class TestPage extends React.PureComponent {
    /**
     * Render
     */
    render() {
        return (
            <div>
                <Helmet>
                    <title>Test Page : WebRTC</title>
                    <meta name="description" content="wehago video main page" />
                </Helmet>

                <input
                    id="username"
                    type="text"
                    placeholder="mxstbr"
                    value={this.props.username}
                    onChange={this.props.onChangeUsername}
                />
                <br/>
                <br/>
                <button onClick={this.props.onAddNumber}>+</button>
                <button onClick={this.props.onSubNumber}>-</button>
                <br/>
                <br/>
                <div>
                    {this.props.number}
                </div>
            </div>
        );
    }
}

/**
 * PropType 정의
 */
TestPage.propTypes = {
    // Value Props
    username: PropTypes.string,
    number: PropTypes.number,

    // Functions Props
    onChangeUsername: PropTypes.func,
    onAddNumber: PropTypes.func,
    onSubNumber: PropTypes.func,
};

/**
 * mapDispatchToProps
 */
export function mapDispatchToProps(dispatch) {
    return {
        onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
        onAddNumber: () => dispatch(addNumber(1)),
        onSubNumber: () => dispatch(subNumber(1)),
    };
}

/**
 * mapStateToProps
 */
const mapStateToProps = createStructuredSelector({
    username: makeSelectUsername(),
    number: makeSelectNumber(),
});

/**
 * 프로퍼티 바인딩
 */
const withConnect = connect(mapStateToProps, mapDispatchToProps);

/**
 * 리듀서
 */
const withReducer = injectReducer({ key: 'test', reducer });


/**
 * compose
 */
export default compose(
    withReducer,
    withConnect,
)(TestPage);
