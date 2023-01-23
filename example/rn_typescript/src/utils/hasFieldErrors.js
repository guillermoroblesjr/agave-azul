  const extractRules = (props, requiredFieldsRules) => {
    const rules = []
    Object.keys(requiredFieldsRules).forEach(item => {
      rules.push(requiredFieldsRules[item](props[item], props))
    })
    return rules
  }
  
  // formHasFieldErrors function requires the required fields to be 1 level deep
  // on the props. E.g. { props: { something: 123 } }
  export default (props, requiredFieldsRules) => {
    return !![...extractRules(props, requiredFieldsRules)].find(error => error)
  }