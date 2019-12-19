import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import firebase from 'firebase/app'
import firebaseConfig from './data/config'

Enzyme.configure({ adapter: new Adapter() })

firebase.initializeApp(firebaseConfig)
