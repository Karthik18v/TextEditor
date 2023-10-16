import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #25262c;
`

export const MainContainer = styled.div`
  background-color: #1b1c22;
  height: 80vh;
  display: flex;
  color: white;
  padding: 10px;
`

export const ImageContainer = styled.div`
  width: 50%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  height: 100%;
`

export const Heading = styled.h1``

export const Image = styled.img`
  width: 100%;
  height: 300px;
`
export const TextInput = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: #25262c;
  border: 0px;
  border-inline-color: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  outline: none;
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  font-weight: ${props => (props.fontWeight ? 'bold' : 'normal')};
  font-style: ${props => (props.fontFamily ? 'italic' : 'normal')};
`

export const Headers = styled.ul`
  height: 10%;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  list-style: none;
`

export const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-color: #25262c;
  border-radius: 5px;
  border: 0.5px solid #cbd5e1;
`
export const HorizontalLine = styled.hr`
  background-color: #cbd5e1;
  height: 0.5px;
  width: 100%;
`
export const IconButton = styled.button`
  background-color: transparent;
  border: 0px;
  margin-top: 5px;
`
