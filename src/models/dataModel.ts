import contentTypes from "../contentTypes"
import everfuelPanelDataModel from "./everfuelPanelDataModel"
import partnerPanelDataModel from "./partnerPanelDataModel"

interface dataModel {
    contentType: contentTypes
    contentUrl: string,
    everfuelTypes: Array<everfuelPanelDataModel>
    partnerTypes: Array<partnerPanelDataModel>
}

export default dataModel