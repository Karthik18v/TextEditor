import {Component} from 'react'
import {BsTypeBold, BsTypeItalic, BsTypeUnderline} from 'react-icons/bs'
import './App.css'

import {
  AppContainer,
  MainContainer,
  ImageContainer,
  Heading,
  Image,
  TextEditorContainer,
  Headers,
  TextInput,
  HorizontalLine,
  IconButton,
} from './styledComponents'

// Replace your code here

class App extends Component {
  state = {
    fontFamilyIsActive: false,
    fontWeightIsActive: false,
    underlineIsActive: false,
  }

  onClickBoldIcon = () => {
    this.setState(prevState => ({
      fontWeightIsActive: !prevState.fontWeightIsActive,
    }))
  }

  onClickFontFamilyIcon = () => {
    this.setState(prevState => ({
      fontFamilyIsActive: !prevState.fontFamilyIsActive,
    }))
  }

  onClickFontUnderLineIcon = () => {
    this.setState(prevState => ({
      underlineIsActive: !prevState.underlineIsActive,
    }))
  }

  render() {
    const {
      fontFamilyIsActive,
      underlineIsActive,
      fontWeightIsActive,
    } = this.state

    const fontWeightIconColor = fontWeightIsActive ? '#faff00' : '#f1f5f9'
    const fontFamilyIconColor = fontFamilyIsActive ? '#faff00' : '#f1f5f9'
    const underlineIconColor = underlineIsActive ? '#faff00' : '#f1f5f9'
    console.log(fontWeightIsActive)
    return (
      <AppContainer>
        <MainContainer>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextEditorContainer>
            <Headers>
              <li>
                <IconButton
                  style={{color: fontWeightIconColor}}
                  onClick={this.onClickBoldIcon}
                  data-testid="bold"
                >
                  <BsTypeBold size="28" />
                </IconButton>
              </li>
              <li>
                <IconButton
                  style={{color: fontFamilyIconColor}}
                  onClick={this.onClickFontFamilyIcon}
                  data-testid="italic"
                >
                  <BsTypeItalic size="28" />
                </IconButton>
              </li>
              <li>
                <IconButton
                  style={{color: underlineIconColor}}
                  onClick={this.onClickFontUnderLineIcon}
                  data-testid="underline"
                >
                  <BsTypeUnderline size="28" />
                </IconButton>
              </li>
            </Headers>
            <HorizontalLine />
            <TextInput
              fontWeight={fontWeightIsActive}
              fontFamily={fontFamilyIsActive}
              underline={underlineIsActive}
            />
          </TextEditorContainer>
        </MainContainer>
      </AppContainer>
    )
  }
}

export default App
