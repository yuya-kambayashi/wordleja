import React from "react";
import { AnswerLetterState } from "./AnswerLetterState";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const EmptyBox = styled(Box)({
  color: "#FFFFFF",
  height: "5em",
  width: "5em",
  justifyContent: "center",
  verticalAlign: "center",

  border: "1px solid #D8D8D8",
  borderWidth: "0.2em"
});

const UncheckBox = styled(Box)({
  //color: "#FFFFFF",
  height: "5em",
  width: "5em",
  justifyContent: "center",
  verticalAlign: "center",

  border: "1px solid #787C7E",
  borderWidth: "0.2em",
  color: "#000000"
});

const UnmatchBox = styled(Box)({
  color: "#FFFFFF",
  height: "5em",
  width: "5em",
  justifyContent: "center",
  verticalAlign: "center",

  backgroundColor: "#787C7E",
  border: "1px solid #787C7E",
  borderWidth: "0.2em"
});

const PartialMatchBox = styled(Box)({
  color: "#FFFFFF",
  height: "5em",
  width: "5em",
  justifyContent: "center",
  verticalAlign: "center",

  backgroundColor: "#C9B458",
  border: "1px solid #C9B458",
  borderWidth: "0.2em"
});

const ExactMatchMatchBox = styled(Box)({
  color: "#FFFFFF",
  height: "5em",
  width: "5em",
  justifyContent: "center",
  verticalAlign: "center",

  backgroundColor: "#6AAA64",
  border: "1px solid #6AAA64",
  borderWidth: "0.2em"
});

const CustomTypography = styled(Typography)({
  fontSize: "40px",
  fontWeight: "bold",
  justifyContent: "center",
  marginTop: "10px"
});

type Props = {
  answerLetter: string;
  state: AnswerLetterState;
};

const AnswerLetter: React.FC<Props> = ({ answerLetter, state }) => {
  return (
    <>
      {state === "empty" && (
        <EmptyBox>
          <CustomTypography>{answerLetter}</CustomTypography>
        </EmptyBox>
      )}
      {state === "uncheck" && (
        <UncheckBox>
          <CustomTypography>{answerLetter}</CustomTypography>
        </UncheckBox>
      )}
      {state === "unmatch" && (
        <UnmatchBox>
          <CustomTypography>{answerLetter}</CustomTypography>
        </UnmatchBox>
      )}
      {state === "partialMatch" && (
        <PartialMatchBox>
          <CustomTypography>{answerLetter}</CustomTypography>
        </PartialMatchBox>
      )}
      {state === "exactMatch" && (
        <ExactMatchMatchBox>
          <CustomTypography>{answerLetter}</CustomTypography>
        </ExactMatchMatchBox>
      )}
    </>
  );
};

export default AnswerLetter;
