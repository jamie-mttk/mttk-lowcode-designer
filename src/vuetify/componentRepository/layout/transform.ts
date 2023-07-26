
import {widgetTransformUtil} from 'mttk-lowcode'

export function layoutTransform(config: any) {
  //
  const result= widgetTransformUtil.buildWidget("v-row",config)
  //build default
  result.slots.default = buildCols(config)

  //
  return  result
}

function buildCols(config: any) {
  const cols = []
  //
  for (const c of config['_container'] || []) {
    cols.push(widgetTransformUtil.buildWidgetWithSlotChildren("v-col",c))
  }
  //
  return cols
}

