import { Pipe, PipeTransform, Injector } from '@angular/core';
import { DefaultValuePipe } from './default-value.pipe';
import { MyDatePipe } from './my-date.pipe';
import { NetDeviceResourceStatusPipe } from './net-device-resource-status.pipe';
import { NetDeviceTypePipe } from './net-device-type.pipe';

@Pipe({
  name: 'dynamicPipe'
})
export class DynamicPipe implements PipeTransform {
  public constructor(private injector: Injector) {}

  transform(value: any, pipeToken: any, pipeArgs?: any[]): any {
    const MAP = {
      netDeviceResourceStatus: NetDeviceResourceStatusPipe,
      netDeviceType: NetDeviceTypePipe,
      myDate: MyDatePipe,
      defaultValue: DefaultValuePipe
    };

    if (pipeToken && MAP.hasOwnProperty(pipeToken)) {
      const pipe = new MAP[pipeToken]();

      if (Array.isArray(pipeArgs)) {
        return pipe.transform(value, ...pipeArgs);
      } else {
        return pipe.transform(value, pipeArgs);
      }
    } else {
      return value;
    }
  }
}
