export const projectDir = `
├── README.md
├── custom-types.d.ts
├── env.d.ts
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── common.css
│   │   │   ├── common.less
│   │   │   ├── index.less
│   │   │   └── reset.less
│   │   └── img
│   │       ├── login-bg.svg
│   │       └── logo.svg
│   ├── components
│   │   ├── main-header
│   │   │   ├── c-cpns
│   │   │   │   ├── header-crumb.vue
│   │   │   │   └── header-right.vue
│   │   │   └── main-header.vue
│   │   ├── main-menu
│   │   │   └── main-menu.vue
│   │   ├── page-content
│   │   │   └── page-content.vue
│   │   ├── page-echarts
│   │   │   ├── data
│   │   │   │   └── china.json
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   ├── bar-echart.vue
│   │   │   │   ├── base-echart.vue
│   │   │   │   ├── line-echart.vue
│   │   │   │   ├── map-echart.vue
│   │   │   │   ├── pie-echart.vue
│   │   │   │   └── rose-echart.vue
│   │   │   ├── types
│   │   │   │   └── type.ts
│   │   │   └── utils
│   │   │       ├── convertData.ts
│   │   │       └── coordinateData.ts
│   │   ├── page-modal
│   │   │   ├── page-modal.vue
│   │   │   └── type.ts
│   │   └── page-search
│   │       └── page-search.vue
│   ├── global
│   │   └── icons.ts
│   ├── hooks
│   │   ├── usePageContent.ts
│   │   ├── usePageModal.ts
│   │   └── usePermissions.ts
│   ├── main.ts
│   ├── router
│   │   ├── index.ts
│   │   ├── login
│   │   └── main
│   │       ├── analysis
│   │       │   ├── dashboard
│   │       │   │   └── dashboard.ts
│   │       │   └── overview
│   │       │       └── overview.ts
│   │       ├── product
│   │       │   ├── category
│   │       │   │   └── category.ts
│   │       │   └── goods
│   │       │       └── goods.ts
│   │       ├── story
│   │       │   ├── chat
│   │       │   │   └── chat.ts
│   │       │   └── list
│   │       │       └── list.ts
│   │       └── system
│   │           ├── department
│   │           │   └── department.ts
│   │           ├── menu
│   │           │   └── menu.ts
│   │           ├── role
│   │           │   └── role.ts
│   │           └── user
│   │               └── user.ts
│   ├── service
│   │   ├── config
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   ├── login
│   │   │   └── login.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   └── analysis.ts
│   │   │   ├── main.ts
│   │   │   ├── story
│   │   │   │   └── story.ts
│   │   │   └── system
│   │   │       └── system.ts
│   │   ├── modules
│   │   └── request
│   │       ├── index.ts
│   │       └── type.ts
│   ├── stores
│   │   ├── index.ts
│   │   ├── login
│   │   │   └── login.ts
│   │   └── main
│   │       ├── analysis
│   │       │   └── analysis.ts
│   │       ├── main.ts
│   │       ├── story
│   │       │   └── story.ts
│   │       ├── system
│   │       │   ├── system.ts
│   │       │   └── type.ts
│   │       └── type.ts
│   ├── types
│   │   ├── index.ts
│   │   └── login.d.ts
│   ├── utils
│   │   ├── format.ts
│   │   ├── localCache.ts
│   │   └── map-menus.ts
│   └── views
│       ├── login
│       │   ├── Login.vue
│       │   ├── c-cpns
│       │   │   ├── account.vue
│       │   │   ├── login-panel.vue
│       │   │   └── phone.vue
│       │   └── config
│       │       ├── accountConfig.ts
│       │       └── phoneConfig.ts
│       ├── main
│       │   ├── Main.vue
│       │   ├── analysis
│       │   │   ├── dashboard
│       │   │   │   ├── c-cpns
│       │   │   │   │   ├── chart-card
│       │   │   │   │   │   └── chart-card.vue
│       │   │   │   │   └── count-card
│       │   │   │   │       └── count-card.vue
│       │   │   │   └── dashboard.vue
│       │   │   └── overview
│       │   │       ├── c-cpns
│       │   │       │   ├── overview-card.vue
│       │   │       │   ├── overview-git.vue
│       │   │       │   ├── overview-specification.vue
│       │   │       │   └── overview-structure.vue
│       │   │       ├── config
│       │   │       │   ├── cpm-specification.ts
│       │   │       │   ├── dependencies.ts
│       │   │       │   ├── dev-dependencies.ts
│       │   │       │   ├── project-dir.ts
│       │   │       │   └── technology-stacks.ts
│       │   │       └── overview.vue
│       │   ├── product
│       │   │   ├── category
│       │   │   │   ├── category.vue
│       │   │   │   └── config
│       │   │   │       ├── content-config.ts
│       │   │   │       ├── modal-config.ts
│       │   │   │       └── search-config.ts
│       │   │   └── goods
│       │   │       ├── config
│       │   │       │   ├── content-config.ts
│       │   │       │   ├── modal-config.ts
│       │   │       │   └── search-config.ts
│       │   │       └── goods.vue
│       │   ├── story
│       │   │   ├── chat
│       │   │   │   └── chat.vue
│       │   │   └── list
│       │   │       ├── config
│       │   │       │   └── content-config.ts
│       │   │       └── list.vue
│       │   └── system
│       │       ├── department
│       │       │   ├── config
│       │       │   │   ├── content-config.ts
│       │       │   │   ├── modal-config.ts
│       │       │   │   └── search-config.ts
│       │       │   └── department.vue
│       │       ├── menu
│       │       │   ├── config
│       │       │   │   ├── content-config.ts
│       │       │   │   └── modal-config.ts
│       │       │   └── menu.vue
│       │       ├── role
│       │       │   ├── config
│       │       │   │   ├── content-config.ts
│       │       │   │   ├── modal-config.ts
│       │       │   │   └── search-config.ts
│       │       │   └── role.vue
│       │       └── user
│       │           ├── config
│       │           │   ├── content-config.ts
│       │           │   ├── modal-config.ts
│       │           │   └── search-config.ts
│       │           └── user.vue
│       └── not-found
│           └── NotFound.vue
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── yarn-error.log
└── yarn.lock

`
