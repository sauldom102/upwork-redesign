import React, { FC, memo, useCallback, useMemo, useState } from 'react';
import { FilterIcon, SearchIcon } from 'components/Icons';
import { Props } from './types';
import {
  Container,
  InputContainer,
  Input,
  LeftIcons,
  RightIcons,
} from './styles';
import { getInputExtraProps } from './logic';

const TextInput: FC<Props> = ({
  innerRef,
  style,
  leftIcon,
  rightIcon,
  type,
  nextFieldRef,
  onSubmitEditing,
  onBlur,
  multiline,
  placeholder,
  inputStyle,
  inputContainerStyle,
  value,
  onChangeText,
  error,
}) => {
  const [focused, setFocused] = useState(false);
  const onFocus = useCallback(() => setFocused(true), []);

  const typeExtraProps = useMemo(() => getInputExtraProps({ type }), [type]);

  const handleSubmitEditing = useCallback(
    (event) => {
      if (nextFieldRef?.current) {
        nextFieldRef.current.focus();
      } else if (onSubmitEditing) {
        onSubmitEditing(event);
      }
    },
    [nextFieldRef, onSubmitEditing],
  );

  const handleBlur = useCallback(() => {
    setFocused(false);
    if (onBlur) onBlur();
  }, [onBlur]);

  const hasError = !!(!focused && error);

  return (
    <Container style={style}>
      <InputContainer
        error={hasError}
        type={type}
        focused={focused}
        style={inputContainerStyle}
      >
        {leftIcon && (
          <LeftIcons>{leftIcon === 'search' && <SearchIcon />}</LeftIcons>
        )}
        <Input
          ref={innerRef}
          onBlur={handleBlur}
          onFocus={onFocus}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={handleSubmitEditing}
          placeholder={placeholder}
          multiline={multiline}
          withIcons={!!leftIcon || !!rightIcon}
          {...typeExtraProps}
          style={inputStyle}
        />
        {rightIcon && (
          <RightIcons>{rightIcon === 'filter' && <FilterIcon />}</RightIcons>
        )}
      </InputContainer>
    </Container>
  );
};

export default memo(TextInput);
