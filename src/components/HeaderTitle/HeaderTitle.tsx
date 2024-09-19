import {FontSize} from '@/constants/Colors';
import React from 'react';
import {Text} from 'react-native';

export const HeaderTitle: React.FC<{ title: string }> = ({title}) => (
    <Text
        numberOfLines={2}
        adjustsFontSizeToFit
        style={{
            paddingHorizontal: 10,
            color: '#000000',
            fontWeight: '700',
            fontSize: 18,
            fontFamily: FontSize.fontFamilyRegular,
        }}
    >
        {title}
    </Text>
);