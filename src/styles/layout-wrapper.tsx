import styled from "@emotion/styled"

const LayoutWrapper = styled.div(() => ({
    display: 'block',
    backgroundColor: 'black',
    color: 'white',
    padding: 0,
    paddingInline: '35px',
    margin: 0,
    width: '100%',
    minHeight: '100vh',
    paddingTop: '100px',
    overflowY: 'auto',
    zIndex: 1,
    boxSizing: 'border-box',
    transition: 'all 1s linear',
}))

export default LayoutWrapper