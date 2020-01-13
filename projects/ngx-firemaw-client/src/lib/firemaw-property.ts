import {FiremawType} from './firemaw-type';

export class FiremawProperty {

  name: string;
  type: FiremawType;
  payload: string[];
  disabled: boolean;
  value: any;

  constructor() {
    this.name = undefined;
    this.type = undefined;
    this.payload = undefined;
    this.disabled = undefined;
    this.value = undefined;
  }

}
