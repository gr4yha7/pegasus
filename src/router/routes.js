export const adminRoutePrefix = '/dashboard/admin'

export const studentRoutePrefix = '/dashboard/student'

export const officerRoutePrefix = '/dashboard/officer'

export const adminRoutes = [
  {
    path: 'home',
    name: 'Admin Dashboard Home',
    component: () => import('../views/dashboard/admin/Home')
  }
]

// export const studentDashboardRoutes = [
//   {
//     path: studentRoutePrefix,
//     name: 'Student Dashboard',
//     component: () => import('../views/dashboard/student/Index')
//   },
//   {
//     path: studentRoutePrefix + '/courses',
//     name: 'Courses',
//     component: () => import('../views/dashboard/student/Courses')
//   },
//   {
//     path: studentRoutePrefix + '/results',
//     name: 'Results',
//     component: () => import('../views/dashboard/student/Results')
//   },
//   {
//     path: studentRoutePrefix + '/settings',
//     name: 'Settings',
//     component: () => import('../views/dashboard/student/Settings')
//   }
// ]
