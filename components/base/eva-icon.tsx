import React from 'react';
import { Icon } from '@ui-kitten/components';
import { RenderProp } from '@ui-kitten/components/devsupport';
import { ImageProps } from 'react-native';

function evaIcon(name: string): RenderProp<Partial<ImageProps>> {
  const iconComponent: RenderProp<Partial<ImageProps>> = (props) => (
    <Icon {...props} name={name} />
  );
  return iconComponent;
}

export default evaIcon;
