import store from './redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { domainUrl, domainUrl2 } from './constants/apiconstans/domanUrl';
import { actionsApi } from './redux/actionsApi';
const useShareDispatch = () => useDispatch();
const useShareSelector = useSelector;
export {
    store,
    useShareDispatch,
    useShareSelector,
    domainUrl,
    domainUrl2,
    actionsApi,
}