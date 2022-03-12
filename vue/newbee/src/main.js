import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'

import 'vant/lib/index.css';
import { 
  Button,
  Icon,
  Form, Field, CellGroup,
  Swipe, SwipeItem,
  Skeleton,
  ActionBar, ActionBarIcon, ActionBarButton,
  SwipeCell, Card,
  Checkbox, CheckboxGroup,
  Stepper,
  SubmitBar,
  AddressList,
  AddressEdit
} from 'vant';

const app = createApp(App)
app.use(Button)
.use(Icon)
.use(Form)
.use(Field)
.use(CellGroup)
.use(Swipe)
.use(SwipeItem)
.use(Skeleton)
.use(ActionBar)
.use(ActionBarIcon)
.use(ActionBarButton)
.use(SwipeCell)
.use(Checkbox)
.use(CheckboxGroup)
.use(Card)
.use(Stepper)
.use(SubmitBar)
.use(AddressList)
.use(AddressEdit)

app.use(store)
app.use(router)
app.mount('#app')
