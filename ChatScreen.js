import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
} from "react-native";
import {
  Avatar,
  Appbar,
  TextInput,
  Badge,
  IconButton,
  Surface,
} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ChatMessage = ({ message, time, isOwn }) => (
  <View style={[styles.messageContainer, isOwn && styles.ownMessage]}>
    {!isOwn && (
      <Avatar.Image size={40} source={require("./assets/profile.png")} />
    )}
    <Surface
      style={[
        styles.messageBubble,
        isOwn ? styles.ownBubble : styles.otherBubble,
      ]}
    >
      <Text style={[styles.messageText, isOwn && styles.ownMessageText]}>
        {message}
      </Text>
      <Text style={styles.timeText}>{time}</Text>
    </Surface>
  </View>
);

const ChatScreen = () => {
  const insets = useSafeAreaInsets();
  const [message, setMessage] = useState("");

  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
      ]}
    >
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => {}} />
        <Avatar.Image size={40} source={require("./assets/profile.png")} />
        <Appbar.Content title="Oluwaseun olumide" />
        <Appbar.Action icon="information" onPress={() => {}} />
      </Appbar.Header>

      <View style={styles.chatContainer}>
        <ChatMessage
          message="Kindly help me check the doc i sent"
          time="4:25pm"
          isOwn={false}
        />
        <ChatMessage message="Donee" time="4:25pm" isOwn={true} />
        <ChatMessage message="How did you see it" time="4:25pm" isOwn={false} />
        <ChatMessage message="It's okay" time="4:25pm" isOwn={true} />
        <ChatMessage message="It makes sense" time="4:25pm" isOwn={true} />
        <ChatMessage message="Thanks very much" time="4:25pm" isOwn={false} />
        <ChatMessage
          message="I really appreciate"
          time="4:25pm"
          isOwn={false}
        />
      </View>

      <Surface style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <IconButton icon="image" size={24} onPress={() => {}} />
          <IconButton icon="gif" size={24} onPress={() => {}} />
          <TextInput
            style={styles.input}
            placeholder="Start a message"
            value={message}
            onChangeText={setMessage}
            mode="flat"
          />
          <IconButton icon="microphone" size={24} onPress={() => {}} />
        </View>
        <View style={styles.bottomNav}>
          <IconButton icon="home" size={24} onPress={() => {}} />
          <IconButton icon="magnify" size={24} onPress={() => {}} />
          <IconButton icon="microphone" size={24} onPress={() => {}} />
          <IconButton icon="account-group" size={24} onPress={() => {}} />
          <View>
            <IconButton icon="bell" size={24} onPress={() => {}} />
            <Badge style={styles.badge}>3</Badge>
          </View>
          <IconButton icon="email" size={24} onPress={() => {}} />
        </View>
      </Surface>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#fff",
    elevation: 0,
  },
  chatContainer: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "flex-end",
  },
  ownMessage: {
    justifyContent: "flex-end",
  },
  messageBubble: {
    maxWidth: "70%",
    padding: 12,
    borderRadius: 20,
    marginLeft: 8,
  },
  ownBubble: {
    backgroundColor: "#2196F3",
  },
  otherBubble: {
    backgroundColor: "#F5F5F5",
  },
  messageText: {
    fontSize: 16,
    color: "#000",
  },
  ownMessageText: {
    color: "#fff",
  },
  timeText: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  inputContainer: {
    padding: 8,
    elevation: 4,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    borderRadius: 24,
    backgroundColor: "#F5F5F5",
    marginBottom: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 4,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
  },
});

export default ChatScreen;
