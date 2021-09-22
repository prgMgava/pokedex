import { Formik, Form, Field } from "formik";
import Image from "../../assets/image/voltorb-signup.png";
import * as yup from "yup";
import { Button, Box, Grid } from "@mui/material";

const styles = {
  gridImage: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "50% 90%",
    backgroundSize: "100%",
  },
};

interface SignupData {
  email: string;
  username: string;
  password: string;
}

export const Signup = () => {
  const formSchema = yup.object({
    email: yup.string().required("Email is required").email("Email invalid"),
    username: yup
      .string()
      .required("Username is required")
      .max(18, "Must contain a maximum of 18 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Must contain a minimun of 8 characters"),
  });

  const onSubmitFunction = (data: SignupData) => {
    console.log(data);
  };

  return (
    <Box width="100%" height="100vh">
      <Grid container>
        <Grid item xs={8} height="100vh">
          <Formik
            initialValues={{ email: "", username: "", password: "" }}
            onSubmit={onSubmitFunction}
            validationSchema={formSchema}
          >
            <Form>
              <Field name="username"></Field>
              <Field name="email"></Field>
              <Field name="password" type="password"></Field>
              <Button type="submit"></Button>
            </Form>
          </Formik>
        </Grid>
        <Grid item xs={4} style={styles.gridImage} height="100vh"></Grid>
      </Grid>
    </Box>
  );
};
