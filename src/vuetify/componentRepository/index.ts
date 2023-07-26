import veutifyChart from './folder'
// 
import {buttonConfig} from './btn/index'
import {layoutConfig} from './layout/index'
import {appAndContainerConfig} from './appAndContainer/index'
import {cardConfig} from './card/index'
import {dividerConfig} from './divider/index'
import {expansionPanelConfig} from './expansionPanel/index'
import {listConfig} from './list/index'
import {sheetConfig} from './sheet/index'
import {breadcrumbConfig} from './breadcrumb/index'
import {toolbarConfig} from './toolbar/index'
import {appbarConfig} from './appbar/index'
const installVeutify={
    install:function(componentRepository){
         //
        const componentConfigs=[buttonConfig,layoutConfig,appAndContainerConfig,cardConfig,
            dividerConfig,expansionPanelConfig,listConfig,sheetConfig,breadcrumbConfig,toolbarConfig,appbarConfig,]
        componentRepository.registerComponents(veutifyChart,componentConfigs)
    }
}


//
export default installVeutify