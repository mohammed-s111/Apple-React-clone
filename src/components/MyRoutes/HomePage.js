import React from 'react'

import FirstHighlightWrapper from "../HomePage/FirstHighlightWrapper/FirstHighlightWrapper";

import SecondHighlightWrapper from "../HomePage/SecondHighlightWrapper/SecondHighlightWrapper";

import ThirdHighlightWrapper from "../HomePage/ThirdHighlightWrapper/ThirdHighlightWrapper";

import FourthHighlightWrapper from "../HomePage/FourthHighlightWrapper/FourthHighlightWrapper";
import FifthHighlightWrapper from "../HomePage/FifthHighlightWrapper/FifthHighlightWrapper";
import SixthHighlightWrapper from "../HomePage/SixthHighlightWrapper/SixthHighlightWrapper";
import YoutubeVideos from "../ApiIntegration/you_tube_videos/YoutubeVideos";
// import FromDatabase from "../ApiIntegration/FromDatabase/FromDatabase";



export default function HomePage() {
  return (
    <>
    
      <FirstHighlightWrapper />
      <SecondHighlightWrapper />
      <ThirdHighlightWrapper />
      <FourthHighlightWrapper />
      <FifthHighlightWrapper />
      <SixthHighlightWrapper />
      <YoutubeVideos />
      {/* <FromDatabase /> */}
    </>
  );
}
