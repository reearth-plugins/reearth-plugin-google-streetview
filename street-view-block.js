reearth.ui.show(`
  <style>
    #wrapper {
      height:270px;
    }

    #pano {
      height: 250px;
      width: 100%;
    }
  </style>
  <div id="wrapper">
    <div id="pano"></div>
  </div>

   <script>
      const panoEle = document.getElementById('pano');
      let selectedLocation;
      let reearth, blockProperty, googleApi
      let povHeading = 140
      let povPitch = 10
      let moveOnReearth = false

      function showStreetView() {
        // StreetView
        try {
          let povPosition;
          let panorama = new google.maps.StreetViewPanorama(panoEle, {
            position: selectedLocation,
            pov: {
                heading: povHeading,
                pitch: povPitch, 
                zoom: 0
            },
            visible: true,
          });

          if (moveOnReearth) {
            panorama.addListener("position_changed", () => {
              povPosition= JSON.parse(JSON.stringify(panorama.getPosition()))
            
              reearth.camera.lookAt({
                lat: povPosition.lat,
                lng: povPosition.lng,
                height: getHeightByTerrain(),
                heading: panorama.getPov().heading * (Math.PI/180),
                pitch: panorama.getPov().pitch * (Math.PI/180),
                range: getRangeByTerrain()
              }, {
                duration: 1
              });
            });

            panorama.addListener("pov_changed", () => {
              reearth.camera.lookAt({
                lat: povPosition.lat,
                lng: povPosition.lng,
                height: getHeightByTerrain(),
                heading: panorama.getPov().heading* (Math.PI/180),
                pitch: panorama.getPov().pitch* (Math.PI/180),
                  range: getRangeByTerrain()
                
              }, {
                duration: 1
              });
            });
          } else {
            reearth.camera.lookAt({
              lat: selectedLocation.lat,
              lng: selectedLocation.lng,
              height: getHeightByTerrain(),
              heading: povHeading * (Math.PI/180),
              pitch: povPitch * (Math.PI/180),
              range: getRangeByTerrain()
            }, {
              duration: 1
            });

            // Destroy street view events
            panorama.addListener("position_changed", () => {});
            panorama.addListener("pov_changed", () => {});
          }
        } catch (error) {
          console.log(error)
        }            
      };

      function getHeightByTerrain() {
        if(reearth?.scene?.property?.terrain?.terrain) {
          return parseInt(75)
        } else {
          return parseInt(20)
        }
      }

      function getRangeByTerrain() {
        if(reearth?.scene?.property?.terrain?.terrain) {
          return parseInt(75)
        } else {
          return parseInt(50)
        }
      }

      window.addEventListener("message", e => {
        if (e.source !== parent) return;
       
        reearth = e.source.reearth;

        if(e.data.block) {
          blockProperty = e.data.block;
        }
      
        moveOnReearth = blockProperty?.settings?.moveOnReearth ?? false

        if(blockProperty?.settings?.googleApi) {
          googleAPI = blockProperty.settings.googleApi
          povHeading = blockProperty.settings.povHeading ?? 140
          povPitch = blockProperty.settings.povPitch ?? 10

          let scriptTag = document.getElementById('google-api-cript')
          
          if (scriptTag) {
            scriptTag.setAttribute(
              "src", 
              'https://maps.googleapis.com/maps/api/js?key=' + googleAPI + '&callback=showStreetView'
            )
          } else {
            let script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + googleAPI + '&callback=showStreetView';
            script.defer = true;
            script.id = "google-api-cript"
            document.body.appendChild(script);
          }

          selectedLocation = reearth.layers.selected.property.default.location  
          showStreetView() 
        } 
      })

    </script>
    

`);

reearth.on("update", send);
send();

function send() {
  reearth.ui.postMessage({
    block: reearth.block.property
  });
}