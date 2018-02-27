
/**
 * 툴박스의 설정버튼 입니다.
 */

import React from 'react';
import {Map, List, fromJS} from 'immutable';
import PropTypes from 'prop-types';

import LUXPopover from 'luna-rocket/LUXPopover';
import LUXSelectField from 'luna-rocket/LUXSelectField';
import {LUXRadioButtonGroup, LUXRadioButton} from 'luna-rocket/LUXRadioButton';

class SettingButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.sensor = '';
    }

    handlePopoverOpen = () => {
        this.setState({open: true});
        this.getDevices();
    }

    handleRequestClosePopover = () => {
        this.setState({open: false});
    }

    // 저장하고 팝업 닫기
    handleComplete = () => {
        this.props.onChangeSpeakSensor(null,this.sensor);
        this.handleRequestClosePopover();
    }

    /**
     * 디바이스 정보를 얻어온다.
     */
    getDevices = () => {
        navigator.enumerateDevices((localDevices) => {
            let devices = new Map({
                mic: new List([]),
                speaker: new List([]),
                camera: new List([]),
            });

            localDevices.forEach(device => {
                if (device.kind == 'audioinput' || device.kind == 'audio') {
                    // 마이크
                    devices = devices.set("mic", devices.get("mic").push(device));
                } else if (device.kind == 'audiooutput') {
                    // 스피커
                    devices = devices.set("speaker", devices.get("speaker").push(device));
                } else {
                    // 카메라
                    devices = devices.set("camera", devices.get("camera").push(device));
                }
            });

            this.setState({devices: devices});
        });
    }

    getListItem = (device) => {
        let listItem = [];

        if(this.state.devices) {
            this.state.devices.get(device).map(item => {
                listItem.push(item.label);
            })
        }

        return listItem;
    }

    // 마이크,스피커,카메라 선택
    handleChoiceDataArray = (value) => {
        console.log(value);
    };

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
                arrowStyle={{marginLeft: '138px'}}
                style={{margin: 0, float: 'left', fontSize: '13px'}}
                popoverStyle={{width: '340px', marginLeft: '-142px', paddingLeft: 0, paddingRight: 0}}
                popoverInnerDivStyle={{padding: 0}}
                anchorDivStyle={{height: '48px'}}
                titleStyle={{margin: 0}}
                title={
                    <div className="gnb_pop_titbx">
                        <span className="pop_tit">화상대화 설정</span>
                        <button type="button" className="LUX_basic_btn btn_clr" onTouchTap={()=>this.handleRequestClosePopover()}>
                            <span className="sp_lux">닫기</span>
                        </button>
                    </div>
                }
                content={
                    <div className="gnb_popbx_area" style={{paddingTop: "5px"}}>
                        <div className="gnb_popbx_in">
                            <div className="opt_item">
                                <strong className="tit">발표자 자동감지</strong>
                                <LUXRadioButtonGroup name="LUXRadioButton"
                                                     defaultSelected={this.props.speakSensor?"LUXRadioButton_use":"LUXRadioButton_notUse"}
                                                     onChange={(evt,value)=>this.sensor=value}
                                >
                                    <LUXRadioButton value="LUXRadioButton_use" labelText="사용" />
                                    <LUXRadioButton value="LUXRadioButton_notUse" labelText="미사용" style={{marginLeft: "40px"}}/>
                                </LUXRadioButtonGroup>
                            </div>
                            <div className="opt_item">
                                <strong className="tit">카메라</strong>
                                <LUXSelectField
                                    selectFieldData={this.getListItem('camera')}
                                    defaultData={this.getListItem('camera')[0]}
                                    handleChoiceData={this.handleChoiceDataArray}
                                    listAutoHeight={true}
                                    style={{width: "initial"}}
                                    selectFieldInputBoxStyle={{boxSizing: "content-box"}}
                                />
                            </div>
                            <div className="opt_item">
                                <strong className="tit">마이크</strong>
                                <LUXSelectField
                                    selectFieldData={this.getListItem('mic')}
                                    defaultData={this.getListItem('mic')[0]}
                                    handleChoiceData={this.handleChoiceDataArray}
                                    listAutoHeight={true}
                                    style={{width: "initial"}}
                                    selectFieldInputBoxStyle={{boxSizing: "content-box"}}
                                />
                            </div>
                            <div className="opt_item">
                                <strong className="tit">스피커</strong>
                                <LUXSelectField
                                    selectFieldData={this.getListItem('speaker')}
                                    defaultData={this.getListItem('speaker')[0]}
                                    handleChoiceData={this.handleChoiceDataArray}
                                    listAutoHeight={true}
                                    style={{width: "initial"}}
                                    selectFieldInputBoxStyle={{boxSizing: "content-box"}}
                                />
                            </div>
                            <div className="btnbx">
                                <button type="button" className="LUX_basic_btn SAOverConfirm basic2" onTouchTap={()=>this.handleComplete()}><span>확인</span></button>
                            </div>
                        </div>
                    </div>
                }
            >
                <div className="gnb_popover">
                    <div className="gnb_btn">
                        <button type="button" className="btn btn_rtcoption" onTouchTap={()=>this.handlePopoverOpen()}>
                            <span className="sp_rtc">설정</span>
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
SettingButton.propTypes = {
    /**
     * 말하기감지기능 설정 입니다.
     */
    speakSensor: PropTypes.bool,

    /**
     * 말하기 감지기능 설정하는 함수입니다.
     */
    onChangeSpeakSensor: PropTypes.func,
};

export default SettingButton;
