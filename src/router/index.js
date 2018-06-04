import App from '../App'
import container from '../components/container.vue'
import data from '../../data.json'

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        component: r =>
          require.ensure([], () => r(require('../page/home')), 'home')
      },
      {
        path: '/list',
        component: r =>
          require.ensure([], () => r(require('../page/list')), 'list')
      },
      {
        path: '/result',
        component: r =>
          require.ensure([], () => r(require('../page/result')), 'result')
      },
      {
        path: '/data.json',
        component: data
      }
    ]
  },
  {
    path: '/test',
    name: 'container',
    component: container
  }
]
