/**
 * App
 * 전체 어플리케이션을 라우팅 하는 컨테이너 입니다.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import MainPage from '../../containers/MainPage/Loadable';
import LoginPage from '../../containers/LoginPage/Loadable';
import TestPage from '../../containers/TestPage/Loadable';
import NotUseBrowser from '../../containers/NotUseBrowser';
import NotFoundPage from '../../containers/NotFoundPage';
import Detector from 'detector';

export default function App() {
    let isChrome = Detector.browser.name === "chrome";

    return (
        <div>
            <Helmet
                defaultTitle="WEHAGO VIDEO"
            >
                <meta name="description" content="douzone wehago rtc" />
            </Helmet>
            {isChrome ?
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/test" component={TestPage} />
                    <Route exact path="/browser" component={NotUseBrowser} />
                    <Route path="" component={NotFoundPage} />
                </Switch> :
                <Switch>
                    <Route path="" component={NotUseBrowser} />
                </Switch>}
        </div>
    );
}
