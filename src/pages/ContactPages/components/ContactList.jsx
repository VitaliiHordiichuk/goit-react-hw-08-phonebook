import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Flex } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { getUserName } from '../../../redux/auth/auth-selectors';
import { deleteContact } from '../../../redux/contacts/contactsApi';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

const ContactList = ({ getFilteredContacts }) => {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  const name = useSelector(getUserName);

  return (
    <Flex align="center" justify="center">
      <Box p={6}>
        <TableContainer>
          <Table variant="striped" colorScheme="purple" size="sm">
            <TableCaption>
              Personal phonebook&nbsp;
              {name}
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Number</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {getFilteredContacts?.map(({ id, name, number }) => (
                <Tr key={id}>
                  <Td>{name}</Td>
                  <Td>{number}</Td>
                  <Td isNumeric>
                    <Button
                      h="20px"
                      type="button"
                      bg="transparent"
                      onClick={() => handleDelete(id)}
                    >
                      <SmallCloseIcon />
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
};

export default ContactList;
