import { Box, Flex, Text } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

const Filter = ({ onChangeFilter, value }) => {
  return (
    <Flex align="center" justify="center">
      <Box p={6} rounded="md">
        <Text fontSize="20px" fontWeight="extrabold" textAlign={['center']}>
          Contacts
        </Text>
        <form>
          <Text htmlFor="text" textAlign={['center']}>
            Find contacts by name
          </Text>
          <Input
            id="text"
            name="text"
            type="text"
            onChange={onChangeFilter}
            value={value}
          />
        </form>
      </Box>
    </Flex>
  );
};
export default Filter;
