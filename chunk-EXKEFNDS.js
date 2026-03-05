import{ed as O}from"./chunk-R5HP6EL7.js";import{Me as k,Te as j,a as $,da as L,eb as C,fb as P,w}from"./chunk-4QA4THSR.js";import{Sd as S,f as r,g as y,la as x,qa as h,qb as u}from"./chunk-34X77BBF.js";import{a as b,b as v,h as f}from"./chunk-G6LNOBMT.js";var A=f(P()),_=f(C()),p=f(O());var N=(()=>{class m{get mapsAPi(){return{getTeamSummary:this._dataCollectorService.baseurl()+"/teams/summary",getUsers:this._dataCollectorService.baseurl()+"/location/users",getAllUsers:this._dataCollectorService.baseurl()+"/user/all",getOnlineCount:this._dataCollectorService.baseurl()+"/location/count",getLocation:this._dataCollectorService.baseurl()+"/location/all",getAssetCategory:this._dataCollectorService.baseurl()+"/assets/category",getAssets:this._dataCollectorService.baseurl()+"/assets",getProperty:this._dataCollectorService.baseurl()+"/property",getJobs:this._dataCollectorService.baseurl()+"/jobs",getOrganizations:this._dataCollectorService.baseurl()+"/organization",getCustomers:this._dataCollectorService.baseurl()+"/customers",getRoutes:this._dataCollectorService.baseurl()+"/routes",getRoutesCount:this._dataCollectorService.baseurl()+"/routes/count",getServiceTerritory:this._dataCollectorService.baseurl()+"/territory",getServiceDetails:this._dataCollectorService.baseurl()+"/territory",getUserLocation:this._dataCollectorService.baseurl()+"/location"}}constructor(e,t,s,i){this._utilityService=e,this._dataCollectorService=t,this.titleCasePipe=s,this._zuperDialogService=i,this.tab=new y("EMPLOYEE"),this.sidebar=new y(!0),this.markerStatus=new r,this.employeeLocationData=new r,this.assetLocationData=new r,this.propertyLocationData=new r,this.jobLocationData=new r,this.organizationLocationData=new r,this.customerLocationData=new r,this.routeLocationData=new r,this.previewUid=new r,this.updateList=new r,this.routeDetailChange=new r,this.serviceTerritoryLocationData=new y([]),this.legendDrawerToggler=new r,this.newJobDrawerToggler=new r,this.mapCurrentLocation=new r,this.openPreviewDetailsInDispatchBoard=new r,this.mapResizeIndicator=new r,this.mapFitBoundByGeoCords=new r,this.requestNearByData=new r,this.dispatchAssistant=new r,this.showOnMap=new y({}),this.previewRouteDetails=u(null),this.openTooltip={jobUid:null,routeUid:null},this.popupOffset=5e-4,this.showUserLiveLocation={isEnabled:u(!1),pollingInterval:45e3,pollingStarted:!1,stopPolling$:new r},this.routeJobLocationData=new r,this.allRoutesLocationData=new r,this.clearDrawLayer=new r,this.nearByParams=u({}),this.isNearByEnabled=u(!1),this.isNearByLoading=u(!1),this.isDispatchAssistantEnabled=u(!1),this.mapFilterList={JOB:[{id:"job-scheduled-date",displayKey:"text.scheduled_date",displayName:"Scheduled Date",type:"DATE",isSelected:!1,isMultiSelect:!1,selectedValue:[],rangeKey:"",icon:"ti-calendar",filterKeyMap:["filter.scheduled_from_date","filter.scheduled_to_date"],canShow:!0},{id:"job-due-date",displayKey:"due.date.text",displayName:"Due Date",type:"DATE",isSelected:!1,isMultiSelect:!1,selectedValue:[],rangeKey:"",icon:"ti-calendar-due",filterKeyMap:["filter.due_date_from","filter.due_date_to"],canShow:!0},{id:"consider-skills",displayKey:"dispatchBoard.consider_skills",displayName:"Consider Skills",type:"BOOLEAN",isSelected:!1,isMultiSelect:!1,selectedValue:!0,icon:"ti-certificate",filterKeyMap:"skills",canShow:!1},{id:"job-category",displayKey:"job.category",displayName:"Job Category",type:"LOOKUP",isSelected:!1,isMultiSelect:!0,selectedValue:[],icon:"ti-category",fieldUidKey:"job_category_uid",fieldLabelKey:"{{category_name}}",canShow:!0,lookupOptions:{url:this._dataCollectorService.baseUrl+"/jobs/category",keyUid:"category_uid",nameKey:"category_name",multiSelect:!0,dataPath:"data",filterParams:{},prefillFilterParam:"filter.uid",keywordSearchParam:"filter.keyword",apiSearch:!1,minSearchLength:0,preselectedValues:[],searchPlaceholder:"",showSelectedSummary:!0,autoFocusSearch:!0},filterKeyMap:["filter.job_category"]},{id:"job-status",displayKey:"text.job_status",displayName:"Job Status",type:"LOOKUP",isSelected:!1,isMultiSelect:!0,selectedValue:[],icon:"ti-checkup-list",fieldUidKey:"status_uid",fieldLabelKey:"{{status_name}}",filterKeyMap:["filter.current_job_status"],canShow:!0,lookupOptions:{url:this._dataCollectorService.baseUrl+"/jobs/category",keyUid:"status_uid",nameKey:"status_name",multiSelect:!0,dataPath:"data",filterParams:{populate_statuses:!0},prefillFilterParam:"",keywordSearchParam:"",apiSearch:!1,minSearchLength:0,preselectedValues:[],searchPlaceholder:"",showSelectedSummary:!0,nestedArrayPath:"job_statuses",groupByKey:"category_uid",groupNameKey:"category_name",groupFromParent:!0,showId:!1,showGroupNameInDisplay:!0,autoFocusSearch:!0}},{id:"job-customer",displayKey:"customer",displayName:"Customer",type:"LOOKUP",isSelected:!1,isMultiSelect:!0,selectedValue:[],icon:"ti-users",fieldLabelKey:"{{customer_first_name}} {{customer_last_name}}",fieldUidKey:"customer_uid",filterKeyMap:["filter.customer_uid"],canShow:!0,lookupOptions:{url:this._dataCollectorService.baseUrl+"/customers",keyUid:"customer_uid",nameKey:["customer_first_name","customer_last_name"],multiSelect:!0,dataPath:"data",filterParams:{},prefillFilterParam:"filter.customer_uid",keywordSearchParam:"filter.keyword",apiSearch:!0,minSearchLength:0,preselectedValues:[],searchPlaceholder:"",showSelectedSummary:!0,autoFocusSearch:!0}}],USER:[{id:"consider-skills",displayKey:"dispatchBoard.consider_skills",displayName:"Consider Skills",type:"BOOLEAN",isSelected:!1,isMultiSelect:!1,selectedValue:!0,icon:"ti-certificate",filterKeyMap:"consider_job_skills",canShow:!0}]},this.moduleAccess={USER:!1,JOB:!1,ROUTES:!1,ASSETS:!1,PROPERTY:!1,CUSTOMER:!1,ORGANIZATION:!1},this.dateOptions=[{key:`${this._utilityService.getLocaleValue("daterange.range.today.label","Today")}`,rangeKey:"TODAY"},{key:`${this._utilityService.getLocaleValue("text.tomorrow","Tomorrow")}`,rangeKey:"TOMORROW"},{key:`${this._utilityService.getLocaleValue("text.next.seven.days","Next 7 Days")}`,rangeKey:"NEXT_7_DAYS"},{key:`${this._utilityService.getLocaleValue("text.next.thirty.days","Next 30 Days")}`,rangeKey:"NEXT_30_DAYS"},{key:`${this._utilityService.getLocaleValue("daterange.range.yesterday.label","Yesterday")}`,rangeKey:"YESTERDAY"},{key:`${this._utilityService.getLocaleValue("daterange.range.seven.days.label","Last 7 Days")}`,rangeKey:"LAST_7_DAYS"},{key:`${this._utilityService.getLocaleValue("daterange.range.thirty.days.label","Last 30 Days")}`,rangeKey:"LAST_30_DAYS"}],this.isLegendBarOpen=!1,this.satelliteUrl=`https://maps.hereapi.com/v3/base/mc/{z}/{x}/{y}/png8?style=satellite.day&apiKey=${$.hereMapKey}`,this.timeFormat=this._utilityService.timeFormat,this.moduleAccess={USER:this._utilityService.hasModuleAccess("USER",!1,"from_sidebar"),JOB:this._utilityService.hasModuleAccess("JOB",!1,"from_sidebar"),ROUTES:this._utilityService.hasModuleAccess("MAPS",!1,"from_sidebar"),ASSETS:this._utilityService.hasModuleAccess("ASSETS",!1,"from_sidebar"),PROPERTY:this._utilityService.hasModuleAccess("PROPERTY",!1,"from_sidebar"),CUSTOMER:this._utilityService.hasModuleAccess("CUSTOMER",!1,"from_sidebar"),ORGANIZATION:this._utilityService.hasModuleAccess("ORGANIZATION",!1,"from_sidebar")}}getCircleBounds(e,t,s){let i=p.default.latLng(e,t),a=s/111320,c=s/(40075017*Math.cos(i.lat*Math.PI/180)/360),o=p.default.latLng(i.lat-a,i.lng-c),l=p.default.latLng(i.lat+a,i.lng+c);return p.default.latLngBounds(o,l)}get MapFilterList(){let e=_.default.cloneDeep(this.mapFilterList);return Object.keys(e).forEach(t=>{e[t].forEach(s=>{s.type==="LOOKUP"&&s.lookupOptions&&(s.lookupOptions.searchPlaceholder=`${this._utilityService.getLocaleValue("text.search")} ${this._utilityService.getLocaleValue(s.displayKey)}`)})}),e}get DateOptions(){return this.dateOptions}getOptimiseUrl(e){return this.mapsAPi.getRoutes+"/"+e+"/optimize"}addJobsUrl(e){return this.mapsAPi.getRoutes+"/"+e+"/job"}getUnAssignUrl(e){return this.mapsAPi.getRoutes+"/"+e+"/unassign"}getAssignUrl(e){return this.mapsAPi.getRoutes+"/"+e+"/assign"}getRouteAssignUrl(e){return this.mapsAPi.getRoutes+"/"+e+"/reassign"}getEmployeeIcon(e,t=!1){return`
    <span class="border-2 border-white avatar-pin mt-2 ${t?"w-11 h-11 rounded-full":"w-14 h-13 rounded-lg employee-box"} block">
      <img alt="User avatar" 
      class="${t?"w-10 h-10 rounded-full":"w-13 h-12 rounded-md"} object-cover" 
      src="${this.escapeHtmlAttribute(e.profile_picture)}">
    </span>
    `}getEmployeeIconWithJobIcon(e,t=!1){return`
    <div class="border-2 border-white avatar-pin mt-2 ${t?"w-11 h-11 rounded-full":"w-14 h-13 rounded-lg employee-box"} block relative">
      <img alt="User avatar" 
      class="${t?"w-10 h-10 rounded-full":"w-13 h-12 rounded-md"} object-cover" 
      src="${this.escapeHtmlAttribute(e?.user?.profile_picture||e?.profile_picture)}">
      <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full ring-2 ring-white flex items-center justify-center" style="background: #aa3685">
        <i class="ti ti-briefcase text-base text-white"></i>
      </span>
    </div>
    `}getEmployeeIconWithHomeIcon(e,t=!1){return`
    <div class="border-2 border-white avatar-pin mt-2 ${t?"w-11 h-11 rounded-full":"w-14 h-13 rounded-lg employee-box"} block relative">
      <img alt="User avatar"
      class="${t?"w-10 h-10 rounded-full":"w-13 h-12 rounded-md"} object-cover"
      src="${this.escapeHtmlAttribute(e?.user?.profile_picture||e?.profile_picture)}">
      <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full ring-2 ring-white flex items-center justify-center bg-purple-700">
        <i class="ti ti-home text-base text-white"></i>
      </span>
    </div>
    `}getCustomColorProfileIcon(e){if(!e?.color_profile?.color||!e?.color_profile?.icon)return null;let t=this._utilityService.getTextColorBasedOnBg(e?.color_profile?.color),s=t==="#000000";return p.default.divIcon({className:"color-profile-icon",html:`<div class="rounded-full relative w-10 h-10 p-2 border-2 flex items-center justify-center ${s?"custom-icon-pin-black":"custom-icon-pin-white"}" style="background: ${e?.color_profile?.color}; border-color: ${t}">
        <i class="ti ${e?.color_profile?.icon} text-3xl" style="color: ${t}"></i>  
      </div>`,iconAnchor:[15,42]})}deleteJobUrl(e){return this.mapsAPi.getRoutes+"/"+e+"/job"}getDefaultJobIcon(){return`
      <div class="deafult-avatar-pin w-9 h-9 text-white rounded-full ring-2 ring-white flex justify-center items-center" style="background: #aa3685">
          <i class="ti ti-briefcase text-2xl"></i>
      </div>
    `}getDefaultCustomerIcon(){return`
      <div class="deafult-avatar-pin w-9 h-9 text-white rounded-full ring-2 ring-white flex justify-center items-center" style="background: #704385">
          <i class="ti ti-users text-2xl"></i>
      </div>
    `}getDefaultPropertyIcon(){return`
      <div class="deafult-avatar-pin w-9 h-9 text-white rounded-full ring-2 ring-white flex justify-center items-center" style="background: #b64a28">
          <i class="ti ti-buildings text-2xl"></i>
      </div>
    `}getDefaultAssetIcon(){return`
      <div class="deafult-avatar-pin w-9 h-9 text-white rounded-full ring-2 ring-white flex justify-center items-center" style="background: #596bcd">
          <i class="ti ti-cube text-2xl"></i>
      </div>
    `}getHomeIcon(e){return`
    <span class="w-10 h-10 border-2 border-white home-pin mt-2 flex items-center justify-center rounded-lg" style="background: ${e}">
      <i class="ti ti-home-2 text-white text-3xl"></i>
    </span>
    `}getHomeAssignedToIcon(e,t,s=0){let i=this._utilityService.getTextColorBasedOnBg(e),a=i==="#000000";if(t?.length){let o=`<div class="border-2 p-2 rounded-xl w-fit ${a?"move-home-pin-black":"move-home-pin"}" style="background: ${e}; border-color: ${i}">`;return t?.length&&(o+="<div class='flex items-center' class='mt-2'>",t?.slice(0,4).forEach((l,n)=>{let g=l?.user?.profile_picture,d=this._utilityService.concatTwoStrings(l?.user?.first_name,l?.user?.last_name)||l?.team?.team_name||"";g&&d&&this._utilityService.hasValidProfilePicture(g)&&(o+=`<img class="h-6 w-6 relative block rounded-full ring-2 ring-white" loading="lazy" src="${g}" alt="${d}" title="${d}" style="margin-left: ${n===0?0:-12+2*n}px; z-index: ${4-n};">`),d&&!this._utilityService.hasValidProfilePicture(g)&&(o+=`<div title="${d}" class="relative" style="margin-left: ${n===0?0:-12+2*n}px; z-index: ${4-n};">
            <div class="flex items-center justify-center h-6 w-6 ring-2 ring-white rounded-full uppercase bg-gray-200 text-gray-600 font-medium dark:bg-gray-700 dark:text-gray-200"> ${d.slice(0,1)}</div>
          </div>`)}),t?.length>4&&(o+=`<div title="+ ${t?.length-4} More" class="relative" style="margin-left: ${-12+(2*4+1)}px; z-index: 0;">
          <div class="flex items-center justify-center h-6 w-6 ring-2 ring-white rounded-full uppercase bg-gray-200 text-gray-600 font-medium dark:bg-gray-700 dark:text-gray-200"> +${t?.length-4}</div>
        </div>`),o+=`<span class='primary-font relative text-base ml-2 min-w-fit' style="margin-left: 6px; text-wrap: nowrap; color: ${i}"> | ${s}</span>`,o+="</div>"),o+="</div>",o}else return`
      <span class="w-fit flex items-center border-2 p-2.5 justify-center rounded-lg  ${a?"move-home-pin-black":"move-home-pin"}" style="background: ${e}; border-color: ${i}">
        <i class="ti ti-home-2 text-2xl" style="color: ${i}"></i>
        <span class='primary-font relative text-base ml-2 min-w-fit' style="margin-left: 4px; text-wrap: nowrap; color: ${i}"> | ${s}</span>
      </span>
      `}getRouteHomeIcon(e){let t=this._utilityService.getTextColorBasedOnBg(e);return`
    <span class="w-10 h-10 border-2  home-pin-black mt-2 flex justify-center rounded-full items-center" style="background: ${e}; border-color: ${t}">
      <i class="ti ti-home-filled ml-6 text-3xl" style='color: ${t}'></i>
    </span>
    `}getRouteDestinationIcon(e){let t=this._utilityService.getTextColorBasedOnBg(e);return`
    <span class="w-10 h-10 border-2 home-pin-black mt-2 flex justify-center rounded-full items-center" style="background: ${e}; border-color: ${t}">
      <i class="ti ti-flag-filled text-3xl" style='color: ${t}'></i>
    </span>
    `}getRouteJobIcon(e,t){let s=this._utilityService.getTextColorBasedOnBg(e);return`
    <span class="w-10 h-10 border-2 mt-2 flex justify-center pt-1 rounded-full items-center text-xl font-semibold ${s==="#000000"?"move-home-pin-black":"move-home-pin"}" style="background: ${e}; color: ${s}; border-color: ${s}">
      ${t}
    </span>
    `}getDestinationIcon(e){let t=this._utilityService.getTextColorBasedOnBg(e);return`
    <span class="w-10 h-10 border-2 mt-2 flex justify-center rounded-lg items-center ${t==="#000000"?"destination-pin-black":"destination-pin"}" style="background: ${e}; border-color: ${t}">
      <i class="ti ti-player-stop text-3xl" style='color: ${t}'></i>
    </span>
    `}assignmentConfirmationDialog(e,t,s,i){let a="",c="";if(e==="JOB"&&t==="USER"&&s?.job_uid,i?.user_uid,i?.team_uid){let l=this.getJobTitle(s),n=`${i?.first_name}${i?.last_name?` ${i?.last_name}`:""}`;a=`${this._utilityService.getLocaleValue("edit.job.assignment.title","Update Job Assignment")}`,c=`${this._utilityService.getLocaleValue("dispatchBoard.assign_job_confirmation","Are you sure to assign job")} - <b>${l}</b> to <b>${n}</b> ?`}return this._zuperDialogService.open({title:a,type:"error",message:`<div class="space-y-2 mt-2">${c}</div>`,actions:{confirm:{show:!0,label:"Yes",color:"primary",confirmDisplayKey:"yes"},cancel:{show:!0,label:"No",cancelDisplayKey:"no"}},dismissible:!1,extraClass:"assignment-confirmation-dialog"})}getPopupOffsetFromPolyline(e,t=50){if(!e||e.length<2)return null;let s=e[0],i=e[e.length-1],a=i[1]-s[1],c=i[0]-s[0],l=(Math.atan2(c,a)*(180/Math.PI)+360)%360;return l>=315||l<45?[5,-t]:l>=45&&l<135?[t,-35]:l>=135&&l<225?[5,t]:[-t,-35]}getJobTitle(e){let t=[e?.prefix,e?.work_order_number,e?.job_title];return _.default.compact(t).join(" ")}toggleMapDrawTool(e){let t=document.querySelectorAll(".leaflet-top.leaflet-right");t&&(e?t.forEach(s=>{s.classList.remove("hidden")}):(t.forEach(s=>{s.classList.add("hidden")}),this.clearDrawLayer.next(!0)))}getDynamicRadius(e){return e<10?2e4:e<15?1e4:5e3}setMapLegendActiveState(e,t){if(!e)return;let s=e.querySelector(".legend-btn");this.isLegendBarOpen=t,e&&(t?e.classList.add("open"):e.classList.remove("open")),s&&(t?s.classList.add("open"):s.classList.remove("open"))}updateFilterValue(e,t,s,i){return e[t]?v(b({},e),{[t]:e[t].map(a=>a.id===s?i:a)}):e}getCustomerPopup(e){let t=`${e?.customer_first_name}${e?.customer_last_name?" "+e?.customer_last_name:""}`;return`
      <div class="w-auto h-auto">
      <div class="flex justify-between mb-0 h-5 ml-3 mt-3">
        <h5 id="customer-title" class="text-base font-bold tracking-tight text-gray-900 cursor-pointer truncate w-11/12" title="${t}">${t}</h5>
      </div>
      <div class="flex my-1 ml-3" ${e?.customer_organization?.organization_name?"":'style="display:none !important;"'}>
        <i class="ti ti-building text-base"></i>
        <span class="text-base ml-1">${e?.customer_organization?.organization_name}</span>
      </div>
       <div class="flex my-1 ml-3 pr-3" ${e?.customer_address?"":'style="display:none !important;"'}>
        <i class="ti ti-map-pin text-base"></i>
        <span class="text-base ml-1">${e?.customer_address?.street}${e?.customer_address?.city?", "+e?.customer_address?.city:""}${e?.customer_address?.state?", "+e?.customer_address?.state:""}${e?.customer_address?.country?", "+e?.customer_address?.country:""}</span>
      </div> 
      <div class="flex h-11 mt-2">
        <a class="w-full flex justify-center items-center text-blue-700 border m-0 border-l-0 cursor-pointer hover:bg-gray-100 text-base" id='customer-create-job-btn'>${this._utilityService.getLocaleValue("create.job.text")}</a>
      </div>
      <div class="flex justify-between m-3">
        <span class="text-base online_status" ${e?.is_active?"":'style="display:none !important;"'}> ${this._utilityService.getLocaleValue("active.text")}</span>
        <span class="text-base offline_status" ${e?.is_active?'style="display:none !important;"':""}> ${this._utilityService.getLocaleValue("text.inactive")}</span>
        <span class="text-base">${this._utilityService.getLocaleValue("text.jobs")}: ${e?.no_of_jobs||0}</span>
      </div>
    </div>`}getAssetPopup(e){return`<div class="w-auto h-auto">
    <div class="block mb-0 h-5 ml-3 mt-3 w-11/12">
      <h5 id="asset-title" class="text-base font-bold tracking-tight text-gray-900 cursor-pointer truncate" title="${e?.asset_code?e.asset_code+" - ":""} ${e.asset_name}">${e?.asset_code?e.asset_code+" - ":""} ${e.asset_name}</h5>
    </div>
    <div class="flex my-1 ml-3" ${e?.asset_serial_number?"":'style="display:none !important;"'}>
      <i class="ti ti-hash text-base"></i>
      <span class="text-base ml-1">${e?.asset_serial_number}</span>
    </div>
    <div class="flex my-1 ml-3" ${e?.organization?.organization_name?"":'style="display:none !important;"'}>
      <i class="ti ti-building text-base"></i>
      <span class="text-base ml-1">${e?.organization?.organization_name}</span>
    </div>
    <div class="flex my-1 ml-3" ${e?.customer?.customer_first_name?"":'style="display:none !important;"'}>
      <i class="ti ti-user text-base"></i>
      <span class="text-base ml-1">${e?.customer?.customer_first_name} ${e?.customer?.customer_last_name}</span>
    </div>
    <div class="flex my-1 ml-3 pr-3">
      <i class="ti ti-map-pin text-base"></i>
      <span class="text-base ml-1">${e?.asset_location?.street}${e?.asset_location?.city?", "+e?.asset_location?.city:""}${e?.asset_location?.state?", "+e?.asset_location?.state:""}${e?.asset_location?.country?", "+e?.asset_location?.country:""}</span>
    </div>
    <div class="flex justify-between m-3">
      <span class="text-base online_status" ${e?.is_active&&!e?.asset_status?"":'style="display:none !important;"'}> ${this._utilityService.getLocaleValue("active.text")}</span>
      <span class="text-base offline_status" ${!e?.is_active&&!e?.asset_status?"":'style="display:none !important;"'}> ${this._utilityService.getLocaleValue("text.inactive")}</span> 
      <span class="text-base status asset-status-${e?.asset_status}"> ${w[e?.asset_status]||""}</span>
      <span class="text-base">${e?.asset_category?.category_name}</span>
    </div>
  </div>`}getPropertyPopup(e){return`
    <div class="w-auto h-auto">
      <div class="flex justify-between mb-0 h-5 ml-3 mt-3">
        <h5 id="property-title" class="text-base font-bold tracking-tight text-gray-900 cursor-pointer truncate w-11/12" title="${e.property_name}">${e.property_name}</h5>
      </div>
      <div class="flex my-1 ml-3" ${e?.property_organization?.organization_name?"":'style="display:none !important;"'}>
        <i class="ti ti-building text-base"></i>
        <span class="text-base ml-1">${e?.property_organization?.organization_name}</span>
      </div>
      <div class="flex my-1 ml-3" ${e?.property_customers?.length>0?"":'style="display:none !important;"'}>
        <i class="ti ti-user text-base"></i>
        <span class="text-base ml-1">${e?.property_customers?.[0]?.customer?.customer_first_name} ${e?.property_customers?.[0]?.customer?.customer_last_name}
        </span><a class="ml-1 text-indigo-500" ${e?.property_customers?.length>1?"":'style="display:none !important;"'}>+${e?.property_customers?.length-1} ${this._utilityService.getLocaleValue("text.more","More")?.toLowerCase()}</a>
       </div> 
       <div class="flex my-1 ml-3 pr-3" ${e?.property_address?"":'style="display:none !important;"'}>
        <i class="ti ti-map-pin text-base"></i>
        <span class="text-base ml-1">${e?.property_address?.street}${e?.property_address?.city?", "+e?.property_address?.city:""}${e?.property_address?.state?", "+e?.property_address?.state:""}${e?.property_address?.country?", "+e?.property_address?.country:""}</span>
      </div> 
      <div class="flex h-11 mt-2">
        <a class="w-full flex justify-center items-center text-blue-700 border m-0 border-l-0 cursor-pointer hover:bg-gray-100 text-base" id='property-create-job-btn'>${this._utilityService.getLocaleValue("create.job.text")}</a>
      </div>
      <div class="flex justify-between m-3">
        <span class="text-base online_status" ${e?.is_active?"":'style="display:none !important;"'}> ${this._utilityService.getLocaleValue("active.text","Active")}</span>
        <span class="text-base offline_status" ${e?.is_active?'style="display:none !important;"':""}> ${this._utilityService.getLocaleValue("text.inactive","Inactive")}</span>
        <span class="text-base">${this._utilityService.getLocaleValue("text.jobs","Jobs")}: ${e?.no_of_jobs}</span>
      </div>
    </div>`}getEmployeeLocationPopup(e){return`
    <div class="w-84 h-auto">
      <div class="flex h-11">
      <div class="w-3/5 pl-3">
        <div class="flex">
        <h4 class="max-w-36 truncate overflow-hidden text-lg font-bold cursor-pointer" id="user-title" title="${e?.first_name} ${e?.last_name}">${e?.first_name} ${e?.last_name}</h4>
        ${e?.location_data?.is_offline?'<span class="ml-2 mt-0.5 offline_status">'+this._utilityService.getLocaleValue("text.inactive","Inactive")+"</span>":'<span class="ml-2 mt-0.5 online_status">'+this._utilityService.getLocaleValue("active.text","Active")+"</span>"}
        </div>
        ${e?.designation?`<span class="text-sm text-gray-500">${e?.designation}</span>`:""}
      </div>
      <div class="w-2/5 text-right pr-3">
        <p class="m-0 mt-4">${this._utilityService.getLocaleValue("text.last_seen_at","Last seen at")}: ${(0,A.default)(e?.location_data?.track_time).format(this.timeFormat)}</p>
      </div>
      </div>
      ${e?.hideCreateJob?"":`
      <div class="flex h-11 mt-1">
      <a class="w-full flex justify-center items-center text-blue-700 text-base border border-l-0 border-r-0 m-0 cursor-pointer hover:bg-gray-100" id="user-create-job-btn">${this._utilityService.getLocaleValue("create.job.text","Create Job")}</a>
      </div>`}
      <div class="bg-white w-full h-auto py-2 flex justify-around text-md ${e?.hideCreateJob?"border-t border-gray-200 rounded-none":"rounded-lg"}">
      <div class="ml-4">
        <p class="text-center text-xl font-bold m-0">${e?.location_data?.job_count}</p>
        <p class="my-1 text-center">${this._utilityService.getLocaleValue("text.jobs","Jobs")}</p>
      </div>
      <div class="ml-4">
        <p class="text-center text-xl font-bold m-0">${e?.location_data?.battery}%</p>
        <p class="my-1 text-center">${this._utilityService.getLocaleValue("maps.employee_popup.battery","Battery")}</p>
      </div>
      <div class="ml-4">
        <p class="text-center text-xl font-bold m-0">${e?.location_data?.signal_strength}%</p>
        <p class="my-1 text-center">${this._utilityService.getLocaleValue("maps.employee_popup.network","Network")}</p>
      </div>
      </div>
    </div>`}getServiceTerritoryPopup(e){let t=e?.teams?.map(a=>a.team_name).join(", ")||"",s=e?.territory_radius?.radius?(e.territory_radius.radius/1e3).toPrecision(2):"",i=this._utilityService.companyConfig?.general?.distance_metric==="MILES"?this._utilityService.getLocaleValue("text.miles","Mile(s)"):this._utilityService.getLocaleValue("route.distance.metric.kilo_meters","Km(s)");return`
        <div class="flex flex-col p-2 pt-0 space-y-2 text-base text-gray-700">
          <div class="flex items-center space-x-1">
            <i class="ti ti-compass text-2xl"></i>
            <span class="font-medium">${e?.territory_name||""}</span>
          </div>
          ${e?.territory_description?`<div class="flex items-start space-x-1">
            <i class="ti ti-note text-2xl"></i>
            <span>${e?.territory_description?.replace(/\n/g,"<br>")||""}</span>
          </div>`:""}
          ${t?`<div class="flex items-start space-x-1">
            <i class="ti ti-users-group text-2xl"></i>
            <span>${t||""}</span>
          </div>`:""}
          <div class="flex items-start space-x-1">
            <i class="ti ti-map-route text-2xl"></i>
            <span>${this.titleCasePipe.transform(e?.territory_type||"")}</span>
            ${e?.territory_radius?.radius&&e?.territory_type==="RADIUS"?` <div class="flex items-start space-x-1">
              <span>:</span>
              <span>${s} ${i}</span>
            </div>`:""}
          </div>
        </div>`}escapeHtmlAttribute(e){if(!e)return"";let t=document.createElement("div");return t.setAttribute("data-value",e),t.getAttribute("data-value")||""}static{this.\u0275fac=function(t){return new(t||m)(h(j),h(L),h(S),h(k))}}static{this.\u0275prov=x({token:m,factory:m.\u0275fac,providedIn:"root"})}}return m})();export{N as a};
