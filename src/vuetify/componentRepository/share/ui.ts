import {widgetUtil} from 'mttk-lowcode'
import vuetify from '../../plugins/vuetify'

//Predefined colors
export const  predefineColors = [
    vuetify.theme.current.value.colors.primary,
    vuetify.theme.current.value.colors.secondary,
    vuetify.theme.current.value.colors.success,
    vuetify.theme.current.value.colors.warning,
    vuetify.theme.current.value.colors.error,
    vuetify.theme.current.value.colors.info,
    ]
    

export const variant = widgetUtil.createSelect('variant',["text", "flat", "elevated", "tonal", "outlined", "plain"])
// export const color = widgetUtil.createSelect('color',["primary", "secondary", "success", "warning", "error", "info"],undefined,{"allow-create": true})
// export const bgColor = widgetUtil.createSelect('bg-color',["primary", "secondary", "success", "warning", "error", "info"],undefined,{"allow-create": true})
export const color=colorFunc('color')
export const bgColor=colorFunc('bgColor')
export const density = widgetUtil.createSelect('density',["default", "comfortable", "compact"])
export const density2 = widgetUtil.createSelect('density',["default", "prominent", "comfortable", "compact"])
export const size = widgetUtil.createSelect('size', ["x-small", "small", "default", "large", "x-large"])
export const rounded =widgetUtil.createSelect('rounded', ['0','xs','sm','x-large','lg','xl'])
export const elevation =widgetUtil.createSelect('elevation', buildEelevationOptions(),undefined,{"allow-create": true})
export function colorFunc(name:string):object{
    return widgetUtil.createColorPicker(name,undefined,{predefine: predefineColors})}
export function iconFunc(name:string):object{return widgetUtil.createIconPicker(name)}



function buildEelevationOptions(){
    const result=[] as string[]
    for(let i=0 ; i<=24;i++){
        result.push(''+i)
    }
    return result
}


