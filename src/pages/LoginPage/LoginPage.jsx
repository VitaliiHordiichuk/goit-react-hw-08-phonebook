import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { Box, Button, Flex, FormLabel, Input } from '@chakra-ui/react';

import { logIn } from '../../redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    dispatch(logIn(values));
    resetForm();
    setSubmitting(false);
  };

  const fieldsData = [
    { name: 'email', label: 'Email', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <Flex align="center" justify="center">
      <Box p={6} rounded="md">
        <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
          {({ values, handleChange, handleBlur }) => (
            <Form>
              {fieldsData.map(({ name, label, type }) => (
                <div key={name}>
                  <FormLabel htmlFor="">{label}</FormLabel>
                  <Field
                    as={Input}
                    variant="filled"
                    name={name}
                    type={type}
                    id={name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={label}
                    value={values[name] || ''}
                  />
                </div>
              ))}
              <Button type="submit" colorScheme="purple" width="full" mt="30px">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default LoginPage;
