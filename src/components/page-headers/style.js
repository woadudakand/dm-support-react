import Styled from 'styled-components';
import { PageHeader } from 'antd';

const PageHeaderStyle = Styled(PageHeader)`
  
  &.ant-page-header {    
    background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
    &.dm-page-header-main{
      background-color: ${({ theme }) => theme[theme.mainContent]['main-background']};
    }
  }
  .page-header-actions button.ant-btn-white svg {
    width: 12px;
    height: 12px;
    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 2px;
    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
    position: relative;
    top: -1px;
  }
  i +span, svg +span, img +span {
      ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
  }

  /* Main Page Header Style */
  &.dm-pageheader-with-back{
    &.dm-page-header-main{
      padding: 34px 30px 18px;
    }
    .ant-page-header-heading-title{
      .back-link{
        display: inline-block;
        margin-top: 10px;
        font-size: 14px;
        font-weight: 500;
        a{
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          display: flex;
          align-items: center;
          &:hover{
            color: ${({ theme }) => theme['primary-color']};
          }
        }
      }
    }
  }
  &.dm-page-header-main{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 34px 30px 27px;
    @media only screen and (max-width: 991px){
      padding: 34px 15px 27px;
    }
    @media only screen and (max-width: 767px){
      flex-direction: column;
      align-items: center;
    }
    .ant-page-header-heading-title{
      @media only screen and (max-width: 767px){
        margin-right: 0;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
      }
    }
    .ant-breadcrumb{
      order: 2;
      position: relative;
      top: 10px;
      >span{
        position: relative;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 10px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        &:first-child{
          ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 20px;
          .ant-breadcrumb-link{
            &:hover{
              &:before{
                color: ${({ theme }) => theme['primary-color']};
              }
              a{
                color: ${({ theme }) => theme['primary-color']};
              }
            }
            a{
              color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            &:before{
              position: absolute;
              ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
              top: 0;
              line-height: 1.45;
              font-family: 'FontAwesome';
              font-weight: 900;
              content: "\f015";
              color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
              visibility: visible;
            }
            &:after{
              display: none;
            }
          }
        }

        &:last-child{
          .ant-breadcrumb-link{
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
            &:hover{
              &:after{
                background-color: ${({ theme }) => theme[theme.mainContent]['light-text']};
              }
            }
          }
        }

        .ant-breadcrumb-link{
          &:after{
            position: absolute;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 4px;
            content: '';
            background-color: ${({ theme }) => theme[theme.mainContent]['light-text']};
            border-radius: 50%;
          }
        }

        .ant-breadcrumb-separator{
          display: none;
        }
      }
      span + span{
        ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
      }
      .ant-breadcrumb-link{
        &:hover{
          &:after{
            background-color: ${({ theme }) => theme['primary-color']};
          }
          a{
              color: ${({ theme }) => theme['primary-color']};
          }
        }
        a,
        span{
          font-size: 14px;
          color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
      }
      &+.ant-page-header-heading {
        margin-top: 4px;
        margin-bottom: 4px;
        @media only screen and (max-width: 767px){
          margin-bottom: 0;
        }
      }
    }

    .ant-page-header-heading{
      margin: 4px  0;
      flex: 1;
      .ant-page-header-heading-left{
        margin: 0;
      }
      .ant-page-header-heading-title{
        font-size: 22px;
        font-weight: 600;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
          font-weight: 600;
          margin-bottom: 0;
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
      }
    }
  }
`;

const HeaderWrapper = Styled.div`
  background: ${({ theme, bgColor }) => bgColor || theme[theme.mainContent]['main-background-light']}};
  border-radius: 5px;
  .ant-page-header-heading-title{
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  }
  .ant-page-header-heading-sub-title{
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
  }
`;

export { PageHeaderStyle, HeaderWrapper };
