import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function FormikForm() {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Register (Formik + Yup)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("User registered:", values);
          alert("Registration successful!");
          resetForm();
        }}
      >
        <Form className="flex flex-col gap-4">
          <div>
            <Field
              name="username"
              type="text"
              placeholder="Username"
              className="p-2 border rounded w-full"
            />
            <ErrorMessage name="username" component="p" className="text-red-600 text-sm" />
          </div>

          <div>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="p-2 border rounded w-full"
            />
            <ErrorMessage name="email" component="p" className="text-red-600 text-sm" />
          </div>

          <div>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="p-2 border rounded w-full"
            />
            <ErrorMessage name="password" component="p" className="text-red-600 text-sm" />
          </div>

          <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
