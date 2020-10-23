import React, { forwardRef, createRef, Component } from 'react';
import ContentEditable from 'react-contenteditable';

import Card04Container from './Card04Container';
import CardSizingBox from '../../_Layout/CardSizingBox';
import DottedMatrix from '../DottedMatrix';
import Arrow from '../Arrow';
import logo from '../../../../images/logo.png';

class Card04 extends Component {
  constructor() {
    super();
    this.contentEditable = createRef();
    this.firstEditable = createRef();
    this.state = {
      tag: 'Webinar',
      title: 'How to predict and measure content effectiveness',
      date: 'Wednesday, September 23rd, 2020',
      time: '01:00 PM EST',
      first1: 'Sarah',
      last1: 'Parker',
      position1: 'Head of Content Strategy',
      company1: 'Acme Inc.',
      first2: 'Sarah',
      last2: 'Parker',
      position2: 'Head of Content Strategy',
      company2: 'Acme Inc.',
      cta: 'REGISTER NOW',
      profile1: '',
      profile2: '',
      logo: logo,
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
        <Card04Container
          ref={this.props.forwardRef}
          id={this.props.id}
          profile1={this.state.profile1}
          profile2={this.state.profile2}
          logo={this.state.logo}
          titleSize={this.props.titleSize}
          logoSize={this.props.logoSize}
          mainColor={this.props.mainColor}
          secondaryColor={this.props.secondaryColor}
          textColor={this.props.textColor}
          size={this.props.size}
          isLandscape={this.props.isLandscape}
          className='apply-font'
        >
          <header className='header'>
            <div className='tag'>
              <ContentEditable
                html={this.state.tag}
                disabled={false}
                onChange={(e) => this.handleChange(e, 'tag')}
                tagName='p'
                className='tag__text apply-font'
                innerRef={this.firstEditable}
              />
            </div>
            {/* <img src={this.props.logo} alt='logo' className='logo' /> */}
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
          <section className='info'>
            <div className='content apply-font'>
              <ContentEditable
                html={this.state.title}
                disabled={false}
                onChange={(e) => this.handleChange(e, 'title')}
                tagName='p'
                className='content__title'
              />
              <ContentEditable
                html={this.state.date}
                disabled={false}
                onChange={(e) => this.handleChange(e, 'date')}
                tagName='p'
                className='content__date'
              />
              <ContentEditable
                html={this.state.time}
                disabled={false}
                onChange={(e) => this.handleChange(e, 'time')}
                tagName='p'
                className='content__time'
              />
            </div>
            <div className='speakers'>
              <div className='speaker__group'>
                <div className='speaker__info'>
                  <ContentEditable
                    html={this.state.first1}
                    disabled={false}
                    onChange={(e) => this.handleChange(e, 'first1')}
                    tagName='p'
                    className='speaker__first'
                  />
                  <ContentEditable
                    html={this.state.last1}
                    disabled={false}
                    onChange={(e) => this.handleChange(e, 'last1')}
                    tagName='p'
                    className='speaker__last'
                  />
                  <ContentEditable
                    html={this.state.position1}
                    disabled={false}
                    onChange={(e) => this.handleChange(e, 'position1')}
                    tagName='p'
                    className='speaker__title'
                  />
                  <ContentEditable
                    html={this.state.company1}
                    disabled={false}
                    onChange={(e) => this.handleChange(e, 'company1')}
                    tagName='p'
                    className='speaker__company'
                  />
                </div>
                <input
                  style={{ display: 'none' }}
                  type='file'
                  accept='.jpg,.jpeg,.png'
                  id='profile-image-1'
                  onChange={(e) => {
                    this.handleImageUpload(e, 'profile1');
                  }}
                />
                <label
                  htmlFor='profile-image-1'
                  className='speaker__image speaker__image--1'
                ></label>
              </div>
              <div className='speaker__group'>
                <input
                  style={{ display: 'none' }}
                  type='file'
                  accept='.jpg,.jpeg,.png'
                  id='profile-image-2'
                  onChange={(e) => {
                    this.handleImageUpload(e, 'profile2');
                  }}
                />
                <label
                  htmlFor='profile-image-2'
                  className='speaker__image speaker__image--2'
                ></label>
                <div className='speaker__info'>
                  <ContentEditable
                    html={this.state.first2}
                    disabled={false}
                    onChange={(e) => this.handleChange(e, 'first2')}
                    tagName='p'
                    className='speaker__first'
                  />
                  <ContentEditable
                    html={this.state.last2}
                    disabled={false}
                    onChange={(e) => this.handleChange(e, 'last2')}
                    tagName='p'
                    className='speaker__last'
                  />
                  <ContentEditable
                    html={this.state.position2}
                    disabled={false}
                    onChange={(e) => this.handleChange(e, 'position2')}
                    tagName='p'
                    className='speaker__title'
                  />
                  <ContentEditable
                    html={this.state.company2}
                    disabled={false}
                    onChange={(e) => this.handleChange(e, 'company2')}
                    tagName='p'
                    className='speaker__company'
                  />
                </div>
              </div>
            </div>
          </section>
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
        </Card04Container>
      </CardSizingBox>
    );
  };
}

export default forwardRef((props, ref) => (
  <Card04 {...props} forwardRef={ref} />
));
