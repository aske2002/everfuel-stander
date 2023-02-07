import '../fonts.css'
import '../css/FuelPanel.css'
import partnerPanelDataModel from '../models/partnerPanelDataModel'

function PartnerPanel({price, logo, unit}: partnerPanelDataModel) {
    return (
        <div className='fuelPanel partnerPanel'>
            <div className='detailsWrapper'>
                <div className='details'>
                    <img className="logo" src={logo} alt="" />
                    <p>{unit}</p>
                </div>
            </div>
            <div className='priceWrapper'>
                <h1>{price}</h1>
            </div>
        </div>
    )
}

export default PartnerPanel