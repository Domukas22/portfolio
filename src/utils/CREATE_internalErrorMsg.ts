//
//
//

export default function CREATE_internalErrorMsg(process?: string) {
  const first_SENTENCE = process
    ? `Something went wrong when ${process}.`
    : "Something went wrong.";
  const second_SENTENCE =
    " Please reload the app and try again. This problem has been recorded and will be reviewed by developers as soon as possible. If the problem persists, please contact support. We apologize for the inconvenience.";
  return first_SENTENCE + second_SENTENCE;
}
