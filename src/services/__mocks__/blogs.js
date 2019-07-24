const blogs = [
  {
    title: 'BLACK METAL IST KRIEG',
    author: 'Atte Gates',
    url: '-----',
    likes: 8,
    user: {
      username: 'atteg',
      name: 'Atte Gates',
      id: '5d3039ed63e1cb2719af5c35'
    },
    id: '5d303ab77fd96e27bcbd59d7'
  },
  {
    title: 'BLACK METAL IST KRIEG',
    author: 'Atte Gates',
    url: '-----',
    likes: 12,
    user: {
      username: 'atteg',
      name: 'Atte Gates',
      id: '5d3039ed63e1cb2719af5c35'
    },
    id: '5d3065f4478c4f3fdb57329c'
  },
  {
    title: 'tttt',
    author: 'tttttt',
    url: 'ttttt',
    likes: 0,
    user: {
      username: 'testi',
      name: 'Testi Testeri',
      id: '5d36904006fec20f5482b252'
    },
    id: '5d36909306fec20f5482b254'
  }
  /*
  {
    'title': 'BLACK METAL IST KRIEG',
    'author': 'Atte Gates',
    'url': '-----',
    'likes': 0,
    'user': {
      'username': 'atteg',
      'name': 'Atte Gates',
      'id': '5d3039ed63e1cb2719af5c35'
    },
    'id': '5d3065fd478c4f3fdb57329d'
  },
  {
    'title': 'aa',
    'author': 'bb',
    'url': 'cc',
    'likes': 0,
    'user': {
      'username': 'atteg',
      'name': 'Atte Gates',
      'id': '5d3039ed63e1cb2719af5c35'
    },
    'id': '5d355d97ee9f020ae94cd1f9'
  },
  {
    'title': 'axaxaxa',
    'author': 'xaxax',
    'url': 'axax',
    'likes': 0,
    'user': {
      'username': 'atteg',
      'name': 'Atte Gates',
      'id': '5d3039ed63e1cb2719af5c35'
    },
    'id': '5d355e3dee9f020ae94cd1fb'
  },
  {
    'title': 'tttt',
    'author': 'tttttt',
    'url': 'ttttt',
    'likes': 0,
    'user': {
      'username': 'testi',
      'name': 'Testi Testeri',
      'id': '5d36904006fec20f5482b252'
    },
    'id': '5d36909306fec20f5482b254'
  }
  */
]

const getAll = () => {
  return Promise.resolve(blogs)
}

let token = null

const setToken = (newToken) => {
  token = newToken
}

export default { getAll, setToken }
