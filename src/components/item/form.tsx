import { useState, useRef } from "react";
import { Styles } from "./styles";
import { IItem } from "../../interfaces/IItem";

import { Button } from "../button";
import { Input } from "../input";

import { SaveIcon } from "../icons/save";
import { CloseIcon } from "../icons/close";

import { useContextHook } from "../../context/hook";

export const ItemForm = ({ ...item }: IItem) => {
  const { toggleIsEditing, editItem } = useContextHook();

  const [formState, setFormState] = useState(item);
  const ageInputRef = useRef<string>((item.age ?? "").toString());
  const whatsappInputRef = useRef<string>((item.whatsapp ?? "").toString());
  const nicknameInputRef = useRef<string>(item.nickname ?? "");

  const { nickname = "", whatsapp = "", age = "", id } = formState || {};

  const updateAge = () => {
    const ageValue = ageInputRef.current || "0";
    setFormState((old) => ({ ...old, age: Number(ageValue) }));
  };

  const updateWhatsapp = () => {
    const whatsappValue = whatsappInputRef.current || "";
    setFormState((old) => ({ ...old, whatsapp: Number(whatsappValue) }));
  };

  const updateNickname = () => {
    const nicknameValue = nicknameInputRef.current || "";
    setFormState((old) => ({ ...old, nickname: nicknameValue }));
  };

  return (
    <>
      <Input
        name="nickname"
        placeholder="Nickname"
        onChangeText={(v) => (nicknameInputRef.current = v)}
        onBlur={updateNickname}
        defaultValue={nickname}
        autoFocus
      />
      <Input
        name="age"
        placeholder="Age"
        type="number"
        onChangeText={(v) => (ageInputRef.current = v)}
        onBlur={updateAge}
        defaultValue={age}
      />
      <Input
        name="whatsapp"
        placeholder="Whatsapp number"
        type="number"
        onChangeText={(v) => (whatsappInputRef.current = v)}
        onBlur={updateWhatsapp}
        defaultValue={whatsapp}
      />
      <Styles.GroupButtons>
        <Button onClick={() => editItem(formState)}>
          <SaveIcon />
        </Button>
        <Button onClick={() => toggleIsEditing(id)}>
          <CloseIcon />
        </Button>
      </Styles.GroupButtons>
    </>
  );
};
