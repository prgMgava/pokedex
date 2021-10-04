import { useFormik } from "formik";
import Image from "../../assets/image/voltorb-signup.png";
import * as yup from "yup";
import { Button, Box, Grid, TextField } from "@mui/material";

const styles = {
  gridImage: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "50% 90%",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },
};

interface SignupData {
  email: string;
  username: string;
  password: string;
}

export const Signup = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Email invalid"),
    username: yup
      .string()
      .required("Username is required")
      .max(18, "Must contain a maximum of 18 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Must contain a minimum of 8 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const onSubmitFunction = (data: SignupData) => {
    console.log(data);
  };

  return (
    <Box width="100%" height="100vh">
      <Grid container>
        <Grid item xs={8} height="100vh">
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <TextField
              style={{width:"100%"}}
              id="username"
              name="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            ></TextField>
            <TextField
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            ></TextField>
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            ></TextField>
            <Button type="submit"></Button>
          </form>
        </Grid>
        <Grid item xs={4} style={styles.gridImage} height="100vh"></Grid>
      </Grid>
    </Box>
  );
};
