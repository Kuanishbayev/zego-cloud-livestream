import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { useParams } from "react-router-dom"

const Room = () => {
    const {roomId} = useParams()
    const myMeeting = async (element) => {
        const appID = 272655159
        const serverSecret = '8951f741041d60b89922758d1e7064be'
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            'Ernazar Kuanishbaev'
        )
        const zp = ZegoUIKitPrebuilt.create(kitToken)
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.LiveStreaming
            }
        })
    }
  return (
    <div className="meeting">
        <dir ref={myMeeting}></dir>
    </div>
  )
}

export default Room