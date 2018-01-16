package com.todoapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.beefe.picker.PickerViewPackage;
import com.imagepicker.ImagePickerPackage;
import com.keyee.datetime.RCTDateTimePickerPackage;
import com.github.wuxudong.rncharts.MPAndroidChartPackage;
import com.beefe.picker.PickerViewPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.imagepicker.ImagePickerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new VectorIconsPackage(),
            new PickerViewPackage(),
            new ImagePickerPackage(),
            new RCTDateTimePickerPackage(),
            new MPAndroidChartPackage(),
            new PickerViewPackage(),
            new VectorIconsPackage(),
            new ImagePickerPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
