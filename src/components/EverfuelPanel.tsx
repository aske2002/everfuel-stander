import '../fonts.css'
import '../css/EverfuelPanel.css'
import everfuelPanelDataModel from '../models/everfuelPanelDataModel'

function EverfuelPanel({price, name, unit, perfomance}: everfuelPanelDataModel) {
    console.log(name)
    return (
        <div className='fuelPanel ownPanel'>
            <div className='detailsWrapper'>
                <div className='details'>
                    <h3>{name}</h3>
                    <p>{unit}</p>
                </div>
                <div className='performance'>
                    <img src="/img/star.png" alt="" />
                    <h4>{String(perfomance).padStart(2, '0')}</h4>
                </div>
            </div>
            <div className='priceWrapper'>
                <h1>{price}</h1>
            </div>
        </div>
    )
}

export default EverfuelPanel