import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, View } from 'react-native';
import ListInput from './src/components/ListInput';
import ListItem from './src/components/ListItem';

type ListType = { text: string; key?: string; id?: string };

export default function App() {
  // 리스트 상태와 모달의 가시성 상태를 관리
  const [lists, setLists] = useState<ListType[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  // 새 목록을 추가하는 핸들러 함수
  const addListHandler = (enteredText: string) => {
    // 입력된 텍스트가 비어있으면 경고 메시지를 표시
    if (enteredText === '') {
      return Alert.alert('목표를 입력해주세요!');
    }
    // 새 목록을 상태에 추가
    setLists((currentList) => [
      { text: enteredText, id: Math.random().toString() },
      ...currentList,
    ]);

    // 모달의 가시성을 토글
    setModalVisible(!modalVisible);
  };

  // 목록을 제거하는 핸들러 함수
  const removeListHandler = (listId: string) => {
    // 주어진 id와 일치하지 않는 항목만 필터링하여 목록을 업데이트
    setLists((currentList) => {
      return currentList.filter((list) => list.id !== listId);
    });
  };

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.appContainer}>
        <Button title='이뤄봐!' onPress={() => setModalVisible(true)} />
        {modalVisible && (
          <ListInput
            visible={modalVisible}
            setModalVisible={setModalVisible}
            addListHandler={addListHandler}
          />
        )}
        <View style={styles.listContainer}>
          <FlatList
            data={lists}
            renderItem={(listData) => {
              return (
                <ListItem
                  text={listData.item.text}
                  id={listData.item.id!}
                  removeListHandler={removeListHandler}
                />
              );
            }}
            alwaysBounceVertical={false}
            keyExtractor={(item) => item.id!}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f0',
  },
  listContainer: {
    flex: 7,
  },
});
