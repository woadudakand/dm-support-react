import Styled from 'styled-components';

const CustomizerWrap = Styled.div`
    .dm-customizer-btn{
        display: flex;
        align-items: center;
        padding: 0 17.45px;
        min-height: 34px;
        background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};;
        border-radius: 17px;
        @media only screen and (max-width: 479px){
            padding: 0 6px;
        }
        ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
        i,
        svg{
            width: 14px;
            height: 14px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
        }
        .dm-customizer-btn__text{
            font-size: 14px;
            display: inline-block;
            font-weight: 500;
            line-height: 1.5;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            @media only screen and (max-width: 479px){
                display: none;
            }
        }
    }
    /* Customizer Style */
    .dm-customizer-wrapper{
        position: fixed;
        top: 0;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
        width: 350px;
        transform: translateX(${({ theme }) => (theme.rtl ? '-350px' : '350px')});
        height: 100%;
        overflow-y: auto;
        background-color: #fff;
        box-shadow: 0 0 30px #9299B810;
        z-index: 999;
        transition: all .3s ease;
        @media only screen and (max-width: 479px){
            width: 280px;
            transform: translateX(${({ theme }) => (theme.rtl ? '-280px' : '280px')});
        }
        &.show{
            transform: translateX(0);
        }
    }
    .dm-customizer{
        height: 100%;
        .dm-customizer__head{
            position: relative;
            padding: 18px 24px;
            border-bottom: 1px solid #f0f0f0;
            text-align: left;
            .dm-customizer-close{
                position: absolute;
                right: 15px;
                top: 15px;
                svg,
                i{
                    color: #FF4D4F;
                }
            }
            .dm-customizer__title{
                font-weight: 600;
                color: #272B41;
                font-size: 16px;
                margin-bottom: 2px;
            }
        }
        .dm-customizer__body{
            padding: 25px;
        }
        .dm-customizer__single{
            &:not(:last-child){
                margin-bottom: 35px;
            }
            h4{
                font-weight: 600;
                font-size: 16px;
                margin-bottom: 10px;
                color: #272B41;
            }
        }
    }
    .dm-customizer-list{
        margin: -10px;
        .dm-customizer-list__item{
            position: relative;
            display: inline-block;
            min-height: 60px;
            background-size: cover;
            margin: 10px;
            &.top{
                span.fa{
                    top: 35px;
                }
            }
            &:hover{
                span{
                    color: #5F63F2;
                }
            }
            a{
                position: relative;
                display: block;
                &.active{
                    span.fa{
                        display: block;
                    }
                }
                span.fa{
                    display: none;
                    font-size: 16px;
                    margin-top: 0;
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    color: ${({ theme }) => theme['success-color']};
                }
            }
            img{
                width: 100%;
            }
            span{
                display: inline-block;
                margin-top: 15px;
                color: #272B41;
            }
        }
    }
`;

export { CustomizerWrap };
