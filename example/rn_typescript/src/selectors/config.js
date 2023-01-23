import { createSelector } from 'reselect'
import _ from 'lodash'

export const configSelector = state => state.config
export const addCategorySelector = createSelector(
  configSelector,
  config => config.addCategory ? config.addCategory : ``
)
export const deepLinksSelector = createSelector(
  configSelector,
  config => typeof config.deepLinks !== undefined ? config.deepLinks : {}
)
export const confirmAccountsSelector = createSelector(
  configSelector,
  config => typeof config.confirmAccounts !== undefined ? config.confirmAccounts : {}
)
export const confirmAccountsAccountsSelector = createSelector(
  confirmAccountsSelector,
  confirmAccounts => typeof confirmAccounts.accounts !== undefined ? confirmAccounts.accounts : []
)
export const confirmAccountsAccountsDetailsSelector = createSelector(
  confirmAccountsSelector,
  confirmAccounts => typeof confirmAccounts.accountsDetails !== undefined ? confirmAccounts.accountsDetails : []
)

/* Categories Selectors */

export const categoriesSelector = createSelector(
  configSelector,
  config => {
    return config.categories 
    ?  _.orderBy(
      config.categories, 
      [`isDisabled`, category => category.name.toLowerCase()], 
      [`asc`, `asc`],
    )
    : []
  }
)
export const enabledCategoriesSelector = createSelector(
  configSelector,
  config => {
    return config.categories 
    ?  _.orderBy(
      config.categories.filter(category => !category.isDisabled), 
      [category => category.name.toLowerCase()], 
      [`asc`],
    )
    : []
  }
)
export const editCategoriesModalSelector = createSelector(
  configSelector,
  config => config.editCategoriesModal ? config.editCategoriesModal : {}
)
export const editCategoriesModalCategoryIdSelector = createSelector(
  editCategoriesModalSelector,
  editCategoriesModal => editCategoriesModal.categoryId ? editCategoriesModal.categoryId : null
)
export const editCategoriesShowModalSelector = createSelector(
  editCategoriesModalSelector,
  editCategoriesModal => editCategoriesModal.showModal ? editCategoriesModal.showModal : false
)
export const editCategoriesUpdatedNameSelector = createSelector(
  editCategoriesModalSelector,
  editCategoriesModal => editCategoriesModal.updatedName ? editCategoriesModal.updatedName : ``
)

/* Cities Selectors */

export const citiesSelector = createSelector(
  configSelector,
  config => {
    return config.cities 
    ?  _.orderBy(
      config.cities, 
      [`isDisabled`, (city) => city.locality.toLowerCase()], 
      [`asc`, `asc`],
    )
    : []
  }
)
export const enabledCitiesSelector = createSelector(
  configSelector,
  config => {
    return config.cities 
    ?  _.orderBy(
      config.cities.filter(city => !city.isDisabled), 
      [(city) => city.locality.toLowerCase()], 
      [`asc`],
    )
    : []
  }
)
export const editCitiesModalSelector = createSelector(
  configSelector,
  config => config.editCitiesModal ? config.editCitiesModal : {}
)
export const editCitiesModalCategoryIdSelector = createSelector(
  editCitiesModalSelector,
  editCitiesModal => editCitiesModal.cityId ? editCitiesModal.cityId : null
)
export const editCitiesShowModalSelector = createSelector(
  editCitiesModalSelector,
  editCitiesModal => editCitiesModal.showModal ? editCitiesModal.showModal : false
)
export const editCitiesUpdatedCitySelector = createSelector(
  editCitiesModalSelector,
  editCitiesModal => editCitiesModal.updatedCity ? editCitiesModal.updatedCity : {}
)
