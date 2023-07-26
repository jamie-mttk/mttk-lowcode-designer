import { dividerTransform } from './transform'
import * as ui from '../share/ui'
import {widgetUtil} from 'mttk-lowcode'
//button config
export const dividerConfig = {
  key: 'veutify_divider',
  name: 'Divider',
  description: '',
  icon: 'mdiMinusBoxOutline',
  transform: dividerTransform,
  editor: [
    ui.color,
    widgetUtil.createSwitch('inset'),
    widgetUtil.createInput('length'),
    widgetUtil.createInput('thickness'),
    widgetUtil.createSwitch('vertical'),
  ],
  initConfig: {
    props: {

    }
  },
  initStyles: {

  }
}
