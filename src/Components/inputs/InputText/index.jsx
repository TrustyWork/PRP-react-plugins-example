import React from 'react';
import InputWrap from 'Components/inputs/InputWrap';
import InputUnstyled from 'Components/inputs/InputUnstyled';

// import style from './style.scss';

const InputText = (props) => {
  const attributes = props;
  return (
    <InputWrap>
      <InputUnstyled
        {...attributes}
      />
    </InputWrap>
  );
};

export default InputText;
