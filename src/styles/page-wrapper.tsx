import styled from "@emotion/styled"

const PageWrapper = styled.div(() => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'max-content',
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
}))

export default PageWrapper

export const WarnningBox = styled.h2(({ auth }: { auth: boolean }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'max-content',
    padding: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: auth ? 'green' : 'red',
}))

export const Input = styled.input(() => ({
    boxSizing: 'border-box',
    width: '50%',
    height: '50px',
    border: '1px solid grey',
    borderRadius: '8px',
    padding: '10px',
    color: 'black',
    backgroundColor: 'white',
    fontSize: '20px',
}))

export const Checkbox = styled.input(() => ({
    boxSizing: 'border-box',
    width: '30px',
    height: '30px',
    border: '1px solid grey',
    borderRadius: '8px',
    padding: '10px',
    color: 'black',
    backgroundColor: 'white',
    fontSize: '20px',
}))

export const Label = styled.label(({ info }: { info?: boolean }) => ({
    boxSizing: 'border-box',
    width: '50%',
    height: 'max-content',
    color: info ? 'blue' : 'white',
    textAlign: 'left',
    fontSize: '20px',
    fontWeight: 800
}))

export const Btn = styled.button(() => ({
    boxSizing: 'border-box',
    width: '50%',
    height: '50px',
    border: '1px solid grey',
    borderRadius: '8px',
    padding: '10px',
    color: 'white',
    backgroundColor: 'blue',
    fontSize: '20px',
    fontWeight: 900,
    cursor: 'pointer',
    marginTop: '25px',
}))

export const RightWrapper = styled.div(() => ({
    boxSizing: 'border-box',
    width: '50%',
    height: 'max-content',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
}))