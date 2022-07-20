import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// polyfill for requestAnimationFrame github.com/facebookincubator/create-react-app/issues/3199
global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0)
}

configure({ adapter: new Adapter() })
