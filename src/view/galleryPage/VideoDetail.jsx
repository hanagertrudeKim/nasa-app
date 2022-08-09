import React from 'react';
import { useLocation } from 'react-router-dom';

export default function VideoDetail() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return <div>Image</div>;
}
