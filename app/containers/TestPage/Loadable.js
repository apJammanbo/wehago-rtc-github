/**
 * 비동기 컴포넌트 로더
 */

import Loadable from 'react-loadable';

import LoadingIndicator from '../../components/LoadingIndicator';

export default Loadable({
    loader: () => import('./index'),
    loading: LoadingIndicator,
});
