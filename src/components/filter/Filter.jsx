import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { FilterLabel } from './Filter.module';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterLabel>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </FilterLabel>
  );
};
