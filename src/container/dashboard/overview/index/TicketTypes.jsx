import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { NavLink } from 'react-router-dom';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const options = {
  chart: {
    type: 'donut',
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
  dataLabels: {
    enabled: false,
  },
  labels: ['Database', 'Documentation', 'Dashboard', 'Theme', 'Others'],
  colors: ['#01B81A', '#FA8B0C', '#00E4EC', '#00AAFF', '#5840FF'],
  stroke: {
    width: 0,
  },
  legend: {
    show: true,
    position: 'right',
    offsetY: 60,
  },
  plotOptions: {
    pie: {
      donut: {
        size: '45%',
      },
    },
  },
};

const moreContent = (
  <>
    <NavLink to="#">
      <UilPrint />
      <span>Printer</span>
    </NavLink>
    <NavLink to="#">
      <UilBookOpen />
      <span>PDF</span>
    </NavLink>
    <NavLink to="#">
      <UilFileAlt />
      <span>Google Sheets</span>
    </NavLink>
    <NavLink to="#">
      <UilTimes />
      <span>Excel (XLSX)</span>
    </NavLink>
    <NavLink to="#">
      <UilFile />
      <span>CSV</span>
    </NavLink>
  </>
);

const TicketTypes = React.memo(() => {
  return (
    <Cards more={moreContent} title="Ticket Types" size="large">
      <div className="dm-overview-wrap">
        <ReactApexChart options={options} series={[60, 30, 10, 30, 50]} type="donut" />
      </div>
    </Cards>
  );
});

export default TicketTypes;
