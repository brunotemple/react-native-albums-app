import React from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    title,
    artist,
    thumbnail_image,
    image
  } = album;

  const { 
    headerContentSytle, 
    thumbnailStyle, 
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    imageContainerStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image 
            style={thumbnailStyle} 
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentSytle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <View style={imageContainerStyle}>
          <Image 
            style={imageStyle} 
            source={{ uri: image }}
          />
        </View>
      </CardSection>
      <CardSection>
        <Button />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentSytle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageContainerStyle: {
    flex: 1,
    height: 300
  },
  imageStyle: {
    position: 'absolute',
    top: 2,
    left: 2,
    bottom: 2,
    right: 2
  }
};

export default AlbumDetail;
