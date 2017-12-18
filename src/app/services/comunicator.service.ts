import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {LogMessage} from "../entities/log-message";

@Injectable()
export class ComunicatorService {
private logMessageSource = new Subject<LogMessage>()

  logMessage = this.logMessageSource.asObservable();

  addLogMessage(log:LogMessage){
    this.logMessageSource.next(log);
  }


}
