import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import { Card } from 'antd';
import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { OverviewCardWrap } from './Style';
import { imageUrl } from '../utilities/image';

function OverviewCard({ data, className, bottomStatus, contentFirst }) {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setDidViewCountUp(true);
  }, [pathname]);

  const { type, icon, label, total, status, statusRate, dataPeriod, suffix, prefix, decimels, separator } = data;
  const totalNumber = Number(total);
  return (
    <OverviewCardWrap type={type} className={className}>
      <Card bordered={false}>
        <div className={`dm-overview-card dm-overview-card-${type}`}>
          <div
            className={
              contentFirst
                ? 'dm-overview-card__top d-flex justify-content-between dm-overview-card-theme-2'
                : 'dm-overview-card__top d-flex justify-content-between'
            }
          >
            <div className={`dm-overview-card__top--icon dm-${type}`}>
              <ReactSVG src={imageUrl(`static/img/icon/${icon}`)} />
            </div>
            <div
              className={contentFirst ? 'dm-overview-card__top--content' : 'dm-overview-card__top--content text-right'}
            >
              <h4 className="dm-overview-total">
                <CountUp
                  start={0}
                  end={didViewCountUp ? totalNumber : 0}
                  suffix={suffix}
                  prefix={prefix}
                  delay={0.5}
                  decimals={decimels}
                  separator={separator}
                  duration={2}
                />
              </h4>
              <span className="ninjadahs-overview-label">{label}</span>
            </div>
          </div>
          {bottomStatus ? (
            <div className="dm-overview-card__bottom">
              <span className={`dm-overview-status dm-status-${status}`}>
                <span className="dm-status-rate">
                  {status === 'growth' ? <UilUp /> : <UilDown />}
                  {statusRate}%
                </span>
                <span className="dm-status-label">{dataPeriod}</span>
              </span>
            </div>
          ) : (
            ''
          )}
        </div>
      </Card>
    </OverviewCardWrap>
  );
}
OverviewCard.defaultProps = {
  data: {},
  className: 'dm-overview-card-box',
  bottomStatus: true,
  contentFirst: false,
};
OverviewCard.propTypes = {
  data: propTypes.object,
  className: propTypes.string,
  bottomStatus: propTypes.bool,
  contentFirst: propTypes.bool,
};

export default OverviewCard;
