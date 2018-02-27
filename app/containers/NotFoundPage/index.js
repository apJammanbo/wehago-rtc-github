/**
 * NotFoundPage
 * 라우터에서 경로를 찾지 못한경우 표시되는 페이지 입니다.
 */

import React from 'react';
import { Helmet } from 'react-helmet';

export default function NotFound() {
    return (
        <div>
            <Helmet>
                <title>Not Found Error : WebRTC</title>
                <meta name="description" content="wehago video main page" />
            </Helmet>
            Not Found
        </div>
    );
}
