// App.js
import React from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://your-blog.com' }}
        javaScriptEnabled={true}
        onLoadEnd={() => setLoading(false)}
        renderLoading={() => (
          <ActivityIndicator size="large" style={{ flex: 1 }} />
        )}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
};

export default App;