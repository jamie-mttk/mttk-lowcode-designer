import { spacerTransform } from './transform'
import * as ui from '../share/ui'
import {widgetUtil} from 'mttk-lowcode'
//button config
export const spacerConfig = {
  key: 'veutify_spacer',
  name: 'spacer',
  description: '',
  icon: 'mdiArrowExpandHorizontal',
  transform: spacerTransform,
  editor: [

  ],
  initConfig: {
    props: {

    }
  },
  initStyles: {

  }
}
