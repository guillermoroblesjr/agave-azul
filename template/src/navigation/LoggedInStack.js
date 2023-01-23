import React from 'react'
import {
  createStackNavigator, 
  createBottomTabNavigator, 
  createAppContainer,
} from 'react-navigation'
import { Linking } from 'react-native'
// import styled from 'styled-components/native'
// import { Platform } from "react-native"
// import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicon from "react-native-vector-icons/Ionicons"
import { Container as LogOutScreen } from '~/src/components/LogOutScreen'
import { Container as BannerContentScreen } from '~/src/components/BannerContentScreen'
import { Container as CampaignsScreen } from '~/src/components/CampaignsScreen'
import { Container as CampaignScreen } from '~/src/components/CampaignScreen'
import { Container as CountrySearchScreen } from '~/src/components/CountrySearchScreen'
import { Container as CitySearchScreen } from '~/src/components/CitySearchScreen'
import { Container as DeleteCitiesScreen } from '~/src/components/DeleteCitiesScreen'
import { Container as ProfileScreen } from '~/src/components/ProfileScreen'
import { Container as FaqScreen } from '~/src/components/FaqScreen'
import { Container as EditCampaignCategoriesScreen } from '~/src/components/EditCampaignCategoriesScreen'
import { Container as FilterCampaignsScreen } from '~/src/components/FilterCampaignsScreen'
import { Container as InfluencerSavePostingDetailsScreen } from '~/src/components/InfluencerSavePostingDetailsScreen'
import { Container as SavePostingDetailsInfoScreen } from '~/src/components/SavePostingDetailsInfoScreen'
import { Container as ConfigScreen } from '~/src/components/ConfigScreen'
import { Container as AdminConfirmAccountsScreen } from '~/src/components/AdminConfirmAccountsScreen'
import { Container as AdminEditCategoriesScreen } from '~/src/components/AdminEditCategoriesScreen'
import { Container as AdminEditCitiesScreen } from '~/src/components/AdminEditCitiesScreen'
import { Container as AdminCitySearchScreen } from '~/src/components/AdminCitySearchScreen'
import { Container as AdminEditCitySearchScreen } from '~/src/components/AdminEditCitySearchScreen'
import { Container as EditCampaignPostsScreen } from '~/src/components/EditCampaignPostsScreen'
import { Container as CreatePostScreen } from '~/src/components/CreatePostScreen'
import { Container as InfluencerShareCampaignScreen } from '~/src/components/InfluencerShareCampaignScreen'

const CampaignsStack = createStackNavigator(
  {
    BannerContent: { screen: BannerContentScreen },
    Campaigns: { screen: CampaignsScreen },
    Campaign: { screen: CampaignScreen },
    InfluencerShareCampaign: { screen: InfluencerShareCampaignScreen },
    CountrySearch: { screen: CountrySearchScreen },
    CitySearch: { screen: CitySearchScreen },
    DeleteCities: { screen: DeleteCitiesScreen },
    EditCampaignCategories: { screen: EditCampaignCategoriesScreen },
    FilterCampaigns: { screen: FilterCampaignsScreen },
    InfluencerSavePostingDetails: { screen: InfluencerSavePostingDetailsScreen },
    SavePostingDetailsInfo: { screen: SavePostingDetailsInfoScreen },
    EditCampaignPosts: { screen: EditCampaignPostsScreen },
    CreatePost: { screen: CreatePostScreen },
  },
  {
    navigationOptions: (data) => {
      const {
        navigation,
        screenProps
      } = data
      const {
        state = {}
      } = navigation
      const {
        index = 0,
        routes = [],
      } = state
      const route = routes[index] || {}

      let tabBarVisible = true
      switch (route.routeName) {
        case `Campaign`: {
          tabBarVisible = false
          break
        }
        case `CitySearch`: {
          tabBarVisible = false
          break
        }
        case `DeleteCities`: {
          tabBarVisible = false
          break
        }
        case `CampaignCategories`: {
          tabBarVisible = false
          break
        }
        case `FilterCampaigns`: {
          tabBarVisible = false
          break
        }
        case `EditCampaignPosts`: {
          tabBarVisible = false
          break
        }
        case `CreatePost`: {
          tabBarVisible = false
          break
        }
        case `InfluencerShareCampaign`: {
          tabBarVisible = false
          break
        }
        case `InfluencerSavePostingDetails`: {
          tabBarVisible = false
          break
        }
        case `SavePostingDetailsInfo`: {
          tabBarVisible = false
          break
        }

        default: {
          break
        }
      }
    
      return {
        tabBarVisible,
        title: screenProps.intl.formatMessage({ id: 'app.navigation.campaignsstack.title' }),
      }
    },
    initialRouteName: 'Campaigns',
    defaultNavigationOptions: {
      headerTitle: ` `,
      headerBackTitle: ` `,
      headerStyle: {
        backgroundColor: '#A30832',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Cookie-Regular',
        fontSize: 35,
        fontWeight: undefined,
      },
    },
  }
)

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
    LogOut: {
      screen: LogOutScreen,
    },
  },
  {
    navigationOptions: (data) => {
      const {
        screenProps
      } = data
    
      return {
        title: screenProps.intl.formatMessage({ id: 'app.navigation.profilestack.title' }),
      }
    },
    initialRouteName: 'LogOut',
    defaultNavigationOptions: {
      headerTitle: `Profile`,
      headerBackTitle: ` `,
      headerStyle: {
        backgroundColor: '#A30832',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Cookie-Regular',
        fontSize: 35,
        fontWeight: undefined,
      },
    },
  }
)

const ConfigStack = createStackNavigator(
  {
    Config: { screen: ConfigScreen },
    AdminConfirmAccounts: { screen: AdminConfirmAccountsScreen },
    AdminEditCategories: { screen: AdminEditCategoriesScreen },
    AdminEditCities: { screen: AdminEditCitiesScreen },
    AdminCitySearch: { screen: AdminCitySearchScreen },
    AdminEditCitySearch: { screen: AdminEditCitySearchScreen },
  },
  {
    navigationOptions: (data) => {
      const {
        navigation
      } = data
      const {
        state = {}
      } = navigation
      const {
        index = 0,
        routes = [],
      } = state
      const route = routes[index] || {}

      let tabBarVisible = true
      switch (route.routeName) {
        case `AdminEditCategories`: {
          tabBarVisible = false
          break
        }
        case `AdminEditCities`: {
          tabBarVisible = false
          break
        }
        case `AdminCitySearch`: {
          tabBarVisible = false
          break
        }
        
        default: {
          break
        }
      }
    
      return {
        tabBarVisible,
      }
    },
    initialRouteName: 'Config',
    defaultNavigationOptions: {
      headerTitle: `Config`,
      headerBackTitle: ` `,
      headerStyle: {
        backgroundColor: '#A30832',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Cookie-Regular',
        fontSize: 35,
        fontWeight: undefined,
      },
    },
  }
)

const FaqStack = createStackNavigator(
  {
    Faq: {
      screen: FaqScreen,
    },
  },
  {
    initialRouteName: 'Faq',
    defaultNavigationOptions: {
      headerTitle: `Faq`,
      headerBackTitle: ` `,
      headerStyle: {
        backgroundColor: '#A30832',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Cookie-Regular',
        fontSize: 35,
        fontWeight: undefined,
      },
    },
  }
)

export default function createLoggedInStack ({ role }) {
  const routeConfigMap = role === `campaign_manager`
    ? {
      Campaigns: { screen: CampaignsStack },
      Config: { screen: ConfigStack },
      Profile: { screen: ProfileStack },
    }
    : {
      Campaigns: { screen: CampaignsStack },
      Profile: { screen: ProfileStack },
      Faq: {
        screen: () => null,
        navigationOptions: {
          tabBarOnPress: () => {
            Linking.openURL(`https://digitalcrushlabs.com/amiliae/faq`)
          },
        },
      },
    }
  return createAppContainer(createBottomTabNavigator(
    routeConfigMap,
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon({ focused, tintColor }) {
          const { routeName } = navigation.state
          let iconName
  
          switch (routeName) {
            case 'Campaigns':
              iconName = `ios-star${focused ? '' : '-outline'}`
              break
  
            case 'Config':
              iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`
              break
  
            case 'Profile':
              iconName = `ios-cloud${focused ? '' : '-outline'}`
              break
  
            case 'Faq':
              iconName = `ios-help-circle${focused ? '' : '-outline'}`
              break
  
            default:
              break
          }
          return (
            <Ionicon name={iconName} size={30} color={"#353535"} />
          )
  
          // if (Platform.OS === "ios") {
          //   switch (routeName) {
          //     case 'Campaigns':
          //       iconName = `ios-star${focused ? '' : '-outline'}`
          //       break
    
          //     case 'Config':
          //       iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`
          //       break
    
          //     case 'Profile':
          //       iconName = `ios-cloud${focused ? '' : '-outline'}`
          //       break
    
          //     case 'Faq':
          //       iconName = `ios-help-circle${focused ? '' : '-outline'}`
          //       break
    
          //     default:
          //       break
          //   }
          //   return (
          //     <Ionicon name={iconName} size={30} color={"#353535"} />
          //   )
          // }
          // else {
          //   switch (routeName) {
          //     case 'Campaigns':
          //       iconName = `layers${focused ? '' : '-outline'}`
          //       break
    
          //     case 'Config':
          //       iconName = `vote${focused ? '' : '-outline'}`
          //       break
    
          //     case 'Profile':
          //       iconName = `account${focused ? '' : '-outline'}`
          //       break
    
          //     case 'Faq':
          //       iconName = `comment-question${focused ? '' : '-outline'}`
          //       break
    
          //     default:
          //       break
          //   }
          //   return (
          //     <MaterialCommunityIcon name={iconName} size={30} color={"#353535"} />
          //   )
          // }
        },
      }),
      tabBarOptions: {
        activeTintColor: '#353535',
        inactiveTintColor: '#353535',
      },
    }
  ))
}