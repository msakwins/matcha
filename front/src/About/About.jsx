import React from 'react';
import AboutWrapper from './AboutWrapper';
import { Title } from '../Styled';

const About = () =>
  <AboutWrapper>
    <Title>
      {"The "}
    <span>M33t</span>
    {" story"}
    </Title>
    <p>
      <span>M33t</span> was created in 2019,
      <div className="name">Marion</div>
    </p>
  </AboutWrapper>

  export default About;