import React from 'react';
import { Button } from 'antd';

function BrandButton(props) {
  const { onClick } = props;

  return (
    <Button onClick={onClick} className="BrandButton">
      <div className="BrandButtonText" >
        {props.text}
      </div>
    </Button>
  );
}

export default BrandButton;