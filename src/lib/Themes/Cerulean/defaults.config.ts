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
    ]
}