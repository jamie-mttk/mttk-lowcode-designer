import { buttonTransform } from './transform'
import * as ui from '../share/ui'

import {widgetUtil} from 'mttk-lowcode'

//button config
export const buttonConfig = {
  key: 'veutify_btn',
  name: 'Button',
  description: '',
  icon: 'mdiGestureTapButton',
  transform: buttonTransform,
  editor: [
    widgetUtil.createInput('text'),
    ui.variant,
    ui.color,
    widgetUtil.createSwitch('block'),
    ui.density,
    widgetUtil.createSwitch('ripple'),
    widgetUtil.createSwitch('disabled'),
    ui.rounded,
    ui.size,
    //widgetUtil.createInput('prepend-icon'),
   // widgetUtil.createInput('append-icon'),
       //widgetUtil.createInput('icon'),
   ui.iconFunc('prepend-icon'),
    ui.iconFunc('append-icon'),

    ui.iconFunc('icon'),
  ],
  initConfig: {
    props: {
      text:'Button',
      variant: 'elevated',
      color: ui.predefineColors[0],
      density:'default',
      size:'default',
    }
  },
  initStyles: {

  }
}
