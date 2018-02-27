/**
 * NotUseBrowser
 * 크롬 외의 브라우저에서 접속했을 때 표시되는 페이지 입니다.
 */

import React from 'react';
import { Helmet } from 'react-helmet';

export default function NotUseBrowser() {
    return (
        <div>
            <Helmet>
                <title>Not Use Browser : WebRTC</title>
                <meta name="description" content="wehago video main page" />
            </Helmet>

            <div style={{marginTop: "150px",textAlign: "left", verticalAlign: "middle"}}>
                <div className="clearbx" style={{textAlign: "center", position: "relative"}}>
                    <span className="sp_lux" style={{width: "38px", height: "40px", marginBottom: "14px", backgroundPosition: "0 -175px", display: "inline-block", overflow: "hidden", background: "url(../images/sp_lux.png) 0 0 no-repeat", lineHeight: "100em", verticalAlign: "top"}}/>
                    <h1>크롬 브라우저를 이용해주세요(개발중 페이지)</h1>
                </div>
                <div style={{paddingTop: 0, border: 0, padding: "20px 0 0", fontSize: "13px", display: "block"}}> {/* 내부 스크롤 생성 */}
                    <p className="txtcnt" style={{fontSize: "14px", marginBottom: "6px", lineHeight: "20px", wordBreak: "break-all", textAlign: "center !important", marginBottom: "10px", padding: 0}}>
                        WEHAGO 화상대화는 구글 크롬브라우저 또는 오페라브라우저를
                        <br />통해서 이용하실 수 있습니다.
                        <br />현재 사용하시는 브라우저는 추후 지원예정입니다.
                    </p>
                    <div className="txtcnt" style={{textAlign: "center !important", display: "block"}}>
                        <a href="https://www.google.co.kr/chrome/" className="LUX_basic_btn basic" style={{padding: "0 20px", lineHeight: "32px", height: "32px", fontSize: "15px", border: "1px solid #d3d3d3", background: "#fff", color: "#4a4a4a", textDecoration: "none", display: "inline-block", width: "auto", position: "relative", fontWeight: 400, textAlign: "center", verticalAlign: "top", boxSizing: "border-box", cursor: "pointer", outline: 0}}>
                            <span>Chrome 다운로드</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
