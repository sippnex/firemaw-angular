import {FiremawProperty} from './firemaw-property';

export class FiremawDto {

  properties: FiremawProperty[];

  constructor() {
    this.properties = undefined;
  }

  public getProperty(propertyName: string) {
    if (this.properties == null || this.properties.length === 0) {
      return null;
    }
    for (const property of this.properties) {
      if (property.name === propertyName) {
        return property;
      }
    }
    return null;
  }

  public getPropertyValue(propertyName: string): any {
    return this.getProperty(propertyName).value;
  }

  public setPropertyValue(propertyName: string, value: any) {
    if (this.properties == null || this.properties.length === 0) {
      return;
    }
    for (const property of this.properties) {
      if (property.name === propertyName) {
        property.value = value;
        return;
      }
    }
  }

}
