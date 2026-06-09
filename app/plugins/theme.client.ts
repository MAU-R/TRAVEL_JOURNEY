// app/plugins/theme.client.ts
export default defineNuxtPlugin(() => {
  const { init } = useTheme()
  init()
})