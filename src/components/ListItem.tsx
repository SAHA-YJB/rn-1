import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ListItemProps {
  text: string;
  id: string | number;
}

const ListItem: FC<ListItemProps> = ({ text, id }) => {
  return (
    <View style={styles.listItem}>
      <Text>{text}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    color: 'black',
  },
});
