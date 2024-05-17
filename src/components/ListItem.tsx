import React, { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// ListItemProps 인터페이스 정의
// text: 리스트 항목에 표시될 텍스트
// id: 리스트 항목의 고유 식별자
// removeListHandler: 리스트 항목을 제거하는 함수
interface ListItemProps {
  text: string;
  id: string | number;
  removeListHandler: (listId: string) => void;
}

const ListItem: FC<ListItemProps> = ({ text, id, removeListHandler }) => {
  // 컴포넌트의 렌더링 부분입니다.
  return (
    // Pressable 컴포넌트를 사용하여 클릭 가능한 리스트 아이템을 생성
    <Pressable
      onPress={() => {
        removeListHandler(id.toString());
      }}
      accessibilityLabel={`Remove item ${text}`}
    >
      <View style={styles.listItem}>
        <Text>{text}</Text>
      </View>
    </Pressable>
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
