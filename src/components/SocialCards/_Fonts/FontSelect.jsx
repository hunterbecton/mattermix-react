import React from 'react';
import FontPicker from 'font-picker-react';

const FontSelect = ({ activeFont, setActiveFont }) => {
  return (
    <FontPicker
      apiKey='AIzaSyCQ7oilMjVqdV0ea6k_ZfC4C1tTxBzawFI'
      activeFontFamily={activeFont}
      onChange={(nextFont) => setActiveFont(nextFont.family)}
      variants={['500']}
      families={[
        'Barlow',
        'Cabin',
        'Catamaran',
        'Comfortaa',
        'Exo 2',
        'Fira Sans',
        'Heebo',
        'Hind',
        'Inconsolata',
        'Lora',
        'Merriweather Sans',
        'Montserrat',
        'Playfair Display',
        'Poppins',
        'Prompt',
        'Quicksand',
        'Railway',
        'Roboto',
        'Rubik',
        'Source Code Pro',
        'Ubuntu',
        'Work Sans',
        'Zilla Slab',
      ]}
    />
  );
};

export default FontSelect;
