export default function (context) {
  // console.log('auth')
  // console.log(context)
  if (!context.store.getters.checkAuthUser) {
    context.redirect('/admin/auth')
  }
}
