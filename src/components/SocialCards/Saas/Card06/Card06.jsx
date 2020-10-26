import React, { forwardRef, createRef, Component } from 'react';
import ContentEditable from 'react-contenteditable';

import Card06Container from './Card06Container';
import CardSizingBox from '../../_Layout/CardSizingBox';
import Arrow from '../Arrow';
import logo1 from '../../../../images/logo.png';
import logo2 from '../../../../images/logo2.png';
import logo3 from '../../../../images/logo3.png';
import logo4 from '../../../../images/logo4.png';

class Card06 extends Component {
  constructor() {
    super();
    this.contentEditable = createRef();
    this.firstEditable = createRef();
    this.state = {
      title: 'How to predict and measure content effectiveness',
      cta: 'RESERVE YOUR SEAT',
      logo1: logo1,
      logo2: logo2,
      logo3: logo3,
      logo4: logo4,
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
        <Card06Container
          ref={this.props.forwardRef}
          id={this.props.id}
          logo={this.state.logo1}
          logo2={this.state.logo2}
          logo3={this.state.logo3}
          logo4={this.state.logo4}
          titleSize={this.props.titleSize}
          logoSize={this.props.logoSize}
          logo2Size={this.props.logo2Size}
          logo3Size={this.props.logo3Size}
          logo4Size={this.props.logo4Size}
          mainColor={this.props.mainColor}
          textColor={this.props.textColor}
          logo2Color={this.props.logo2Color}
          logo3Color={this.props.logo3Color}
          logo4Color={this.props.logo4Color}
          size={this.props.size}
          isLandscape={this.props.isLandscape}
          className='apply-font'
        >
          <header className='header'>
            <input
              style={{ display: 'none' }}
              type='file'
              accept='.jpg,.jpeg,.png'
              id='logo-image-1'
              onChange={(e) => {
                this.handleImageUpload(e, 'logo1');
              }}
            />
            <label htmlFor='logo-image-1' className='logo__wrapper'>
              <img
                src={this.state.logo1}
                height={50}
                alt='logo'
                className='logo'
              />
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
          <div className='logos'>
            <div className='logo__container'>
              <input
                style={{ display: 'none' }}
                type='file'
                accept='.jpg,.jpeg,.png'
                id='logo-2'
                onChange={(e) => {
                  this.handleImageUpload(e, 'logo2');
                }}
              />
              <label htmlFor='logo-2'>
                <img
                  src={this.state.logo2}
                  alt='logo'
                  className='feature-logo logo--2'
                />
              </label>
            </div>
            <div className='logo__container'>
              <input
                style={{ display: 'none' }}
                type='file'
                accept='.jpg,.jpeg,.png'
                id='logo-3'
                onChange={(e) => {
                  this.handleImageUpload(e, 'logo3');
                }}
              />
              <label htmlFor='logo-4'>
                <img
                  src={this.state.logo3}
                  alt='logo'
                  className='feature-logo logo--3'
                />
              </label>
            </div>
            <div className='logo__container'>
              <input
                style={{ display: 'none' }}
                type='file'
                accept='.jpg,.jpeg,.png'
                id='logo-4'
                onChange={(e) => {
                  this.handleImageUpload(e, 'logo4');
                }}
              />
              <label htmlFor='logo-4'>
                <img
                  src={this.state.logo4}
                  alt='logo'
                  className='feature-logo logo--4'
                />
              </label>
            </div>
          </div>
        </Card06Container>
      </CardSizingBox>
    );
  };
}

export default forwardRef((props, ref) => (
  <Card06 {...props} forwardRef={ref} />
));
