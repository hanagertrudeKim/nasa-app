import React, { useEffect, useState } from 'react';
import * as S from './Asteroid.styled';
import { getAsteroid } from '../../../api/nasaApi';
import stone from '../../../assets/image/asteroid-stone.png';
import ruler from '../../../assets/image/ruler.png';
import AsteroidClock from './AsteroidClock';
import Explain from './Explain';

let count = 0;

export default function Asteroid() {
  const [data, setData] = useState();
  const [arr, setArr] = useState([]);
  const [btnIndex, setBtnIndex] = useState('');

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

  const nextBtn = () => {
    count = data?.element_count - 1 === count ? count : count + 1;
    setBtnIndex('-' + count * 100 + '%');
  };
  const prevBtn = () => {
    count = count === 0 ? count : count - 1;
    setBtnIndex('-' + count * 100 + '%');
  };

  return (
    <S.Warp>
      <S.Background>
        <S.BoxWrap>
          <Explain />
          <S.AsteroidWrap>
            <S.TitleWrap>
              <S.Title>Asteroid Watch</S.Title>
              <S.SubTitle>The next {data?.element_count} closest approaches to Earth</S.SubTitle>
            </S.TitleWrap>
            <S.CardWrap>
              <S.Card
                style={{ transform: `translate(${btnIndex}, 0)`, transition: 'all 0.5s ease' }}
              >
                {arr?.map((data) => {
                  return (
                    <S.DetailWrap key={data.id}>
                      <S.Detail>
                        <S.Name>{(data?.name).slice(1, -1)}</S.Name>
                        <S.Text>DATE</S.Text>
                        <S.Information>
                          {data.close_approach_data[0].close_approach_date_full}
                        </S.Information>
                        <S.Text>DISTANCE</S.Text>
                        <S.Information>
                          {data.close_approach_data[0].miss_distance.kilometers}km
                        </S.Information>
                        <S.Text>Velocity</S.Text>
                        <S.Information>
                          {data.close_approach_data[0].relative_velocity.kilometers_per_hour}km/h
                        </S.Information>
                      </S.Detail>
                      <S.ImageWrap>
                        <AsteroidClock />
                        <S.StoneImg src={stone} alt="stone"></S.StoneImg>
                        <S.RulerImg src={ruler} alt="ruler"></S.RulerImg>
                        <S.ImageExplain>
                          {data.estimated_diameter.meters.estimated_diameter_max.toFixed(1)}m
                        </S.ImageExplain>
                      </S.ImageWrap>
                    </S.DetailWrap>
                  );
                })}
              </S.Card>
            </S.CardWrap>
            <S.BtnWrap>
              <S.ArrowBtn onClick={prevBtn}>←</S.ArrowBtn>
              <div></div>
              <S.ArrowBtn onClick={nextBtn}>→</S.ArrowBtn>
            </S.BtnWrap>
          </S.AsteroidWrap>
        </S.BoxWrap>
      </S.Background>
    </S.Warp>
  );
}
