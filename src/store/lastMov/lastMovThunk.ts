import { getlastMov } from '../../services/lastMovService';
import { AppDispatch } from '../store';
import { addLastMovList, copyLastMovList } from './lastMovSlice';

const getLastMovThunk = () => {
    return async (dispatch: AppDispatch) => {
        const lastMovList = await getlastMov()
        dispatch(addLastMovList(lastMovList.data))
        dispatch(copyLastMovList())
    }
}

export { getLastMovThunk }