'use client';
import ReactPlayer from "react-player";
import styled from "styled-components";

const PreviewPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const VideoWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  padding: 0 24px;

  #video-player {
    width: 100%;
    height: 100%;
  }
`;
const Prototype = styled.span`
  font-size: 36px;
  font-weight: 600;
  color: #fff;
  margin-top: 10px;
  display: block;
  text-align: center;
`;

export default function Preview() {
  const fetchLink = () => {
    // return 'https://www.dropbox.com/scl/fi/qjrk4mhqn7gk9nqjfwf90/mvp.mp4?rlkey=ujsptilemqmdyh7qombf7xz0a&st=50bxzibn&dl=0'
    return 'https://dl.dropboxusercontent.com/scl/fi/qjrk4mhqn7gk9nqjfwf90/mvp.mp4?rlkey=ujsptilemqmdyh7qombf7xz0a'
  }

  return (
    <PreviewPage>
      <Prototype>Prototype Demo</Prototype>
      <VideoWrapper>
        <ReactPlayer width="100%" height='100%' id='video-player' url={fetchLink()} controls={true} />
        {/* <Video src={fetchLink()} controls={true} defaultShowRemainingTime/> */}
      </VideoWrapper>
    </PreviewPage>
  );
}