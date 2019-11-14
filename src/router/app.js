export default {
    routes: [
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['components/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: resolve => require(['components/Register.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
  
    // {
    //     path: '/logout',
    //     name: 'logout',
    //     component: resolve => require(['components/frame/Logout.vue'], resolve),
    //     meta: {
    //         tokenRequired: true
    //     }
    // },
    {
        path: '/nextpage',
        name: 'nextpage',
        component: resolve => require(['components/frame/NextPage.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/mainpage',
        name: 'mainpage',
        component: resolve => require(['components/frame/MainPage.vue'], resolve),
        meta: {
                tokenRequired: false
            }
    },
    {
        path: '/reservation',
        name: 'reserve',
        component: resolve => require(['components/frame/reservation.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/LoginSignup',
        name: 'LoginSignUp',
        component: resolve => require(['components/frame/LoginSignUp.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/RegisterSign',
        name: 'registerSign',
        component: resolve => require(['components/frame/RegisterSign.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }
    ]

}