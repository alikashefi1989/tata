import { useLocation, useNavigate } from "react-router-dom"
import useIsLoggedIn from "./auth"
import { useEffect, useLayoutEffect } from "react"
import protectedRoutes from "../utils/protected-routes"
import APP_ROUTE from "../enums/app-route.enum"

const useProtectedLayout = () => {
    const { pathname } = useLocation()
    const isLoggedIn = useIsLoggedIn()
    const navigate = useNavigate()

    useLayoutEffect(() => {
        if (!isLoggedIn && typeof pathname === 'string' && protectedRoutes.includes(pathname)) {
            navigate(APP_ROUTE.LOGIN)
        }
        if (isLoggedIn && typeof pathname === 'string' && pathname === APP_ROUTE.LOGIN) {
            navigate(APP_ROUTE.HOME)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn, pathname])

    useEffect(() => {
        if (!isLoggedIn && typeof pathname === 'string' && protectedRoutes.includes(pathname)) {
            navigate(APP_ROUTE.LOGIN)
        }
        if (isLoggedIn && typeof pathname === 'string' && pathname === APP_ROUTE.LOGIN) {
            navigate(APP_ROUTE.HOME)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn, pathname])

    return
}

export default useProtectedLayout