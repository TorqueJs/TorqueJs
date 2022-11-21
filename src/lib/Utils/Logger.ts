
export enum TorqueLogLevel {
  /**
   * This is less than the normal log importance
   */
  BASE = 'BASE',

  /**
   * This is standard log importance
   */
  INFO = 'INFO',

  /**
   * This is of medium importance
   */
  WARN = 'WARN',

  /**
   * It is very importance to take notice of this log message
   */
  ERROR = 'ERROR',

  /**
   * Something has critically failed
   */
  CRITICAL = 'CRITICAL'
}
const TorqueLogLevels = ['BASE', 'INFO', 'WARN', 'ERROR', 'CRITICAL'];

export interface LoggingConfig {
  BASE: string;
  INFO: string;
  WARN: string;
  ERROR: string;
  CRITICAL: string;
}

export const defaultLoggingConfig: LoggingConfig = {
  BASE: 'color: #999999; font-size: 9px',
  INFO: 'color: #999999',
  WARN: 'color: #AA6600; font-size: 13px',
  ERROR: 'color: #FF4500; font-size: 14px',
  CRITICAL: 'color: #EE0022; font-size: 15px',
}

/**
 * to test out the default logging config copy the next line and paste into the console
 *
 * let temp = 'This is a test log'; console.log(`%c${temp}`, 'color: #EE0022; font-size: 15px'); console.log(`%c${temp}`, 'color: #FF4500; font-size: 14px');console.log(`%c${temp}`, 'color: #AA6600; font-size: 13px');console.log(`%c${temp}`, 'color: #999999; font-size: 12px');console.log(`%c${temp}`, 'color: #999999; font-size: 9px');
*/

export class TorqueLogger {

  private loggingConfig: LoggingConfig = {
    BASE: '',
    INFO: '',
    WARN: '',
    ERROR: '',
    CRITICAL: '',
  };
  private logPrefix: string;
  private static instance: TorqueLogger;

  private constructor() {}

  private static getInstance = (): TorqueLogger => {
    if (!TorqueLogger.instance) {
      TorqueLogger.instance = new TorqueLogger();
    }
    return TorqueLogger.instance;
  }

  static init = (logPrefix = '', loggingConfig = defaultLoggingConfig) => {
    this.getInstance().logPrefix = logPrefix;
    Object.keys(loggingConfig).forEach((value) => {
      if (TorqueLogLevels.includes(value)) {
        this.getInstance().loggingConfig[value] = loggingConfig[value];
      }
    });
  }

  static log = (logContent: any, torqueLogLevel = TorqueLogLevel.INFO) => {
    if (typeof logContent === 'object') {
      console.log(`%c${this.getInstance().logPrefix}[${torqueLogLevel.toString()}]: ${JSON.stringify(logContent, null, 2)}`, this.getInstance().loggingConfig[torqueLogLevel]);
    } else {
      console.log(`%c${this.getInstance().logPrefix}[${torqueLogLevel.toString()}]: ${logContent}`, this.getInstance().loggingConfig[torqueLogLevel]);
    }
  }
}