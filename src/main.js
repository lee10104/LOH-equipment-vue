import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'

Vue.config.productionTip = false

const baseComponents = require.context('./components', false, /App.*\.vue$/);
baseComponents.keys().forEach(fileName => {
  const componentConfig = baseComponents(fileName);
  const componentName = fileName
    .replace(/^\.\//, '')
    .replace(/\.vue/, '');

  Vue.component(componentName, componentConfig.default);
});

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
