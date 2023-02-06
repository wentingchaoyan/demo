The followings are for 'zsh' command line tools.
## 1. homebrew
Install homebrew and add Homebrew to your PATH.

```shell
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```
Restart your terminal window. (Kill -> reopen)

## 2. nodenv
Install nodenv and add nodenv to your PATH.

```shell
brew install nodenv
echo 'eval "$(nodenv init -)"' >> ~/.zprofile
```

## 3. Install Node.js
```shell
nodenv install 16.16.0
nodenv rehash
```

## 4. Install yarn
```shell
npm i --location=global yarn
```

## 5. Install Expo cli
```shell
yarn add global expo-cli
```

## 6. Clone demo project to your PC

## 7. Open project path
```shell
cd /path/to/your/project root
```

## 8. Install dependencies
```shell
yarn install
```

## 9. Start Android App by run:
```shell
yarn android
```

## 10. Start iOS App by run:
```shell
yarn ios
```
