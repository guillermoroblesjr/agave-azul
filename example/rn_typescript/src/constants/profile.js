import { addApiActionTypes } from '~/src/utils/api'

const actionTypes = {
  UPDATE_PROFILE: `UPDATE_PROFILE`,
  RESET_PROFILE: `RESET_PROFILE`,
  RESET_PROFILE_FIELD: `RESET_PROFILE_FIELD`,
  ADD_PROFILE_CATEGORY: `ADD_PROFILE_CATEGORY`,
  DELETE_PROFILE_CATEGORY: `DELETE_PROFILE_CATEGORY`,
  UPDATE_USER_SOCIAL_RECORDS: `UPDATE_USER_SOCIAL_RECORDS`,
  UPDATE_USER_SHARE_RECORDS: `UPDATE_USER_SHARE_RECORDS`,
}

/* Signup */
addApiActionTypes(actionTypes, `API_SIGNUP`)

/* Confirm Email */
addApiActionTypes(actionTypes, `API_CONFIRM_EMAIL`)
addApiActionTypes(actionTypes, `API_RE_CONFIRM_EMAIL`)

/* Password Recovery */
addApiActionTypes(actionTypes, `API_SEND_PASSWORD_RECOVERY_EMAIL`)

/* Social */
addApiActionTypes(actionTypes, `API_GET_SOCIAL`)
addApiActionTypes(actionTypes, `API_UPDATE_SOCIAL`)

/* Socials */
addApiActionTypes(actionTypes, `API_GET_SOCIALS`)

/* Shares */
addApiActionTypes(actionTypes, `API_GET_SHARES`)
addApiActionTypes(actionTypes, `API_GET_SHARES_BY_OWNERS_AND_CAMPAIGNS`)

/* Account */
addApiActionTypes(actionTypes, `API_GET_DETAIL`)

/* Accounts */
addApiActionTypes(actionTypes, `API_GET_DETAILS`)

export default actionTypes