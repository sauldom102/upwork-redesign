import { Linking, Alert, StatusBar } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { colors } from 'theme';

const openWebLink = async (url: string, allowInsecure = false) => {
  try {
    if (await InAppBrowser.isAvailable()) {
      let formattedUrl = url;
      if (
        !url.startsWith('https://') ||
        (!allowInsecure && url.startsWith('http://'))
      ) {
        formattedUrl = `https://${url}`;
      }

      const entry = StatusBar.pushStackEntry({
        barStyle: 'dark-content',
      });

      await InAppBrowser.open(formattedUrl, {
        // iOS Properties
        dismissButtonStyle: 'close',
        preferredBarTintColor: '#fafafa',
        preferredControlTintColor: colors.gray0,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: '#fafafa',
        secondaryToolbarColor: '#fafafa',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
      });
      StatusBar.popStackEntry(entry);
    } else {
      Linking.openURL(url);
    }
  } catch (error) {
    if (error.message === 'Another InAppBrowser is already being presented.') {
      await InAppBrowser.close();
      Alert.alert('Something went wrong. Please, try it again.');
    } else {
      Alert.alert(error.message);
    }
  }
};

export default openWebLink;
