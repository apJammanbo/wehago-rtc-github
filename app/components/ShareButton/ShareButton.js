
/**
 * 툴박스의 공유버튼 입니다.
 */

import React from 'react';
import PropTypes from 'prop-types';

import LUXPopover from 'luna-rocket/LUXPopover';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ShareButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selectOption: 'private',
            url: '',
        }
    }

    componentDidUpdate() {
        let { open, selectOption, url } = this.state;

        // 공유설정 팝오버가 열려있을 때만
        if(open) {
            // 공개 - 입력칸에 대화방 url 복사
            if(selectOption === 'public') {
                document.getElementById('textField_text').value = url;
            }
            // 비공개 - 입력칸 초기화
            if(selectOption === 'private') {
                document.getElementById('textField_text').value = '';
            }
        }
    }

    handlePopoverOpen = () => {
        this.setState({open: true});
    }

    handleRequestClosePopover = () => {
        this.setState({open: false});
    }

    // 공유설정
    handleOptionChange = (evt) => {
        let roomid = new URL(window.location.href).searchParams.get("room");
        let url = window.location.href.split('?')[0] + "?room=" + roomid;
        if(evt.target.value === 'private') {
            url = '';
        }

        this.setState({
            selectOption: evt.target.value,
            url: url,
        });
    }

    // url 복사
    handleCopyUrl = (text, result) => {
        console.log(text);
        console.log(result);
    }

    /**
     * Render
     */
    render() {
        return (
            <LUXPopover
                className={"rtc_header"}
                open={this.state.open}
                position={"bottom"}
                onRequestClose={()=>this.handleRequestClosePopover()}
                showCloseButton={false}
                arrowStyle={{marginLeft: '93px'}}
                style={{margin: 0, float: 'left', fontSize: '13px'}}
                popoverStyle={{width: '340px', marginLeft: '-97px', paddingLeft: 0, paddingRight: 0}}
                popoverInnerDivStyle={{padding: 0}}
                anchorDivStyle={{height: '48px'}}
                titleStyle={{margin: 0}}
                title={
                    <div className="gnb_pop_titbx">
                        <span className="pop_tit">화상대화방 공유설정</span>
                        <button type="button" className="LUX_basic_btn btn_clr" onTouchTap={()=>this.handleRequestClosePopover()}>
                            <span className="sp_lux">닫기</span>
                        </button>
                    </div>
                }
                content={
                    <div className="gnb_popbx_area">
                        <div className="gnb_popbx_in">
                            <div className="opt_item">
                                <strong className="tit">외부 공개여부</strong>
                                <span className="LUX_basic_switch">
                                    <span className="LUXrabx">
                                        {/* 동일한 구조 input type checkbox LUXckbx LUXstarbx / radio LUXrabx LUXonoffbx 로 이이지 변경 */}
                                        <input type="radio"
                                               id="input_forid_radio_public"
                                               value='public'
                                               checked={this.state.selectOption === 'public'}
                                               onChange={this.handleOptionChange}
                                        />
                                        {/* 이미지 */}
                                        <span className="sp_lux" />
                                        {/* input id 값과 label for 값을 동일하게 연결 */}
                                        <label htmlFor="input_forid_radio_public">공개</label>
                                    </span>
                                </span>
                                <span className="LUX_basic_switch" style={{marginLeft: 40}}>
                                    <span className="LUXrabx">
                                        {/* 동일한 구조 input type checkbox LUXckbx LUXstarbx / radio LUXrabx LUXonoffbx 로 이이지 변경 */}
                                        <input type="radio"
                                               id="input_forid_radio_private"
                                               value='private'
                                               checked={this.state.selectOption === 'private'}
                                               onChange={this.handleOptionChange}
                                        />
                                        {/* 이미지 */}
                                        <span className="sp_lux" />
                                        {/* input id 값과 label for 값을 동일하게 연결 */}
                                        <label htmlFor="input_forid_radio_private">비공개</label>
                                    </span>
                                </span>
                                <p className="txt smallfont">외부에 화상대화방을 공개하면 개설되는 화상대화방의 URL로 WEHAGO외부 사용자가 참석할 수 있습니다.</p>
                                <CopyToClipboard text={this.state.url} onCopy={this.handleCopyUrl}>
                                    <div className="LUX_basic_text link">
                                        {/* 입력창에 포커스 - inpbx class="on" 추가  */}
                                        <div className={this.state.selectOption==='public'?"inpbx on":"inpbx"}>
                                            <p className="placeholder">입력해주세요</p>
                                            <input type="text" id="textField_text" />
                                            <span className="sp_rtc" />
                                        </div>
                                    </div>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                }
            >
                <div className="gnb_popover">
                    <div className="gnb_btn">
                        <button type="button" className="btn btn_rtcshare" onTouchTap={()=>this.handlePopoverOpen()}>
                            <span className="sp_rtc">공유</span>
                        </button>
                    </div>
                </div>
            </LUXPopover>
        );
    }
}

/**
 * PropType 정의
 */
ShareButton.propTypes = {

};

export default ShareButton;
