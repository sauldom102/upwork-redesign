/* eslint-disable no-underscore-dangle */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'react';
import { EventRegister } from 'react-native-event-listeners';

const REAL_TIME_DATA_KEY = 'realTimeData';

const CHANGED_REAL_TIME_DATA = 'changedRealTimeData';

export type Data = {
  collapseTabBar: boolean;
  loggedIn: boolean;
};

export class RealTimeData {
  private static instance: RealTimeData;

  private _data: Data = {
    collapseTabBar: false,
    loggedIn: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {
    RealTimeData.getCachedData().then((storedData) => {
      if (storedData) {
        this._data = storedData;
      }
    });
  }

  public static getInstance(): RealTimeData {
    if (!RealTimeData.instance) {
      RealTimeData.instance = new RealTimeData();
    }

    return RealTimeData.instance;
  }

  public static onChangedDataListener(listener: Dispatch<Data>) {
    EventRegister.addEventListener(CHANGED_REAL_TIME_DATA, listener);
  }

  get data() {
    return this._data;
  }

  public static emitChangedData(data?: Data) {
    EventRegister.emit(CHANGED_REAL_TIME_DATA, data);
  }

  public static async getCachedData() {
    const data = await AsyncStorage.getItem(REAL_TIME_DATA_KEY);
    return data ? (JSON.parse(data) as Data) : undefined;
  }

  public persist() {
    AsyncStorage.setItem(REAL_TIME_DATA_KEY, JSON.stringify(this.data));
  }

  public setData(newData: Partial<Data>) {
    const finalNewData = { ...this._data, ...newData };
    this._data = finalNewData;
    this.persist();
    RealTimeData.emitChangedData(finalNewData);
  }
}

const realTimeData = RealTimeData.getInstance();

export default realTimeData;
