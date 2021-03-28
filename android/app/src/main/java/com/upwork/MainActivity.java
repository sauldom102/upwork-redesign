package com.upwork;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.zoontek.rnbootsplash.RNBootSplash;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // Avoid crashes when restoring from background
    // See https://github.com/software-mansion/react-native-screens/issues/17
    if (savedInstanceState != null) {
      savedInstanceState.remove("android:support:fragments");
      savedInstanceState.remove("android:fragments");
    }
    super.onCreate(savedInstanceState);

    RNBootSplash.init(R.drawable.bootsplash, MainActivity.this);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "upwork";
  }
}
