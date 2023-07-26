import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//TBD, why it is necessary
import 'element-plus/dist/index.css'
import 'mttk-lowcode/dist/index.css'

import {installDesigner,installRouter,useComponentRepository} from 'mttk-lowcode'
import installVeutify from './vuetify/componentRepository/index'

// Plugins of veutify
import { registerPlugins } from './vuetify/plugins'
//
const componentRepository=useComponentRepository()
componentRepository.use(installVeutify)

//

const app = createApp(App)

installRouter(app,router)
// installRouter(app,{router})

app.use(installDesigner,{url:import.meta.env.VITE_APP_API_BASE,router})
//veutify
registerPlugins(app)
//
app.mount('#app')

export {app}