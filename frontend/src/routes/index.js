import HomePage from "../pages/HomePage/HomePage"
import OrderPage from "../pages/OrderPage/OrderPage"
import ServicePage from "../pages/ServicePage/ServicePage"
import IntroducePage from "../pages/IntroductPage/IntroducePage"
import SignInPage from  '../pages/SignInPage/SignInPage'
import SignUpPage  from '../pages/SignUpPage/SignUpPage'

import ServiceDetailPage from  "../pages/ServiceDetailPage/ServiceDetailPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import TypeServicePage from "../pages/TypeServicePage/TypeServicePage"

export const routes = [
    {
        path:  '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path:  '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path:  '/services',
        page: ServicePage,
        isShowHeader: true
    },
    {
        path:  '/introduce',
        page: IntroducePage,
        isShowHeader: true
    },
    {
        path:  '/detail',
        page: ServiceDetailPage,
        isShowHeader: true
    },
    {
        path:  '/type',
        page: TypeServicePage,
        isShowHeader: true
    },
    {
        path:  '/sign-in',
        page: SignInPage,
        isShowHeader: false
    },
    {
        path:  '/sign-up',
        page: SignUpPage,
        isShowHeader: false
    },
    
    {
        path:  '*',
        page: NotFoundPage
    },

]