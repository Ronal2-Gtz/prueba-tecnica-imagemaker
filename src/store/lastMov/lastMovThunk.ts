import { getlastMov } from '../../services/lastMovService';
import { AppDispatch } from '../store';
import { addLastMovList } from './lastMovSlice';

const getLastMovThunk = () => {
    return async (dispatch: AppDispatch) => {
        const lastMovList = await getlastMov()
        dispatch(addLastMovList(lastMovList.data))
    }
}

export { getLastMovThunk }