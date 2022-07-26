import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { planetHide } from '../../store/planetReducer';

export default function Asteroid() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(planetHide());
  },[])

  return (
    <div>asteroid</div>
  )
}
