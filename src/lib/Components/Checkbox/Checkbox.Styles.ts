import styled from 'styled-components';

export const _TorqueCheckbox: any = styled('div')`
    width: 15px;
    height: 15px;
    border: 2px solid blue;
    border-radius: 3px;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        width: 37px;
        height: 37px;
        top: -11px;
        left: -11px;
        background: #f0f0f0;
        border-radius: 18px;
        opacity: 0;
        z-index: -1;
        box-shadow: 0px 0px 7px 0px rgba(100,100,100,0.15);
        transition: opacity 0.2s ease-out;
    }
    &:hover::before {
        content: '';
        opacity: 1;
    }
    &::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 17px;
        border-bottom: 2px solid blue;
        border-right: 2px solid blue;
        transform: rotate(45deg);
        top: -6px;
        left: 8px;
        background: white;
        opacity: ${(props: any) => props.checked ? '1' : '0'};
        clip-path: ${(props: any) => props.checked ? 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'};
        transition: opacity 0.1s ease-out, clip-path 0.2s ease-out;
    }
    &:hover::after {
        background: #f0f0f0;
    }
`