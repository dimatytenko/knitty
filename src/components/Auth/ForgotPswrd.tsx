import { Heading2 } from "../../ui-kit/Typography";
import { Form } from "../Form";
import { StyledPageTitleWrapper } from "../PageTitle/styles";

export default function ForgotPswrd() {
  return (
    <>
      <StyledPageTitleWrapper>
        <Heading2 $case="uppercase">RECOVER PASSWORD</Heading2>
      </StyledPageTitleWrapper>
      <Form>
        <p>hello</p>
      </Form>
    </>
  );
}

