import React, { useEffect, useState } from 'react';
import * as S from './Asteroid.styled';
import { getAsteroid } from '../../api/nasaApi';

export default function Asteroid() {
  const [data, setData] = useState();
  const [arr, setArr] = useState([]);
  const [btnIndex, setBtnIndex] = useState(1);

  const date = new Date();

  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const dateStr = year + '-' + month + '-' + day;
  console.log(dateStr);

  useEffect(() => {
    getAsteroid(dateStr).then((res) => {
      setData(res?.data);
      console.log(res);
      setArr(res?.data?.near_earth_objects[`${dateStr}`]);
    });
  }, []);

  const clickBtn = () => {
    if (btnIndex <= data?.element_count) {
      setBtnIndex(btnIndex + 1);
      console.log(btnIndex);
    } else {
      setBtnIndex(1);
    }
  };

  return (
    <S.Warp>
      <S.Background>
        <S.BoxWrap>
          <S.ExplainWrap></S.ExplainWrap>
          <S.AsteroidWrap>
            <S.TitleWrap>
              <S.Title>Asteroid Watch</S.Title>
              <S.SubTitle>The next {data?.element_count} closest approaches to Earth</S.SubTitle>
            </S.TitleWrap>
            <S.Card btnIndex={btnIndex}>
              {arr?.map((data) => {
                return (
                  <S.DetailWrap key={data.id}>
                    <S.Detail>
                      <S.Name>{data?.name}</S.Name>
                      <S.Text>DATE</S.Text>
                      <S.Information>{data?.close_approach_date_full}</S.Information>
                      <S.Text>DISTANCE</S.Text>
                      <S.Information>
                        {data.close_approach_data[0].miss_distance.kilometers}km
                      </S.Information>
                    </S.Detail>
                    <S.ImageWrap>
                      <S.Image></S.Image>
                      <S.ImageExplain>
                        {data.estimated_diameter.meters.estimated_diameter_max.toFixed(1)}m
                      </S.ImageExplain>
                    </S.ImageWrap>
                  </S.DetailWrap>
                );
              })}
              <S.ArrowBtn onClick={clickBtn}>→</S.ArrowBtn>
            </S.Card>
          </S.AsteroidWrap>
        </S.BoxWrap>
      </S.Background>
    </S.Warp>
  );
}
