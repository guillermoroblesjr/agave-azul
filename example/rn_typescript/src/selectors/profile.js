import { createSelector } from 'reselect'
import _ from 'lodash'

export const profileSelector = state => state.profile
export const firstNameSelector = createSelector(
  profileSelector,
  profile => _.isUndefined(profile.firstName) ? `` : profile.firstName
)
export const lastNameSelector = createSelector(
  profileSelector,
  profile => _.isUndefined(profile.lastName) ? `` : profile.lastName
)
export const emailAddressSelector = createSelector(
  profileSelector,
  profile => _.isUndefined(profile.emailAddress) ? `` : profile.emailAddress
)
export const roleSelector = createSelector(
  profileSelector,
  profile => typeof profile.role !== undefined ? profile.role : ``
)
export const passwordSelector = createSelector(
  profileSelector,
  profile => _.isUndefined(profile.password) ? `` : profile.password
)
export const confirmPasswordSelector = createSelector(
  profileSelector,
  profile => _.isUndefined(profile.confirmPassword) ? `` : profile.confirmPassword
)
export const isEmailConfirmedSelector = createSelector(
  profileSelector,
  profile => _.isUndefined(profile.isEmailConfirmed) ? null : profile.isEmailConfirmed
)
export const emailAddressDoesNotExistSelector = createSelector(
  profileSelector,
  profile => _.isUndefined(profile.emailAddressDoesNotExist) ? null : profile.emailAddressDoesNotExist
)
export const birthdaySelector = createSelector(
  profileSelector,
  profile => _.isUndefined(profile.birthday) ? null : profile.birthday
)
export const localeSelector = createSelector(
  profileSelector,
  profile => _.isUndefined(profile.locale) ? `en` : profile.locale
)
export const countrySelector = createSelector(
  profileSelector,
  profile => _.isUndefined(profile.country) ? null : profile.country
)
export const profileAlpha2Selector = createSelector(
  countrySelector,
  country => _.isNull(country) ? `` : country.alpha2
)
export const profileCountryGeocodeSelector = createSelector(
  countrySelector,
  country => _.isNull(country) ? `` : country.googleapisGeocode
)
export const citySelector = createSelector(
  profileSelector,
  profile => _.isUndefined(profile.city) ? null : profile.city
)
export const cityTextSelector = createSelector(
  citySelector,
  (city) => _.isNull(city) ? `` : city.locality
)
export const categoriesSelector = createSelector(
  profileSelector,
  profile => {
    return _.isUndefined(profile.categories) 
      ? []
      :  _.orderBy(profile.categories, [category => category.name.toLowerCase()], ['asc'])
  }
)

// Accounts Selector

export const accountsSelector = createSelector(
  profileSelector,
  profile => _.isUndefined(profile.accounts) ? null : profile.accounts
)
export const instagramSelector = createSelector(
  accountsSelector,
  accounts => _.isEmpty(accounts.instagram) ? {} : accounts.instagram
)
export const accountsEntitiesSelector = createSelector(
  accountsSelector,
  accounts => _.isEmpty(accounts.entities) ? {} : accounts.entities
)
export const accountsResultsSelector = createSelector(
  accountsSelector,
  accounts => _.isEmpty(accounts.result) ? {} : accounts.result
)
export const accountsEntitiesAccountsSelector = createSelector(
  accountsEntitiesSelector,
  entities => _.isEmpty(entities.accounts) ? {} : entities.accounts
)
export const accountsEntitiesInstagramSelector = createSelector(
  accountsEntitiesAccountsSelector,
  accounts => _.isEmpty(accounts.instagram) ? {} : accounts.instagram
)
export const instagramOwnerSelector = createSelector(
  accountsEntitiesInstagramSelector,
  instagram => _.isUndefined(instagram.owner) ? 0 : instagram.owner
)

// Socials Selector

export const socialsSelector = createSelector(
  profileSelector,
  profile => _.isUndefined(profile.socials) ? null : profile.socials
)
export const socialsEntitiesSelector = createSelector(
  socialsSelector,
  socials => _.isEmpty(socials.entities) ? {} : socials.entities
)
export const socialsResultsSelector = createSelector(
  socialsSelector,
  socials => _.isEmpty(socials.result) ? {} : socials.result
)
export const socialsEntitiesSocialsSelector = createSelector(
  socialsEntitiesSelector,
  entities => _.isEmpty(entities.socials) ? {} : entities.socials
)
export const socialsEntitiesInstagramSelector = createSelector(
  socialsEntitiesSocialsSelector,
  socials => _.isEmpty(socials.instagram) ? {} : socials.instagram
)
export const socialsEntitiesInstagramIsEmptySelector = createSelector(
  socialsEntitiesSocialsSelector,
  socials => _.isEmpty(socials.instagram) ? true : false
)
export const instagramIdSelector = createSelector(
  socialsEntitiesInstagramSelector,
  instagram => _.isUndefined(instagram.id) ? 0 : instagram.id
)
export const instagramAllowedSharesPerDaySelector = createSelector(
  socialsEntitiesInstagramSelector,
  instagram => _.isUndefined(instagram.allowedSharesPerDay) ? null : instagram.allowedSharesPerDay
)
export const instagramSharesSelector = createSelector(
  socialsEntitiesInstagramSelector,
  instagram => _.isEmpty(instagram.shares) ? [] : instagram.shares
)
export const instagramIsVerifiedSelector = createSelector(
  socialsEntitiesInstagramSelector,
  instagram => _.isUndefined(instagram.isVerified) ? false : instagram.isVerified
)
export const instagramNumOfFollowersSelector = createSelector(
  socialsEntitiesInstagramSelector,
  instagram => _.isUndefined(instagram.numOfFollowers) ? 0 : instagram.numOfFollowers
)
export const instagramReasonNotVerifiedSelector = createSelector(
  socialsEntitiesInstagramSelector,
  instagram => _.isUndefined(instagram.reasonNotVerified) ? `` : instagram.reasonNotVerified
)
export const instagramHasUserParticipatedTodaySelector = createSelector(
  socialsEntitiesInstagramSelector,
  instagram => _.isUndefined(instagram.hasUserParticipatedToday) ? false : instagram.hasUserParticipatedToday
)

// Shares Selector

export const sharesSelector = createSelector(
  profileSelector,
  profile => _.isUndefined(profile.shares) ? null : profile.shares
)
export const sharesEntitiesSelector = createSelector(
  sharesSelector,
  shares => _.isEmpty(shares.entities) ? {} : shares.entities
)
export const sharesResultsSelector = createSelector(
  sharesSelector,
  shares => _.isEmpty(shares.result) ? {} : shares.result
)
export const sharesEntitiesSharesByCampaignIdSelector = createSelector(
  sharesEntitiesSelector,
  entities => _.isEmpty(entities.sharesByCampaignId) ? {} : entities.sharesByCampaignId
)