import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.REWARDED
  : (process.env.EXPO_PUBLIC_REWARD_ADMOB as string);

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ["fashion", "clothing"],
});

function App() {

  return (
    <Button
      title="Show Interstitial"
      onPress={() => {
      }}
    />
  );
}
export default App