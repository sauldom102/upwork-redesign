import { useState, useCallback, useEffect } from 'react';
import realTimeData, { Data, RealTimeData } from 'utils/realTimeData';

const useRealTimeData = <T extends keyof Data>(key: T) => {
  const [data, setData] = useState<Data[T]>(realTimeData.data?.[key]);

  const handleChangedBSData = useCallback(
    (d: Data) => {
      setData(d?.[key]);
    },
    [key],
  );

  useEffect(() => {
    RealTimeData.onChangedDataListener(handleChangedBSData);
  }, [handleChangedBSData]);

  return data;
};

export default useRealTimeData;
