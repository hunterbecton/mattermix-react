import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../Layout/Layout';
import FullWidthSection from '../Layout/FullWidthSection';
import HomepageHero from '../Homepage/HomepageHero';
import HomepageWave from '../Homepage/HomepageWave';
import Wave from '../../images/wave.svg';

const Homepage = () => {
  return (
    <Layout noFooter>
      <HomepageHero>
        <h1>
          Create social media graphics for your business. No design skills
          needed.
        </h1>
        <p>
          Simply type, upload photos, choose colors and fonts, and download.
        </p>
        <Link to='/social/saas/1'>Try it now</Link>
      </HomepageHero>
      {/* <HomepageWave>
        <img src={Wave} alt='wave' />
      </HomepageWave> */}
    </Layout>
  );
};

export default Homepage;
