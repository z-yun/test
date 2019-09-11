import router from '@/router/index'

export let userRoutes = (menu) => {
  return new Promise((resolve, reject) => {
    let resRoutes = []
    menu.forEach(item => {
      let itemComponent = resolve => require([`@/views${item.filePath}`], resolve)
      resRoutes.push({
        path: item.path,
        name: item.name,
        iconCls: item.iconCls,
        component: itemComponent,
        leaf: item.leaf,
        children: item.children && item.children.map(i => {
          let iComponent = resolve => require([`@/views${i.filePath}`], resolve)
          return {
            path: i.path,
            name: i.name,
            component: iComponent,
            hidden: i.hidden,
            children: i.children && i.children.map(ii => {
              let iiComponent = resolve => require([`@/views${ii.filePath}`], resolve)
              return {
                path: ii.path,
                name: ii.name,
                component: iiComponent,
                hidden: ii.hidden,
              }
            })
          }
        })
      })
    })
    let userRoutes = router.options.routes.concat(resRoutes)
    router.addRoutes(userRoutes)
    resolve()
  })
}
