import { createApp } from 'vue';
import { LoadingPlugin } from 'vue-loading-overlay';
import store from './store';
import App from './App.vue';
import router from './router';

import PrimVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import './assets/main.css'

import SelectButton from 'primevue/selectbutton';
import ToastService from 'primevue/toastservice';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Select from 'primevue/select';
import Menu from 'primevue/menu';
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext';
import DatePicker from 'primevue/datepicker';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Row from 'primevue/row';
import Badge from 'primevue/badge';
import ToggleSwitch from 'primevue/toggleswitch';
import Password from 'primevue/password';
import Toast from 'primevue/toast';
import Tag from 'primevue/tag';
import Fluid from 'primevue/fluid';
import Divider from 'primevue/divider';
import Fieldset from 'primevue/fieldset';
import Stepper from 'primevue/stepper';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import Panel from 'primevue/panel';

createApp(App)
  .use(ToastService)
  .use(LoadingPlugin)
  .use(store)
  .use(router)
  .use(PrimVue, {
    ripple: true,
    inputVariant: "filled",
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.p-dark',
      }
    }
  })
  .component('Button', Button)
  .component('Toolbar', Toolbar)
  .component('Select', Select)
  .component('Menu', Menu)
  .component('FloatLabel', FloatLabel)
  .component('InputText', InputText)
  .component('DatePicker', DatePicker)
  .component('DataTable', DataTable)
  .component('Column', Column)
  .component('Row', Row)
  .component('Badge', Badge)
  .component('ToggleSwitch', ToggleSwitch)
  .component('SelectButton', SelectButton)
  .component('Password', Password)
  .component('Toast', Toast)
  .component('Tag', Tag)
  .component('Fluid', Fluid)
  .component('Divider', Divider)
  .component('Fieldset', Fieldset)
  .component('Steper', Stepper)
  .component('Accordion', Accordion)
  .component('AccordionContent', AccordionContent)
  .component('AccordionHeader', AccordionHeader)
  .component('AccordionPanel', AccordionPanel)
  .component('Panel', Panel)
  .component('Dialog', Dialog)
  .component('Textarea', Textarea)
  .mount('#app')
  