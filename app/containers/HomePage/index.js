
/**
 * 메인 페이지 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';

import Input from './Input';

import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';

import reducer from './reducer';
import saga from './saga';

class HomePage extends React.PureComponent {

    componentDidMount() {
    }

    render() {
        return (
            <article>
                <Helmet>
                    <title>Home Page</title>
                    <meta name="description" content="wehago video main page" />
                </Helmet>

                <Input
                    id="username"
                    type="text"
                    placeholder="mxstbr"
                    value={this.props.username}
                    onChange={this.props.onChangeUsername}
                />

            </article>
        );
    }
}

HomePage.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
    repos: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.bool,
    ]),
    onSubmitForm: PropTypes.func,
    username: PropTypes.string,
    onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
    return {
        onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    };
}

const mapStateToProps = createStructuredSelector({
    repos: makeSelectRepos(),
    username: makeSelectUsername(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });

const withSaga = injectSaga({ key: 'home', saga });

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(HomePage);
