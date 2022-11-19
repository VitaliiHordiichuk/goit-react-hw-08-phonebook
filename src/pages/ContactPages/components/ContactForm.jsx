import { addContact } from '../../../redux/contacts/contactsApi';
import { Formik, Form, Field } from 'formik';
import swal from 'sweetalert';

import { selectAllContacts } from '../../../redux/contacts/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Flex, FormLabel, Input, Text } from '@chakra-ui/react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectAllContacts);

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    !values.name || !values.number
      ? swal('Please enter name and number')
      : allContacts?.some(
          item => item.name.toLowerCase() === values.name.toLowerCase()
        )
      ? swal('This contact is already in contacts')
      : dispatch(addContact(values));
    resetForm();
    setSubmitting(false);
  };

  const fieldsData = [
    { name: 'name', label: 'Name', type: 'name', placeholder: 'Name' },
    {
      name: 'number',
      label: 'Phone number',
      type: 'tel',
      placeholder: 'Phone number',
    },
  ];

  return (
    <Flex align="center" justify="center">
      <Box p={6} rounded="md">
        <Text
          fontSize="25px"
          fontWeight="extrabold"
          textAlign={['center']}
          mb="20px"
        >
          Phonebook
        </Text>
        <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
          {({ values, handleChange, handleBlur }) => (
            <Form>
              {fieldsData.map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <FormLabel
                    fontWeight="300"
                    fontSize="15px"
                    mb="0px"
                    mt="15px"
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
                    placeholder={placeholder}
                    value={values[name] || ''}
                  />
                </div>
              ))}
              <Button type="submit" colorScheme="purple" width="full" mt="30px">
                Add contact
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default ContactForm;
