import Vue from 'vue'
import App from './App.vue'

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
  render: h => h(App),
}).$mount('#app')
