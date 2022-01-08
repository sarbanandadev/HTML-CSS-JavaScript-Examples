console.log(`
DEVICE TYPE
  mobile: ${device.mobile()}
  tablet: ${device.tablet()}
  desktop: ${device.desktop()}
ORIENTATION
  portrait: ${device.portrait()}
  landscape: ${device.landscape()}
DEVICE OS
  ipad: ${device.ipad()}
  ipod: ${device.ipod()}
  iphone: ${device.iphone()}
  android: ${device.android()}
  androidTablet: ${device.androidTablet()}
  blackberryTablet: ${device.blackberryTablet()}
  fxos: ${device.fxos()}
  fxosPhone: ${device.fxosPhone()}
  fxosTablet: ${device.fxosTablet()}
  meego: ${device.meego()}
  television: ${device.television()}
`);

device.onChangeOrientation(function(newOrientation) {
  console.log("New orientation is " + newOrientation)
});