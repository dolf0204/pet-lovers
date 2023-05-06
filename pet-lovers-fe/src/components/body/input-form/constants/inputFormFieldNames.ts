const INPUT_FORM_FIELDS = {
  FORM_NAME: "input-form",
  NAME: { name: "name", label: "Name", message: "Name is required" },
  EMAIL: {
    name: "email",
    label: "Email",
    required_message: "Email is required",
    invalid_email: "Email format is not valid",
  },
  PET: { name: "pet", label: "Pet", message: "Pet is required" },
};

export { INPUT_FORM_FIELDS };
