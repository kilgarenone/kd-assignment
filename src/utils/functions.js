import * as Yup from "yup";

export function validationSchemaConstructor(question) {
  let schema = Yup.string();

  if (!question.validation_rules) {
    return null;
  }

  question.validation_rules.forEach(rule => {
    if ("is_required" in rule) {
      schema = schema.required("Hey man nice shot");
    } else if ("min_char_length" in rule) {
      schema = schema.min(
        rule.min_char_length,
        `Mininum character is ${rule.min_char_length}`
      );
    }
  });

  return schema;
}

export function initialValuesConstructor(questions) {
  return questions.reduce((acc, curr) => {
    acc[curr.id] = "";
    return acc;
  }, {});
}
