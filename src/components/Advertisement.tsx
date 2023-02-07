import contentTypes from '../contentTypes'
import ReactPlayer, { ReactPlayerProps } from 'react-player';

interface panelData {
    contentUrl: string,
    contentType: contentTypes
}

function Advertisement({contentUrl, contentType}: panelData) {
    console.log(contentUrl)
    return (
        <div className="advertisement">
            {(() => {
                if(contentType == contentTypes.video) {
                    return (
                        <ReactPlayer className="adVideo" url={contentUrl} controls={false} loop={true} muted={true} playing={true}/>
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