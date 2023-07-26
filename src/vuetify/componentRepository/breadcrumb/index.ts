import { breadcrumbTransform } from './transform'
import * as ui from '../share/ui'
import {widgetUtil} from 'mttk-lowcode'
//button config
export const breadcrumbConfig = {
  key: 'veutify_breadcrumb',
  name: 'Breadcrumb',
  description: '',
  icon: 'mdiNewspaperVariantMultipleOutline',
  transform: breadcrumbTransform,
  editor: [
    ui.bgColor,
	ui.color,
	    widgetUtil.createInput('divider'),
	    ui.density,
		    widgetUtil.createInput('icon'),
  ],
  initConfig: {
    props: {
      divider: '/',
      density:'default',
    }
  },
  initStyles: {

  },
    dataConfig: {
    //readonly:true,
    type:'Array',
  },
}
