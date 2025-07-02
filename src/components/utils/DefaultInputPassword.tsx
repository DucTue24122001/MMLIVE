import { InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import DefaultInput from "./DefaultInput";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { colors } from "configs/theme/colors";

const DefaultInputPassword = ({ ...props }: any) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const showPasswordHandle = () => {
    setIsShowPassword((state) => !state);
  };

  return (
    <InputGroup w={props.w}>
      <DefaultInput
        _focusVisible={{ outline: "none" }}
        h={["50px", "50px", "40px", "40px"]}
        border={`1px solid ${colors.form.bdInput}`}
        _focus={{ border: `1px solid ${colors.form.bdInput}` }}
        bgColor={colors.form.bgInput}
        autoComplete="off"
        placeholder={props.placeholder}
        type={isShowPassword ? "text" : "password"}
        pr={"35px"}
        {...props}
      />
      <InputRightElement
        h={["50px", "50px", "35px", "35px"]}
        children={
          !isShowPassword ? (
            <BsFillEyeSlashFill
              color={colors.primary.text_white}
              onClick={showPasswordHandle}
              cursor={"pointer"}
              style={{ fontSize: "20px" }}
            />
          ) : (
            <AiFillEye
              cursor={"pointer"}
              color={colors.primary.text_white}
              onClick={showPasswordHandle}
              style={{ fontSize: "20px" }}
            />
          )
        }
      />
    </InputGroup>
  );
};

export default DefaultInputPassword;
