import React, { useEffect } from 'react'
import { planetHide } from '../../store/planetReducer';
import { useDispatch } from 'react-redux/es/exports';

export default function Planets() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(planetHide());
  },[])

  return (
    <div>Planets</div>
  )
}
