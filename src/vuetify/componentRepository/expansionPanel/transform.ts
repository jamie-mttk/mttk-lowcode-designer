import {ref,unref} from 'vue'
import {widgetTransformUtil} from 'mttk-lowcode'

export function expansionPanelTransform(config: any,value:any) {
  const val=ref(0)
  const result= widgetTransformUtil.buildWidget("v-expansion-panels",config,val) 
  //build default
  result.slots.default = buildChildren(config)
  //
  return  result
}

function buildChildren(config: any) {
  const children = []
  //
  for (const c of config['_container'] || []) {
    let r=undefined
    if(c.text){
      r=widgetTransformUtil.buildWidget("v-expansion-panel",c)
    }else{
      r=widgetTransformUtil.buildWidgetWithSlotChildren("v-expansion-panel",c,undefined,{slotChildrenName:'text'})
    }
    children.push(r)


  }
  //
  return children
}
