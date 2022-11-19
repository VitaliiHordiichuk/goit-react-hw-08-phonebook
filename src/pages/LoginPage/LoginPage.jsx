import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import swal from 'sweetalert';

import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import { logIn } from '../../redux/auth/auth-operations';

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    values.email.length <= 0 || values.password.length <= 0
      ? swal('Please enter email and password')
      : dispatch(logIn(values));
    resetForm();
    setSubmitting(false);
  };

  const fieldsData = [{ name: 'email', label: 'Email', type: 'email' }];

  return (
    <Flex align="center" justify="center">
      <Box p={6} rounded="md">
        <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
          {({ values, handleChange, handleBlur }) => (
            <Form>
              {fieldsData.map(({ name, label, type }) => (
                <div key={name}>
                  <FormLabel
                    fontWeight="300"
                    fontSize="15px"
                    mb="0px"
                    mt="15px"
                    htmlFor=""
                  >
                    {label}
                  </FormLabel>
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
              <FormLabel
                fontWeight="300"
                fontSize="15px"
                mb="0px"
                mt="15px"
                htmlFor=""
              >
                Password
              </FormLabel>
              <InputGroup>
                <Field
                  as={Input}
                  variant="filled"
                  name="password"
                  type={show ? 'text' : 'password'}
                  id="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Password"
                  value={values.password || ''}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShow}>
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
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
