import Detail from 'views/Detail';
import Register from 'views/Register';
import HistoryTransaction from 'views/HistoryTransaction';
import NotFound from 'views/NotFound';
import SendTransaction from 'views/send/SendTransaction';

const routes = [
  {
    path: '/detail',
    exact: true,
    auth: true,
    component: Detail,
  },
  {
    path: '/send-transaction',
    exact: true,
    auth: true,
    component: SendTransaction,
  },
  {
    path: '/history-transaction',
    exact: true,
    auth: true,
    component: HistoryTransaction,
  },
  {
    path: '/register',
    exact: true,
    component: Register
  },
  {
    component: NotFound
  }
]

export default routes;
