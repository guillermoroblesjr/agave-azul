import { Container as AuthenticateScreen } from '~/src/components/AuthenticateScreen'
import { Container as PreSignUpScreen } from '~/src/components/PreSignUpScreen'
import { Container as ResetPasswordScreen } from '~/src/components/ResetPasswordScreen'
import { Container as BusinessContactUsScreen } from '~/src/components/BusinessContactUsScreen'
import { Container as SignUpScreen } from '~/src/components/SignUpScreen'
import { Container as SignUpDetailsScreen } from '~/src/components/SignUpDetailsScreen'
import { Container as SignUpPasswordScreen } from '~/src/components/SignUpPasswordScreen'
import { Container as LoginScreen } from '~/src/components/LoginScreen'
import { Container as VerifyEmailScreen } from '~/src/components/VerifyEmailScreen'
import { Container as ConfirmEmailScreen } from '~/src/components/ConfirmEmailScreen'
import { Container as CountrySearchScreen } from '~/src/components/CountrySearchScreen'
import { Container as CitySearchScreen } from '~/src/components/CitySearchScreen'
import { Container as InfluencerEditCategoriesScreen } from '~/src/components/InfluencerEditCategoriesScreen'
import { Container as InstagramAccountSearchScreen } from '~/src/components/InstagramAccountSearchScreen'
import { createStackNavigator } from "react-navigation"

export default createStackNavigator(
  {
    Authenticate: {
      screen: AuthenticateScreen,
    },
    PreSignUpScreen: {
      screen: PreSignUpScreen,
    },
    ResetPassword: {
      screen: ResetPasswordScreen,
    },
    BusinessContactUsScreen: {
      screen: BusinessContactUsScreen,
    },
    SignUpScreen: {
      screen: SignUpScreen,
    },
    SignUpDetailsScreen: {
      screen: SignUpDetailsScreen,
    },
    CountrySearchScreen: {
      screen: CountrySearchScreen,
    },
    CitySearchScreen: {
      screen: CitySearchScreen,
    },
    InfluencerEditCategoriesScreen: { 
      screen: InfluencerEditCategoriesScreen,
    },
    InstagramAccountSearchScreen: {
      screen: InstagramAccountSearchScreen,
    },
    SignUpPasswordScreen: {
      screen: SignUpPasswordScreen,
    },
    VerifyEmailScreen: {
      screen: VerifyEmailScreen,
    },
    LoginScreen: {
      screen: LoginScreen,
    },
    ConfirmEmail: {
      screen: ConfirmEmailScreen,
    },
  },
  {
    initialRouteName: 'Authenticate',
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