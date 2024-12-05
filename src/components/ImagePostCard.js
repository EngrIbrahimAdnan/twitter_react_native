import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ImagePostCard = ({ post }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.avatarContainer}>
        <Avatar.Image size={55} source={post.profileImage} />
      </View>
      <View style={styles.postContent}>
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{post.userName}</Text>
            <Text style={styles.userHandle}>
              {post.userHandle} · {post.time}
            </Text>
          </View>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={20}
            color="gray"
          />
        </View>
        <Text style={styles.postText}>{post.text}</Text>
        <Image source={post.images[0]} style={styles.postImage} />
        <View style={styles.postActions}>
          <MaterialCommunityIcons
            name="comment-outline"
            size={20}
            color="gray"
          />
          <MaterialCommunityIcons name="repeat" size={20} color="gray" />
          <MaterialCommunityIcons name="heart-outline" size={20} color="gray" />
          <MaterialCommunityIcons name="share-outline" size={20} color="gray" />
        </View>
      </View>
    </View>
  );
};

export default ImagePostCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    backgroundColor: 'white',
  },
  postContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  avatarContainer: {
    marginRight: 10,
  },
  postContent: {
    flex: 1,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
  },
  userHandle: {
    color: 'gray',
    marginLeft: 5,
  },
  postText: {
    marginVertical: 5,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginTop: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
