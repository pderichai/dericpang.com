//import Layout from '../components/Layout';
// import resume from '../src/assets/pdfs/resume.pdf';
//import Seo from '../components/Seo';
//
//import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
//import { graphql, useStaticQuery } from 'gatsby';
//import React from 'react';

import Link from 'next/link'
import Image from 'next/image'
import headshotImage from '../public/headshot.png'
import Head from 'next/head';

function HomePage() {
  return (
    <>
      <Head>
        <title>Deric Pang</title>
      </Head>
      <div className='about'>
        <div className='about-text'>
          <div>
            <p className='about-text-first'>
              I&apos;m a senior software engineer at Google working on semantic
              parsing and question answering for Google Search.
            </p>
            <p>
              Prior to Google, I obtained my B.S. and M.S. from the{' '}
              <a href='https://www.washington.edu/'>University of Washington</a>
              , where I was advised by{' '}
              <a href='https://homes.cs.washington.edu/~nasmith/'>Noah Smith</a>
              . I&apos;ve previously worked on{' '}
              <a href='https://unity.com/products/machine-learning-agents'>
                machine learning in a game engine
              </a>{' '}
              at <a href='https://unity.com/'>Unity Technologies</a>,{' '}
              <a href='https://www.youtube.com/watch?v=pqFGZB8KCnQ'>
                training autonomous robots in simulation
              </a>{' '}
              at <a href='http://www.nvidia.com/'>NVIDIA</a>, and a deep
              learning framework for speech recognition at{' '}
              <a href='https://www.amazon.jobs/en/teams/alexa-ai/'>
                Amazon Alexa AI
              </a>
              .
            </p>
          </div>
          <div className='social-links'>
            <ul>
              <li>
                <a href='https://github.com/pderichai'>GitHub</a>
              </li>
              <li>
                <a href='https://scholar.google.com/citations?user=ktSbCsoAAAAJ'>
                  Google Scholar
                </a>
              </li>
              <li>
                <a href='https://linkedin.com/in/pderichai'>LinkedIn</a>
              </li>
              <li>
                <a href='/resume.pdf'>Resume</a>
              </li>
              <li>
                <a href='https://twitter.com/pderichai'>Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='about-image'>
          <Image
            src={headshotImage}
            alt='Headshot of Deric'
            className='about-image-img'
            priority
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
