import * as yup from "yup";

const signInSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const signUpSchema = yup.object({
  name: yup.string().required(" name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

type SignUpFormType = yup.InferType<typeof signUpSchema>;
type SignInFormType = yup.InferType<typeof signInSchema>;

export { signInSchema, signUpSchema };
export type { SignInFormType, SignUpFormType };

