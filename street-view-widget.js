const html = `
  <style>
    @font-face {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2)
        format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
        U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
      font-family: "Noto Sans";
      font-style: normal;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/notosans/v27/o-0IIpQlx3QUlC5A4PNr5TRASf6M7Q.woff2)
        format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
        U+2215, U+FEFF, U+FFFD;
    }

    body,
    html {
      margin: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }

    #wrapper {
      background-color: #171618;
      color: #bfbfbf;
      height: 100%;
      border-radius: 4px;
    }

    #header {
      height: 44px;
      position: relative;
      overflow: hidden;
      background-color: #171618;
      border-radius: 4px;
    }

    #header div {
      display: inline-block;
    }

    #plugin-icon {
      width: 44px;
      height: 44px;
      position: relative;
      cursor: pointer;
    }
    

    #plugin-icon svg {
      padding-top: 12px;
      padding-left: 12px;
    }

    #plugin-title {
      color: #F4F4F4;
      font-family: "Noto Sans";
      font-size: 14px;
    }

    #close-plugin-btn {
      float: right;
      padding-top: 10px;
      padding-right: 5px;
      cursor: pointer;
    }
    
    .vertical-center {
      margin: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    #content {
      margin-left: 12px;
      margin-right: 12px;
      padding-bottom:  15px;
      height: auto;
    }

    #content span {
      font-family: "Noto Sans";
      font-size: 12px;
    }

    /* .selection {
      height: 28px;
      width: 160px;
      background: #171618;
      border-radius: 4px;
      border: 1px solid #bfbfbfad;
      color: #bfbfbf;
      float: right;

    }

    */

    .selection {
      box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.7);
      border-radius: 4px;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      padding-right: 1rem;
      padding-left: 0.5rem;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background-image: url('data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjgwMHB4IiB3aWR0aD0iODAwcHgiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAzODYuMjU3IDM4Ni4yNTciIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0cm9rZT0iI2ZmZmZmZiI+Cg08ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCIvPgoNPGcgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cg08ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+IDxwb2x5Z29uIHBvaW50cz0iMCw5Ni44NzkgMTkzLjEyOSwyODkuMzc5IDM4Ni4yNTcsOTYuODc5ICIvPiA8L2c+Cg08L3N2Zz4=');
      background-repeat: no-repeat, repeat;
      background-position: right .7em top 50%;
      background-size: .65em auto;

      background-color: #171618;
      height: 28px;
      width: 160px;
      color: #bfbfbf;
      float: right;
    }

    #selection-section {
      height: 28px;
      margin-bottom: 10px;
    }

    #route-list-div {
      height: 28px;
      display: none;
    }

    .route-section {
      height: auto;
      border-radius: 4px;
    }

    .btn {
      font-family: "Noto Sans" !important;
      font-style: normal;
      font-size: 12px;
      text-align: center;
      margin: 0 auto;
      border-radius: 4px;
      line-height: 24px;
    }

    .btn-inactive {      
      border: solid 1px #525252;
      color: #525252;
      background: #262626;
      cursor: not-allowed;
    }

    .btn-transparent-inactive {
      color: #525252;
      border: solid 1px #525252;
      background: transparent;
      cursor: not allowed;
    }

    .btn-transparent-primary {
      color: #0F62FE;
      border: solid 1px #0F62FE;
      background: transparent;
      cursor: pointer;
    }

    .btn-primary {
      border: solid 1px #0F62FE;
      color: #FFFFFF;
      background: #0F62FE;
      cursor: pointer;
    }

    #start-drawing-btn, #finish-drawing-btn {
      width: 100%;
      height: 28px;
      display: none;
    }

    #streetview-btn {
      width: 140px;
      float: right;
    }

     #restart-btn {
      width: 140px;
      float: left;
    }


    #file-option {
      display: block;
      height: auto;
    }

    #pano {
      display: none;
      width: 288px;
      height: 240px;
      border-radius: 4px;
      margin-top: 10px;
    }

    .error-text {
      color: #C70039;
      font-family: "Noto Sans" !important;
      font-size: 12px;
    }

    #error {
      padding-top: 5px;
      line-height: 20px;
    }

    #streetview-action {
      text-align: center;
      margin-top: 5px;
      height: 30px;
    }

    #route-setting {
      font-family: "Noto Sans" !important;
      font-style: normal;
      font-size: 12px;
    }

    .inline-div{
      display:inline-block;
      line-height:20px;
    }

    .a-row {
      color: #BFBFBF;
      font-family: "Noto Sans";
      font-size: 12px;
      line-height: 28px;
      margin-bottom: 12px;
    }

    .common-input {
      width: 150px;
      height: 24px;
      border-radius: 4px;
      border: 1px solid #bfbfbfad;
      padding-left: 5px;
     
    }

    .a-row > input {
      float: right;
    }

    .common-input:valid {
      color: #BFBFBF;
      background-color: #171618;
    }

    input[type="color"] {
      width: 26px;
      height: 26px;
      padding: 0;
      margin-right: 3px;
      border: none;
      border-radius: 4px;
      margin-top: 1px;
    }

    input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
      border: none;
      border-radius: 4px;
    }

    input[type="color"]::-webkit-color-swatch {
      border: none;
      border-radius: 4px;
    }

    #route-color-code {
      width: 122px !important;
    }

    #route-width-div{
      float:right;
    }

    input[type="file"]::file-selector-button:hover {
      cursor: pointer;
    }

    #route-data-file {
      margin-top: 5px;
      margin-left: -20px;
    }

    #route-data-file::-webkit-file-upload-button {
      visibility: hidden;
    }

    input[type="file"]::file-selector-button {
      width:0px;
    }

    #input-file-name {
      display: none;
    }

    #input-file-name > svg {
      margin-bottom: -2px;
    }

    .input-file-trigger {
      border: solid 1px #0F62FE;
      border-radius: 4px;
      background-color: transparent;
      color: #0F62FE;
      width: 286px;
      height: 26px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      font-family: "Noto Sans";
      font-size: 12px;
      cursor: pointer;
    }



  </style>
  <div id="wrapper"> 
    <div id="header">
      <div id="plugin-icon" onclick="openClosePlugin()">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.25 16.873H18.75" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.2495 16.873V3.12305C11.2495 2.95729 11.1837 2.79832 11.0665 2.68111C10.9492 2.56389 10.7903 2.49805 10.6245 2.49805H3.12451C2.95875 2.49805 2.79978 2.56389 2.68257 2.68111C2.56536 2.79832 2.49951 2.95729 2.49951 3.12305V16.873" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.4995 16.873V8.12305C17.4995 7.95729 17.4337 7.79832 17.3165 7.68111C17.1992 7.5639 17.0403 7.49805 16.8745 7.49805H11.2495" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.99951 5.62305H7.49951" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.24951 10.623H8.74951" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.99951 13.748H7.49951" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.7495 13.748H14.9995" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.7495 10.623H14.9995" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </div>
      
      <div class="vertical-center" id="plugin-title">
        Street View
      </div>



      <span id="close-plugin-btn" onclick="openClosePlugin()">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.625 4.375L4.375 15.625" stroke="#595959" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.625 15.625L4.375 4.375" stroke="#595959" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
    <div id="content">
      <div class="a-row">
        <label class="common-text">Route Width</label>
        <input type="number" min=1 value="1" class="common-input" id="route-width" onchange="changeRouteSetting()">
      </div>
      <div class="a-row">
        <label class="common-text">Route Color</label>
        <input type="text" class="common-input" id="route-color-code" value="#FFFFFF" onchange="changeColorPicker(this)" >
        <input type="color" class="color-code " value="#FFFFFF" id="route-color" onchange="changeColorCode(this)">
      </div>
      <div id="selection-section">
        <span>Make a route</span>
        <select class="selection" id="input-data-selection" onChange="selectInputData()">
          <option value="FILE_OPTION">Upload a file</option>
          <option value="DRAWING_OPTION"> Draw a route </option>
          <option value="ASSET_OPTION"> Select a route </option>
        </select>
      </div>
      <div id="route-list-div">
        <span>Route</span>
        <select class="selection" id="available-route-list" onChange="selectAvailableRoute()">
        </select>
      </div>
      <div class="route-section" id="drawing-option">
        <button class="btn btn-transparent-primary" id="start-drawing-btn" onclick="startDrawing()">Start Drawing</button>
        <button class="btn btn-primary" id="finish-drawing-btn" onclick="finishDrawing()">Finish</button>
      </div>

      <div class="route-section" id="file-option">
        <label for="route-data-file" class="input-file-trigger">Choose File</label>
        <div id="input-file-name"> 
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13816 0.861366C9.01751 0.740671 8.85081 0.666016 8.66667 0.666016H4C2.89543 0.666016 2 1.56145 2 2.66602V13.3327C2 14.4373 2.89543 15.3327 4 15.3327H12C13.1046 15.3327 14 14.4373 14 13.3327V5.99935C14 5.63116 13.7015 5.33268 13.3333 5.33268H11.7239L9.33333 2.94216V1.33268C9.33333 1.14863 9.25875 0.982002 9.13816 0.861366ZM8 1.99935H4C3.63181 1.99935 3.33333 2.29783 3.33333 2.66602V13.3327C3.33333 13.7009 3.63181 13.9993 4 13.9993H12C12.3682 13.9993 12.6667 13.7009 12.6667 13.3327V6.66602" fill="#E0E0E0"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13807 0.861278C9.01305 0.736254 8.84348 0.666016 8.66667 0.666016H4C2.89543 0.666016 2 1.56145 2 2.66602V13.3327C2 14.4373 2.89543 15.3327 4 15.3327H12C13.1046 15.3327 14 14.4373 14 13.3327V5.99935C14 5.82254 13.9298 5.65297 13.8047 5.52794L9.13807 0.861278ZM4 1.99935H8.39052L12.6667 6.27549V13.3327C12.6667 13.7009 12.3682 13.9993 12 13.9993H4C3.63181 13.9993 3.33333 13.7009 3.33333 13.3327V2.66602C3.33333 2.29783 3.63181 1.99935 4 1.99935Z" fill="#E0E0E0"/>
            <path d="M9.33333 1.33268C9.33333 0.964492 9.03486 0.666016 8.66667 0.666016C8.29848 0.666016 8 0.964492 8 1.33268V5.99935C8 6.36754 8.29848 6.66602 8.66667 6.66602H13.3333C13.7015 6.66602 14 6.36754 14 5.99935C14 5.63116 13.7015 5.33268 13.3333 5.33268H9.33333V1.33268Z" fill="#E0E0E0"/>
          </svg>
          <input type="file" id="route-data-file" name="file" onchange="changeUploadingFile()">
        </div>
       
      </div>
      <div class="error-text" id="error"></div>
      <div id="streetview-action">
        <input type="hidden" id="data-store" data-startPosition="0">
        <button class="btn btn-transparent-inactive" id="restart-btn" onclick="restart()" disabled>
          <span>Restart</span>
        </button>
        <button class="btn btn-inactive" id="streetview-btn" onclick="handleStreetView()"
          data-status="start" disabled>
          <span>Start</span>
        </button>
      </div>
      <div id="pano"></div>
    </div>
    
    
    
  </div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src='https://unpkg.com/@turf/turf@6/turf.min.js'></script>
  
  <script>
      /// Summary source code [Google Street View Tour]
      // 1. Making a route
      // - User can select uploading a route file, drawing a route or select an asset file
      // - Route Data must be a GeoJSON object with the type "FeatureCollection" 
      // - Using "FeatureCollection" type makes it easier to extend the functionality later
      // - User can setting route color or width
      // 2. Run Street View 
      const panoEle = document.getElementById('pano');
      const FILE_OPTION = "FILE_OPTION"
      const DRAWING_OPTION = "DRAWING_OPTION"
      const ASSET_OPTION = "ASSET_OPTION"
      let dataInput = "FILE_OPTION"
      let reearth, property, googleAPI, interval
      let routeLayerId, routeGeojson, routeData, selectedAssetId
      let isDrawingRoute = false
      let pointArr = []
      let startPosition = 0
      let coordsRoute = []
      let startDrawingElm = document.getElementById("start-drawing-btn")
      let finishDrawingElm = document.getElementById("finish-drawing-btn")
      let streetViewBtnElm = document.getElementById("streetview-btn")
      let restartBtnElm = document.getElementById("restart-btn")
      let dataStoreElm = document.getElementById("data-store")
      let inputDataSelectionElm = document.getElementById("input-data-selection")
      let routeListSeclectionElm = document.getElementById("available-route-list")
      let routeListDivElm = document.getElementById("route-list-div")
      let fileOptionElm = document.getElementById("file-option")
      let drawingOptionElm = document.getElementById("drawing-option")
      let uploadedFileElm = document.getElementById("route-data-file")
      let showErrorElm = document.getElementById("error")
      let routeColorElm = document.getElementById("route-color")
      let routeColorCodeElm = document.getElementById("route-color-code")
      let routeWidthElm = document.getElementById("route-width")
      let inputFileNameElm = document.getElementById("input-file-name")
      let expanded = false;
      let wrapperElm = document.getElementById("wrapper")
      let offsetHeight = 280


      // Change color picker from color hex
      function changeColorPicker(item) {
        routeColorElm.value = item.value;
        changeRouteSetting()
      }  

      // Change color code from color picker
      function changeColorCode(item) {
        routeColorCodeElm.value = item.value;
        changeRouteSetting()
      }  

      function hideAllDependentDiv() {
        hideDrawingBtn()
        hideChooseFileBtn()
        hideAvailableRouteList()
      }

      function hideAvailableRouteList() {
        routeListDivElm.style.display = "none"
      }

      function hideDrawingBtn() {
        startDrawingElm.style.display = "none"
        finishDrawingElm.style.display = "none"
      }

      function hideChooseFileBtn() {
        fileOptionElm.style.display = "none"
      }
      
      function inactiveStreetViewBtn() {
        streetViewBtnElm.disabled = true
        streetViewBtnElm.classList.remove("btn-primary")
        streetViewBtnElm.classList.add("btn-inactive")
      }

      function activeStreetViewBtn() {
        streetViewBtnElm.disabled = false
        streetViewBtnElm.classList.remove("btn-inactive")
        streetViewBtnElm.classList.add("btn-primary")
      }

      function activeRestartBtn() {
        restartBtnElm.disabled = false
        restartBtnElm.classList.remove("btn-transparent-inactive")
        restartBtnElm.classList.add("btn-transparent-primary")
      }

      function inactiveRestartBtn() {
        restartBtnElm.disabled = true
        restartBtnElm.classList.remove("btn-transparent-primary")
        restartBtnElm.classList.add("btn-transparent-inactive")
      }

      function selectInputData() {
        hideAllDependentDiv()
        //Stop street view if the street view is running
        if(streetViewBtnElm.getAttribute("data-status") == "pause"){
          stopStreetView()
        }
        inactiveStreetViewBtn()
        inactiveRestartBtn()
        dataInput = inputDataSelectionElm.value

        switch(dataInput){
          case FILE_OPTION:
            //Show the choose file button
            fileOptionElm.style.display = "block"

            //handle the uploaded file
            if(uploadedFileElm.files.length > 0) {
              changeUploadingFile()
            }
            break;
          case DRAWING_OPTION:
            startDrawingElm.style.display = "block"
            break;
          case ASSET_OPTION:
            routeListDivElm.style.display = "block"
            break;
          default:
            console.log("Something goes wrong")
        }

        //Reset start position
        dataStoreElm.setAttribute("data-startPosition", 0)
        resizePlugin()
      }

      function openClosePlugin() {
        expanded = !expanded
        if(expanded) {
          wrapperElm.style.height = "auto"
          wrapperElm.style.backgroundColor = "#171618"
          document.getElementById("content").style.height = "auto"
        } else {
          offsetHeight = wrapperElm.offsetHeight
          document.getElementById("wrapper").style.height = "44px"
          wrapperElm.style.backgroundColor = "transparent"
        }
        parent.postMessage({ type: "resize", expanded, height: offsetHeight }, "*");
      }

      function resizePlugin() {
        parent.postMessage({ type: "resize", expanded, height: document.getElementById("wrapper").offsetHeight }, "*");
      }

      addEventListener("message", e => {
        if (e.source !== parent) return;
        reearth = e.source.reearth
        property = e.data.property;

        if (e.data.type === 'mousedata' && isDrawingRoute ) {
          let coord = [e.data.payload.lng, e.data.payload.lat]
          pointArr.push(coord);
          parent.postMessage({type: "showPoint", lng:coord[0] ,lat: coord[1]}, "*");
        }

        //Setting Google API
        if (e.data.type === "updateWidget") {
          // Create script tag to embed 
          if(property?.settings?.googleApi) {
            googleAPI = property.settings.googleApi
            let scriptTag = document.getElementById('google-api-cript')
            
            if (scriptTag) {
              scriptTag.setAttribute("src", 'https://maps.googleapis.com/maps/api/js?key=' + googleAPI + '&libraries=geometry')
            } else {
              let script = document.createElement('script');
              script.src = 'https://maps.googleapis.com/maps/api/js?key=' + googleAPI + '&libraries=geometry';
              script.defer = true;
              script.id = "google-api-cript"
              document.body.appendChild(script);
            }
          }
    
          //Add asset files into selection list
          if(property?.fileList) {
            routeListSeclectionElm.innerHTML = ""
            let fileOption = document.createElement("option")
            fileOption.disabled = true
            fileOption.selected = true
            routeListSeclectionElm.appendChild(fileOption)
            
            property.fileList.map((file) => {
              if(file.url) {
                fileOption = document.createElement("option")
                fileOption.value = file.id
                fileOption.innerHTML = file.title
                fileOption.setAttribute("data-setting", JSON.stringify(file))
                routeListSeclectionElm.appendChild(fileOption)
              }
            }) 
          }

          // Set selected option again if selection list was be updated
          inputDataSelectionElm.value = dataInput
        }
      })

      // This function handles input data from user
      // Convert input data to FeatureCollection type and show route on Reearth immediately
      // Get first coordinate of route as start position -> move camera to this coordinate
      function selectAvailableRoute() {
        //Remove the empty option
        if(routeListSeclectionElm.options[0].value == ""){
          routeListSeclectionElm.options[0].remove()
        }

        if(streetViewBtnElm.getAttribute("data-status") == "pause"){
          stopStreetView()
        }

        //Reset start position
        dataStoreElm.setAttribute("data-startPosition", 0)

        let value = routeListSeclectionElm.value
        routeGeojson = null
        selectedAssetId = value

        //Handle to show asset file
        let selectedElm= routeListSeclectionElm.options[routeListSeclectionElm.selectedIndex]
        let assetFile = JSON.parse(selectedElm.getAttribute("data-setting"))
        fetch(assetFile.url).then(response => response.json())
          .then(data => {
            if (data.type == "Feature") {
              routeGeojson = turf.featureCollection([data])
            } else if (data.type == "FeatureCollection") {
              routeGeojson = data
            } else {
              showErrorElm.innerHTML = "ルートファイルの形式が正しくありません。"
            }

            let startPosition = turf.getCoords(routeGeojson.features[0])[0]
            routeGeojson = showRoute(routeGeojson)
            parent.postMessage({
              type : "trackPosition", 
              coord: { 
                "lat": startPosition[1], 
                "lng": startPosition[0]
              },
              height: 2000},  "*");     
          })

          activeStreetViewBtn()
        }
      
      //Divide the route into chunks of a specified length
      function dividesRoute(route) {
        let result = []
        if(turf.getType(route) != "LineString") {
          showErrorElm.innerHTML = "ルートがLineStringというタイプではありません。"
        } else {
          var lineChunk = turf.lineChunk(route, 0.05, {units: 'kilometers'});
          turf.coordEach(lineChunk, function (currentCoord) {
            if(result.length == 0 ) {
              result.push({ lat: currentCoord[1], lng: currentCoord[0] })
            } else {
              let tempCoord = { lat: currentCoord[1], lng: currentCoord[0] }
              if (JSON.stringify(tempCoord) != JSON.stringify(result[result.length-1])) {
                result.push(tempCoord)
              }
            } 
          });
        }
        return result
      }

      // Show Street View of the route
      function handleStreetView() {
        // Check if The Street View windown is running or not
        let status = streetViewBtnElm.getAttribute("data-status")
        coordsRoute = dividesRoute(routeGeojson.features[0])
        
        // Enable Street View when data != null
        if (status == "start" && coordsRoute.length > 0) { 
          panoEle.style.display = "block"
          //Change style CSS
          streetViewBtnElm.getElementsByTagName("span")[0].innerHTML = "Pause"
          streetViewBtnElm.setAttribute("data-status", "pause")
          activeRestartBtn()
          routeGeojson = showRoute(routeGeojson)
          startPosition = dataStoreElm.getAttribute("data-startPosition")
          displayStreetView(coordsRoute, parseInt(startPosition))
          resizePlugin()
        } else {
          stopStreetView()
        }        
      }

      function stopStreetView() {
        //Change style
        streetViewBtnElm.getElementsByTagName("span")[0].innerHTML = "Start"
        streetViewBtnElm.setAttribute("data-status", "start")
        inactiveRestartBtn()
        clearInterval(interval)
      }
      
      function startDrawing() {
        //Stop street view if the street view is running
        if(streetViewBtnElm.getAttribute("data-status") == "pause"){
          stopStreetView()
        }

        inactiveRestartBtn()
        inactiveStreetViewBtn()
        showErrorElm.innerHTML = ""
        startDrawingElm.style.display = "none"
        finishDrawingElm.style.display = "block"
        isDrawingRoute = true
        pointArr = []
      }

      function finishDrawing() {
        if (pointArr.length < 2) {
        //Show error : there must have at least 2 points
        showErrorElm.innerHTML = "Please draw at least two points."
        } else {
          isDrawingRoute = false 
          showErrorElm.innerHTML = ""
          startDrawingElm.style.display = "block"
          finishDrawingElm.style.display = "none"
          activeStreetViewBtn()

          //Create route
          routeGeojson = turf.featureCollection([turf.lineString(pointArr)])
          routeGeojson.features[0].properties["stroke"] = routeColorElm.value
          routeGeojson.features[0].properties["stroke-width"] = routeWidthElm.value 
          parent.postMessage({type : "showRoute", geojson: routeGeojson},  "*");
          parent.postMessage({ type: "removePoint"}, "*");
          parent.postMessage({
            type : "trackPosition", 
            coord: { 
              "lat": pointArr[0][1], 
              "lng": pointArr[0][0]
            },
            height: 2000},  "*"
          );     

          activeStreetViewBtn()
        }
        resizePlugin()
      }

      function showRoute(routeData) {
        // geojson parameter must be a FeatureCollection object
        routeGeojson.features[0].properties["stroke"] = routeColorElm.value
        routeGeojson.features[0].properties["stroke-width"] = routeWidthElm.value 
        parent.postMessage({type : "showRoute", geojson: routeGeojson},  "*");
        return routeData;
      }

      function displayStreetView(coords, count) {
        let heading = google.maps.geometry.spherical.computeHeading(coords[count], coords[count+1] );
        let panorama = new google.maps.StreetViewPanorama(panoEle, {
          position: coords[count],
          pov: {
            heading: heading,
            pitch: 10,
            zoom: 0
          },
          addressControl: false,
          linksControl: false,
          panControl: false,
          zoomControl: false,
        });

        if (count == 0) {
          parent.postMessage({type : "trackPosition", coord: coords[count], heading: (heading* (Math.PI/180)), height: 2000, pitch: 5 * (Math.PI/180)},  "*");
          
        }
        
        interval = setInterval(function() {
          count++
          if (count == coords.length) {
            // Stop street view
            streetViewBtnElm.click()
          } else {
            heading = google.maps.geometry.spherical.computeHeading(coords[count-1], coords[count] );
            panorama.setPosition(coords[count]);
            panorama.setPov({
                heading: heading,
                pitch: 10,
                zoom: 0
              }
            );
            
            parent.postMessage({type : "trackPosition", 
              coord: coords[count],
              heading:  (heading* (Math.PI/180)),
              height: getHeightByTerrain(),
              pitch: 5 * (Math.PI/180),
              range: getRangeByTerrain()
            },  "*");
            
            
          }
          dataStoreElm.setAttribute("data-startPosition", count)
        },3000)

      }

      function restart() {
        let status = streetViewBtnElm.getAttribute("data-status")
        if(status == "pause") {
          dataStoreElm.setAttribute("data-startPosition", 0)
          clearInterval(interval)
          displayStreetView(coordsRoute, 0)
        }
      }

      function changeRouteSetting() {
        if(routeGeojson) {
          routeGeojson = showRoute(routeGeojson)
        }
      }

      function changeUploadingFile() {
        //Display uploaded file name 
        inputFileNameElm.style.display = "block"
        if(uploadedFileElm.files.length > 0) {
          let uploadedFile = uploadedFileElm.files[0]
          if (uploadedFile.type != 'application/geo+json' ) {
            console.log("Please select GeoJSON file with geometry type is LineString")
          } else {
            showErrorElm.innerHTML = ""
            let reader  = new FileReader();
            reader.readAsText(uploadedFile);
            reader.onload = () => { 
              routeGeojson = JSON.parse(reader.result);
              if (routeGeojson.type == "Feature") {
                routeGeojson = turf.featureCollection([routeGeojson])
              }
              let startPosition = turf.getCoords(routeGeojson.features[0])[0]
              routeGeojson = showRoute(routeGeojson)
              parent.postMessage({
                type : "trackPosition", 
                coord: { 
                  "lat": startPosition[1], 
                  "lng": startPosition[0]
                }, 
                height: 2000},  "*");  
            }
          }
        }

        //CSS
        activeStreetViewBtn()
        resizePlugin()
      }

      function getHeightByTerrain() {
        if(reearth?.scene?.property?.terrain?.terrain) {
          return parseInt(65)
        } else {
          return parseInt(20)
        }
      }

      function getRangeByTerrain() {
        if(reearth?.scene?.property?.terrain?.terrain) {
          return parseInt(65)
        } else {
          return parseInt(50)
        }
      }
  
</script>    
`;

reearth.ui.show(html, {width: 44, height: 44});

reearth.on("update", send);
send();

function send() {
  reearth.ui.postMessage({
    type: "updateWidget",
    property: reearth.widget.property
  });
}

reearth.on("click", (mousedata) => {
  reearth.ui.postMessage(
    {
      type: "mousedata",
      payload: mousedata,
    },
    "*"
  );
})

reearth.on("message", (msg) => {
  if (msg.type === "resize") {
    reearth.ui.resize?.(
      msg.expanded ? 312 : 44, 
      msg.expanded ? msg.height : 44, 
      msg.expanded ? undefined : true);
  } else
  if (msg.type === "trackPosition") { 
    reearth.camera.flyToGround({
      lat: msg.coord.lat,            
      lng: msg.coord.lng,            
      height: msg.height ?? reearth.camera.position.height,      
      heading: msg.heading ?? reearth.camera.position.heading,   
      pitch: msg.pitch ?? -1.5690356650580308,     
    }, {
      duration: 2
    }, 7);

    if(modelLayerId) {
      reearth.layers.hide(modelLayerId)
      // refresh
      reearth.layers.overrideProperty(modelLayerId, {
        default: {
          url: [],
        },
      });

      // override
      reearth.layers.overrideProperty(modelLayerId, {
        default: {
          heightReference: "clamp",
          location: {
            lat: msg.coord.lat,
            lng: msg.coord.lng
          }
        },
      });
      reearth.layers.show(modelLayerId)
    } else {
      modelLayerId = reearth.layers.add({
        extensionId: "marker",
        isVisible: true,
        title: "point",
        property: {
          default: {
            heightReference: "clamp",
            location: {
              lat: msg.coord.lat,
              lng: msg.coord.lng
            },
            style: "point",
          },
        },
      })
    }
  } 
});

let routeLayerId 
let modelLayerId
let pathPointsArray = []

reearth.on("message", (msg) => {
  if (msg.type == "showPoint") {
    pathPointsArray.push(
      reearth.layers.add({
        extensionId: "marker",
        isVisible: true,
        title: "pointPath",
        property: {
          default: {
            heightReference: "clamp",
            location: {
              lat: msg.lat,
              lng: msg.lng,
            },
            style: "point",
          },
        },
      })
    );
  } else 
  if (msg.type == "removePoint") {
    pathPointsArray.map((element, index) => {
      reearth.layers.hide(element);
    });
  } 
})

reearth.on("message", (msg) => {
  if (msg.type == "showRoute") {
    if (routeLayerId) {
      reearth.layers.hide(routeLayerId)
      // refresh
      reearth.layers.overrideProperty(routeLayerId, {
        default: {
          url: [],
        },
      });

      // override
      reearth.layers.overrideProperty(routeLayerId, {
        default: {
          url: msg.geojson,
        },
      });

      reearth.layers.show(routeLayerId)
    } else {
      routeLayerId = reearth.layers.add({
        extensionId: "resource",
        isVisible: true,
        title: "route-data",
        property: {
          default: {
            url: msg.geojson,
            type: "geojson",
            clampToGround: true
          },
        },
      })
    }
  }
})