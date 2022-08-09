import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
  color: white;
  padding-top: 80px;
`;

export default function ImageDetail() {
  const [data, setData] = useState();
  const location = useLocation();

  useEffect(() => {
    setData(location.state);
    console.log(location.state);
  }, [location]);

  return (
    <Wrap key={data?.data?.nasa_id}>
      <div>{data?.data?.data_created}</div>
      <div>{data?.data?.description}</div>
      <div>
        {data?.data?.keywords.map((data) => {
          return <div>{data}</div>;
        })}
      </div>
      <div>{data?.data?.secondary_creator}</div>
      <div>{data?.data?.title}</div>
      <img src={data.link?.href} alt="nasa-img" />
    </Wrap>
  );
}
