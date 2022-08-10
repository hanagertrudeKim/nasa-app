import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
  color: white;
  padding: 150px;
  * {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1.2px;
  }
`;

const Type = styled.div`
  color: rgb(37, 124, 227);
  font-size: 16px;
`;

const Title = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  width: 60vw;
  color: white;
  font-size: 41px;
  font-weight: 600;
`;

const BoldText = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-top: 70px;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 200;
  line-height: 170%;
  margin-top: 20px;
  width: 60vw;
`;

const KeywordsWrap = styled.div`
  margin-top: 100px;
  display: flex;
`;

const KeyWords = styled.div`
  font-size: 14px;
  font-weight: 700;
  background-color: #80808095;
  color: #192971;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
`;

const VideoWrap = styled.video`
  width: 50vw;
  height: 50vh;
`;

const Date = styled.div`
  font-size: 13px;
  font-weight: 300;
  margin-bottom: 100px;
  color: #c5c5c5;
`;

export default function ImageDetail() {
  const [data, setData] = useState();
  const [videoData, setVideoData] = useState();
  const location = useLocation();

  useEffect(() => {
    axios.get(data?.json).then((res) => {
      setVideoData(res);
      console.log(res);
    });
    setData(location.state);
    console.log(location.state);
  }, [location, data]);

  let videoLink = videoData?.data?.filter((data) => data.split('~')[1] === 'orig.mp4');
  console.log(videoLink);

  return (
    <Wrap key={data?.data?.nasa_id}>
      <Type>{data?.data?.media_type}</Type>
      <Title>{data?.data?.title}</Title>
      <Date>Last-modified : {videoData?.headers['last-modified']}</Date>
      <VideoWrap controls width="300px">
        {videoLink && <source src={videoLink[0]} type="video/mp4"></source>}
      </VideoWrap>
      <BoldText>{data?.data?.date_created}</BoldText>
      <Text>{data?.data?.description}</Text>
      <BoldText>Credit</BoldText>
      <Text>{data?.data?.secondary_creator}</Text>
      <KeywordsWrap>
        {data?.data?.keywords?.map((data) => {
          return <KeyWords>#{data}</KeyWords>;
        })}
      </KeywordsWrap>
    </Wrap>
  );
}
