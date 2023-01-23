import { addApiActionTypes } from '~/src/utils/api'

const actionTypes = {
  UPDATE_AUTH: `UPDATE_AUTH`,
  RESET_AUTH: `RESET_AUTH`,
  RESET_AUTH_FIELD: `RESET_AUTH_FIELD`,
}

/* Login/Logout */
addApiActionTypes(actionTypes, `API_LOGIN`)
addApiActionTypes(actionTypes, `API_LOGOUT`)

export default actionTypes