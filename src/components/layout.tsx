import { Global, ThemeProvider } from '@emotion/react';
import LayoutWrapper from '../styles/layout-wrapper';
import Header from './header';

export interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {

    return (
        <ThemeProvider theme={{}}>
            <Global
                styles={{
                    body: {
                        margin: 0,
                        padding: 0,
                    }
                }}
            />
            <Header />
            <LayoutWrapper>
                {props.children}
            </LayoutWrapper>
        </ThemeProvider>
    )
}

export default Layout;