import React, { forwardRef, createRef, Component } from 'react';
import ContentEditable from 'react-contenteditable';

import Card03Container from './Card03Container';
import CardSizingBox from '../../_Layout/CardSizingBox';
import logo from '../../../../images/logo.png';

class Card03 extends Component {
  constructor() {
    super();
    this.contentEditable = createRef();
    this.firstEditable = createRef();
    this.state = {
      quote: `“It’s easier to ask forgiveness than it is to get permission.”`,
      person: 'Grace Hopper',
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
        <Card03Container
          ref={this.props.forwardRef}
          id={this.props.id}
          logo={this.state.logo}
          quoteSize={this.props.quoteSize}
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
              html={this.state.quote}
              disabled={false}
              onChange={(e) => this.handleChange(e, 'quote')}
              tagName='p'
              className='content__quote'
              innerRef={this.firstEditable}
            />
            <ContentEditable
              html={this.state.person}
              disabled={false}
              onChange={(e) => this.handleChange(e, 'person')}
              tagName='p'
              className='content__person'
            />
          </div>
        </Card03Container>
      </CardSizingBox>
    );
  };
}

export default forwardRef((props, ref) => (
  <Card03 {...props} forwardRef={ref} />
));
