import APP_ROUTE from "../enums/app-route.enum"

const routes: Array<{ path: APP_ROUTE, name: string }> = [
    { path: APP_ROUTE.HOME, name: 'Home' },
    { path: APP_ROUTE.ABOUT, name: 'About' },
    { path: APP_ROUTE.PROFILE, name: 'Profile' },
]

export default routes