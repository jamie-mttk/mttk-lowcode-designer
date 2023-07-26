import { listTransform } from './transform'
import * as ui from '../share/ui'
import {widgetUtil} from 'mttk-lowcode'
//button config
export const listConfig = {
  key: 'veutify_list',
  name: 'List',
  description: '',
  icon: 'mdiFormatListCheckbox',
  transform: listTransform,
  editor: [
    ui.variant,
    ui.color,
    ui.bgColor,
    ui.colorFunc('base-color'),
    ui.colorFunc('active-color'),
    ui.density,
    widgetUtil.createSwitch('disabled'),
    ui.elevation,
    ui.rounded,
    widgetUtil.createInput('height'),
    widgetUtil.createInput('width'),
    widgetUtil.createSelect('lines',['one', 'two' ,'three']),
  ],
  initConfig: {
    props: {
      variant: 'text',
      density:'default',
      elevation: '0',
      lines:'one',
    }
  },
  initStyles: {

  },
    dataConfig: {
    //readonly:true,
    type:'Array',
  },
}
