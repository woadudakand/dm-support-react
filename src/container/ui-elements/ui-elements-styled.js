import Styled from 'styled-components';

const DropdownStyle = Styled.div`
  .ant-card-body .ant-btn {
    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
      margin-bottom: 10px;
      height: 36px;
      font-weight: 400;
      border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
      padding: 0px 19px;
      border-radius: 5px;
  }
`;

const DropdownIconStyleWrapper = Styled.div`
  button{
    padding: 0 !important;
    >span{
      padding: ${({ theme }) => (theme.rtl ? '0 16px 0 10px' : '0 10px 0 16px')}
    }
  }
  .ant-dropdown-trigger{
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    ${({ theme }) => (!theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']};
  }
`;

const CardStyleWrapper = Styled.div`
  .ant-card{
    background: ${({ theme }) => theme[theme.mainContent]['general-background']};
    &.ant-card-bordered{
      border-radius: 5px;
      overflow: hidden;
      background: ${({ theme }) => theme[theme.mainContent]['white-background']};
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
      .ant-card-head{
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
      }
    }
  }
  .ant-card-head{
    border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    background: ${({ theme }) => theme[theme.mainContent]['general-background']};
    .ant-card-head-wrapper{
      .ant-card-head-title{
        padding: 12px 0;
      }
    }
    
    .ant-card-extra{
      display: block;
      padding: 12px 0;
      @media only screen and (max-width: 575px){
        margin-bottom: 4px;
      }
    }
  }
  .ant-card-head-wrapper .ant-card-extra a{
    color: ${({ theme }) => theme['primary-color']};
  }
  .ant-card-body{
    padding: 22px 25px 15px 25px !important;
    p{
      margin-bottom: 4px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
  }
  .ant-card-small > .ant-card-head{
    font-size: 16px;
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
  .ant-card-small > .ant-card-body{
    padding: 12px 15px 8px 15px !important
  }
`;

export { DropdownStyle, DropdownIconStyleWrapper, CardStyleWrapper };
