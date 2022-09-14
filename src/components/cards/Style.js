import Styled from 'styled-components';

const OverviewCardWrap = Styled.div`
    margin-bottom: 25px;
    .ant-card {
        background-color: ${({ theme, type }) => theme[`${type}-color`]}15;
    }
    .ant-card-body{
        padding: 20px 25px !important;
        @media only screen and (max-width: 767px){
            padding: 20px !important;
        }
        @media only screen and (max-width: 575px){
            padding: 15px !important;
        }
        .dm-overview-total {
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .dm-overview-card{
            .dm-overview-card__top{
                .dm-overview-card__top--icon{
                    width: 58px;
                    height: 58px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 14px;
                    @media only screen and (max-width: 767px){
                        width: 48px;
                        height: 48px;
                    }
                    div{
                        line-height: 1;
                    }
                    svg,
                    img{
                        width: 24px;
                        height: 24px;
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
                .dm-overview-card__top--content{
                    .dm-overview-total{
                        font-size: 30px;
                        line-height: 1.45;
                        font-weight: 600;
                        margin-bottom: 0;
                        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                        @media only screen and (max-width: 1599px){
                            font-size: 24px;
                        }
                        @media only screen and (max-width: 1399px){
                            font-size: 20px;
                        }
                    }
                    .ninjadahs-overview-label{
                        font-size: 16px;
                        font-weight: 400;
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                        @media only screen and (max-width: 767px){
                            font-size: 15px;
                        }
                    }
                }
                &.dm-overview-card-theme-2{
                    .dm-overview-card__top--icon{
                        order: 2;
                    }
                }
            }
            .dm-overview-card__bottom{
                margin-top: 12px;
                .dm-overview-status{
                    display: inline-flex;
                    align-items: center;
                    width: 100%;
                    padding: 0 10px;
                    min-height: 44px;
                    border-radius: 8px;
                    background-color: ${({ theme }) => theme[theme.mainContent]['status-background']};
                    span{
                        font-size: 14px;
                    }
                    .dm-status-label{
                        ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                    }
                    .dm-status-rate{
                        display: flex;
                        align-items: center;
                        font-weight: 500;
                        svg,
                        img{
                            width: 20px;
                            ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: -1px;
                        }
                    }
                    &.dm-status-growth{
                        .dm-status-rate{
                            color: ${({ theme }) => theme['success-color']};
                        }
                    }
                    &.dm-status-down{
                        .dm-status-rate{
                            color: ${({ theme }) => theme['danger-color']}
                        }
                    }
                }
            }
        }
    }
    &.dm-overview-card-support{
        .ant-card-body{
            padding: 40.5px 25px !important;
        }
    }
`;

export { OverviewCardWrap };
