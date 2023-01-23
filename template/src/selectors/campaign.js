import { createSelector } from 'reselect'
import _ from 'lodash'

export const campaignSelector = state => state.campaign
export const nameSelector = createSelector(
  campaignSelector,
  campaign => campaign.name ? campaign.name : ``
)
export const companyNameSelector = createSelector(
  campaignSelector,
  campaign => campaign.companyName ? campaign.companyName : ``
)
export const descriptionSelector = createSelector(
  campaignSelector,
  campaign => campaign.description ? campaign.description : ``
)
export const campaignCountrySelector = createSelector(
  campaignSelector,
  campaign => _.isUndefined(campaign.country) ? null : campaign.country
)
export const campaignCitySelector = createSelector(
  campaignSelector,
  campaign => _.isNull(campaign) ? null : campaign.city
)
export const campaignCityIdSelector = createSelector(
  campaignCitySelector,
  city => _.isUndefined(city) ? `` : city.id
)
export const campaignCityLocalitySelector = createSelector(
  campaignCitySelector,
  city => _.isUndefined(city) ? `` : city.locality
)
export const campaignCityPoliticalSelector = createSelector(
  campaignCitySelector,
  city => _.isUndefined(city) ? `` : city.political
)
export const campaignAlpha2Selector = createSelector(
  campaignCountrySelector,
  country => _.isNull(country) ? `` : country.alpha2
)
export const campaignCountryGeocodeSelector = createSelector(
  campaignCountrySelector,
  country => _.isNull(country) ? `` : country.googleapisGeocode
)
export const campaignCitiesSelector = createSelector(
  campaignSelector,
  campaign => {
    return campaign.cities 
      ?  _.orderBy(campaign.cities, [(city) => city.locality.toLowerCase()], ['asc'])
      : []
  }
)
export const campaignCitiesLengthSelector = createSelector(
  campaignCitiesSelector,
  cities => cities.length ? cities.length : 0
)
export const startDateSelector = createSelector(
  campaignSelector,
  campaign => campaign.startDate ? campaign.startDate : 0
)
export const endDateSelector = createSelector(
  campaignSelector,
  campaign => campaign.endDate ? campaign.endDate : 0
)
export const campaignCategoriesSelector = createSelector(
  campaignSelector,
  campaign => {
    return campaign.categories 
      ?  _.orderBy(campaign.categories, [category => category.name.toLowerCase()], ['asc'])
      : []
  }
)
export const campaignIdSelector = createSelector(
  campaignSelector,
  campaign => campaign.id ? campaign.id : null
)
export const minimumAgeLimitSelector = createSelector(
  campaignSelector,
  campaign => campaign.minimumAgeLimit ? campaign.minimumAgeLimit : 18
)
export const radiusSelector = createSelector(
  campaignSelector,
  campaign => campaign.radius ? campaign.radius : 1
)
export const influencerMaxLimitSelector = createSelector(
  campaignSelector,
  campaign => campaign.influencerMaxLimit ? campaign.influencerMaxLimit : 100
)
export const requiredNumOfFollowersSelector = createSelector(
  campaignSelector,
  campaign => campaign.requiredNumOfFollowers ? campaign.requiredNumOfFollowers : 300
)
export const postsSelector = createSelector(
  campaignSelector,
  campaign => campaign.posts ? campaign.posts : {}
)
export const postsEntitiesSelector = createSelector(
  postsSelector,
  posts => posts.entities && posts.entities.posts
    ? posts.entities.posts
    : {}
)
export const postsResultSelector = createSelector(
  postsSelector,
  posts => posts.result ? posts.result : []
)
export const createPostSelector = createSelector(
  campaignSelector,
  campaign => campaign.createPost ? campaign.createPost : {}
)
export const captionSelector = createSelector(
  createPostSelector,
  createPost => createPost.caption ? createPost.caption : ``
)
export const imageSelector = createSelector(
  createPostSelector,
  createPost => createPost.image ? createPost.image : {}
)
export const imageUriSelector = createSelector(
  createPostSelector,
  createPost => createPost.imageUri ? createPost.imageUri : ``
)
export const postIdSelector = createSelector(
  createPostSelector,
  createPost => createPost.id ? createPost.id : null
)
export const savePostingDetailsSelector = createSelector(
  campaignSelector,
  campaign => campaign.savePostingDetails ? campaign.savePostingDetails : {}
)
export const shareLinkSelector = createSelector(
  savePostingDetailsSelector,
  savePostingDetails => savePostingDetails.shareLink ? savePostingDetails.shareLink : ``
)