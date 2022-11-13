import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setFilter } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/selectors';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <Label>
      {' '}
      <span>Find contacts by name</span>
      <Input
        type="text"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.target.value))}
      />
    </Label>
  );
};

export default Filter;
