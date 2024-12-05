import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const MessageItem = ({
  avatar,
  name,
  handle,
  time,
  message,
  hasNewMessage,
}) => (
  <TouchableOpacity style={styles.messageItem}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <View style={styles.messageContent}>
      <View style={styles.messageHeader}>
        <Text style={styles.name}>
          {name} <Text style={styles.handle}>{handle}</Text>
        </Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.messageText} numberOfLines={2}>
        {message}
      </Text>
    </View>
    {hasNewMessage && <View style={styles.newMessageDot} />}
  </TouchableOpacity>
);

export default function DirectMessages() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/40" }}
          style={styles.profilePic}
        />
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#657786" />
          <TextInput
            placeholder="Search Direct Messages"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Message Requests */}
        <TouchableOpacity style={styles.requestsContainer}>
          <View style={styles.requestsIcon}>
            <Feather name="mail" size={24} color="#000" />
          </View>
          <View style={styles.requestsContent}>
            <Text style={styles.requestsTitle}>Message requests</Text>
            <Text style={styles.requestsSubtitle}>
              4 new people you may know
            </Text>
          </View>
          <View style={styles.newMessageDot} />
        </TouchableOpacity>

        {/* Messages List */}
        <MessageItem
          avatar="https://via.placeholder.com/50"
          name="Jaco J."
          handle="@iamjacoj"
          time="1s"
          message="hey! I have a friend who's headed to Kyoto, and wondered if you have..."
          hasNewMessage={true}
        />
        <MessageItem
          avatar="https://via.placeholder.com/50"
          name="BIP"
          handle="@bip_kpop"
          time="5s"
          message="🔥"
          hasNewMessage={false}
        />

        <MessageItem
          avatar="https://via.placeholder.com/50"
          name="BIP"
          handle="@bip_kpop"
          time="5s"
          message="🔥"
          hasNewMessage={false}
        />
        <MessageItem
          avatar="https://via.placeholder.com/50"
          name="BIP"
          handle="@bip_kpop"
          time="5s"
          message="🔥"
          hasNewMessage={false}
        />
        <MessageItem
          avatar="https://via.placeholder.com/50"
          name="BIP"
          handle="@bip_kpop"
          time="5s"
          message="🔥"
          hasNewMessage={false}
        />
        <MessageItem
          avatar="https://via.placeholder.com/50"
          name="BIP"
          handle="@bip_kpop"
          time="5s"
          message="🔥"
          hasNewMessage={false}
        />
        <MessageItem
          avatar="https://via.placeholder.com/50"
          name="BIP"
          handle="@bip_kpop"
          time="5s"
          message="🔥"
          hasNewMessage={false}
        />
        <MessageItem
          avatar="https://via.placeholder.com/50"
          name="BIP"
          handle="@bip_kpop"
          time="5s"
          message="🔥"
          hasNewMessage={true}
        />
        <MessageItem
          avatar="https://via.placeholder.com/50"
          name="BIP"
          handle="@bip_kpop"
          time="5s"
          message="🔥"
          hasNewMessage={true}
        />
        {/* Add more MessageItems as needed */}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="home" size={24} color="#657786" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="search" size={24} color="#657786" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="bell" size={24} color="#657786" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="mail" size={24} color="#1DA1F2" />
        </TouchableOpacity>
      </View>

      {/* Compose Button */}
      <TouchableOpacity style={styles.composeButton}>
        <Feather name="edit" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFF3F4",
    borderRadius: 20,
    paddingHorizontal: 12,
    marginRight: 12,
    height: 36,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  requestsContainer: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    alignItems: "center",
  },
  requestsIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EFF3F4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  requestsContent: {
    flex: 1,
  },
  requestsTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  requestsSubtitle: {
    fontSize: 14,
    color: "#657786",
  },
  messageItem: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  handle: {
    color: "#657786",
    fontWeight: "normal",
  },
  time: {
    fontSize: 14,
    color: "#657786",
  },
  messageText: {
    fontSize: 14,
    color: "#657786",
  },
  newMessageDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1DA1F2",
    marginLeft: 8,
  },
  bottomNav: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    paddingVertical: 8,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  composeButton: {
    position: "absolute",
    right: 16,
    bottom: 80,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#1DA1F2",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
