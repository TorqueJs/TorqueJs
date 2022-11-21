import { Theme } from "../../Types/Theme";

export const PrimaryColor = '#4b71d7';
export const SecondaryColor = '#d5ad41';
export const TernaryColor = '#747474';

export const CeruleanTheme: Theme = {
    primaryColor: PrimaryColor,
    secondaryColor: SecondaryColor,
    ternaryColor: TernaryColor,
    TORQUE_BUTTON: [
        {
            identifier: 'basic',
            styles: {
                default: {
                    width: 'auto',
                    fontSize: '0.9em',
                    color: 'white',
                    backgroundColor: PrimaryColor,
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                    padding: '.85em 1.5em 0.85em 1.5em',
                    margin: 'none',
                    height: 'initial',
                    borderRadius: '4px',
                    transition: 'background-color 0.25s ease-out !important',
                    letterSpacing: '0.05em',
                    alignItems: 'center',
                    justifyContent: 'center',
                    "&& .torque-button-icon": {
                        fontSize: '20px'
                    },
                    "&& .torque-button-text": {
                        paddingTop: '2px'
                    }
                },
                hover: {
                    backgroundColor: '#2a52be',
                }
            },
            config: {
                animation: 'material-ripple'
            }
        },
        {
            identifier: 'icon-only',
            styles: {
                default: {
                    width: '50px',
                    height: '50px',
                    fontSize: '0.9em',
                    color: 'black',
                    backgroundColor: '#EEEEEE',
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                    padding: '.85em 1.5em 0.85em 1.5em',
                    margin: 'none',
                    borderRadius: '50%',
                    transition: 'background-color 0.25s ease-out !important',
                    letterSpacing: '0.05em',
                    alignItems: 'center',
                    justifyContent: 'center',
                    "&& .torque-button-icon": {
                        fontSize: '20px'
                    },
                    "&& .torque-button-text": {
                        paddingTop: '2px'
                    }
                },
                hover: {
                    backgroundColor: '#DDDDDD',
                }
            },
            config: {
                animation: 'material-ripple'
            }
        }
    ],
    TORQUE_BOX: [
        {
            identifier: 'flex-column',
            styles: {
                default: [
                    {
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    },
                    {
                        width: '-webkit-fill-available',
                        height: '-webkit-fill-available'
                    },
                    {
                        width: '-moz-fill-available',
                        height: '-moz-fill-available'
                    }
                ]
            }
        },
        {
            identifier: 'flex-row',
            styles: {
                default: [
                    {
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row'
                    },
                    {
                        width: '-webkit-fill-available',
                        height: '-webkit-fill-available'
                    },
                    {
                        width: '-moz-fill-available',
                        height: '-moz-fill-available'
                    }
                ]
            }
        }
    ],
    TORQUE_ACCORDIAN: {
        identifier: 'default',
        accordianWrapper: {
            styles: {
                default: {
                    width: '100%',
                    height: '100%',
                    minHeight: '40px',
                    boxShadow: 'none',
                    margin: 'none',
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: '0',
                        left: '0',
                        zIndex: '-1',
                        opacity: '0',
                        boxShadow: '-2px -2px 7px rgba(0,0,0,0.2)',
                        transition: 'opacity 0.2s ease-out'
                    },
                    '&:not([data-active="inactive"])::after': {
                        opacity: '1',
                    },
                    '&[data-active="active"]': {
                        margin: '12px 0px'
                    },
                    transition: 'margin 0.2s ease-out'
                }
            }
        },
        accordianHeader: {
            styles: {
                default: {
                    width: '100%',
                    height: '40px',
                    background: 'rgba(0,0,0,0.05)',
                    '&[data-active="active"]': {
                        background: 'white'
                    },
                    '&:hover': {
                        background: 'white'
                    },
                    transition: 'background 0.2s ease-out'
                }
            }
        },
        accordianContent: {
            styles: {
                default: {
                    width: '100%',
                    height: '40px',
                    background: 'rgba(0,0,0,0.2)'
                }
            }
        }
    }
}