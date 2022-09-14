import React from 'react';
import { Row, Col } from 'antd';
import ReactApexChart from 'react-apexcharts';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

function ChartJs() {
  const series = [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter(val) {
          return `$ ${val} thousands`;
        },
      },
    },
  };

  return (
    <>
      <PageHeader className="dm-page-header-main" title="Chart" routes={[]} />
      <Main>
        <div className="dm-chart-container dm-sales-revenue-lineChart">
          <Row gutter={25}>
            <Col md={12} xs={24}>
              <Cards title="Bar Chart" size="large">
                <ReactApexChart options={options} series={series} type="bar" height={350} />
              </Cards>

              <Cards title="Stacked Chart" size="large">
                <ReactApexChart
                  options={{
                    ...options,
                    chart: {
                      type: 'bar',

                      stacked: true,
                    },
                  }}
                  series={series}
                  type="bar"
                  height={350}
                />
              </Cards>

              <Cards title="Area Chart" size="large">
                <ReactApexChart
                  options={{
                    ...options,
                    chart: {
                      type: 'area',

                      stacked: true,
                    },
                  }}
                  series={series}
                  type="area"
                  height={350}
                />
              </Cards>

              <Cards title="Donut Chart" size="large">
                <ReactApexChart
                  options={{
                    ...options,
                    chart: {
                      type: 'donut',
                    },
                  }}
                  series={[44, 55, 41, 17, 15]}
                  type="donut"
                  height={350}
                />
              </Cards>
            </Col>
            <Col md={12} xs={24}>
              <Cards title="Horizontal Chart" size="large">
                <ReactApexChart
                  options={{
                    ...options,
                    plotOptions: {
                      bar: {
                        horizontal: true,
                        columnWidth: '70%',
                        endingShape: 'rounded',
                      },
                    },
                  }}
                  series={series}
                  type="bar"
                  height={350}
                />
              </Cards>

              <Cards title="Line Chart" size="large">
                <ReactApexChart
                  options={{
                    ...options,
                    chart: {
                      type: 'line',
                    },
                    dataLabels: {
                      enabled: false,
                    },
                    stroke: {
                      curve: 'straight',
                    },
                    title: {
                      text: 'Product Trends by Month',
                      align: 'left',
                    },
                    grid: {
                      row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5,
                      },
                    },
                    xaxis: {
                      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    },
                  }}
                  series={[
                    {
                      name: 'Desktops',
                      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                    },
                  ]}
                  type="line"
                  height={350}
                />
              </Cards>

              <Cards title="Pie Chart" size="large">
                <ReactApexChart
                  options={{
                    ...options,
                    chart: {
                      type: 'pie',
                    },
                    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
                  }}
                  series={[44, 55, 13, 43, 22]}
                  type="pie"
                  height={350}
                />
              </Cards>
            </Col>
          </Row>
        </div>
      </Main>
    </>
  );
}

export default ChartJs;
