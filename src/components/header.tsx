import { useLocation, useNavigate } from "react-router-dom";
import { HeaderWrapper, Nav, NavItem } from "../styles/header-wrapper";
import routes from "../utils/routes";
import APP_ROUTE from "../enums/app-route.enum";

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <HeaderWrapper>
            <Nav>
                {
                    routes.map((item: { path: APP_ROUTE, name: string }) => (
                        <NavItem
                            key={item.path}
                            isMatch={pathname === item.path}
                            onClick={() => pathname !== item.path && navigate(item.path)}
                        >
                            {item.name}
                        </NavItem>
                    ))
                }
            </Nav>
        </HeaderWrapper>
    );
};

export default Header