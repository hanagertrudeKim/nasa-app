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
  margin-top: 30px;
  margin-bottom: 100px;
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

export default function ImageDetail() {
  const [data, setData] = useState();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setData(location.state);
    console.log(location.state);
  }, [location]);

  return (
    <Wrap key={data?.data?.nasa_id}>
      <Type>{data?.data?.media_type}</Type>
      <Title>{data?.data?.title}</Title>
      <div>
        <img src={data?.link?.href} alt="nasa-img" />
      </div>
      <BoldText>{data?.data?.date_created}</BoldText>
      <Text>{data?.data?.description}</Text>
      <BoldText>Credit</BoldText>
      <Text>{data?.data?.secondary_creator}</Text>
      <KeywordsWrap>
        {data?.data?.keywords.map((data) => {
          return <KeyWords>#{data}</KeyWords>;
        })}
      </KeywordsWrap>
    </Wrap>
  );
}
