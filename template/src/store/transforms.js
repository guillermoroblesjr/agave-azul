import { createTransform } from 'redux-persist'

export const mapTransform = (data) => createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    // convert deepLinks to an Array.
    return { ...inboundState, deepLinks: [...inboundState.deepLinks] }
  },
  // transform state being rehydrated
  (outboundState, key) => {
    // convert deepLinks back to a Map.
    return { ...outboundState, deepLinks: new Map(outboundState.deepLinks) }
  },
  // define which reducers this transform gets called for.
  { ...data.config }
)