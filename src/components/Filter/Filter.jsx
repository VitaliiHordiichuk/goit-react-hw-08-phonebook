// import { useSelector, useDispatch } from 'react-redux/es/exports';
import PropTypes from 'prop-types';
// import { setFilter } from '../../redux/contactsSlice';
// import { getFilter } from '../../redux/selectors';
import { Label, Input } from './Filter.styled';

const Filter = ({ filter, handleChange }) => {
  // const dispatch = useDispatch();
  // const filter = useSelector(getFilter);
  return (
    <Label>
      {' '}
      <span>Find contacts by name</span>
      <Input
        type="text"
        value={filter}
        onChange={evt => handleChange(evt.target.value)}
      />
    </Label>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Filter;
