var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_NoofHotDays_19862005_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "No of Hot Days_1986-2005",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NoofHotDays_19862005_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12464999.981577, -5547049.878133, 17396453.423719, -1116064.164138]
                            })
                        });
var lyr_HealthHospitalsHEALTH001_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://public-services.slip.wa.gov.au/public/services/SLIP_Public_Services/Health/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "3",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Health Hospitals (HEALTH-001)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_HealthHospitalsHEALTH001_2, 0]);
var lyr_CurrentActiveSchoolsSemester12022PublicDET020_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://public-services.slip.wa.gov.au/public/services/SLIP_Public_Services/Education/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Current Active Schools Semester 1 2022 - Public (DET-020)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CurrentActiveSchoolsSemester12022PublicDET020_3, 0]);

lyr_OSMStandard_0.setVisible(true);lyr_NoofHotDays_19862005_1.setVisible(true);lyr_HealthHospitalsHEALTH001_2.setVisible(true);lyr_CurrentActiveSchoolsSemester12022PublicDET020_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NoofHotDays_19862005_1,lyr_HealthHospitalsHEALTH001_2,lyr_CurrentActiveSchoolsSemester12022PublicDET020_3];
