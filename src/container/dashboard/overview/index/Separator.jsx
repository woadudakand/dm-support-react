import React from 'react';
import { imageUrl } from '../../../../components/utilities/image';
import { SeparatorWrapper } from '../../Style';

const Separator = React.memo(() => {
  return (
    <SeparatorWrapper>
      <div className="item">
        <div>
          <h2>15,750</h2>
          <p>Tickets By Website</p>
        </div>
        <img src={imageUrl('static/img/icon/globe.svg')} alt="" />
      </div>
      <div className="item">
        <div>
          <h2>15,750</h2>
          <p>Tickets By Email</p>
        </div>
        <img src={imageUrl('static/img/icon/envelope2.svg')} alt="" />
      </div>
      <div className="item">
        <div>
          <h2>15,750</h2>
          <p>Tickets By Facebook</p>
        </div>
        <img src={imageUrl('static/img/icon/facebook-f.svg')} alt="" />
      </div>
    </SeparatorWrapper>
  );
});

export default Separator;
