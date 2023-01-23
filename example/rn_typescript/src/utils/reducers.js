import dotProp from 'dot-prop-immutable'
import _ from 'lodash'

export const updateField = ({ state, action }) => {
  let fieldState = action.payload.data

  const currentField = dotProp.get(state, action.payload.field)
  const isMap = _.isMap(currentField)
  if (_.isPlainObject(fieldState) && !isMap) {
    fieldState = {
      ...state[action.payload.field],
      ...action.payload.data,
    }
  }

  if (isMap) {
    fieldState = new Map(currentField)
    fieldState.set(action.payload.mapKey, action.payload.data)
  }

  state = dotProp.set(
    state, 
    action.payload.field, 
    fieldState
  )
  return state
}

export const resetField = ({ initialState, state, action }) => {
  state = dotProp.delete(state, action.payload.field)
  const initialFieldValue = dotProp.get(initialState, action.payload.field)
  if (initialFieldValue) {
    state = dotProp.set(
      state,
      action.payload.field,
      initialFieldValue
    )
  }
  return state
}