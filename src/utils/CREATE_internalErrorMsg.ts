//
//
//

export default function CREATE_internalErrorMsg(process?: string) {
  const first_SENTENCE = process
    ? `Something went wrong when ${process}.`
    : "Something went wrong.";
  const second_SENTENCE =
    " Please reload the site and try again. If the problem persists, contact me and let me know. Sorry for the troubles!";
  return first_SENTENCE + second_SENTENCE;
}
