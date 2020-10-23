import React, { forwardRef, createRef, Component } from 'react';
import ContentEditable from 'react-contenteditable';

import Card05Container from './Card05Container';
import CardSizingBox from '../../_Layout/CardSizingBox';
import DottedMatrix from '../DottedMatrix';
import Arrow from '../Arrow';
import logo from '../../../../images/logo.png';

class Card05 extends Component {
  constructor() {
    super();
    this.contentEditable = createRef();
    this.firstEditable = createRef();
    this.state = {
      title: 'How to predict and measure content effectiveness',
      cta: 'GET THE GUIDE',
      logo: logo,
      social: '',
    };
  }

  componentDidMount() {
    this.firstEditable.current.focus();
  }

  handleChange = (e, stateKey) => {
    this.setState({ [stateKey]: e.target.value });
  };

  handleImageUpload = (e, stateKey) => {
    e.preventDefault();

    if (e.target.files && e.target.files.length > 0) {
      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onload = () => {
        if (reader.readyState === 2) {
          this.setState({ [stateKey]: reader.result });
        }
      };

      reader.readAsDataURL(file);
    }
  };

  render = () => {
    return (
      <CardSizingBox
        isLandscape={this.props.isLandscape}
        cardSize={this.props.cardSize}
      >
        <Card05Container
          ref={this.props.forwardRef}
          id={this.props.id}
          social={this.state.social}
          logo={this.state.logo}
          titleSize={this.props.titleSize}
          logoSize={this.props.logoSize}
          mainColor={this.props.mainColor}
          textColor={this.props.textColor}
          size={this.props.size}
          isLandscape={this.props.isLandscape}
          className='apply-font'
        >
          <header className='header'>
            <input
              style={{ display: 'none' }}
              type='file'
              accept='.jpg,.jpeg,.png'
              id='logo-image'
              onChange={(e) => {
                this.handleImageUpload(e, 'logo');
              }}
            />
            <label htmlFor='logo-image' className='logo__wrapper'>
              <img src={this.state.logo} alt='logo' className='logo' />
            </label>
          </header>
          <div className='content'>
            <ContentEditable
              html={this.state.title}
              disabled={false}
              onChange={(e) => this.handleChange(e, 'title')}
              tagName='p'
              className='content__title'
              innerRef={this.firstEditable}
            />
          </div>
          <div className='cta'>
            <ContentEditable
              html={this.state.cta}
              disabled={false}
              onChange={(e) => this.handleChange(e, 'cta')}
              tagName='p'
              className='cta__text'
            />
            <Arrow textColor={this.props.textColor} />
          </div>
          <DottedMatrix
            isLandscape={this.props.isLandscape}
            dotColor={this.props.dotColor}
          />
          <input
            style={{ display: 'none' }}
            type='file'
            accept='.jpg,.jpeg,.png'
            id='social-image'
            onChange={(e) => {
              this.handleImageUpload(e, 'social');
            }}
          />
          <label htmlFor='social-image' className='social__image'></label>
        </Card05Container>
      </CardSizingBox>
    );
  };
}

export default forwardRef((props, ref) => (
  <Card05 {...props} forwardRef={ref} />
));
