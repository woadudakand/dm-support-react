import Styled from 'styled-components';

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
export { SeparatorWrapper, TicketBox, SatisfyCardWrap, OverviewDataStyleWrap, ChartContainer };
