import { createStore } from 'redux'
import rootReducer from '.'

const configureStore = preloadedState => {
  const store = createStore(rootReducer, preloadedState)

  if (module.hot) {
    module.hot.accept('.', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
