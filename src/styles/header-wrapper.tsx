import styled from "@emotion/styled"

export const HeaderWrapper = styled.div(() => ({
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '100px',
    backgroundColor: 'white',
    color: 'black',
    paddingBlock: '10px',
    paddingInline: '35px',
    margin: 0,
    zIndex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    transition: 'all 1s linear',
}));

export const Nav = styled.div(() => ({
    width: 'max-content',
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '15px',
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NavItem = styled.div<any>(({ isMatch }) => ({
    boxSizing: 'border-box',
    width: 'max-content',
    height: '100%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: isMatch ? '1px solid yellow' : 'none',
    fontSize: '16px',
    fontWeight: 600,
    textTransform: 'capitalize',
    cursor: isMatch ? 'default' : 'pointer',
    ':hover': {
        fontWeight: 900,
        color: 'greenyellow',
        borderBottomColor: 'greenyellow',
    },
}));