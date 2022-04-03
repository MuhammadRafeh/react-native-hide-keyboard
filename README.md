# react-native-hide-keyboard

A React Native hide keyboard module is for hiding and showing the keyboard without blurring TextInput component.

## Installation

```sh
npm install react-native-hide-keyboard
```

or

```sh
yarn add react-native-hide-keyboard
```

## Demo
<img src="https://s7.gifyu.com/images/demo650a21e2b09a956c.gif" width="35%">

## Usage

```js
import { hideKeyboard, showKeyboard } from "react-native-hide-keyboard";

// For hiding Keyboard
const isItHide = await hideKeyboard();
if (isItHide) {
    // Here Keyboard is hide without blurring textInput
}

// For showing keyboard
const isItShow = await showKeyboard();
if (isItShow) {
    // Here keyboard is active/displayed
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT