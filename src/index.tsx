import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-hide-keyboard' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const HideKeyboard = NativeModules.HideKeyboard
  ? NativeModules.HideKeyboard
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function hideKeyboard(): Promise<boolean> {
  return HideKeyboard.hideKeyboard();
}
