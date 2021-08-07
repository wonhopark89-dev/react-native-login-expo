import React from 'react';
import { Snackbar } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { theme } from '../core/theme';

type Props = {
  message: string;
  onDismiss: () => void;
  type?: string;
};

export default function Toast({ type = 'error', message, onDismiss }: Props) {
  return (
    <View style={styles.container}>
      <Snackbar
        visible={!!message}
        duration={3000}
        onDismiss={onDismiss}
        style={{
          backgroundColor: type === 'error' ? theme.colors.error : theme.colors.success,
        }}
      >
        <Text style={styles.content}>{message}</Text>
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 80 + getStatusBarHeight(),
    width: '100%',
  },
  content: {
    fontWeight: '500',
  },
});
