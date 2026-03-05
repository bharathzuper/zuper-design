import{a as N}from"./chunk-ELINF3RC.js";import{Te as F,da as w,ea as U,fb as B}from"./chunk-4QA4THSR.js";import{D as v,K as y,T as x,ea as u,f as h,fa as b,je as C,k as _,la as S,n as p,qa as c,u as m,ue as D}from"./chunk-34X77BBF.js";import{a as o,h as $}from"./chunk-G6LNOBMT.js";var E=$(B()),Y=$(N());var q=(()=>{class d{constructor(t,e,a,s,i){this._dataCollectorService=t,this.http=e,this.utilityService=a,this.translate=s,this._localStorageService=i,this.galleryLiveUpdate=new h,this.jobCache={},this.videoFormats=[".mp4",".avi",".flv",".mov",".mpg",".3gp"],this.destroy$=new h,this.baseUrl=this._localStorageService.baseUrl,this.apiUrl={attachments:`${this.baseUrl}/attachments/group`,attachment:`${this.baseUrl}/attachments/`,masterTagsUrl:`${this.baseUrl}/attachments/associated_tags`},this.galleryFilterUrls={userUrl:`${this.baseUrl}/user/all`,customerUrl:`${this.baseUrl}/customers`}}getCleanPath(t){return t?t.split("?")[0]:""}isVideoFile(t){let e=this.getCleanPath(t);return this.videoFormats.some(a=>e?.toLowerCase()?.endsWith(a))}getMetaDataUrl(){return`${this.baseUrl}/meta_data`}getMasterTagsUrl(){return`${this.baseUrl}/company_tags`}getAttachmentUrl(t){return this.apiUrl.attachment+t}getAttachmentTagsUrl(t){return this.apiUrl.attachment+t+"/tags"}generateGalleryHtml(t,e){let a=this.getAttachmentType(t.url??t.attachment_path).toUpperCase(),s=t?.size??t?.attachment_size,i=s?this.utilityService.getFileSize(s*1e3):"",l="";t?.created_by_first_name?l=t?.created_by_first_name?`${t.created_by_first_name} ${t.created_by_last_name||""}`:"":t?.created_by&&(l=t?.created_by?`${t.created_by.first_name} ${t.created_by.last_name||""}`:"");let n=t?.created_at?this.formatDateTime(t.created_at):"",g=this.translate.instant("copy_link.text"),T=this.translate.instant("text.download"),j=this.translate.instant("cancel.text"),A=this.translate.instant("text.save"),k=this.translate.instant("description"),L=this.translate.instant("text.gallery.add.tags"),I=this.translate.instant("text.tags"),z=this.translate.instant("text.gallery.attachment.description"),G=this.translate.instant("notes.panel.visibility.internal"),M=this.translate.instant("notes.panel.visibility.public"),P=t?.attachment_visibility??"INTERNAL",r=t.attachment_uid||`file-${Math.random().toString(36).substr(2,9)}`;return`
      <div class="lightGallery-captions bg-white text-left primary-font">
        <div class="flex justify-between w-full">
          <div class="w-3/4">
            <h5 class="font-bold text-slate-900 overflow-hidden truncate" title="${t.attachment_name}">
              ${t.attachment_name}</h5>
              <div id="attachment-visibility-section-${r}">
                  ${P==="INTERNAL"?`<button onclick="document.dispatchEvent(new CustomEvent('changeAttachmentVisibility', { detail: '${r}' }))" class="text-base primary-font rounded-full px-2 text-blue-600 bg-blue-100"> <i class="text-sm ti ti-lock text-blue-600"></i> ${G}</button>`:`<button onclick="document.dispatchEvent(new CustomEvent('changeAttachmentVisibility', { detail: '${r}' }))" class="text-base primary-font rounded-full px-2 text-red-600 bg-red-100"> <i class="text-sm ti ti-world text-red-600"></i> ${M}</button>`}
              </div>
          </div>
          <div class="flex items-center">
            <a class="no-underline px-2 py-1 rounded-full hover:bg-gray-200 mr-2" onclick="document.dispatchEvent(new CustomEvent('downloadGalleyAttachment', { detail: '${r}' }))" title="${T}">
              <i class="ti ti-download text-2xl cursor-pointer"></i>
            </a>
            <a onclick="document.dispatchEvent(new CustomEvent('copyGalleyAttachment', { detail: '${r}' }))" class="no-underline px-2 py-1 rounded-full hover:bg-gray-200" title="${g}">
              <i class="ti ti-link text-2xl"></i>
            </a>
          </div>
        </div>
        <hr class="my-2">
        <p class="text-lg font-bold">Specifications</p>
        <div class="pr-3 py-1.5">
          ${i?`
            <p>
              <span class="text-lg">Size</span> : 
              <span class="text-lg text-gray-500">${i}</span>
            </p>`:""}
          ${l?`
            <p>
              <span class="text-lg">Uploaded by</span> :
              <span class="text-lg text-gray-500">${l}</span>
            </p>`:""}
          ${n?`
            <p>
              <span class="text-lg">Uploaded at</span> :
              <span class="text-lg text-gray-500">${n}</span>
            </p>`:""}
        </div>
        ${e==="JOB"&&t?.attachmentType==="IMAGE"?` <hr class="my-2">
        <!-- Displaying tags below description -->
        <div class="mt-2">
          <p class="text-lg font-bold primary-font">${I}</p>
          <div id="tags-content-${r}" class="flex flex-wrap items-center gap-2 mt-2">
            <button class="px-3 py-1 pt-1.5 bg-white text-blue-500 rounded-md hover:bg-gray-100 text-base" onclick="document.dispatchEvent(new CustomEvent('addAttachmentTags', { detail: '${r}' }))"><i class="ti ti-tag text-base mr-1 text-blue-500"></i>${L}</button>
           ${t?.tags&&t?.tags.length>0?t?.tags.filter(f=>!f?.is_deleted).map(f=>`
              <span class="px-2 py-1 pt-1.5 rounded-md bg-gray-100 border border-gray-200 truncate text-base text-gray-800">
                 <i class="ti ti-tag text-base mr-1 text-gray-500"></i>${f?.tag_name||""}
              </span>
           `).join(""):""}
          </div>
        </div>`:""}
         <hr class="my-2">
        <div id="description-section-${r}">
          <p class="text-lg font-bold primary-font">${k}</p>
          <div id="description-content-${r}">
            ${t.attachment_description?`
              <div id="description-display-${r}" class="relative group text-base primary-font">
                <p id="description-text-${r}" 
                  class="text-lg text-black -mx-1 px-1 rounded-lg cursor-text flex items-center opacity-100 group-hover:bg-gray-200 group-hover:bg-opacity-50" 
                  onclick="document.dispatchEvent(new CustomEvent('editDescriptionGallery', { detail: '${r}' }))">
                  ${t.attachment_description}
                </p>
              </div>
            `:`
               <div id="description-input-${r}" class="mt-2 relative border border-gray-300 rounded-lg">
                <textarea id="description-textarea-${r}" class="w-full text-base primary-font p-2 border-0 focus:ring-0 resize-none rounded-lg" rows="6" maxlength="2000" placeholder="${z}" oninput="if(this.value.length > 2000) this.value = this.value.slice(0, 2000);document.getElementById('save-button-${r}').disabled = this.value.length === 0;">${t.attachment_description||""}</textarea>
                <div class="flex justify-between items-center px-3 py-2 bg-white rounded-b-lg">
                 ${t.attachment_description?`<button data-action="delete" data-file-id="${r}" onclick="document.dispatchEvent(new CustomEvent('deleteDescription', { detail: '${r}' }))" class="px-2 py-1 rounded-full hover:bg-gray-200"><i class="ti ti-trash text-2xl text-red-500 hover:text-red-600"></i></button>`:""}
                  <div class="ml-auto flex space-x-1">
                   ${t.attachment_description?`
                    <button data-action="cancel" data-file-id="${r}" onclick="document.dispatchEvent(new CustomEvent('cancelEditGallery', { detail: '${r}' }))" class="text-base primary-font px-4 py-1 mr-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100">${j}</button>
                  `:""}
                  <button id="save-button-${r}"  ${(t.attachment_description||"").length===0?"disabled":""}  data-action="save" data-file-id="${r}" onclick="document.dispatchEvent(new CustomEvent('saveDescriptionGallery', { detail: '${r}' }))" class="text-base primary-font px-4 py-1 text-white disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 primary-font btn-primary rounded-lg">${A}</button>
                  </div>
                </div>
              </div>
            `}
          </div>
        </div>
    </div>`}getAttachmentType(t){return t?.split(".").pop()||""}formatDateTime(t){let e=this.utilityService.timeZone,a=this.utilityService.dateTimeFormat;return E.default.tz(t,e).format(a)||t}bulkDownloadAttachments(t){let e=this._dataCollectorService.baseurl()+"/attachments/bulk_download";return this._dataCollectorService.postData(e,t)}checkDownloadStatus(t){let e=this._dataCollectorService.baseurl()+`/company/background_jobs/${t}`;return this._dataCollectorService.getData(e)}downloadZipFile(t){let e=this._dataCollectorService.baseurl()+`/attachments/download_zip/${t}`;return this.http.get(e,{responseType:"blob"})}pollDownloadStatus(t,e){return v(5e3).pipe(u(()=>this.checkDownloadStatus(t)),x(a=>a?.data?.status==="COMPLETED"?this.downloadZipFile(t).pipe(b(e),u(s=>p(s))):a?.data?.status==="FAILED"?_:v(5e3).pipe(b(e),u(()=>this.checkDownloadStatus(t)))),b(e),y(a=>_))}stopPolling(){this.destroy$.next(),this.destroy$.complete(),this.destroy$=new h}fetchJobDetailsBulk(t){let e=t.filter(i=>!this.jobCache[i]);if(e.length===0)return p(t.map(i=>this.jobCache[i]).filter(Boolean));let a=`${this.baseUrl}/jobs`,s={"filter.job_uid":e.join(",")};return this._dataCollectorService.getData(a,s).pipe(m(i=>((i?.data||[]).forEach(n=>{this.jobCache[n.job_uid]=n}),t.map(n=>this.jobCache[n]).filter(Boolean))),y(()=>p([])))}createFolder(t){let e=`${this.baseUrl}/attachments/folders`;return this._dataCollectorService.postData(e,t)}getFolders(t,e,a=1,s=15){let i=`${this.baseUrl}/attachments/folders`,l={"filter.module":t,"filter.module_uid":e,page:a,limit:s};return this._dataCollectorService.getData(i,l).pipe(m(n=>n?.data||[]))}getFolder(t){let e=`${this.baseUrl}/attachments/folders/${t}`;return this._dataCollectorService.getData(e)}updateFolder(t,e){let a=`${this.baseUrl}/attachments/folders/${t}`;return this._dataCollectorService.putData(a,{folder_name:e})}deleteFolder(t){let e=`${this.baseUrl}/attachments/folders/${t}`;return this._dataCollectorService.deleteData(e)}transformFolderAssociationFilters(t){if(!t)return{};let e={},a={"filter.type":"type","filter.attachment_tag":"attachment_tag","filter.created_by":"created_by","filter.from_date":"from_date","filter.to_date":"to_date","filter.customer_uid":"customer_uid"};return Object.keys(t).forEach(s=>{if(s==="filter.module"||s==="filter.module_uid")return;let i=a[s]||s.replace("filter.","");t[s]&&(e[i]=t[s])}),e}addFilesToFolder(t,e,a,s,i){let l=`${this.baseUrl}/attachments/folders/${t}/association`,n=this.transformFolderAssociationFilters(i),g=o(o(o({attachment_uid:e},a&&a.length>0&&{dates:a}),s&&s.length>0&&{users:s}),n);return this._dataCollectorService.postData(l,g)}removeFilesFromFolder(t,e,a,s){let i=`${this.baseUrl}/attachments/folders/${t}/association`,l=o(o({attachment_uid:e},a&&a.length>0&&{dates:a}),s&&s.length>0&&{users:s});return this._dataCollectorService.deleteDataPayload(i,l)}shareFolder(t,e){let a=`${this.baseUrl}/attachments/folders/${t}/share`;return this._dataCollectorService.postData(a,e)}getFolderShares(t){let e=`${this.baseUrl}/attachments/folders/${t}/share`;return this._dataCollectorService.getData(e)}updateFolderShare(t,e,a){let s=`${this.baseUrl}/attachments/folders/${t}/share/${e}`;return this._dataCollectorService.putData(s,a)}deleteFolderShare(t,e){let a=`${this.baseUrl}/attachments/folders/${t}/share/${e}`;return this._dataCollectorService.deleteData(a)}createDefaultFolder(t){let e=`${this.baseUrl}/attachments/default_folders`;return this._dataCollectorService.postData(e,{folder_name:t})}getDefaultFolders(t=""){let e=`${this.baseUrl}/attachments/default_folders`,a={};return t&&(a["filter.keyword"]=t),this._dataCollectorService.getData(e,a).pipe(m(s=>s?.data||[]))}updateDefaultFolder(t,e){let a=`${this.baseUrl}/attachments/default_folders/${t}`;return this._dataCollectorService.putData(a,{folder_name:e})}deleteDefaultFolder(t){let e=`${this.baseUrl}/attachments/default_folders/${t}`;return this._dataCollectorService.deleteData(e)}getFolderCounts(t,e){let a=`${this.baseUrl}/attachments/folders/count`,s={"filter.module":t,"filter.module_uid":e};return this._dataCollectorService.getData(a,s)}mapFolderToAlbum(t){let e=t.created_by?{name:`${t.created_by.first_name} ${t.created_by.last_name||""}`.trim(),initials:`${t.created_by.first_name?.[0]||""}${t.created_by.last_name?.[0]||""}`.toUpperCase(),userId:t.created_by.user_uid}:void 0,a=t.shared_with?.map(i=>({name:`${i.first_name} ${i.last_name||""}`.trim(),initials:`${i.first_name?.[0]||""}${i.last_name?.[0]||""}`.toUpperCase(),userId:i.user_uid})),s=t.share_stats?{totalRecipients:t.share_stats.total_recipients||0,activeShares:t.share_stats.active_shares||0,expiringShares:0,hasExpiringShares:!1}:void 0;return{id:t.folder_uid,name:t.folder_name,photoCount:t.attachment_count,type:t.is_shared?"shared":"created",isDefault:t.is_default,createdAt:t.created_at,updatedAt:t.updated_at,createdBy:e,sharedUsers:a,shareInfo:s}}static{this.\u0275fac=function(e){return new(e||d)(c(w),c(C),c(F),c(D),c(U))}}static{this.\u0275prov=S({token:d,factory:d.\u0275fac,providedIn:"root"})}}return d})();export{q as a};
