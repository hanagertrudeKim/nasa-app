import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { hide } from '../store/categoryReducer';


export default function Planet() {
  const dropDown = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  if(dropDown === true) {
    dispatch(hide())
  }
  return (
    <div>Planet</div>
  )
}
