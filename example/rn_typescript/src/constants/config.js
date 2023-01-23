import { addApiActionTypes } from '~/src/utils/api'

const actionTypes = {
  UPDATE_CONFIG: `UPDATE_CONFIG`,
  RESET_CONFIG_FIELD: `RESET_CONFIG_FIELD`,
}
/* Config CDN */
addApiActionTypes(actionTypes, `API_CONFIG_GET_APP_VERSION_CONTROL`)

/* Config Campaign Categories API/CRUD */
addApiActionTypes(actionTypes, `API_ADD_CONFIG_CAMPAIGN_CATEGORY`)
addApiActionTypes(actionTypes, `API_UPDATE_CONFIG_CAMPAIGN_CATEGORY`)
addApiActionTypes(actionTypes, `API_GET_CONFIG_CAMPAIGN_CATEGORIES`)

/* Config Campaign Cities */
addApiActionTypes(actionTypes, `API_ADD_CONFIG_CAMPAIGN_CITY`)
addApiActionTypes(actionTypes, `API_UPDATE_CONFIG_CAMPAIGN_CITY`)
addApiActionTypes(actionTypes, `API_GET_CONFIG_CAMPAIGN_CITIES`)
addApiActionTypes(actionTypes, `API_GET_CITIES_WITHIN_RANGE`)

export default actionTypes
