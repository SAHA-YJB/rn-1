import React, { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface ListItemProps {
  text: string;
  id: string | number;
  removeListHandler: (listId: string) => void;
}

const ListItem: FC<ListItemProps> = ({ text, id, removeListHandler }) => {
  // 컴포넌트의 렌더링 부분입니다.
  return (
    // Pressable 컴포넌트를 사용하여 클릭 가능한 리스트 아이템을 생성
    // onPress: 사용자가 Pressable을 터치했을 때 호출되는 함수 ex)리스트 아이템을 삭제하는 함수
    // onLongPress: 사용자가 Pressable을 길게 눌렀을 때 호출되는 함수 ex)아이템의 세부 정보를 표시하는 함수
    // onPressIn: 사용자가 Pressable을 터치하기 시작할 때 호출되는 함수  ex)터치 시작 시 시각적 피드백
    // onPressOut: 사용자가 Pressable에서 손을 뗄 때 호출되는 함수 ex)터치 종료 시 시각적 피드백을 제거
    // android_ripple: 안드로이드에서 터치 시 시각적 피드백을 제공하는 속성 ex)터치 시 물결 효과를 표시
    <Pressable
      onPress={() => {
        removeListHandler(id.toString());
      }}
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
