import contentTypes from '../contentTypes'
import ReactPlayer, { ReactPlayerProps } from 'react-player';

interface panelData {
    contentUrl: string,
    contentType: contentTypes
}

function Advertisement({contentUrl, contentType}: panelData) {
    return (
        <div className="advertisement">
            {(() => {
                if(contentType == contentTypes.video) {
                    return (
                        <video src={contentUrl} muted autoPlay></video>
                    )
                } else if (contentType == contentTypes.image) {
                    return (
                        <img  className="adImage" src={contentUrl} alt={"Image"}/>
                    )
                }
            })()}
        </div>
    )
}

export default Advertisement