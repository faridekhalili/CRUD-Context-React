import React from "react";
import { Container } from "../../styles/global";
import { ToggleTheme } from "../toggle-theme";
import { Styles } from "./styles";

export const Header = React.memo(() => {
  return (
    <Styles.Container>
      <Container>
        <h1>My Context App</h1>
        <ToggleTheme />
      </Container>
    </Styles.Container>
  );
});
