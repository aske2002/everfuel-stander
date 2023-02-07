import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './fonts.css'
import './css/App.css'
import EverfuelPanel from './components/EverfuelPanel'
import PartnerPanel from './components/PartnerPanel'
import Advertisement from './components/Advertisement'
import contentTypes from './contentTypes'
import dataModel from './models/dataModel'


function App() {
  const [data, setData] = useState<dataModel | undefined>(undefined)

  //Hent ny data en gang i minuttet
  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 60000);
    return () => {
      clearInterval(interval);
    };
  }, [])

  const fetchData = () => {
    //Api implementation her:

    //Test data:
    const data: dataModel = {
      contentType: contentTypes.video,
      contentUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      everfuelTypes: [
        {name: "H35", price: 12.95, perfomance: 1, unit: "Kr/hg"},
        {name: "H70", price: 13.95, perfomance: 3, unit: "Kr/hg"},
      ],
      partnerTypes: [
        {logo: "https://e7.pngegg.com/pngimages/903/526/png-clipart-royal-dutch-shell-shell-oil-company-petroleum-business-business-angle-company.png", price: 12.95, unit: "Kr/kwh"},
        {logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Circle_K_logo_2016.svg/2560px-Circle_K_logo_2016.svg.png", price: 13.95, unit: "Kr/kg"},
      ],
    }
    setData(data)
  }

  return (
    <div>
      {data == undefined ? (
        <h1 style={{width: "100%", position: "absolute", textAlign: 'center'}}>Loading...</h1>
      ) : (
        <div className='Panel'>
          <EverfuelPanel {...data.everfuelTypes[0]}></EverfuelPanel>
          <EverfuelPanel {...data.everfuelTypes[1]}></EverfuelPanel>
          <PartnerPanel {...data.partnerTypes[0]}></PartnerPanel>
          <PartnerPanel {...data.partnerTypes[1]}></PartnerPanel>
          <Advertisement contentType={data.contentType} contentUrl={data.contentUrl}></Advertisement> 
        </div>
      )}
    </div>
  )
}

export default App
