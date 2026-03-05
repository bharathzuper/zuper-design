// initialize SDK client and start app registeration listener
// JS will be embeded non local environments
window.zclient = window.ZClient.init();
window.zclient.on("app.registered", async function (data) {
  console.log('app got registered')
});
