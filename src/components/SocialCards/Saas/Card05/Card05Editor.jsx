import React, { useRef, useState, useEffect } from 'react';
import * as html2canvas from 'html2canvas';
import { triggerBase64Download } from 'react-base64-downloader';
import { BlockPicker } from 'react-color';
import FontPicker from 'font-picker-react';

import Layout from '../../../Layout/Layout';
import CardEditorPreview from '../../_Editor /CardEditorPreview';
import Card05 from './Card05';
import CardOptions from '../../_Layout/CardOptions';
import CardFormSelect from '../../_Form/CardFormSelect';
import ColorPickerContainer from '../../_Color/ColorPickerContainer';
import ColorPicker from '../../_Color/ColorPicker';
import ColorPickerGroup from '../../_Color/ColorPickerGroup';
import ColorButton from '../../../Button/ColorButton';
import Button from '../../../Button/Button';
import useWindowSize from '../../../../hooks/useWindowSize';
import Label from '../../../Typography/Label';
import ToggleButtonContainer from '../../_Toggle/ToggleButtonContainer';
import SquareToggle from '../../_Toggle/SquareToggle';
import LandscapeToggle from '../../_Toggle/LandscapeToggle';
import square from '../../../../images/square.svg';
import landscape from '../../../../images/landscape.svg';

const swatch = [
  '#626DFF',
  '#5DADED',
  '#F7F8F9',
  '#E6E9EC',
  '#1E2125',
  '#40464D',
];

const Card05Editor = () => {
  const componentRef = useRef();

  const size = useWindowSize();

  const [titleSize, setTitleSize] = useState('m');
  const [logoSize, setLogoSize] = useState('m');
  const [mainColor, setMainColor] = useState('#626DFF');
  const [textColor, setTextColor] = useState('#F7F8F9');
  const [showColorPicker, setShowColorPicker] = useState('');
  const [isLandscape, setLandscape] = useState(true);
  const [cardSize, setCardSize] = useState(0);
  const [componentWidth, setComponentWidth] = useState(0);
  const [activeFont, setActiveFont] = useState('Roboto');

  // Set transform size for card based on window size
  useEffect(() => {
    if (size.width > 1200) {
      setCardSize(0.75);
      let currentComponentWidth = 0.75 * componentRef.current.clientWidth;
      setComponentWidth(currentComponentWidth);
    }

    if (size.width <= 1200 && size.width > 1160) {
      setCardSize(0.7);
      let currentComponentWidth = 0.7 * componentRef.current.clientWidth;
      setComponentWidth(currentComponentWidth);
    }

    if (size.width <= 1160 && size.width > 1040) {
      setCardSize(0.6);
      let currentComponentWidth = 0.6 * componentRef.current.clientWidth;
      setComponentWidth(currentComponentWidth);
    }

    if (size.width <= 1040) {
      setCardSize(0.5);
      let currentComponentWidth = 0.5 * componentRef.current.clientWidth;
      setComponentWidth(currentComponentWidth);
    }
  }, [size]);

  // Set component width when landscape is toggled
  useEffect(() => {
    let currentComponentWidth = cardSize * componentRef.current.clientWidth;
    setComponentWidth(currentComponentWidth);
  }, [isLandscape]);

  const handleHTML2CanvasLandscape = () => {
    html2canvas(componentRef.current, {
      width: isLandscape ? 1200 : 1000,
      height: isLandscape ? 628 : 1000,
      scale: 1,
      scrollX: 0,
      scrollY: -window.scrollY,
      logging: true,
      onclone: function (document) {
        const socialCard = document.getElementById('social-card');
        socialCard.style.transform = `scale(1)`;
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');
      triggerBase64Download(imgData, 'social-image');
    });
  };

  const handleColorPicker = (e, value) => {
    e.preventDefault();

    if (showColorPicker === value) {
      setShowColorPicker('');
    } else {
      setShowColorPicker(value);
    }
  };

  return (
    <Layout>
      <CardEditorPreview>
        <Card05
          ref={componentRef}
          id='social-card'
          mainColor={mainColor}
          textColor={textColor}
          dotColor={textColor}
          titleSize={titleSize}
          logoSize={logoSize}
          size={cardSize}
          isLandscape={isLandscape}
          cardSize={cardSize}
        />
        <CardOptions componentWidth={componentWidth}>
          <Label>Layout</Label>
          <ToggleButtonContainer>
            <SquareToggle
              isLandscape={isLandscape}
              onClick={() => setLandscape(false)}
            >
              <img src={square} alt='square mode' />
            </SquareToggle>
            <LandscapeToggle
              isLandscape={isLandscape}
              onClick={() => setLandscape(true)}
            >
              <img src={landscape} alt='landscape mode' />
            </LandscapeToggle>
          </ToggleButtonContainer>
          <Label>Colors</Label>
          <ColorPickerGroup>
            <ColorPickerContainer>
              <ColorButton
                backgroundColor={mainColor}
                onClick={(e) => handleColorPicker(e, 'main')}
              ></ColorButton>
              {showColorPicker === 'main' && (
                <ColorPicker>
                  <BlockPicker
                    color={mainColor}
                    colors={swatch}
                    onChangeComplete={(color) => {
                      setMainColor(color.hex);
                      setShowColorPicker('');
                    }}
                    onSwatchHover={(color) => setMainColor(color.hex)}
                    triangle='hide'
                  />
                </ColorPicker>
              )}
            </ColorPickerContainer>
            <ColorPickerContainer>
              <ColorButton
                backgroundColor={textColor}
                onClick={(e) => handleColorPicker(e, 'text')}
              ></ColorButton>
              {showColorPicker === 'text' && (
                <ColorPicker>
                  <BlockPicker
                    color={textColor}
                    colors={swatch}
                    onChangeComplete={(color) => {
                      setTextColor(color.hex);
                      setShowColorPicker('');
                    }}
                    onSwatchHover={(color) => setTextColor(color.hex)}
                    triangle='hide'
                  />
                </ColorPicker>
              )}
            </ColorPickerContainer>
          </ColorPickerGroup>
          <Label>Font</Label>
          <FontPicker
            apiKey='AIzaSyCQ7oilMjVqdV0ea6k_ZfC4C1tTxBzawFI'
            activeFontFamily={activeFont}
            onChange={(nextFont) => setActiveFont(nextFont.family)}
          />
          <CardFormSelect
            width='100%'
            label='Title Size'
            options={[
              { value: 's', text: 'Small' },
              { value: 'm', text: 'Medium' },
              { value: 'l', text: 'Large' },
            ]}
            onChange={(e) => setTitleSize(e.target.value)}
            defaultValue={titleSize}
          />
          <CardFormSelect
            width='100%'
            label='Logo Size'
            options={[
              { value: 's', text: 'Small' },
              { value: 'm', text: 'Medium' },
              { value: 'l', text: 'Large' },
            ]}
            onChange={(e) => setLogoSize(e.target.value)}
            defaultValue={logoSize}
          />
          <Button onClick={handleHTML2CanvasLandscape} className='download'>
            Download
          </Button>
        </CardOptions>
      </CardEditorPreview>
    </Layout>
  );
};

export default Card05Editor;
