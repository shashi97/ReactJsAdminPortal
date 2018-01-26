export const navigation = {
  brand:      'reactDirectorAdmin',
  leftLinks:  [],
  rightLinks: [
    {
      label:      'Home',
      link:       '/',
      view:       'home',
      isRouteBtn: true
    },
    {
      label:      'About',
      link:       '/about',
      view:       'about',
      isRouteBtn: true
    }
  ],
  sideMenu: [
    // group menu #1
    {
      id: 1,
      group: 'Masters  ',
      menus: [
        {
          name: 'Service Category',
          linkTo: '/serviceCategory',
          faIconName: 'fa-database'
        },
        {
          name: 'User',
          linkTo: '/Dashboard/statsCard',
          faIconName: 'fa-user'
        },
        {
          name: 'System Constant',
          linkTo: '/Dashboard/earningGraph',
          faIconName: 'fa-desktop'
        },
        {
          name: 'Service Type',
          linkTo: '/Dashboard/notifications',
          faIconName: 'fa-shield'
        },
        {
          name: 'Country',
          linkTo: '/Dashboard/workProgress',
          faIconName: 'fa-globe'
        },
        {
          name: 'State',
          linkTo: '/Dashboard/twitterFeed',
          faIconName: 'fa-flag-o'
        },
        {
          name: 'City',
          linkTo: '/Dashboard/teamMates',
          faIconName: 'fa-building'
        }
      ]
    },
    // group menu #2
    // {
    //   id: 2,
    //   group: 'General',
    //   menus: [
    //     {
    //       name: 'General preview',
    //       linkTo: '/general',
    //       faIconName: 'fa-eye'
    //     },
    //     {
    //       name: 'Breadcrumb',
    //       linkTo: '/general/breadcrumb',
    //       faIconName: 'fa-bars'
    //     },
    //     {
    //       name: 'Stat',
    //       linkTo: '/general/stat',
    //       faIconName: 'fa-bar-chart'
    //     },
    //     {
    //       name: 'Basic progress bars',
    //       linkTo: '/general/basicProgressBars',
    //       faIconName: 'fa-tasks'
    //     },
    //     {
    //       name: 'Tab panels',
    //       linkTo: '/general/tabPanels',
    //       faIconName: 'fa-columns'
    //     },
    //     {
    //       name: 'Striped progress bar',
    //       linkTo: '/general/stripedProgressBars',
    //       faIconName: 'fa-tasks'
    //     },
    //     {
    //       name: 'Alerts',
    //       linkTo: '/general/alerts',
    //       faIconName: 'fa-exclamation-triangle'
    //     },
    //     {
    //       name: 'Pagination',
    //       linkTo: '/general/pagination',
    //       faIconName: 'fa-sort'
    //     },
    //     {
    //       name: 'Default buttons',
    //       linkTo: '/general/defaultButtons',
    //       faIconName: 'fa-hand-o-up'
    //     }
    //   ]
    // },
    // // group menu #3
    // {
    //   id: 3,
    //   group: 'BasicElements',
    //   menus: [
    //     {
    //       name: 'Basic Elements preview',
    //       linkTo: '/basicElements',
    //       faIconName: 'fa-eye'
    //     }
    //   ]
    // },
    // // group menu #4
    // {
    //   id: 4,
    //   group: 'SimpleTables',
    //   menus: [
    //     {
    //       name: 'Simple tables preview',
    //       linkTo: '/simpleTables',
    //       faIconName: 'fa-eye'
    //     }
    //   ]
    // }
  ]
};
