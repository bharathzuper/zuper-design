importScripts("https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyD66TjUYaiOVP1um5gKz_GEa_OJPXy30Pw",
  authDomain: "zuper-v2.firebaseapp.com",
  databaseURL: "https://zuper-v2.firebaseio.com",
  projectId: "zuper-v2",
  storageBucket: "zuper-v2.appspot.com",
  messagingSenderId: "85037283232",
  appId: "1:85037283232:web:b09d74131a7ddb50d5d6c5"
});
const isSupported = firebase.messaging.isSupported();

if(isSupported){
  
  const _messaging = firebase.messaging();

  let additional_data_json = {};
  let payload_data;
  _messaging.onBackgroundMessage(function(payload) {
    // Customize notification here
    var url;
    payload_data = payload
    if(payload && payload.data && payload.data.additional_data) {
      additional_data_json = JSON.parse(payload.data.additional_data.toString());
    }

    if (additional_data_json?.messageType !== 'CALL') {
      const notificationTitle = payload.data.title;
      const notificationOptions = {
        body: payload.data.body,
        icon: 'https://staging.zuperpro.com/assets/images/favicon/apple-touch-icon.png',
        tag: payload.messageId
      };
    
      self.registration.showNotification(notificationTitle,
        notificationOptions);
    }
      
  });

  function hasModuleAccess(key) {
    var modules = pluck(window.localStorage.getItem('user_modules'), 'module');
    if(modules.length>0) {
      if(_.findWhere(modules, {module_key: key})) {
        return true;
      }
      return false;
    }
    else {
      var company_modules = pluck(window.localStorage.getItem('company_modules'), 'module');
      if(company_modules.length>0) {
        if(_.findWhere(company_modules, {module_key: key})) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return true;
      }
    }
  }

  self.addEventListener('notificationclick', function(event) {
    switch(payload_data.data.type) {
      case 'JOB':
        url = "/jobs/" + additional_data_json['redirect_to'] + "/details";
        if(additional_data_json.action_type == 'CHAT'){
          url += "?redirect_tab="+additional_data_json['action_type'];
        }
        if(additional_data_json.type == 'NOTE'){
          url += "?redirect_tab=NOTES"
        }
        break;
      case 'USER':
        if(hasModuleAccess('USER') && additional_data_json && 
        (additional_data_json.type != 'PASSWORD_CHANGE' || additional_data_json.type != 'DEACTIVATE' || additional_data_json.type != 'DELETE')) {
          url = "/employees/" + payload_data.data.action_uid + "/details";
        }
        break;
      case 'TIMEOFF_REQUEST':
          url = "/timesheets/timeoff_requests";
        break;
      case 'BROADCAST':
        url = "/dashboard";
        break;
      case 'CALLER':
        if(additional_data_json?.conversation?.conversation_uid) {
          url = "/connect/conversations/"+additional_data_json?.conversation?.conversation_uid;
        }
        break;
      case 'ESTIMATES':
        if(hasModuleAccess('ESTIMATES')) {
          url = "/estimates/" + additional_data_json['redirect_to'] + "/details";
        }
        break;
      // case 'TODO':
    }

    //window.focus();
    if(url) {
      clients.openWindow(url, "_blank");
    }
  });
}
