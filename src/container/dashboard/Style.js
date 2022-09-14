import Styled from 'styled-components';

const RevenueTableWrapper = Styled.div`
    ${({ theme }) => (theme.topMenu ? 'min-height: 515px' : 'min-height: 265px')};
    @media only screen and (max-width: 1599px){
        min-height: 260px;
    }
    @media only screen and (max-width: 1199px){
        min-height: 100%;
    }
    .ant-table{
      background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }
    .ant-table-content{
        .ant-table-cell{
            white-space: normal !important;
            @media only screen and (max-width: 991px){
                white-space: nowrap !important;
            }
        }
        .dm-social-channel{
          font-size: 15px;
          font-weight: 500;
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        .dm-traffic{
          font-size: 14px;
          font-weight: 500;
          min-width: 120px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    
    .table-bordered {
      table{
        thead{
            tr{
                th{
                    background: #fff;
                    color: ${({ theme }) => theme['dark-color']}
                    padding: 16px 25px;
                    text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                    &:first-child, &:nth-child(5){
                        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
                    }
                }
            }
        }
        tbody{
            tr{
              &.ant-table-row{
                &:hover{
                  td{
                      background-color: transparent !important;
                  }
                }
              }
              &:first-child{
                td{
                  padding-top: 0;
                }
              }
              td{
                  padding: 10px 15px;
                  border: 0 none;
                  color: ${({ theme }) => theme['gray-color']};
                  text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                  &:first-child, 
                  &:nth-child(5){
                      text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
                  }
              }
            }
        }
        tr{
          th,
          td{
            &:first-child{
              ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
            }
            &:last-child{
              ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 0;
            }
          }
        }
      }
    }

    table {
        tr {
            .dm-rc_activity {
                display: inline-flex;
                h4 {
                    font-size: 15px;
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }

                .dm-rc_activity_icon {
                    width: 34px;
                    height: 34px;
                    background: gray;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    margin-right: 10px;  
                    line-height: unset;
                    svg {
                        width: 15px;
                    }

                    div, div div {
                        height: 15px;
                        display: flex;
                        align-items: center;
                    }

                    &.dm-primary{
                        background-color: ${({ theme }) => theme['primary-color']};
                        svg path,
                        i{
                            fill: #ffffff;
                        }
                    }
                    &.dm-secondary{
                        background-color: ${({ theme }) => theme['secondary-color']};
                        svg path,
                        i{
                            fill: #ffffff;
                        }
                    }
                    &.dm-success{
                        background-color: ${({ theme }) => theme['success-color']};
                        svg path,
                        i{
                            fill: #ffffff;
                        }
                    }
                    &.dm-warning{
                        background-color: ${({ theme }) => theme['warning-color']};
                        svg path,
                        i{
                            fill: #ffffff;
                        }
                    }
                    &.dm-info{
                        background-color: ${({ theme }) => theme['info-color']};
                        svg path,
                        i{
                            fill: #ffffff;
                        }
                    }
                }
            }
        }
    }
`;

const NewProductWrapper = Styled.div`
    .ant-table-content{
        .dm-product-price{
            font-weight: 500;
        }
    }
`;

const SalesOverviewStyleWrap = Styled.div`
    .dm-sales-inner{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .dm-sales-content{
        justify-content: center;
        text-align: center;
        margin-top: 20px;
    }
    .ant-card{
        min-height: 430px;
    }
    .ant-progress{
        .ant-progress-text{
            font-size: 46px;
            font-weight: 600;
            color: ${({ theme }) => theme['primary-color']};
        }
    }

    .dm-sales-content__item{
        min-width: 200px;
        .dm-sales-content__item--label{
            display: inline-block;
            font-size: 16px;
            margin-bottom: 6px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .dm-sales-content__item--total{
            font-size: 24px;
            font-weight: 600;
            margin: 0;
            line-height: 1;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
`;

const SalesRevenueWrapper = Styled.div`
    .dm-sales-revenue-lineChart{
        margin: ${({ theme }) => (!theme.rtl ? '10px 0 0 -4px' : '10px -4px 0 0')};
    }
`;

const ChartContainer = Styled.div`
    display: block;
    font-family: 'Jost', sans-serif;
    .chart-divider {
        display: block;
        width: 100%;
        height: 100px;
    }
    .chartjs-tooltip {
        opacity: 1;
        position: absolute;
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        box-shadow: 0 3px 16px #ADB5D915;
        padding: 8px 6px !important;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        min-width: 80px;
        transition: all 0.5s ease;
        pointer-events: none;
        transform: translate(-50%, 5%);
        z-index: 222;
        top: 0;
        ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
        @media only screen and (max-width: 991px){
            transform: translate(-60%, 5%);
        }
        &:before {
            position: absolute;
            content: '';
            border-top: 5px solid ${({ theme }) => theme[theme.mainContent]['dark-background']};
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            bottom: -5px;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 50%;
            transform: translateX(-50%);
        }
    }
    .chartjs-tooltip-key {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: "pink";
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}
        : 5px;
    }
    .tooltip-title {
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        font-size: 12px;
        line-height: 1;
        font-weight: 500 !important;
        font-family: 'Jost', sans-serif;;
        text-transform: capitalize;
        margin-bottom: 4px;
    }
    .tooltip-value {
        color: #63b963;
        font-size: 22px;
        font-weight: 600 !important;
        font-family: 'Jost', sans-serif;;
    }
    .tooltip-value sup {
        font-size: 12px;
        @media only screen and (max-width: 1199px){
            font-size: 11px;
        }
    }
    table{
        tbody{
            td{
                font-size: 12px;
                font-weight: 500;
                padding-bottom: 3px;
                color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                .data-label{
                    ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 3px;
                    color: ${({ theme }) => theme[theme.mainContent]['light-gray-text']};
                }
            }
        }
    }
`;

const SalesOverviewStyleWrap2 = Styled.div`
    .dm-overview-percentage{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 12px;
        .dm-overview-percentage__item{
            display: flex;
            align-items: center;
            margin: 15px;
        }
        .dm-overview-percentage__point{
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 5px;
            background-color: ${({ theme }) => theme['primary-color']};
        }
        .dm-overview-percentage__text{
            font-size: 15px;
            font-weight: 500;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
    .ant-card-body{
        padding: 30px 25px !important;
    }
    .dm-overview-wrap{
        color: #333;
        canvas{
            margin: 0 auto;
            position: relative;
            z-index: 10;
        }
    }
    .dm-overview-box{
        margin-top: 10px;
        padding: 16.65px 32px;
        border-radius: 8px;
        background: ${({ theme }) => theme[theme.mainContent]['light-background']};
        .dm-overview-box-item{
            text-align: center;
            h4{
                font-size: 18px;
                line-height: 1;
                font-weight: 600;
                margin-bottom: 6px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
            p{
                margin-bottom: 0;
                font-size: 15px;
                line-height: 1.25;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    /* .sent-emial-data{
        margin-top: 30px;
    }
    .sent-emial-box{
        justify-content: space-between;
        @media only screen and (max-width: 575px){
            align-items: flex-start;
            flex-direction: column;
        }
    }
    .sent-emial-item{
        display: flex;
        @media only screen and (max-width: 575px){
            &:not(:last-child){
                margin-bottom: 15px;
            }
        }
        .sent-emial-icon{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 10px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
            background-color: ${({ theme }) => theme['primary-color']}10;
            &.icon-success{
                background-color: ${({ theme }) => theme['success-color']}10;
            }
            &.icon-primary{
                background-color: ${({ theme }) => theme['primary-color']}10;
            }
            &.icon-warning{
                background-color: ${({ theme }) => theme['warning-color']}10;
            }
        }
        .sent-emial-content{
            flex: auto;
            h4{
                font-size: 20px;
                font-weight: 500;
                margin-bottom: 2px;
                strong{
                    font-weight: 500;
                }
            }
            p{
                font-size: 14px;
                font-weight: 400;
                margin-bottom: 0;
                color: ${({ theme }) => theme['gray-color']};
            }
        }
    } */
`;

const TopSellerWrap = Styled.div`
    .ant-table {
        background: transparent !important;
    }
    .top-seller-table {
        min-height: auto;
        .product-info{
            .product-img{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
            }
            .product-name{
                text-transform: capitalize;
                font-size: 15px;
                font-weight: 500;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']}
            }
        }
        .ant-table-thead {
            th {
                background: ${({ theme }) => theme[theme.mainContent]['light-background']};
            }
        }
        .ant-table-row,
        tr {
            .ant-table-cell{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                &:not(:first-child){ 
                    text-align: right;
                }

            }
        }
    }
`;

const RegionTableWrap = Styled.div`
    max-height: 300px;
    margin-bottom: 30px;
    direction: ltr;
    border: 1px solid ${({ theme }) => theme[theme.mainContent]['light-border']};
    .ant-table {
        background: transparent !important;
    }
    table{
        tr{
            &:hover {
                td {

                    background-color: ${({ theme }) => theme[theme.mainContent]['light-background']} !important;
                }
            }
            &:first-child{
                td{
                    padding-top: 15px;
                }
            }
            &:last-child{
                td{
                    padding-bottom: 15px;
                }
            }
            th{
                font-size: 12px;
                font-weight: 500;
                text-transform: uppercase;
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
                border-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
                padding: 10.5px 20px;
            }
            td{
                font-size: 15px;
                border: 0 none;
                padding: 10.5px 20px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                
                &:first-child{
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
            }
            th,
            td{
                &:last-child{
                    ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 40px;
                    text-align: right;
                }
            }
        }
    }
    .dm-track-vertical{
        position: absolute;
        width: 6px;
        transition: opacity 200ms ease 0s;
        opacity: 0;
        ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 6px;
        bottom: 2px;
        top: 2px;
        border-radius: 6px;
        >div{
            background-color: ${({ theme }) => theme[theme.mainContent]['scroll-bg']} !important;
        }
    }
`;

const SessionRegionMap = Styled.div`
    text-align: center;
    height: 100%;
    margin-bottom: 55px;
    .__react_component_tooltip {
        background: #fff;
        color: #010413;
        font-weight: 500;
        border-radius: 3px;
        box-shadow: 0 10px 15px ${({ theme }) => theme[theme.mainContent]['light-text']}15;
        &:after{
            border-top-color: #fff !important;
        }
    }
    >div{
        width: 100%;
        height: 250px;
        overflow: hidden;
        @media only screen and (max-width: 479px){
            height: 200px;
        }
    }
    svg{
        width: 450px;
        @media only screen and (max-width: 479px){
            height: 180px;
        }
        @media only screen and (max-width: 440px){
            width: 310px;
        }
        @media only screen and (max-width: 320px){
            width: 280px;
        }
    }
    .controls{
        position: absolute;
        ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 20px;
        bottom: 10px;
        button{
            display: block;
            width: 27px;
            height: 27px;
            background: none;
            color: ${({ theme }) => theme[theme.mainContent]['white-text']};
            border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            padding: 0;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
            cursor: pointer;
            &:first-child{
                border-radius: 6px 6px 0 0;
            }
            &:last-child{
                border-radius: 0 0 6px 6px;
            }
            &:focus{
                outline: none;
            }
            svg{
                width: 10px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
        button + button{
            border-top: 0 none;
        }
    }
`;
const NewMemberStyle = Styled.div`
  min-height: 272px;
  .ant-list-split {
    .ant-list-item,
    .ant-list-item-meta {
      border-bottom: 0 none;
      padding: 0;
    }
    .ant-list-item-meta {
      .ant-list-item-meta-avatar{
        img{
          max-width: 34px;
        }
      }
      .ant-list-item-meta-title {
        font-size: 15px;
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        line-height: 1.25;
        a{
          color: ${({ theme }) => theme[theme.mainContent]['light-gray-text']};
        }
      }
      .ant-list-item-meta-description {
        font-size: 12px;
        line-height: 1;
        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 12px;
        position: relative;
        &:before {
          position: absolute;
          ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
          top: 50%;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          transform: translateY(-50%);
          content: '';
          background-color: ${({ theme }) => theme['success-color']};
        }
      }
    }
    .ant-list-items{
      padding-top: 4px;
    }
    .ant-list-item-meta-avatar {
      img {
        border-radius: 5px;
      }
    }
  }
  .ant-list-item {
    &:not(:last-child) {
      margin-bottom: 20px !important;
    }
    .ant-btn {
      font-size: 13px;
      font-weight: 600;
      border-radius: 3px;
      padding: 0 12px;
      color: ${({ theme }) => theme['primary-color']};
      background-color: #fb358610;
      &:hover {
        color: #fff;
        background-color: ${({ theme }) => theme['primary-color']};
      }
    }
  }
`;

const InboxListStyleWrap = Styled.div`
    .ant-list {
        padding-top: 5px;
        .ant-list-items{
            padding-top: 0;
            li{
                &:not(:last-child){
                    margin-bottom: 18px;
                }
            }
            .ant-list-item{
                padding: 0;
                border: 0 none;
                .ant-list-item-meta{
                    padding: 0;
                    border: 0 none;
                }
                .dm-mail-time{
                    font-size: 13px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                }
                .ant-list-item-meta-avatar{
                    width: 34px;
                    height: 34px;
                }
            }
            .ant-list-item-meta-content{
                margin-top: -4px;
                .ant-list-item-meta-title{
                    font-size: 15px;
                    font-weight: 500;
                    margin-bottom: 0;
                    a{
                        color: ${({ theme }) => theme[theme.mainContent]['gray-lighter-text']};
                    }
                }
                .ant-list-item-meta-description{
                    font-size: 12px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
        }
    }
    .ant-card{
        @media only screen and (max-width: 1199px){
            min-height: 446px;
        }
        @media only screen and (max-width: 991px){
            min-height: auto;
        }
    }
`;

const MetricsWrapper = Styled.div`
    ${({ theme }) => (theme.topMenu ? 'min-height: 355px' : 'min-height: auto')};
    .dm-revenue-company{
        .dm-revenue-company__icon{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 12px;
            height: 32px;
            width: 32px;
            &.dm-revenue-company__icon-google{
                background-color: #F1433610;
                color: #F14336
            }
            &.dm-revenue-company__icon-facebook{
                background-color: #1976D210;
                color: #1976D2;
            }
            &.dm-revenue-company__icon-twitter{
                background-color: #03A9F410;
                color: #03A9F4;
            }
            &.dm-revenue-company__icon-linkedin{
                background-color: #007AB910;
                color: #007AB9;
            }
            &.dm-revenue-company__icon-instagram{
                background-color: #D1208F10;
                color: #D1208F;
            }
        }
        .dm-revenue-company__content{
            span{
                font-size: 15px;
                font-weight: 500;
                text-transform: capitalize;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }

    .ant-table-content{
        table{
            tr{
                th{
                    &:first-child,
                    &:last-child{
                        text-align: left !important;
                    }
                }
                th,
                td{
                    ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 0;
                    text-align: right;
                }
                td{
                    padding: 9.5px 15px !important;
                    &:first-child{
                        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0 !important;
                    }
                    &:last-child{
                        ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
                    }
                    .dm-revenue{
                        display: inline-block;
                        min-width: 60px;
                    }
                    .dm-trend-progress{
                        min-width: 60px;
                        .dm-trend-percentage{
                            font-size: 14px;
                            font-weight: 400;
                            ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 14px;
                            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                        }
                        .ant-progress-inner{
                            background-color: ${({ theme }) => theme[theme.mainContent]['dark-background']};
                        }
                        .ant-progress-bg{
                            border-radius: 30px;
                        }
                        &.dm-trend-progress-primary{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme['primary-color']};
                            }
                        }
                        &.dm-trend-progress-info{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme['info-color']};
                            }
                        }
                        &.dm-trend-progress-success{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme['success-color']};
                            }
                        }
                        &.dm-trend-progress-violet{
                            .ant-progress-bg{
                                background-color: #599700;
                            }
                        }
                        &.dm-trend-progress-warning{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme['warning-color']};
                            }
                        }
                        &.dm-trend-progress-google{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme['primary-color']};
                            }
                        }
                        &.dm-trend-progress-facebook{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme[theme.mainContent].info};
                            }
                        }
                        &.dm-trend-progress-twitter{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme[theme.mainContent].success};
                            }
                        }
                        &.dm-trend-progress-linkedin{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme[theme.mainContent].secondary};
                            }
                        }
                        &.dm-trend-progress-instagram{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme[theme.mainContent].warning};
                            }
                        }
                    }
                }
            }
        }
    }
    .table-responsive{
        .ant-table-content{
            table{
                tr{
                    th,
                    td{
                        white-space: normal;
                    }
                }
            }
        }
    }
`;

const OverviewDataStyleWrap = Styled.div`
    
    &.card-mesh-wrap{
        justify-content: space-between;
        margin-bottom: 25px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        @media only screen and (max-width: 991px){
            flex-wrap: wrap;
        }
        .dm-overview-card-single{
            flex: 0 0 auto;
            margin-bottom: 0;
            @media only screen and (max-width: 991px){
                flex: 0 0 50%;
            }
            @media only screen and (max-width: 575px){
                flex: 0 0 100%;
            }
        }
    }
`;

const SatisfyCardWrap = Styled.div`
    background-color: ${({ theme, type }) => theme[`${type}-color`]}50;
    width: 80%;
    height: 100px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const TicketBox = Styled.div`
  .dm-support-content-top,
  .dm-support-content-filter {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .dm-support-content-top {
    @media only screen and (max-width: 475px) {
      flex-direction: column;
      align-items: center;
    }
    h1 {
      font-weight: 500;
      margin-bottom: 0;
      @media only screen and (max-width: 475px) {
        margin-bottom: 15px;
      }
    }
    button {
      font-weight: 500;
    }
  }

  .dm-support-content-filter {
    margin: 20px 0 25px 0;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
    .dm-support-content-filter__left {
      display: inline-flex;
      width: 100%;
      align-items: center;
      @media only screen and (max-width: 767px) {
        width: auto;
        margin-bottom: 20px;
      }
      @media only screen and (max-width: 475px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 0;
      }

      .dm-support-content-filter__input {
        display: flex;
        align-items: center;
        ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 20px;
        @media only screen and (max-width: 475px) {
          ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 0;
          margin-bottom: 20px;
        }
        input {
          background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
          border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        }
        span.label {
          margin-right: 8px;
          ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 8px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
      }
      .ant-select {
        .ant-select-selector {
          background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
          border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']} !important;
        }
        .ant-select-arrow {
          svg {
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          }
        }
      }
    }
    .dm-support-content-filter__right {
      min-width: 280px;
      .ant-input-affix-wrapper {
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        input {
          background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        }
      }
      .ant-input-affix-wrapper-lg {
        padding: 6.5px 18px;
        .ant-input-prefix {
          ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 8px;
          svg {
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
          }
        }
      }
    }
    .ant-input,
    .ant-input-affix-wrapper {
      padding: 7.22px 20px;
      border-radius: 6px;
      .ant-input {
        padding: 0;
      }
    }
  }

  .dm-support-content-table {
    .dm-info-element {
      .dm-info-element__media {
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
        img {
          max-width: 30px;
          border-radius: 50%;
        }
      }
      .dm-info-element__content {
        p {
          font-size: 15px;
          margin-bottom: 0;
        }
      }
    }
    .dm-ticket-subject {
      font-size: 15px;
    }
    .dm-support-status {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 500;
      padding: 0 8px;
      min-height: 24px;
      border-radius: 4px;
      text-transform: capitalize;
      &.dm-support-status-open {
        color: ${({ theme }) => theme['success-color']};
        background-color: ${({ theme }) => theme['success-color']}15;
      }
      &.dm-support-status-close {
        color: ${({ theme }) => theme['primary-color']};
        background-color: ${({ theme }) => theme['primary-color']}15;
      }
      &.dm-support-status-pending {
        color: ${({ theme }) => theme['warning-color']};

        background-color: ${({ theme }) => theme['warning-color']}15;
      }
    }
    .table-actions {
      margin: -8px;
      a {
        margin: 8px;
      }
    }
    .ant-table-pagination {
      &.ant-table-pagination-right {
        justify-content: center;
      }
    }
  }
`;

const SeparatorWrapper = Styled.div`
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px #88888850;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 15px;
  }
`;
export {
  SeparatorWrapper,
  TicketBox,
  SatisfyCardWrap,
  OverviewDataStyleWrap,
  MetricsWrapper,
  NewMemberStyle,
  RegionTableWrap,
  SessionRegionMap,
  NewProductWrapper,
  SalesOverviewStyleWrap,
  ChartContainer,
  SalesRevenueWrapper,
  SalesOverviewStyleWrap2,
  TopSellerWrap,
  RevenueTableWrapper,
  InboxListStyleWrap,
};
