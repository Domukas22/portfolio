//
//
//

export type ProjectSection_TYPE = {
  slug: string;
  name: string;
  content: JSX.Element;
};

export type FormInputError_PROPS<validInput_NAMES extends string = string> = {
  input_NAME: validInput_NAMES; // Dynamic input names provided by the form
  message: string;
};

export type Error_PROPS<validInput_NAMES extends string = string> =
  | {
      error_TYPE: "general" | "user_network";
      user_MSG: string;
      function_NAME: string;

      internal_MSG?: never; // --
      error_DETAILS?: never; // --
      falsyForm_INPUTS?: never; // --
    }
  | {
      error_TYPE: "internal" | "unknown";
      user_MSG: string;
      internal_MSG: string;
      function_NAME: string;

      error_DETAILS?: Object; // optional
      falsyForm_INPUTS?: never; // --
    }
  | {
      error_TYPE: "form_input";
      user_MSG: string;
      function_NAME: string;
      falsyForm_INPUTS: [
        FormInputError_PROPS<validInput_NAMES>, // At least one falsy input required
        ...FormInputError_PROPS<validInput_NAMES>[]
      ];

      internal_MSG?: never; // --
      error_DETAILS?: never; // --
    }
  | {
      error_TYPE: "abort";
      user_MSG: string;
      function_NAME: string;
      internal_MSG: string; // --
      error_DETAILS: Object; // --

      falsyForm_INPUTS: never;
    };
