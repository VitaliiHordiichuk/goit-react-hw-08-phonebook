import { Label, Input } from './Filter.styled'
import PropTypes from 'prop-types';

const Filter = ({ value, filter }) => (
    <Label > <span>Find contacts by name</span> 
        <Input type="text" value={value} onChange={filter} />
    </Label>
);


Filter.propTypes = {
    value: PropTypes.string.isRequired,
   filter: PropTypes.func.isRequired
}
export default Filter;