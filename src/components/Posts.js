import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ImagePostCard from './ImagePostCard';
import TwoImagesPostCard from './TwoImages';
import NoImageCardPost from './NoImageCardPost';
import ReplyingToComment from './ReplyingToComment';
import data from '../assets/data/index';

const Posts = () => {
  return (
    <>
      {data.map((item) => {
        if (item.type === 'singleImage')
          return <ImagePostCard key={item.id} post={item} />;
        if (item.type === 'twoImages')
          return <TwoImagesPostCard key={item.id} post={item} />;
        if (item.type === 'noImage')
          return <NoImageCardPost key={item.id} post={item} />;
        if (item.type === 'reply')
          return <ReplyingToComment key={item.id} post={item} />;
      })}
    </>
  );
};

export default Posts;

const styles = StyleSheet.create({});
