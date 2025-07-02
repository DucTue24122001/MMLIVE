import { Input } from '@chakra-ui/react'
import { colors } from 'configs/theme/colors'
import React from 'react'

const DefaultInput = ({...props}: any) => {
  return (
    <Input _focusVisible={{outline: "none"}} h={["50px","50px","40px","40px"]}
      border={`1px solid ${colors.form.bdInput}`} 
      _focus={{border: `1px solid ${colors.form.bdInput}`}}
      bgColor={colors.form.bgInput} autoComplete="off" {...props}></Input>
  )
}

export default DefaultInput