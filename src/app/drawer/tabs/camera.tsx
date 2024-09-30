import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    alert(`Mã vạch loại ${type} và dữ liệu ${data} đã được quét!`);
  };

  if (hasPermission === null) {
    return <Text>Đang yêu cầu quyền truy cập camera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Không có quyền truy cập camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Nhấn để quét lại'} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});