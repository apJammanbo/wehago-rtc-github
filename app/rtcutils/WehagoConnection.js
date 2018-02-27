var hark = require('hark');

class WehagoConnection {
    constructor() {

        // 주소창에서 사용자 이름과 방명칭 얻어오기
        let url_string = window.location.href;
        let url = new URL(url_string);
        let name = url.searchParams.get("name");
        if (!name) {
            name = "Unknown";
        }
        let roomid = url.searchParams.get("room");
        let wehagoid = url.searchParams.get("wehagoid");


        this.connection = this.createConnection(wehagoid, name);

        this.connection.checkPresence(roomid, (isRoomExists, roomid) => {
            this.connection.close();
            this.connection = this.createConnection(wehagoid, name);
            if (!isRoomExists) {
                this.connection.close();
                this.connection.open(roomid, () => {
                    console.log(this.connection.sessionid);
                });
            } else {
                this.connection.join(roomid);
            }
        });
    }

    /**
     * 기본 커넥션 생성
     */
    createConnection(wehagoid, name) {
        let connection = new RTCMultiConnection();

        // region set Properties

        // Siganl 서버 설정
        connection.socketURL = "https://signal.wehago.com/";
        // connection.socketURL = "https://localhost:9001/";

        connection.socketMessageEvent = "wehago-rtc";

        connection.session = {
            audio: true,
            video: true,
            data: true,
        };

        // 최대 참여자수 설정(참가자수 9, 총 10)
        connection.maxParticipantsAllowed = 5;

        // 기타설정(사용자 이름 등)
        connection.extra = {
            name: name,
            wehagoid: wehagoid,
        };

        // HD 설정
        connection.bandwidth = {
            audio: 128,
            video: 1024,
            screen: 1024
        };
        var videoConstraints = {
            mandatory: {
                maxWidth: 1920,
                maxHeight: 1080,
                minAspectRatio: 4/3,
                minFrameRate: 3,
                maxFrameRate: 64
            },
            optional: []
        };
        connection.mediaConstraints.video = videoConstraints;

        // this.connection.autoCloseEntireSession = false;

        // endregion

        // region event Binding

        // 새로운 참여자가 생겼을때 발생 하는 이벤트
        connection.onstream = this.handleStream;

        // 참여자가 떠날때 발생한는 이벤트
        connection.onstreamended = this.handleStreamended;

        // 메세지를 받으면 발생하는 이벤트
        connection.onmessage = this.handleMessage;

        // mute 이벤트
        connection.onmute = this.handleMute;

        return connection;
    }

    handleMute = (event) => {
        console.log('mute : ', event);
    }

    mute = () => {
        this.connection.attachStreams.forEach((stream) => {
            stream.mute('audio');
        });
    }

    unmute = () => {
        this.connection.attachStreams.forEach((stream) => {
            stream.unmute('audio');
        });
    }

    // region Event Getter, Setter

    /**
     * 사용자가 접속하면 발생하는 이벤트(자신포함)
     */
    handleStream = (event) => {
        // 말하는 사람을 찾기 위한 이벤트
        var options = {};
        var speechEvents = hark(event.stream, options);
        speechEvents.on('speaking', () => {
            if (this.onSpeaking) {
                this.onSpeaking(event);
            }
        });

        speechEvents.on('stopped_speaking', () => {
            if(this.onSilence) {
                this.onSilence(event);
            }
        });

        this.onAddUser(event);

    }

    /**
     * 참여자가 나가면 발생하는 이벤트
     */
    handleStreamended = (event) => {
        this.onRemoveUser(event);
    };


    sendMessage = (message) => {
        this.connection.send(message);
    }

    /**
     * 메세지를 수신받으면 발생하는 이벤트
     */
    handleMessage = (event) => {
        if(this.onAddMessage) {
            this.onAddMessage(event);
        }
    }

    /**
     * 메세지 추가 이벤트 getter
     */
    get onAddMessage() {
        return this._onAddMessage
    }

    /**
     * 사용자 추가 이벤트 setter
     */
    set onAddMessage(event) {
        this._onAddMessage= event;
    }

    /**
     * 사용자 추가 이벤트 getter
     */
    get onAddUser() {
        return this._onAddUser;
    }

    /**
     * 사용자 추가 이벤트 setter
     */
    set onAddUser(event) {
        this._onAddUser = event;
    }

    /**
     * 사용자 제거 이벤트 getter
     */
    get onRemoveUser() {
        return this._onRemoveUser;
    }

    /**
     * 사용자 제거 이벤트 setter
     */
    set onRemoveUser(event) {
        this._onRemoveUser = event;
    }


    /**
     * 사용자 종료 이벤트
     */

    /**
     * 방이 다 찼을때 발생하는 이벤트 setter
     */
    set onRoomFull(event) {
        this.connection.onRoomFull = event;
    }

    /**
     * 스피킹 시작 이벤트 getter
     */
    get onSpeaking() {
        return this._onSpkeaking;
    }

    /**
     * 스피킹 시작 이벤트 setter
     */
    set onSpeaking(event) {
        this._onSpkeaking= event;
    }

    /**
     * 스피킹 종료 이벤트 getter
     */
    get onSilence() {
        return this._onSilence;
    }

    /**
     * 스피킹 종료 이벤트 setter
     */
    set onSilence(event) {
        this._onSilence= event;
    }


    // endregion Event Setter
}

export default WehagoConnection;