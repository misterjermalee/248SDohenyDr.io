TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 124,
  "id": "panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_t.jpg",
  "hfovMin": 80,
  "label": "Street View",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0",
      "angle": 0,
      "rotate": false,
      "hfov": 22.8,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 153,
           "width": 105,
           "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 12.39,
        "yaw": 4.94,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.08
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53, this.camera_11C40FDA_1F97_323C_415C_B0DA6C2C3198); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_0FD2CCB2_1DB6_672C_4166_D02CFD5B0A36",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 4.94,
        "hfov": 12.39,
        "image": {
         "levels": [
          {
           "height": 306,
           "width": 211,
           "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -8.08
       }
      ]
     },
     {
      "useHandCursor": false,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 53,
           "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 24.87,
        "yaw": 6.65,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 7.92
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_09E7A35F_1DCE_2114_41BD_145448B9AD29",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 6.65,
        "hfov": 24.87,
        "image": {
         "levels": [
          {
           "height": 127,
           "width": 424,
           "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 7.92
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 132,
     "id": "panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53",
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53_t.jpg",
     "hfovMin": 60,
     "label": "Primary Entrance",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 200,
              "width": 170,
              "url": "media/panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 16.83,
           "yaw": -85.44,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -45.3
          }
         ],
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_142CB576_1D4E_2114_41B3_498186C748F4, this.camera_10956DD8_1F97_363C_41BA_C59A0DAD97C4); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000",
           "toolTip": "FRONT ENTRANCE",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_09A97091_1DCB_DFEC_41B0_F68325E73610",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -85.44,
           "hfov": 16.83,
           "image": {
            "levels": [
             {
              "height": 474,
              "width": 404,
              "url": "media/panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -45.3
          }
         ]
        },
        {
         "inertia": false,
         "id": "panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53_tcap0",
         "angle": 0,
         "rotate": false,
         "hfov": 22.8,
         "image": {
          "levels": [
           {
            "height": 850,
            "width": 850,
            "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "class": "TripodCapPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 140,
              "width": 105,
              "url": "media/panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 12.06,
           "yaw": 2.95,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -16.04
          }
         ],
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474, this.camera_108D3DEF_1F97_3614_41A7_C037A633074F); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "toolTip": "STREET VIEW",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_5732D643_1FAA_7FBF_41AC_8C980AC1E47A",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 2.95,
           "hfov": 12.06,
           "image": {
            "levels": [
             {
              "height": 281,
              "width": 211,
              "url": "media/panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -16.04
          }
         ]
        },
        {
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 200,
              "width": 127,
              "url": "media/panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 14.4,
           "yaw": -175.64,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -25.88
          }
         ],
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_142C5947_1D4A_2174_41BC_3520F29F63F1, this.camera_10B1CDFC_1F97_31F5_4179_B81A9902C9CC); this.mainPlayList.set('selectedIndex', 27)",
           "mapColor": "#FF0000",
           "toolTip": "TO CARPORT",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_C3A75AD6_1EE6_3458_41BC_9A0A76A1AAF9",
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -175.64,
           "hfov": 14.4,
           "image": {
            "levels": [
             {
              "height": 425,
              "width": 270,
              "url": "media/panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -25.88
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 3040,
          "width": 6080,
          "url": "media/panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfovMax": 126,
        "id": "panorama_142CB576_1D4E_2114_41B3_498186C748F4",
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_142CB576_1D4E_2114_41B3_498186C748F4_t.jpg",
        "hfovMin": 60,
        "label": "Secondary Entrance",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_142CB576_1D4E_2114_41B3_498186C748F4_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 174,
                 "width": 189,
                 "url": "media/panorama_142CB576_1D4E_2114_41B3_498186C748F4_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 18.01,
              "yaw": -175.51,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -36.8
             }
            ],
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441, this.camera_1190322D_1F96_D214_41BE_D2F4DFB0D82A); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "toolTip": "LIVING ROOM",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_08C62998_1DCA_211C_41A0_B7844229FB12",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -175.51,
              "hfov": 18.01,
              "image": {
               "levels": [
                {
                 "height": 348,
                 "width": 379,
                 "url": "media/panorama_142CB576_1D4E_2114_41B3_498186C748F4_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -36.8
             }
            ]
           },
           {
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 179,
                 "width": 200,
                 "url": "media/panorama_142CB576_1D4E_2114_41B3_498186C748F4_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 17.49,
              "yaw": -2.52,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -55.34
             }
            ],
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53, this.camera_126CA21E_1F96_D234_41B7_58350A12BA5E); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "toolTip": "FRONT ENTRANCE",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_55ED4E91_1FAA_6CD8_41A5_CB22A41C6741",
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -2.52,
              "hfov": 17.49,
              "image": {
               "levels": [
                {
                 "height": 465,
                 "width": 519,
                 "url": "media/panorama_142CB576_1D4E_2114_41B3_498186C748F4_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -55.34
             }
            ]
           },
           {
            "inertia": false,
            "id": "panorama_142CB576_1D4E_2114_41B3_498186C748F4_tcap0",
            "angle": 0,
            "rotate": false,
            "hfov": 22.8,
            "image": {
             "levels": [
              {
               "height": 850,
               "width": 850,
               "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "class": "TripodCapPanoramaOverlay"
           }
          ],
          "class": "SphericPanoramaFrame",
          "sphere": {
           "levels": [
            {
             "height": 3040,
             "width": 6080,
             "url": "media/panorama_142CB576_1D4E_2114_41B3_498186C748F4_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_142CB576_1D4E_2114_41B3_498186C748F4.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53",
          "yaw": -2.52,
          "class": "AdjacentPanorama",
          "backwardYaw": -85.44,
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 131,
           "id": "panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441",
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441_t.jpg",
           "hfovMin": 60,
           "label": "Living Room",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 41,
                    "width": 83,
                    "url": "media/panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 9.36,
                 "yaw": 83.29,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -19.84
                }
               ],
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95, this.camera_124C81F1_1F97_2E0C_41A7_ED6840BADA08); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "#FF0000",
                 "toolTip": "DINING ROOM",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_105B11DB_1DAE_1BDA_419E_F46053D75055",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 83.29,
                 "hfov": 9.36,
                 "image": {
                  "levels": [
                   {
                    "height": 83,
                    "width": 167,
                    "url": "media/panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -19.84
                }
               ]
              },
              {
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 77,
                    "width": 67,
                    "url": "media/panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441_0_HS_4_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.15,
                 "yaw": 1.5,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -26.42
                }
               ],
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_142CB576_1D4E_2114_41B3_498186C748F4, this.camera_1250B1D4_1F97_2E34_41AA_5AB61FA8ADD4); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000",
                 "toolTip": "BACK TO ENTRANCE",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_53C3C7CE_1FA6_1C48_4186_3DA552FABFB3",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 1.5,
                 "hfov": 7.15,
                 "image": {
                  "levels": [
                   {
                    "height": 155,
                    "width": 134,
                    "url": "media/panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441_0_HS_4_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -26.42
                }
               ]
              },
              {
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 200,
                    "width": 28,
                    "url": "media/panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441_0_HS_5_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 4.65,
                 "yaw": 118.5,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -6.91
                }
               ],
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000",
                 "toolTip": "BEDROOM 1",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_50AA63F9_1FA6_3448_41A8_EA890129CEB6",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 118.5,
                 "roll": 0,
                 "hfov": 4.65,
                 "image": {
                  "levels": [
                   {
                    "height": 551,
                    "width": 78,
                    "url": "media/panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441_0_HS_5_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -6.91
                }
               ]
              },
              {
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 48,
                    "width": 40,
                    "url": "media/panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441_0_HS_6_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 4.78,
                 "yaw": 118.58,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -0.8
                }
               ],
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_142C6B33_1D4D_E113_4152_2E078B497D82, this.camera_1245D1E2_1F97_2E0C_41BA_0096083DAFB6); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000",
                 "toolTip": "BEDROOM 1",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_F620CD5E_1EFA_2C48_416B_B4C81664A183",
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 118.58,
                 "hfov": 4.78,
                 "image": {
                  "levels": [
                   {
                    "height": 97,
                    "width": 80,
                    "url": "media/panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441_0_HS_6_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -0.8
                }
               ]
              },
              {
               "inertia": false,
               "id": "panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441_tcap0",
               "angle": 0,
               "rotate": false,
               "hfov": 22.8,
               "image": {
                "levels": [
                 {
                  "height": 850,
                  "width": 850,
                  "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "class": "TripodCapPanoramaOverlay"
              }
             ],
             "class": "SphericPanoramaFrame",
             "sphere": {
              "levels": [
               {
                "height": 3040,
                "width": 6080,
                "url": "media/panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_142CB576_1D4E_2114_41B3_498186C748F4",
             "yaw": 1.5,
             "class": "AdjacentPanorama",
             "backwardYaw": -175.51,
             "distance": 1
            },
            {
             "panorama": {
              "hfovMax": 123,
              "id": "panorama_142C6B33_1D4D_E113_4152_2E078B497D82",
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_142C6B33_1D4D_E113_4152_2E078B497D82_t.jpg",
              "hfovMin": 60,
              "label": "Bedroom 1 Wide 3",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_142C6B33_1D4D_E113_4152_2E078B497D82_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 88,
                       "width": 115,
                       "url": "media/panorama_142C6B33_1D4D_E113_4152_2E078B497D82_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 11.8,
                    "yaw": 87.02,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -30.35
                   }
                  ],
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "click": "this.startPanoramaWithCamera(this.panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441, this.camera_0FB7B12C_1F97_2E14_41AE_C0B5ECD82BE2); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000",
                    "toolTip": "LIVING ROOM",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_255BA9CC_1DE7_E83F_41BA_50181300D8F3",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 87.02,
                    "hfov": 11.8,
                    "image": {
                     "levels": [
                      {
                       "height": 176,
                       "width": 230,
                       "url": "media/panorama_142C6B33_1D4D_E113_4152_2E078B497D82_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -30.35
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 76,
                       "width": 128,
                       "url": "media/panorama_142C6B33_1D4D_E113_4152_2E078B497D82_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 12.46,
                    "yaw": -76.91,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -34.9
                   }
                  ],
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "click": "this.startPanoramaWithCamera(this.panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E, this.camera_0FAB713B_1F97_2E7C_41AD_4C9678C6299A); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "#FF0000",
                    "toolTip": "BEDROOM 1",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_DA283C23_1EDE_33F8_41B9_2FD86CF049E1",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -76.91,
                    "hfov": 12.46,
                    "image": {
                     "levels": [
                      {
                       "height": 153,
                       "width": 256,
                       "url": "media/panorama_142C6B33_1D4D_E113_4152_2E078B497D82_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -34.9
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 200,
                       "width": 80,
                       "url": "media/panorama_142C6B33_1D4D_E113_4152_2E078B497D82_0_HS_2_1_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 13.93,
                    "yaw": -70.15,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -7.34
                   }
                  ],
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "click": "this.mainPlayList.set('selectedIndex', 24)",
                    "mapColor": "#FF0000",
                    "toolTip": "PATIO AREA",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_D675305E_1EDE_1448_418A_29950BCDA611",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -70.15,
                    "roll": 0,
                    "hfov": 13.93,
                    "image": {
                     "levels": [
                      {
                       "height": 585,
                       "width": 236,
                       "url": "media/panorama_142C6B33_1D4D_E113_4152_2E078B497D82_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -7.34
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 67,
                       "width": 68,
                       "url": "media/panorama_142C6B33_1D4D_E113_4152_2E078B497D82_0_HS_3_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 8.13,
                    "yaw": -69.49,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -3.57
                   }
                  ],
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "click": "this.mainPlayList.set('selectedIndex', 24)",
                    "mapColor": "#FF0000",
                    "toolTip": "PATIO AREA",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_DC73610E_1EDE_15C8_41B7_C446C6AE7615",
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -69.49,
                    "hfov": 8.13,
                    "image": {
                     "levels": [
                      {
                       "height": 134,
                       "width": 137,
                       "url": "media/panorama_142C6B33_1D4D_E113_4152_2E078B497D82_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -3.57
                   }
                  ]
                 },
                 {
                  "inertia": false,
                  "id": "panorama_142C6B33_1D4D_E113_4152_2E078B497D82_tcap0",
                  "angle": 0,
                  "rotate": false,
                  "hfov": 22.8,
                  "image": {
                   "levels": [
                    {
                     "height": 850,
                     "width": 850,
                     "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "class": "TripodCapPanoramaOverlay"
                 }
                ],
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "levels": [
                  {
                   "height": 3040,
                   "width": 6080,
                   "url": "media/panorama_142C6B33_1D4D_E113_4152_2E078B497D82_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_142C6B33_1D4D_E113_4152_2E078B497D82.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441",
                "yaw": 87.02,
                "class": "AdjacentPanorama",
                "backwardYaw": 118.58,
                "distance": 1
               },
               {
                "panorama": {
                 "hfovMax": 125,
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_t.jpg",
                 "id": "panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E",
                 "hfovMin": 60,
                 "label": "Bedroom 1 Wide 1",
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_t.jpg",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 101,
                          "width": 122,
                          "url": "media/panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 11.86,
                       "yaw": 88.59,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -35.36
                      }
                     ],
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.startPanoramaWithCamera(this.panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2, this.camera_113A8014_1F97_2E34_419D_DC81758DE416); this.mainPlayList.set('selectedIndex', 5)",
                       "mapColor": "#FF0000",
                       "toolTip": "BEDROOM 1",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_324270B8_1DFA_7866_41A5_0DB6DC1E72CD",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 88.59,
                       "hfov": 11.86,
                       "image": {
                        "levels": [
                         {
                          "height": 203,
                          "width": 245,
                          "url": "media/panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -35.36
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 90,
                          "width": 142,
                          "url": "media/panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 13.67,
                       "yaw": -174.48,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -35.91
                      }
                     ],
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.startPanoramaWithCamera(this.panorama_142C6B33_1D4D_E113_4152_2E078B497D82, this.camera_11528025_1F97_2E14_41BB_E79094E3CD07); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000",
                       "toolTip": "BEDROOM 1",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_2F82685D_1DFA_28DE_41BA_37D92C556F2C",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -174.48,
                       "hfov": 13.67,
                       "image": {
                        "levels": [
                         {
                          "height": 181,
                          "width": 285,
                          "url": "media/panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -35.91
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 200,
                          "width": 60,
                          "url": "media/panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_0_HS_2_1_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 27.83,
                       "yaw": 42.24,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -12.52
                      }
                     ],
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.mainPlayList.set('selectedIndex', 24)",
                       "mapColor": "#FF0000",
                       "toolTip": "PATIO AREA",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_A7C24F5C_1EAE_2C48_41BE_7A384CC77827",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 42.24,
                       "roll": 0,
                       "hfov": 27.83,
                       "image": {
                        "levels": [
                         {
                          "height": 1578,
                          "width": 479,
                          "url": "media/panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -12.52
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 186,
                          "width": 132,
                          "url": "media/panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_0_HS_3_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 15.52,
                       "yaw": 42.57,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -7.8
                      }
                     ],
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.startPanoramaWithCamera(this.panorama_142F9680_1D4E_23EC_4163_994A48C558C0, this.camera_110DA005_1F97_2E14_41A0_B3F79C52405D); this.mainPlayList.set('selectedIndex', 24)",
                       "mapColor": "#FF0000",
                       "toolTip": "PATIO AREA",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_ABE418C4_1EAA_14B8_41B3_83AD7EA19926",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 42.57,
                       "hfov": 15.52,
                       "image": {
                        "levels": [
                         {
                          "height": 373,
                          "width": 264,
                          "url": "media/panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_0_HS_3_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -7.8
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 33,
                          "width": 81,
                          "url": "media/panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_0_HS_4_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 9.01,
                       "yaw": -176.66,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -20.64
                      }
                     ],
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.mainPlayList.set('selectedIndex', 3)",
                       "mapColor": "#FF0000",
                       "toolTip": "LIVING ROOM",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_A76ACA72_1EA6_7458_41B4_E2576FFBD64B",
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -176.66,
                       "hfov": 9.01,
                       "image": {
                        "levels": [
                         {
                          "height": 66,
                          "width": 162,
                          "url": "media/panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_0_HS_4_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -20.64
                      }
                     ]
                    },
                    {
                     "inertia": false,
                     "id": "panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_tcap0",
                     "angle": 0,
                     "rotate": false,
                     "hfov": 22.8,
                     "image": {
                      "levels": [
                       {
                        "height": 850,
                        "width": 850,
                        "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "class": "TripodCapPanoramaOverlay"
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "levels": [
                     {
                      "height": 3040,
                      "width": 6080,
                      "url": "media/panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "hfovMax": 123,
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_t.jpg",
                    "id": "panorama_142F9680_1D4E_23EC_4163_994A48C558C0",
                    "hfovMin": 60,
                    "label": "Patio 2",
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_t.jpg",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 200,
                             "width": 70,
                             "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_0_HS_1_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 16.61,
                          "yaw": 22.51,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -9.27
                         }
                        ],
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "click": "this.mainPlayList.set('selectedIndex', 6)",
                          "mapColor": "#FF0000",
                          "toolTip": "BEDROOM 1",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_B5E84518_1EBA_1DC8_41A3_0328A21198A4",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 22.51,
                          "roll": 0,
                          "hfov": 16.61,
                          "image": {
                           "levels": [
                            {
                             "height": 798,
                             "width": 282,
                             "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -9.27
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 72,
                             "width": 61,
                             "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_0_HS_2_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.28,
                          "yaw": 23.07,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -5.25
                         }
                        ],
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "click": "this.startPanoramaWithCamera(this.panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E, this.camera_122861C4_1F97_2E14_419D_B941E8F4CCDA); this.mainPlayList.set('selectedIndex', 6)",
                          "mapColor": "#FF0000",
                          "toolTip": "BEDROOM 1",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_B715B661_1EA6_1C78_41AA_C322CCA715CC",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 23.07,
                          "hfov": 7.28,
                          "image": {
                           "levels": [
                            {
                             "height": 145,
                             "width": 123,
                             "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_0_HS_2_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -5.25
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 20,
                             "width": 59,
                             "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_0_HS_3_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 6.8,
                          "yaw": 87.74,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -16.24
                         }
                        ],
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "click": "this.startPanoramaWithCamera(this.panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80, this.camera_0F5CB185_1F97_2E14_41B6_B50079B72655); this.mainPlayList.set('selectedIndex', 22)",
                          "mapColor": "#FF0000",
                          "toolTip": "SIDEYARD",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_B7572C3F_1EA6_33C8_41A6_5A144C715BB1",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 87.74,
                          "hfov": 6.8,
                          "image": {
                           "levels": [
                            {
                             "height": 41,
                             "width": 119,
                             "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_0_HS_3_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -16.24
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 100,
                             "width": 126,
                             "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_0_HS_4_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 12.65,
                          "yaw": 88.67,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -32.62
                         }
                        ],
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "click": "this.startPanoramaWithCamera(this.panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF, this.camera_0F38B176_1F97_2EF4_41AF_5E950F8F4653); this.mainPlayList.set('selectedIndex', 23)",
                          "mapColor": "#FF0000",
                          "toolTip": "PATIO",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_B146AA3E_1EA6_17C8_41BA_DBEAD8D6697A",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 88.67,
                          "hfov": 12.65,
                          "image": {
                           "levels": [
                            {
                             "height": 201,
                             "width": 253,
                             "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_0_HS_4_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -32.62
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 11,
                             "width": 50,
                             "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_0_HS_5_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 5.91,
                          "yaw": 86.07,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -11.57
                         }
                        ],
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "click": "this.mainPlayList.set('selectedIndex', 21)",
                          "mapColor": "#FF0000",
                          "toolTip": "BACK ENTRANCE",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_B2DBD538_1EAA_1DC8_41BB_1DF21DD3354C",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 86.07,
                          "hfov": 5.91,
                          "image": {
                           "levels": [
                            {
                             "height": 23,
                             "width": 101,
                             "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_0_HS_5_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -11.57
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 104,
                             "width": 76,
                             "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_0_HS_6_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 9.09,
                          "yaw": 84.38,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -4.42
                         }
                        ],
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "click": "this.mainPlayList.set('selectedIndex', 25)",
                          "mapColor": "#FF0000",
                          "toolTip": "BACK ENTRANCE TO CARPORT",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_AD3046F2_1EAA_1C58_419A_728870909E5F",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 84.38,
                          "roll": 0,
                          "hfov": 9.09,
                          "image": {
                           "levels": [
                            {
                             "height": 208,
                             "width": 153,
                             "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_0_HS_6_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -4.42
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 36,
                             "width": 28,
                             "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_0_HS_7_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 3.42,
                          "yaw": 84.95,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -1.68
                         }
                        ],
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "click": "this.mainPlayList.set('selectedIndex', 25)",
                          "mapColor": "#FF0000",
                          "toolTip": "BACK ENTRANCE TO CARPORT",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_B3B31B71_1EAA_3458_4188_820A8EDD2598",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 84.95,
                          "hfov": 3.42,
                          "image": {
                           "levels": [
                            {
                             "height": 72,
                             "width": 57,
                             "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_0_HS_7_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -1.68
                         }
                        ]
                       },
                       {
                        "inertia": false,
                        "id": "panorama_142F9680_1D4E_23EC_4163_994A48C558C0_tcap0",
                        "angle": 0,
                        "rotate": false,
                        "hfov": 22.8,
                        "image": {
                         "levels": [
                          {
                           "height": 850,
                           "width": 850,
                           "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "class": "TripodCapPanoramaOverlay"
                       }
                      ],
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "levels": [
                        {
                         "height": 3040,
                         "width": 6080,
                         "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_142F9680_1D4E_23EC_4163_994A48C558C0.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ],
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": {
                       "hfovMax": 123,
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_t.jpg",
                       "id": "panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF",
                       "hfovMin": 60,
                       "label": "Patio 1",
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_t.jpg",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 66,
                                "width": 142,
                                "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 14.58,
                             "yaw": -72.13,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -29.92
                            }
                           ],
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "click": "this.startPanoramaWithCamera(this.panorama_142F9680_1D4E_23EC_4163_994A48C558C0, this.camera_107E7105_1F97_2E14_4171_4B4A131D1B67); this.mainPlayList.set('selectedIndex', 24)",
                             "mapColor": "#FF0000",
                             "toolTip": "PATIO",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_2C5793B0_1DFE_1866_4187_B15F3C9ABD0D",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -72.13,
                             "hfov": 14.58,
                             "image": {
                              "levels": [
                               {
                                "height": 133,
                                "width": 284,
                                "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -29.92
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 77,
                                "width": 131,
                                "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 13.3,
                             "yaw": 89.65,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -31.65
                            }
                           ],
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "click": "this.startPanoramaWithCamera(this.panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80, this.camera_0F90311D_1F97_2E34_41BB_5FA55341CF19); this.mainPlayList.set('selectedIndex', 22)",
                             "mapColor": "#FF0000",
                             "toolTip": "SIDEYARD",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_BFCFD1F9_1EA6_344B_41AE_112E427E7FB6",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 89.65,
                             "hfov": 13.3,
                             "image": {
                              "levels": [
                               {
                                "height": 154,
                                "width": 263,
                                "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -31.65
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 18,
                                "width": 53,
                                "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_0_HS_2_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 6.04,
                             "yaw": 88.5,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -16.62
                            }
                           ],
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "click": "this.startPanoramaWithCamera(this.panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F, this.camera_105AA0EB_1F97_2E1C_41A7_3503C7B98C95); this.mainPlayList.set('selectedIndex', 21)",
                             "mapColor": "#FF0000",
                             "toolTip": "BACK ENTRANCE",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_BEC58908_1EA6_75C8_41BB_A2EA0E128BBF",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 88.5,
                             "hfov": 6.04,
                             "image": {
                              "levels": [
                               {
                                "height": 37,
                                "width": 106,
                                "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_0_HS_2_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -16.62
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 147,
                                "width": 105,
                                "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_0_HS_3_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 12.48,
                             "yaw": 87.46,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -6.1
                            }
                           ],
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "click": "this.mainPlayList.set('selectedIndex', 25)",
                             "mapColor": "#FF0000",
                             "toolTip": "BACK ENTRANCE TO CARPORT",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_BCD8A681_1EBA_3CB8_41A6_3992D3F407CA",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 87.46,
                             "roll": 0,
                             "hfov": 12.48,
                             "image": {
                              "levels": [
                               {
                                "height": 295,
                                "width": 211,
                                "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_0_HS_3_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -6.1
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 200,
                                "width": 77,
                                "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_0_HS_4_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 16.59,
                             "yaw": -25.34,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -8.52
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true,
                             "toolTip": "BEDROOM 1",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_B673634E_1EBE_1448_41B1_9B91C93DF7C5",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -25.34,
                             "roll": 0,
                             "hfov": 16.59,
                             "image": {
                              "levels": [
                               {
                                "height": 733,
                                "width": 282,
                                "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_0_HS_4_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -8.52
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 80,
                                "width": 81,
                                "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_0_HS_5_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 9.64,
                             "yaw": -24.8,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -6.1
                            }
                           ],
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "click": "this.mainPlayList.set('selectedIndex', 6)",
                             "mapColor": "#FF0000",
                             "toolTip": "BEDROOM 1",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_BC308F85_1EBF_ECB8_41AF_6B6CAF94DB45",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -24.8,
                             "hfov": 9.64,
                             "image": {
                              "levels": [
                               {
                                "height": 160,
                                "width": 163,
                                "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_0_HS_5_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -6.1
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 39,
                                "width": 38,
                                "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_0_HS_6_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 4.55,
                             "yaw": 88.06,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -5.08
                            }
                           ],
                           "areas": [
                            {
                             "displayTooltipInTouchScreens": true,
                             "click": "this.mainPlayList.set('selectedIndex', 25)",
                             "mapColor": "#FF0000",
                             "toolTip": "BACK ENTRANCE TO CARPORT",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_B4735EED_1EBA_EC48_41B4_2674C2176CD3",
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 88.06,
                             "hfov": 4.55,
                             "image": {
                              "levels": [
                               {
                                "height": 78,
                                "width": 77,
                                "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_0_HS_6_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -5.08
                            }
                           ]
                          },
                          {
                           "inertia": false,
                           "id": "panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_tcap0",
                           "angle": 0,
                           "rotate": false,
                           "hfov": 22.8,
                           "image": {
                            "levels": [
                             {
                              "height": 850,
                              "width": 850,
                              "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "class": "TripodCapPanoramaOverlay"
                          }
                         ],
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "levels": [
                           {
                            "height": 3040,
                            "width": 6080,
                            "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ],
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": {
                          "hfovMax": 125,
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_t.jpg",
                          "id": "panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F",
                          "hfovMin": 60,
                          "label": "Backside 1",
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_t.jpg",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 61,
                                   "width": 102,
                                   "url": "media/panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_0_HS_1_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 10.92,
                                "yaw": 85.65,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -26.22
                               }
                              ],
                              "areas": [
                               {
                                "displayTooltipInTouchScreens": true,
                                "click": "this.startPanoramaWithCamera(this.panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80, this.camera_11AC7FCB_1F97_321C_4189_651A689E317A); this.mainPlayList.set('selectedIndex', 22)",
                                "mapColor": "#FF0000",
                                "toolTip": "SIDEYARD",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_33122773_1DFA_18EA_41BB_EFBEB04A3DDA",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 85.65,
                                "hfov": 10.92,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 123,
                                   "width": 205,
                                   "url": "media/panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -26.22
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 164,
                                   "width": 200,
                                   "url": "media/panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_0_HS_2_1_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 104.5,
                                "yaw": -89.35,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -21.38
                               }
                              ],
                              "areas": [
                               {
                                "displayTooltipInTouchScreens": true,
                                "click": "this.startPanoramaWithCamera(this.panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E, this.camera_11B1BFBC_1F97_3274_41AA_83C5FBFAF966); this.mainPlayList.set('selectedIndex', 25)",
                                "mapColor": "#FF0000",
                                "toolTip": "BACK ENTRANCE TO CARPORT",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_889DE78D_1EA6_3CC8_41A0_D6C52C61A7FA",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -89.35,
                                "roll": 0,
                                "hfov": 104.5,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 1680,
                                   "width": 2048,
                                   "url": "media/panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_0_HS_2_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -21.38
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 61,
                                   "url": "media/panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_0_HS_3_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7,
                                "yaw": 88.31,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -17.09
                               }
                              ],
                              "areas": [
                               {
                                "displayTooltipInTouchScreens": true,
                                "click": "this.startPanoramaWithCamera(this.panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF, this.camera_126E0FA0_1F97_320C_4193_28DC6C590F86); this.mainPlayList.set('selectedIndex', 23)",
                                "mapColor": "#FF0000",
                                "toolTip": "PATIO",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_88101EB1_1EAA_6CD8_41B6_4D69DF35372B",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 88.31,
                                "hfov": 7,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 32,
                                   "width": 123,
                                   "url": "media/panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_0_HS_3_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -17.09
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 151,
                                   "width": 200,
                                   "url": "media/panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_0_HS_4_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 17.8,
                                "yaw": -168.06,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -43.99
                               }
                              ],
                              "areas": [
                               {
                                "displayTooltipInTouchScreens": true,
                                "click": "this.startPanoramaWithCamera(this.panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083, this.camera_11858FAF_1F97_3214_41BC_7333E41E100E); this.mainPlayList.set('selectedIndex', 20)",
                                "mapColor": "#FF0000",
                                "toolTip": "MASTER BEDROOM",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_89389AA7_1EAE_F4F8_4199_BD5A788C9784",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -168.06,
                                "hfov": 17.8,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 316,
                                   "width": 417,
                                   "url": "media/panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_0_HS_4_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -43.99
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 188,
                                   "width": 200,
                                   "url": "media/panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_0_HS_5_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 26.64,
                                "yaw": -88.44,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -11
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true,
                                "toolTip": "BACK ENTRANCE TO CARPORT",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_E560945D_1EE6_3C48_41BD_29F71D115DCF",
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -88.44,
                                "hfov": 26.64,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 432,
                                   "width": 458,
                                   "url": "media/panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_0_HS_5_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -11
                               }
                              ]
                             },
                             {
                              "inertia": false,
                              "id": "panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_tcap0",
                              "angle": 0,
                              "rotate": false,
                              "hfov": 22.8,
                              "image": {
                               "levels": [
                                {
                                 "height": 850,
                                 "width": 850,
                                 "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                 "class": "ImageResourceLevel"
                                }
                               ],
                               "class": "ImageResource"
                              },
                              "class": "TripodCapPanoramaOverlay"
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "levels": [
                              {
                               "height": 3040,
                               "width": 6080,
                               "url": "media/panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF",
                            "yaw": 88.31,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 88.5,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMax": 124,
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083_t.jpg",
                             "id": "panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083",
                             "hfovMin": 60,
                             "label": "Master Bedroom 4",
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083_t.jpg",
                               "overlays": [
                                {
                                 "inertia": false,
                                 "id": "panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083_tcap0",
                                 "angle": 0,
                                 "rotate": false,
                                 "hfov": 22.8,
                                 "image": {
                                  "levels": [
                                   {
                                    "height": 850,
                                    "width": 850,
                                    "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "class": "TripodCapPanoramaOverlay"
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 76,
                                      "width": 127,
                                      "url": "media/panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083_0_HS_0_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 12.4,
                                   "yaw": -76.56,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -34.82
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.startPanoramaWithCamera(this.panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F, this.camera_10D09070_1F97_2E0C_41B6_89A08B93C180); this.mainPlayList.set('selectedIndex', 21)",
                                   "mapColor": "#FF0000",
                                   "toolTip": "SIDEYARD/PATIO",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_30945640_1DE6_7827_41BC_CFC7BDFBEDEF",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -76.56,
                                   "hfov": 12.4,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 152,
                                      "width": 255,
                                      "url": "media/panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -34.82
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 162,
                                      "width": 200,
                                      "url": "media/panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083_0_HS_1_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 17.76,
                                   "yaw": 172.34,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -51.69
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.startPanoramaWithCamera(this.panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718, this.camera_10F4508E_1F97_2E14_4190_931B97D172DD); this.mainPlayList.set('selectedIndex', 19)",
                                   "mapColor": "#FF0000",
                                   "toolTip": "MASTER BEDROOM",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_963604FF_1E5E_FC48_418D_FCF12707BABE",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 172.34,
                                   "hfov": 17.76,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 393,
                                      "width": 483,
                                      "url": "media/panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083_0_HS_1_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -51.69
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 93,
                                      "width": 125,
                                      "url": "media/panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083_0_HS_2_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 12.24,
                                   "yaw": 126.8,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -34.5
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.startPanoramaWithCamera(this.panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA, this.camera_10E9E0A8_1F97_2E1C_41B5_379842D06DFF); this.mainPlayList.set('selectedIndex', 18)",
                                   "mapColor": "#FF0000",
                                   "toolTip": "MASTER BEDROOM",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_98716B33_1E5A_35D8_41AF_BE6C1C993535",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 126.8,
                                   "hfov": 12.24,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 186,
                                      "width": 250,
                                      "url": "media/panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083_0_HS_2_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -34.5
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 19,
                                      "width": 68,
                                      "url": "media/panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083_0_HS_3_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.56,
                                   "yaw": 113.25,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -21.45
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.mainPlayList.set('selectedIndex', 16)",
                                   "mapColor": "#FF0000",
                                   "toolTip": "MASTER BEDROOM",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_91BE230B_1E5A_15C8_41AF_3AC7C92787C5",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 113.25,
                                   "hfov": 7.56,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 39,
                                      "width": 137,
                                      "url": "media/panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083_0_HS_3_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -21.45
                                  }
                                 ]
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 3040,
                                  "width": 6080,
                                  "url": "media/panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F",
                               "yaw": -76.56,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -168.06,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "hfovMax": 124,
                                "id": "panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718",
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_t.jpg",
                                "hfovMin": 60,
                                "label": "Master Bedroom 3",
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_t.jpg",
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 104,
                                         "width": 147,
                                         "url": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_0_HS_1_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 13.97,
                                      "yaw": 84.32,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -37.06
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.startPanoramaWithCamera(this.panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA, this.camera_0FF03EE6_1F97_3214_41A4_89E172904BF5); this.mainPlayList.set('selectedIndex', 18)",
                                      "mapColor": "#FF0000",
                                      "toolTip": "MASTER BEDROOM",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_9EB98FCC_1E66_2C48_4187_BB7205CD6DB3",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": 84.32,
                                      "hfov": 13.97,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 209,
                                         "width": 295,
                                         "url": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_0_HS_1_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -37.06
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 24,
                                         "width": 77,
                                         "url": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_0_HS_2_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 8.5,
                                      "yaw": 85.19,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -21.48
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.mainPlayList.set('selectedIndex', 16)",
                                      "mapColor": "#FF0000",
                                      "toolTip": "MASTER BEDROOM",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_9E21FBF2_1E66_1458_41B1_807F345B7F01",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": 85.19,
                                      "hfov": 8.5,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 48,
                                         "width": 154,
                                         "url": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_0_HS_2_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -21.48
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 13,
                                         "width": 59,
                                         "url": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_0_HS_3_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 6.8,
                                      "yaw": 85.72,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -13.64
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.mainPlayList.set('selectedIndex', 9)",
                                      "mapColor": "#FF0000",
                                      "toolTip": "KITCHEN",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_9C21B329_1E66_15C8_41A1_155D4F2E9282",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": 85.72,
                                      "hfov": 6.8,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 27,
                                         "width": 118,
                                         "url": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_0_HS_3_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -13.64
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 200,
                                         "width": 50,
                                         "url": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_0_HS_4_1_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 17.2,
                                      "yaw": -36.17,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -12.46
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.mainPlayList.set('selectedIndex', 21)",
                                      "mapColor": "#FF0000",
                                      "toolTip": "TO BACK ENTRANCE",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_9A08A391_1E5A_14D8_41A7_3D0EC0383573",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -36.17,
                                      "roll": 0,
                                      "hfov": 17.2,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 1148,
                                         "width": 292,
                                         "url": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_0_HS_4_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -12.46
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 116,
                                         "width": 160,
                                         "url": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_0_HS_5_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 14.14,
                                      "yaw": -8.42,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -41.93
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.startPanoramaWithCamera(this.panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083, this.camera_0FDCBED7_1F97_3234_41A3_C0ACABFA4C38); this.mainPlayList.set('selectedIndex', 20)",
                                      "mapColor": "#FF0000",
                                      "toolTip": "MASTER BEDROOM",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_9B6B9A4E_1E5E_3448_41B6_FAD4A5335867",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -8.42,
                                      "hfov": 14.14,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 232,
                                         "width": 321,
                                         "url": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_0_HS_5_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -41.93
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 133,
                                         "width": 108,
                                         "url": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_0_HS_6_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 12.59,
                                      "yaw": -35.27,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -10.11
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.mainPlayList.set('selectedIndex', 21)",
                                      "mapColor": "#FF0000",
                                      "toolTip": "TO BACK ENTRANCE",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_E7D47AB8_1EFA_34C8_4198_F0DE96714E8D",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -35.27,
                                      "hfov": 12.59,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 266,
                                         "width": 216,
                                         "url": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_0_HS_6_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -10.11
                                     }
                                    ]
                                   },
                                   {
                                    "inertia": false,
                                    "id": "panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_tcap0",
                                    "angle": 0,
                                    "rotate": false,
                                    "hfov": 22.8,
                                    "image": {
                                     "levels": [
                                      {
                                       "height": 850,
                                       "width": 850,
                                       "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "class": "TripodCapPanoramaOverlay"
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame",
                                  "sphere": {
                                   "levels": [
                                    {
                                     "height": 3040,
                                     "width": 6080,
                                     "url": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_hq.jpeg",
                                     "class": "ImageResourceLevel"
                                    },
                                    {
                                     "height": 1608,
                                     "width": 3217,
                                     "url": "media/panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718.jpeg",
                                     "class": "ImageResourceLevel"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  }
                                 }
                                ],
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083",
                                  "yaw": -8.42,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 172.34,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": {
                                   "hfovMax": 123,
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_t.jpg",
                                   "id": "panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA",
                                   "hfovMin": 60,
                                   "label": "Master Bedroom 2",
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_t.jpg",
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 130,
                                            "width": 181,
                                            "url": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_0_HS_0_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 16.34,
                                         "yaw": -96.98,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -40.62
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "displayTooltipInTouchScreens": true,
                                         "click": "this.startPanoramaWithCamera(this.panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718, this.camera_0FCC714A_1F97_2E1C_41BE_F2E6D6C302B7); this.mainPlayList.set('selectedIndex', 19)",
                                         "mapColor": "#FF0000",
                                         "toolTip": "MASTER BEDROOM",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_31D689B3_1DEA_686A_41B8_12FB2A12D297",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -96.98,
                                         "hfov": 16.34,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 260,
                                            "width": 363,
                                            "url": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_0_HS_0_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -40.62
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 94,
                                            "width": 139,
                                            "url": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_0_HS_1_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 13.25,
                                         "yaw": 82.64,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -36.8
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "displayTooltipInTouchScreens": true,
                                         "click": "this.startPanoramaWithCamera(this.panorama_142C146F_1D4E_6734_41B3_D05B01677309, this.camera_0FE00159_1F97_2E3C_41AA_61AD701745A8); this.mainPlayList.set('selectedIndex', 16)",
                                         "mapColor": "#FF0000",
                                         "toolTip": "MASTER BEDROOM",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_63063B2D_1E6A_35CB_41A6_F49550DC2FD9",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 82.64,
                                         "hfov": 13.25,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 188,
                                            "width": 279,
                                            "url": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_0_HS_1_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -36.8
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 20,
                                            "width": 77,
                                            "url": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_0_HS_2_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 8.65,
                                         "yaw": 82.97,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -18.72
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "displayTooltipInTouchScreens": true,
                                         "click": "this.mainPlayList.set('selectedIndex', 9)",
                                         "mapColor": "#FF0000",
                                         "toolTip": "KITCHEN",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_9DFE5558_1E6E_FC48_41B9_1C23EC06F808",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 82.97,
                                         "hfov": 8.65,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 40,
                                            "width": 154,
                                            "url": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_0_HS_2_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -18.72
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 200,
                                            "width": 85,
                                            "url": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_0_HS_3_1_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 15.05,
                                         "yaw": -66.71,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -8.12
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "displayTooltipInTouchScreens": true,
                                         "click": "this.mainPlayList.set('selectedIndex', 21)",
                                         "mapColor": "#FF0000",
                                         "toolTip": "TO BACK ENTRANCE",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_624B5094_1E6E_34D8_419E_F5C446B0745D",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -66.71,
                                         "roll": 0,
                                         "hfov": 15.05,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 594,
                                            "width": 255,
                                            "url": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_0_HS_3_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -8.12
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 63,
                                            "width": 116,
                                            "url": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_0_HS_4_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 11.61,
                                         "yaw": -58.75,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -32.51
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "displayTooltipInTouchScreens": true,
                                         "click": "this.startPanoramaWithCamera(this.panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083, this.camera_0F04E168_1F97_2E1C_41B3_5577F12394FB); this.mainPlayList.set('selectedIndex', 20)",
                                         "mapColor": "#FF0000",
                                         "toolTip": "MASTER BEDROOM",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_9FBD1DE3_1E65_EC78_419D_91EC73E52813",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -58.75,
                                         "hfov": 11.61,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 126,
                                            "width": 232,
                                            "url": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_0_HS_4_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -32.51
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 80,
                                            "width": 82,
                                            "url": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_0_HS_5_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 9.73,
                                         "yaw": -65.97,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -6.28
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "displayTooltipInTouchScreens": true,
                                         "click": "this.mainPlayList.set('selectedIndex', 21)",
                                         "mapColor": "#FF0000",
                                         "toolTip": "TO BACK ENTRANCE",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_EB9BD237_1EFA_17C7_41B6_527F20D17559",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -65.97,
                                         "hfov": 9.73,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 161,
                                            "width": 165,
                                            "url": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_0_HS_5_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -6.28
                                        }
                                       ]
                                      },
                                      {
                                       "inertia": false,
                                       "id": "panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_tcap0",
                                       "angle": 0,
                                       "rotate": false,
                                       "hfov": 22.8,
                                       "image": {
                                        "levels": [
                                         {
                                          "height": 850,
                                          "width": 850,
                                          "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "class": "TripodCapPanoramaOverlay"
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame",
                                     "sphere": {
                                      "levels": [
                                       {
                                        "height": 3040,
                                        "width": 6080,
                                        "url": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_hq.jpeg",
                                        "class": "ImageResourceLevel"
                                       },
                                       {
                                        "height": 1608,
                                        "width": 3217,
                                        "url": "media/panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA.jpeg",
                                        "class": "ImageResourceLevel"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     }
                                    }
                                   ],
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718",
                                     "yaw": -96.98,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": 84.32,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": {
                                      "hfovMax": 123,
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_142C146F_1D4E_6734_41B3_D05B01677309_t.jpg",
                                      "id": "panorama_142C146F_1D4E_6734_41B3_D05B01677309",
                                      "hfovMin": 60,
                                      "label": "Master Bedroom 1",
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_142C146F_1D4E_6734_41B3_D05B01677309_t.jpg",
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 145,
                                               "width": 188,
                                               "url": "media/panorama_142C146F_1D4E_6734_41B3_D05B01677309_0_HS_0_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 14.06,
                                            "yaw": -85.03,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -50.86
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "displayTooltipInTouchScreens": true,
                                            "click": "this.startPanoramaWithCamera(this.panorama_142FE9D6_1D4E_6114_41B7_CDBA1A80F91C, this.camera_12408F82_1F97_320C_4192_959029139359); this.mainPlayList.set('selectedIndex', 17)",
                                            "mapColor": "#FF0000",
                                            "toolTip": "MASTER BATHROOM",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_31DA1EFF_1DE6_E9DA_41A8_7038A1114A21",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -85.03,
                                            "hfov": 14.06,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 290,
                                               "width": 376,
                                               "url": "media/panorama_142C146F_1D4E_6734_41B3_D05B01677309_0_HS_0_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -50.86
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 72,
                                               "width": 152,
                                               "url": "media/panorama_142C146F_1D4E_6734_41B3_D05B01677309_0_HS_1_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 14.2,
                                            "yaw": -172.94,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -38.18
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "displayTooltipInTouchScreens": true,
                                            "click": "this.startPanoramaWithCamera(this.panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA, this.camera_12579F73_1F97_32F3_41BE_391D0A4A2828); this.mainPlayList.set('selectedIndex', 18)",
                                            "mapColor": "#FF0000",
                                            "toolTip": "MASTER BEDROOM",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_36D5146B_1DE6_18FA_41B6_CCC41419738B",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -172.94,
                                            "hfov": 14.2,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 145,
                                               "width": 305,
                                               "url": "media/panorama_142C146F_1D4E_6734_41B3_D05B01677309_0_HS_1_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -38.18
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 49,
                                               "width": 105,
                                               "url": "media/panorama_142C146F_1D4E_6734_41B3_D05B01677309_0_HS_2_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 10.57,
                                            "yaw": 2.61,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -32.16
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "displayTooltipInTouchScreens": true,
                                            "click": "this.startPanoramaWithCamera(this.panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80, this.camera_1224CF65_1F97_3214_4170_C1567FCCB234); this.mainPlayList.set('selectedIndex', 9)",
                                            "mapColor": "#FF0000",
                                            "toolTip": "KITCHEN",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_64E57B1E_1E6A_15C8_41B2_C53474D440D2",
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": 2.61,
                                            "hfov": 10.57,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 98,
                                               "width": 210,
                                               "url": "media/panorama_142C146F_1D4E_6734_41B3_D05B01677309_0_HS_2_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -32.16
                                           }
                                          ]
                                         },
                                         {
                                          "inertia": false,
                                          "id": "panorama_142C146F_1D4E_6734_41B3_D05B01677309_tcap0",
                                          "angle": 0,
                                          "rotate": false,
                                          "hfov": 22.8,
                                          "image": {
                                           "levels": [
                                            {
                                             "height": 850,
                                             "width": 850,
                                             "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                             "class": "ImageResourceLevel"
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "class": "TripodCapPanoramaOverlay"
                                         }
                                        ],
                                        "class": "SphericPanoramaFrame",
                                        "sphere": {
                                         "levels": [
                                          {
                                           "height": 3040,
                                           "width": 6080,
                                           "url": "media/panorama_142C146F_1D4E_6734_41B3_D05B01677309_hq.jpeg",
                                           "class": "ImageResourceLevel"
                                          },
                                          {
                                           "height": 1608,
                                           "width": 3217,
                                           "url": "media/panorama_142C146F_1D4E_6734_41B3_D05B01677309.jpeg",
                                           "class": "ImageResourceLevel"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        }
                                       }
                                      ],
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": {
                                         "hfovMax": 133,
                                         "id": "panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80_t.jpg",
                                         "hfovMin": 60,
                                         "label": "Kitchen 2",
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80_t.jpg",
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 200,
                                                  "width": 68,
                                                  "url": "media/panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80_0_HS_0_1_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 39.08,
                                               "yaw": 164.4,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -16.08
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "displayTooltipInTouchScreens": true,
                                               "click": "this.mainPlayList.set('selectedIndex', 16)",
                                               "mapColor": "#FF0000",
                                               "toolTip": "MASTER BEDROOM",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": true,
                                             "id": "overlay_01D816F3_1DAB_F9EA_4198_FEEAC5D5FC76",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 164.4,
                                               "roll": 0,
                                               "hfov": 39.08,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 1993,
                                                  "width": 686,
                                                  "url": "media/panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80_0_HS_0_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -16.08
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 49,
                                                  "width": 105,
                                                  "url": "media/panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80_0_HS_2_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 10.21,
                                               "yaw": -95.4,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -34.86
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "displayTooltipInTouchScreens": true,
                                               "click": "this.startPanoramaWithCamera(this.panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE, this.camera_1031BE74_1F97_32F4_41B3_CCB7E352BBFD); this.mainPlayList.set('selectedIndex', 8)",
                                               "mapColor": "#FF0000",
                                               "toolTip": "KITCHEN",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_42F0B3FE_1E66_7448_41BD_59678FA677F2",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": -95.4,
                                               "hfov": 10.21,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 98,
                                                  "width": 210,
                                                  "url": "media/panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80_0_HS_2_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -34.86
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 19,
                                                  "width": 51,
                                                  "url": "media/panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80_0_HS_3_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 5.83,
                                               "yaw": -93.59,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -17.75
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "displayTooltipInTouchScreens": true,
                                               "click": "this.startPanoramaWithCamera(this.panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95, this.camera_104EEE9B_1F97_323C_41BA_0F2A6125CAD3); this.mainPlayList.set('selectedIndex', 7)",
                                               "mapColor": "#FF0000",
                                               "toolTip": "DINING ROOM",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_41C6467D_1E6A_1C48_419B_AD913C1F8DE9",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": -93.59,
                                               "hfov": 5.83,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 39,
                                                  "width": 103,
                                                  "url": "media/panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80_0_HS_3_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -17.75
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 200,
                                                  "width": 151,
                                                  "url": "media/panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80_0_HS_4_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 22.49,
                                               "yaw": 166.4,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -9.52
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "displayTooltipInTouchScreens": true,
                                               "click": "this.startPanoramaWithCamera(this.panorama_142C146F_1D4E_6734_41B3_D05B01677309, this.camera_102A5E8C_1F97_3214_41B4_8C8747134C22); this.mainPlayList.set('selectedIndex', 16)",
                                               "mapColor": "#FF0000",
                                               "toolTip": "MASTER BEDROOM",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_EFEDF741_1EFE_1DB8_41A1_CDE30A77CB83",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 166.4,
                                               "hfov": 22.49,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 509,
                                                  "width": 385,
                                                  "url": "media/panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80_0_HS_4_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -9.52
                                              }
                                             ]
                                            },
                                            {
                                             "inertia": false,
                                             "id": "panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80_tcap0",
                                             "angle": 0,
                                             "rotate": false,
                                             "hfov": 22.8,
                                             "image": {
                                              "levels": [
                                               {
                                                "height": 850,
                                                "width": 850,
                                                "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                                "class": "ImageResourceLevel"
                                               }
                                              ],
                                              "class": "ImageResource"
                                             },
                                             "class": "TripodCapPanoramaOverlay"
                                            }
                                           ],
                                           "class": "SphericPanoramaFrame",
                                           "sphere": {
                                            "levels": [
                                             {
                                              "height": 3040,
                                              "width": 6080,
                                              "url": "media/panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80_hq.jpeg",
                                              "class": "ImageResourceLevel"
                                             },
                                             {
                                              "height": 1608,
                                              "width": 3217,
                                              "url": "media/panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80.jpeg",
                                              "class": "ImageResourceLevel"
                                             }
                                            ],
                                            "class": "ImageResource"
                                           }
                                          }
                                         ],
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": {
                                            "hfovMax": 149,
                                            "id": "panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE",
                                            "partial": false,
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE_t.jpg",
                                            "hfovMin": 60,
                                            "label": "Kitchen 1",
                                            "frames": [
                                             {
                                              "thumbnailUrl": "media/panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE_t.jpg",
                                              "overlays": [
                                               {
                                                "useHandCursor": true,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "height": 122,
                                                     "width": 141,
                                                     "url": "media/panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE_0_HS_0_0_0_map.gif",
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "hfov": 13.53,
                                                  "yaw": 88.52,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "pitch": -36.13
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "displayTooltipInTouchScreens": true,
                                                  "click": "this.startPanoramaWithCamera(this.panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80, this.camera_100D40BC_1F97_2E74_41B5_B0ED848405EF); this.mainPlayList.set('selectedIndex', 9)",
                                                  "mapColor": "#FF0000",
                                                  "toolTip": "KITCHEN",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "id": "overlay_0C0FCB9C_1DA6_685F_41B4_B5B13E8D4A47",
                                                "class": "HotspotPanoramaOverlay",
                                                "items": [
                                                 {
                                                  "yaw": 88.52,
                                                  "hfov": 13.53,
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "height": 245,
                                                     "width": 282,
                                                     "url": "media/panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE_0_HS_0_0.png",
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -36.13
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "height": 75,
                                                     "width": 114,
                                                     "url": "media/panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE_0_HS_1_0_0_map.gif",
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "hfov": 11.74,
                                                  "yaw": -92.41,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "pitch": -29.8
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "displayTooltipInTouchScreens": true,
                                                  "click": "this.startPanoramaWithCamera(this.panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95, this.camera_1026B0D6_1F97_2E34_4161_223EE46FA54E); this.mainPlayList.set('selectedIndex', 7)",
                                                  "mapColor": "#FF0000",
                                                  "toolTip": "DINING ROOM",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "id": "overlay_4A739D2D_1E5B_EDC8_41B5_37125F227C42",
                                                "class": "HotspotPanoramaOverlay",
                                                "items": [
                                                 {
                                                  "yaw": -92.41,
                                                  "hfov": 11.74,
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "height": 150,
                                                     "width": 228,
                                                     "url": "media/panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE_0_HS_1_0.png",
                                                     "class": "ImageResourceLevel"
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -29.8
                                                 }
                                                ]
                                               },
                                               {
                                                "inertia": false,
                                                "id": "panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE_tcap0",
                                                "angle": 0,
                                                "rotate": false,
                                                "hfov": 22.8,
                                                "image": {
                                                 "levels": [
                                                  {
                                                   "height": 850,
                                                   "width": 850,
                                                   "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                                   "class": "ImageResourceLevel"
                                                  }
                                                 ],
                                                 "class": "ImageResource"
                                                },
                                                "class": "TripodCapPanoramaOverlay"
                                               }
                                              ],
                                              "class": "SphericPanoramaFrame",
                                              "sphere": {
                                               "levels": [
                                                {
                                                 "height": 3040,
                                                 "width": 6080,
                                                 "url": "media/panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE_hq.jpeg",
                                                 "class": "ImageResourceLevel"
                                                },
                                                {
                                                 "height": 1608,
                                                 "width": 3217,
                                                 "url": "media/panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE.jpeg",
                                                 "class": "ImageResourceLevel"
                                                }
                                               ],
                                               "class": "ImageResource"
                                              }
                                             }
                                            ],
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80",
                                              "yaw": 88.52,
                                              "class": "AdjacentPanorama",
                                              "backwardYaw": -95.4,
                                              "distance": 1
                                             },
                                             {
                                              "panorama": {
                                               "hfovMax": 127,
                                               "id": "panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95",
                                               "partial": false,
                                               "pitch": 0,
                                               "thumbnailUrl": "media/panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95_t.jpg",
                                               "hfovMin": 60,
                                               "label": "Dining Room",
                                               "frames": [
                                                {
                                                 "thumbnailUrl": "media/panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95_t.jpg",
                                                 "overlays": [
                                                  {
                                                   "useHandCursor": true,
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "height": 75,
                                                        "width": 107,
                                                        "url": "media/panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95_0_HS_0_0_0_map.gif",
                                                        "class": "ImageResourceLevel"
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "hfov": 10.83,
                                                     "yaw": 92.86,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "pitch": -31.79
                                                    }
                                                   ],
                                                   "areas": [
                                                    {
                                                     "displayTooltipInTouchScreens": true,
                                                     "click": "this.startPanoramaWithCamera(this.panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE, this.camera_111A9D8B_1F97_361C_41AA_2D2841DFFBF1); this.mainPlayList.set('selectedIndex', 8)",
                                                     "mapColor": "#FF0000",
                                                     "toolTip": "KITCHEN",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "id": "overlay_0FFB4659_1DA6_1826_41A9_A657FA917028",
                                                   "class": "HotspotPanoramaOverlay",
                                                   "items": [
                                                    {
                                                     "yaw": 92.86,
                                                     "hfov": 10.83,
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "height": 151,
                                                        "width": 215,
                                                        "url": "media/panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95_0_HS_0_0.png",
                                                        "class": "ImageResourceLevel"
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -31.79
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "useHandCursor": true,
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "height": 37,
                                                        "width": 96,
                                                        "url": "media/panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95_0_HS_2_0_0_map.gif",
                                                        "class": "ImageResourceLevel"
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "hfov": 10.76,
                                                     "yaw": -93.01,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "pitch": -18.97
                                                    }
                                                   ],
                                                   "areas": [
                                                    {
                                                     "displayTooltipInTouchScreens": true,
                                                     "click": "this.startPanoramaWithCamera(this.panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441, this.camera_112D6DAA_1F97_361C_41A2_3C654676F901); this.mainPlayList.set('selectedIndex', 3)",
                                                     "mapColor": "#FF0000",
                                                     "toolTip": "LIVING ROOM",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "id": "overlay_4DBBA509_1E5E_3DC8_4187_24B9FFF5E45D",
                                                   "class": "HotspotPanoramaOverlay",
                                                   "items": [
                                                    {
                                                     "yaw": -93.01,
                                                     "hfov": 10.76,
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "height": 75,
                                                        "width": 192,
                                                        "url": "media/panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95_0_HS_2_0.png",
                                                        "class": "ImageResourceLevel"
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -18.97
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "useHandCursor": true,
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "height": 131,
                                                        "width": 200,
                                                        "url": "media/panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95_0_HS_3_0_0_map.gif",
                                                        "class": "ImageResourceLevel"
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "hfov": 25.55,
                                                     "yaw": 176.67,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "pitch": -50.41
                                                    }
                                                   ],
                                                   "areas": [
                                                    {
                                                     "displayTooltipInTouchScreens": true,
                                                     "click": "this.startPanoramaWithCamera(this.panorama_142C74AA_1D4E_273C_4166_E77592AAE430, this.camera_1131FD9B_1F97_363C_41B2_759C00A858C2); this.mainPlayList.set('selectedIndex', 10)",
                                                     "mapColor": "#FF0000",
                                                     "toolTip": "CLICK TO EXPLORE",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "id": "overlay_49629718_1E5E_1DC8_41B8_B8CD2A59372F",
                                                   "class": "HotspotPanoramaOverlay",
                                                   "items": [
                                                    {
                                                     "yaw": 176.67,
                                                     "hfov": 25.55,
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "height": 445,
                                                        "width": 677,
                                                        "url": "media/panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95_0_HS_3_0.png",
                                                        "class": "ImageResourceLevel"
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -50.41
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "useHandCursor": true,
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "height": 21,
                                                        "width": 70,
                                                        "url": "media/panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95_0_HS_4_0_0_map.gif",
                                                        "class": "ImageResourceLevel"
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "hfov": 7.89,
                                                     "yaw": 91.83,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "pitch": -19.47
                                                    }
                                                   ],
                                                   "areas": [
                                                    {
                                                     "displayTooltipInTouchScreens": true,
                                                     "click": "this.startPanoramaWithCamera(this.panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80, this.camera_11453DBA_1F97_367C_41A2_0BDD0B5B3C21); this.mainPlayList.set('selectedIndex', 9)",
                                                     "mapColor": "#FF0000",
                                                     "toolTip": "KITCHEN",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "id": "overlay_F0A3654E_1EFA_FC48_41B9_7286A0FB7123",
                                                   "class": "HotspotPanoramaOverlay",
                                                   "items": [
                                                    {
                                                     "yaw": 91.83,
                                                     "hfov": 7.89,
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "height": 42,
                                                        "width": 141,
                                                        "url": "media/panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95_0_HS_4_0.png",
                                                        "class": "ImageResourceLevel"
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -19.47
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "inertia": false,
                                                   "id": "panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95_tcap0",
                                                   "angle": 0,
                                                   "rotate": false,
                                                   "hfov": 22.8,
                                                   "image": {
                                                    "levels": [
                                                     {
                                                      "height": 850,
                                                      "width": 850,
                                                      "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                                      "class": "ImageResourceLevel"
                                                     }
                                                    ],
                                                    "class": "ImageResource"
                                                   },
                                                   "class": "TripodCapPanoramaOverlay"
                                                  }
                                                 ],
                                                 "class": "SphericPanoramaFrame",
                                                 "sphere": {
                                                  "levels": [
                                                   {
                                                    "height": 3040,
                                                    "width": 6080,
                                                    "url": "media/panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95_hq.jpeg",
                                                    "class": "ImageResourceLevel"
                                                   },
                                                   {
                                                    "height": 1608,
                                                    "width": 3217,
                                                    "url": "media/panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95.jpeg",
                                                    "class": "ImageResourceLevel"
                                                   }
                                                  ],
                                                  "class": "ImageResource"
                                                 }
                                                }
                                               ],
                                               "hfov": 360,
                                               "adjacentPanoramas": [
                                                {
                                                 "panorama": "this.panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE",
                                                 "yaw": 92.86,
                                                 "class": "AdjacentPanorama",
                                                 "backwardYaw": -92.41,
                                                 "distance": 1
                                                },
                                                {
                                                 "panorama": {
                                                  "hfovMax": 135,
                                                  "id": "panorama_142C74AA_1D4E_273C_4166_E77592AAE430",
                                                  "partial": false,
                                                  "pitch": 0,
                                                  "thumbnailUrl": "media/panorama_142C74AA_1D4E_273C_4166_E77592AAE430_t.jpg",
                                                  "hfovMin": 60,
                                                  "label": "Hallway 1",
                                                  "frames": [
                                                   {
                                                    "thumbnailUrl": "media/panorama_142C74AA_1D4E_273C_4166_E77592AAE430_t.jpg",
                                                    "overlays": [
                                                     {
                                                      "useHandCursor": true,
                                                      "maps": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "height": 140,
                                                           "width": 158,
                                                           "url": "media/panorama_142C74AA_1D4E_273C_4166_E77592AAE430_0_HS_0_0_0_map.gif",
                                                           "class": "ImageResourceLevel"
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "hfov": 11.13,
                                                        "yaw": -170.16,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "pitch": -53.57
                                                       }
                                                      ],
                                                      "areas": [
                                                       {
                                                        "displayTooltipInTouchScreens": true,
                                                        "click": "this.startPanoramaWithCamera(this.panorama_142FAAB7_1D4E_2314_41A5_4F219CE8B53C, this.camera_109A0052_1F97_2E0C_41A7_D2E6A6B7B77E); this.mainPlayList.set('selectedIndex', 11)",
                                                        "mapColor": "#FF0000",
                                                        "toolTip": "GUEST BATHROOM",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "enabledInCardboard": true,
                                                      "rollOverDisplay": false,
                                                      "id": "overlay_3ED5CBAC_1DDA_E87E_419C_D03326C25865",
                                                      "class": "HotspotPanoramaOverlay",
                                                      "items": [
                                                       {
                                                        "yaw": -170.16,
                                                        "hfov": 11.13,
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "height": 281,
                                                           "width": 316,
                                                           "url": "media/panorama_142C74AA_1D4E_273C_4166_E77592AAE430_0_HS_0_0.png",
                                                           "class": "ImageResourceLevel"
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "pitch": -53.57
                                                       }
                                                      ]
                                                     },
                                                     {
                                                      "useHandCursor": true,
                                                      "maps": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "height": 132,
                                                           "width": 145,
                                                           "url": "media/panorama_142C74AA_1D4E_273C_4166_E77592AAE430_0_HS_1_0_0_map.gif",
                                                           "class": "ImageResourceLevel"
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "hfov": 13.95,
                                                        "yaw": -87.58,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "pitch": -35.99
                                                       }
                                                      ],
                                                      "areas": [
                                                       {
                                                        "displayTooltipInTouchScreens": true,
                                                        "click": "this.startPanoramaWithCamera(this.panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB, this.camera_114A1034_1F97_2E74_41B9_FB528FECA00E); this.mainPlayList.set('selectedIndex', 13)",
                                                        "mapColor": "#FF0000",
                                                        "toolTip": "BEDROOM 2",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "enabledInCardboard": true,
                                                      "rollOverDisplay": false,
                                                      "id": "overlay_38B7832F_1DDA_187A_41AB_F15A35B19F38",
                                                      "class": "HotspotPanoramaOverlay",
                                                      "items": [
                                                       {
                                                        "yaw": -87.58,
                                                        "hfov": 13.95,
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "height": 264,
                                                           "width": 291,
                                                           "url": "media/panorama_142C74AA_1D4E_273C_4166_E77592AAE430_0_HS_1_0.png",
                                                           "class": "ImageResourceLevel"
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "pitch": -35.99
                                                       }
                                                      ]
                                                     },
                                                     {
                                                      "useHandCursor": true,
                                                      "maps": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "height": 126,
                                                           "width": 175,
                                                           "url": "media/panorama_142C74AA_1D4E_273C_4166_E77592AAE430_0_HS_2_0_0_map.gif",
                                                           "class": "ImageResourceLevel"
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "hfov": 14.37,
                                                        "yaw": 84.63,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "pitch": -46.15
                                                       }
                                                      ],
                                                      "areas": [
                                                       {
                                                        "displayTooltipInTouchScreens": true,
                                                        "click": "this.startPanoramaWithCamera(this.panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95, this.camera_11637043_1F97_2E0C_41B2_E0CF12CA1086); this.mainPlayList.set('selectedIndex', 7)",
                                                        "mapColor": "#FF0000",
                                                        "toolTip": "DINING ROOM",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "enabledInCardboard": true,
                                                      "rollOverDisplay": false,
                                                      "id": "overlay_408FBF4A_1E6A_6C48_41BE_E5D92E511D6C",
                                                      "class": "HotspotPanoramaOverlay",
                                                      "items": [
                                                       {
                                                        "yaw": 84.63,
                                                        "hfov": 14.37,
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "height": 252,
                                                           "width": 350,
                                                           "url": "media/panorama_142C74AA_1D4E_273C_4166_E77592AAE430_0_HS_2_0.png",
                                                           "class": "ImageResourceLevel"
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "pitch": -46.15
                                                       }
                                                      ]
                                                     },
                                                     {
                                                      "inertia": false,
                                                      "id": "panorama_142C74AA_1D4E_273C_4166_E77592AAE430_tcap0",
                                                      "angle": 0,
                                                      "rotate": false,
                                                      "hfov": 24,
                                                      "image": {
                                                       "levels": [
                                                        {
                                                         "height": 850,
                                                         "width": 850,
                                                         "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                                         "class": "ImageResourceLevel"
                                                        }
                                                       ],
                                                       "class": "ImageResource"
                                                      },
                                                      "class": "TripodCapPanoramaOverlay"
                                                     }
                                                    ],
                                                    "class": "SphericPanoramaFrame",
                                                    "sphere": {
                                                     "levels": [
                                                      {
                                                       "height": 3040,
                                                       "width": 6080,
                                                       "url": "media/panorama_142C74AA_1D4E_273C_4166_E77592AAE430_hq.jpeg",
                                                       "class": "ImageResourceLevel"
                                                      },
                                                      {
                                                       "height": 1608,
                                                       "width": 3217,
                                                       "url": "media/panorama_142C74AA_1D4E_273C_4166_E77592AAE430.jpeg",
                                                       "class": "ImageResourceLevel"
                                                      }
                                                     ],
                                                     "class": "ImageResource"
                                                    }
                                                   }
                                                  ],
                                                  "hfov": 360,
                                                  "adjacentPanoramas": [
                                                   {
                                                    "panorama": {
                                                     "hfovMax": 128,
                                                     "id": "panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB",
                                                     "partial": false,
                                                     "pitch": 0,
                                                     "thumbnailUrl": "media/panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB_t.jpg",
                                                     "hfovMin": 60,
                                                     "label": "Bedroom 2 Wide 1",
                                                     "frames": [
                                                      {
                                                       "thumbnailUrl": "media/panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB_t.jpg",
                                                       "overlays": [
                                                        {
                                                         "useHandCursor": true,
                                                         "maps": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "height": 85,
                                                              "width": 139,
                                                              "url": "media/panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB_0_HS_0_0_0_map.gif",
                                                              "class": "ImageResourceLevel"
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "hfov": 12.08,
                                                           "yaw": -92.36,
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "pitch": -43.05
                                                          }
                                                         ],
                                                         "areas": [
                                                          {
                                                           "mapColor": "#FF0000",
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3, this.camera_12026F47_1F97_3214_41BB_2EDE9F3AEBF1); this.mainPlayList.set('selectedIndex', 12)"
                                                          }
                                                         ],
                                                         "enabledInCardboard": true,
                                                         "rollOverDisplay": false,
                                                         "id": "overlay_34BB7E8D_1DDE_E839_41B1_2B82F4368689",
                                                         "class": "HotspotPanoramaOverlay",
                                                         "items": [
                                                          {
                                                           "yaw": -92.36,
                                                           "hfov": 12.08,
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "height": 170,
                                                              "width": 279,
                                                              "url": "media/panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB_0_HS_0_0.png",
                                                              "class": "ImageResourceLevel"
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "pitch": -43.05
                                                          }
                                                         ]
                                                        },
                                                        {
                                                         "useHandCursor": true,
                                                         "maps": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "height": 78,
                                                              "width": 124,
                                                              "url": "media/panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB_0_HS_1_0_0_map.gif",
                                                              "class": "ImageResourceLevel"
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "hfov": 11.97,
                                                           "yaw": 92.61,
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "pitch": -35.9
                                                          }
                                                         ],
                                                         "areas": [
                                                          {
                                                           "displayTooltipInTouchScreens": true,
                                                           "click": "this.startPanoramaWithCamera(this.panorama_142C74AA_1D4E_273C_4166_E77592AAE430, this.camera_12346F56_1F97_3234_41BA_B3293BF60ECD); this.mainPlayList.set('selectedIndex', 10)",
                                                           "mapColor": "#FF0000",
                                                           "toolTip": "HALLWAY",
                                                           "class": "HotspotPanoramaOverlayArea"
                                                          }
                                                         ],
                                                         "enabledInCardboard": true,
                                                         "rollOverDisplay": false,
                                                         "id": "overlay_6EAE6EDD_1E7F_EC48_41B1_FCE7C4E88F26",
                                                         "class": "HotspotPanoramaOverlay",
                                                         "items": [
                                                          {
                                                           "yaw": 92.61,
                                                           "hfov": 11.97,
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "height": 157,
                                                              "width": 249,
                                                              "url": "media/panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB_0_HS_1_0.png",
                                                              "class": "ImageResourceLevel"
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "pitch": -35.9
                                                          }
                                                         ]
                                                        },
                                                        {
                                                         "useHandCursor": true,
                                                         "maps": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "height": 23,
                                                              "width": 68,
                                                              "url": "media/panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB_0_HS_2_0_0_map.gif",
                                                              "class": "ImageResourceLevel"
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "hfov": 7.45,
                                                           "yaw": 92.65,
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "pitch": -23.46
                                                          }
                                                         ],
                                                         "areas": [
                                                          {
                                                           "displayTooltipInTouchScreens": true,
                                                           "click": "this.mainPlayList.set('selectedIndex', 7)",
                                                           "mapColor": "#FF0000",
                                                           "toolTip": "DINING ROOM",
                                                           "class": "HotspotPanoramaOverlayArea"
                                                          }
                                                         ],
                                                         "enabledInCardboard": true,
                                                         "rollOverDisplay": false,
                                                         "id": "overlay_6F51F01B_1E7E_33C8_41B4_03D3D8B1EF12",
                                                         "class": "HotspotPanoramaOverlay",
                                                         "items": [
                                                          {
                                                           "yaw": 92.65,
                                                           "hfov": 7.45,
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "height": 47,
                                                              "width": 137,
                                                              "url": "media/panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB_0_HS_2_0.png",
                                                              "class": "ImageResourceLevel"
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "pitch": -23.46
                                                          }
                                                         ]
                                                        },
                                                        {
                                                         "inertia": false,
                                                         "id": "panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB_tcap0",
                                                         "angle": 0,
                                                         "rotate": false,
                                                         "hfov": 22.8,
                                                         "image": {
                                                          "levels": [
                                                           {
                                                            "height": 850,
                                                            "width": 850,
                                                            "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                                            "class": "ImageResourceLevel"
                                                           }
                                                          ],
                                                          "class": "ImageResource"
                                                         },
                                                         "class": "TripodCapPanoramaOverlay"
                                                        }
                                                       ],
                                                       "class": "SphericPanoramaFrame",
                                                       "sphere": {
                                                        "levels": [
                                                         {
                                                          "height": 3040,
                                                          "width": 6080,
                                                          "url": "media/panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB_hq.jpeg",
                                                          "class": "ImageResourceLevel"
                                                         },
                                                         {
                                                          "height": 1608,
                                                          "width": 3217,
                                                          "url": "media/panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB.jpeg",
                                                          "class": "ImageResourceLevel"
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       }
                                                      }
                                                     ],
                                                     "hfov": 360,
                                                     "adjacentPanoramas": [
                                                      {
                                                       "panorama": {
                                                        "hfovMax": 123,
                                                        "partial": false,
                                                        "pitch": 0,
                                                        "thumbnailUrl": "media/panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3_t.jpg",
                                                        "id": "panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3",
                                                        "hfovMin": 60,
                                                        "label": "Bedroom 2 Wide 2",
                                                        "frames": [
                                                         {
                                                          "thumbnailUrl": "media/panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3_t.jpg",
                                                          "overlays": [
                                                           {
                                                            "useHandCursor": true,
                                                            "maps": [
                                                             {
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "height": 98,
                                                                 "width": 131,
                                                                 "url": "media/panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3_0_HS_0_0_0_map.gif",
                                                                 "class": "ImageResourceLevel"
                                                                }
                                                               ],
                                                               "class": "ImageResource"
                                                              },
                                                              "hfov": 11.29,
                                                              "yaw": -89.4,
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "pitch": -43.39
                                                             }
                                                            ],
                                                            "areas": [
                                                             {
                                                              "displayTooltipInTouchScreens": true,
                                                              "click": "this.startPanoramaWithCamera(this.panorama_142C44F0_1D4E_272C_41B7_609D26BED236, this.camera_12191F38_1F97_327C_4142_92D7CC295310); this.mainPlayList.set('selectedIndex', 14)",
                                                              "mapColor": "#FF0000",
                                                              "toolTip": "STUDY AREA",
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             }
                                                            ],
                                                            "enabledInCardboard": true,
                                                            "rollOverDisplay": false,
                                                            "id": "overlay_37A99259_1DDA_38D9_41A3_78917D5BDBC9",
                                                            "class": "HotspotPanoramaOverlay",
                                                            "items": [
                                                             {
                                                              "yaw": -89.4,
                                                              "hfov": 11.29,
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "height": 197,
                                                                 "width": 262,
                                                                 "url": "media/panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3_0_HS_0_0.png",
                                                                 "class": "ImageResourceLevel"
                                                                }
                                                               ],
                                                               "class": "ImageResource"
                                                              },
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "pitch": -43.39
                                                             }
                                                            ]
                                                           },
                                                           {
                                                            "useHandCursor": true,
                                                            "maps": [
                                                             {
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "height": 57,
                                                                 "width": 98,
                                                                 "url": "media/panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3_0_HS_1_0_0_map.gif",
                                                                 "class": "ImageResourceLevel"
                                                                }
                                                               ],
                                                               "class": "ImageResource"
                                                              },
                                                              "hfov": 10.52,
                                                              "yaw": 89.73,
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "pitch": -25.65
                                                             }
                                                            ],
                                                            "areas": [
                                                             {
                                                              "displayTooltipInTouchScreens": true,
                                                              "click": "this.mainPlayList.set('selectedIndex', 10)",
                                                              "mapColor": "#FF0000",
                                                              "toolTip": "HALLWAY",
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             }
                                                            ],
                                                            "enabledInCardboard": true,
                                                            "rollOverDisplay": false,
                                                            "id": "overlay_76A29471_1E66_3C58_4177_3F9E066780C8",
                                                            "class": "HotspotPanoramaOverlay",
                                                            "items": [
                                                             {
                                                              "yaw": 89.73,
                                                              "hfov": 10.52,
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "height": 115,
                                                                 "width": 197,
                                                                 "url": "media/panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3_0_HS_1_0.png",
                                                                 "class": "ImageResourceLevel"
                                                                }
                                                               ],
                                                               "class": "ImageResource"
                                                              },
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "pitch": -25.65
                                                             }
                                                            ]
                                                           },
                                                           {
                                                            "useHandCursor": true,
                                                            "maps": [
                                                             {
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "height": 21,
                                                                 "width": 59,
                                                                 "url": "media/panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3_0_HS_2_0_0_map.gif",
                                                                 "class": "ImageResourceLevel"
                                                                }
                                                               ],
                                                               "class": "ImageResource"
                                                              },
                                                              "hfov": 6.78,
                                                              "yaw": 90.04,
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "pitch": -17.46
                                                             }
                                                            ],
                                                            "areas": [
                                                             {
                                                              "displayTooltipInTouchScreens": true,
                                                              "click": "this.mainPlayList.set('selectedIndex', 7)",
                                                              "mapColor": "#FF0000",
                                                              "toolTip": "DINING ROOM",
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             }
                                                            ],
                                                            "enabledInCardboard": true,
                                                            "rollOverDisplay": false,
                                                            "id": "overlay_75B8FB02_1E7A_35B9_41B8_F176CC7DFAF4",
                                                            "class": "HotspotPanoramaOverlay",
                                                            "items": [
                                                             {
                                                              "yaw": 90.04,
                                                              "hfov": 6.78,
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "height": 42,
                                                                 "width": 119,
                                                                 "url": "media/panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3_0_HS_2_0.png",
                                                                 "class": "ImageResourceLevel"
                                                                }
                                                               ],
                                                               "class": "ImageResource"
                                                              },
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "pitch": -17.46
                                                             }
                                                            ]
                                                           },
                                                           {
                                                            "useHandCursor": true,
                                                            "maps": [
                                                             {
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "height": 125,
                                                                 "width": 178,
                                                                 "url": "media/panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3_0_HS_3_0_0_map.gif",
                                                                 "class": "ImageResourceLevel"
                                                                }
                                                               ],
                                                               "class": "ImageResource"
                                                              },
                                                              "hfov": 13.9,
                                                              "yaw": 86.57,
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "pitch": -48.89
                                                             }
                                                            ],
                                                            "areas": [
                                                             {
                                                              "displayTooltipInTouchScreens": true,
                                                              "click": "this.startPanoramaWithCamera(this.panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB, this.camera_0F08FF04_1F97_3214_41B8_8CC18E8902F3); this.mainPlayList.set('selectedIndex', 13)",
                                                              "mapColor": "#FF0000",
                                                              "toolTip": "BEDROOM 2",
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             }
                                                            ],
                                                            "enabledInCardboard": true,
                                                            "rollOverDisplay": false,
                                                            "id": "overlay_723B8531_1E7E_1DD8_41B8_D19CB06040B1",
                                                            "class": "HotspotPanoramaOverlay",
                                                            "items": [
                                                             {
                                                              "yaw": 86.57,
                                                              "hfov": 13.9,
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "height": 251,
                                                                 "width": 356,
                                                                 "url": "media/panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3_0_HS_3_0.png",
                                                                 "class": "ImageResourceLevel"
                                                                }
                                                               ],
                                                               "class": "ImageResource"
                                                              },
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "pitch": -48.89
                                                             }
                                                            ]
                                                           },
                                                           {
                                                            "inertia": false,
                                                            "id": "panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3_tcap0",
                                                            "angle": 0,
                                                            "rotate": false,
                                                            "hfov": 22.8,
                                                            "image": {
                                                             "levels": [
                                                              {
                                                               "height": 850,
                                                               "width": 850,
                                                               "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                                               "class": "ImageResourceLevel"
                                                              }
                                                             ],
                                                             "class": "ImageResource"
                                                            },
                                                            "class": "TripodCapPanoramaOverlay"
                                                           }
                                                          ],
                                                          "class": "SphericPanoramaFrame",
                                                          "sphere": {
                                                           "levels": [
                                                            {
                                                             "height": 3040,
                                                             "width": 6080,
                                                             "url": "media/panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3_hq.jpeg",
                                                             "class": "ImageResourceLevel"
                                                            },
                                                            {
                                                             "height": 1608,
                                                             "width": 3217,
                                                             "url": "media/panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3.jpeg",
                                                             "class": "ImageResourceLevel"
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          }
                                                         }
                                                        ],
                                                        "hfov": 360,
                                                        "adjacentPanoramas": [
                                                         {
                                                          "panorama": "this.panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB",
                                                          "yaw": 86.57,
                                                          "class": "AdjacentPanorama",
                                                          "backwardYaw": -92.36,
                                                          "distance": 1
                                                         },
                                                         {
                                                          "panorama": {
                                                           "hfovMax": 124,
                                                           "id": "panorama_142C44F0_1D4E_272C_41B7_609D26BED236",
                                                           "partial": false,
                                                           "pitch": 0,
                                                           "thumbnailUrl": "media/panorama_142C44F0_1D4E_272C_41B7_609D26BED236_t.jpg",
                                                           "hfovMin": 60,
                                                           "label": "Bedroom 2 Adjacent 1",
                                                           "frames": [
                                                            {
                                                             "thumbnailUrl": "media/panorama_142C44F0_1D4E_272C_41B7_609D26BED236_t.jpg",
                                                             "overlays": [
                                                              {
                                                               "useHandCursor": true,
                                                               "maps": [
                                                                {
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 152,
                                                                    "width": 153,
                                                                    "url": "media/panorama_142C44F0_1D4E_272C_41B7_609D26BED236_0_HS_0_0_0_map.gif",
                                                                    "class": "ImageResourceLevel"
                                                                   }
                                                                  ],
                                                                  "class": "ImageResource"
                                                                 },
                                                                 "hfov": 13.72,
                                                                 "yaw": 174.91,
                                                                 "class": "HotspotPanoramaOverlayMap",
                                                                 "pitch": -41.08
                                                                }
                                                               ],
                                                               "areas": [
                                                                {
                                                                 "displayTooltipInTouchScreens": true,
                                                                 "click": "this.startPanoramaWithCamera(this.panorama_0C5A249A_1D5A_271C_41B1_F588299D1F0E, this.camera_1278220F_1F96_D214_41B9_B5D1D10DBFE3); this.mainPlayList.set('selectedIndex', 15)",
                                                                 "mapColor": "#FF0000",
                                                                 "toolTip": "STUDY AREA",
                                                                 "class": "HotspotPanoramaOverlayArea"
                                                                }
                                                               ],
                                                               "enabledInCardboard": true,
                                                               "rollOverDisplay": false,
                                                               "id": "overlay_37607483_1DDA_182A_41AA_6AD6DCE71412",
                                                               "class": "HotspotPanoramaOverlay",
                                                               "items": [
                                                                {
                                                                 "yaw": 174.91,
                                                                 "hfov": 13.72,
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 304,
                                                                    "width": 307,
                                                                    "url": "media/panorama_142C44F0_1D4E_272C_41B7_609D26BED236_0_HS_0_0.png",
                                                                    "class": "ImageResourceLevel"
                                                                   }
                                                                  ],
                                                                  "class": "ImageResource"
                                                                 },
                                                                 "class": "HotspotPanoramaOverlayImage",
                                                                 "pitch": -41.08
                                                                }
                                                               ]
                                                              },
                                                              {
                                                               "useHandCursor": true,
                                                               "maps": [
                                                                {
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 136,
                                                                    "width": 200,
                                                                    "url": "media/panorama_142C44F0_1D4E_272C_41B7_609D26BED236_0_HS_1_0_0_map.gif",
                                                                    "class": "ImageResourceLevel"
                                                                   }
                                                                  ],
                                                                  "class": "ImageResource"
                                                                 },
                                                                 "hfov": 15.84,
                                                                 "yaw": 82.53,
                                                                 "class": "HotspotPanoramaOverlayMap",
                                                                 "pitch": -49.34
                                                                }
                                                               ],
                                                               "areas": [
                                                                {
                                                                 "displayTooltipInTouchScreens": true,
                                                                 "click": "this.startPanoramaWithCamera(this.panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3, this.camera_12715200_1F96_D20C_417E_9A712237C340); this.mainPlayList.set('selectedIndex', 12)",
                                                                 "mapColor": "#FF0000",
                                                                 "toolTip": "BEDROOM 2",
                                                                 "class": "HotspotPanoramaOverlayArea"
                                                                }
                                                               ],
                                                               "enabledInCardboard": true,
                                                               "rollOverDisplay": false,
                                                               "id": "overlay_6BA4EE15_1E7A_2FD8_41B7_16F5AFC0A483",
                                                               "class": "HotspotPanoramaOverlay",
                                                               "items": [
                                                                {
                                                                 "yaw": 82.53,
                                                                 "hfov": 15.84,
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 281,
                                                                    "width": 410,
                                                                    "url": "media/panorama_142C44F0_1D4E_272C_41B7_609D26BED236_0_HS_1_0.png",
                                                                    "class": "ImageResourceLevel"
                                                                   }
                                                                  ],
                                                                  "class": "ImageResource"
                                                                 },
                                                                 "class": "HotspotPanoramaOverlayImage",
                                                                 "pitch": -49.34
                                                                }
                                                               ]
                                                              },
                                                              {
                                                               "useHandCursor": true,
                                                               "maps": [
                                                                {
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 54,
                                                                    "width": 107,
                                                                    "url": "media/panorama_142C44F0_1D4E_272C_41B7_609D26BED236_0_HS_2_0_0_map.gif",
                                                                    "class": "ImageResourceLevel"
                                                                   }
                                                                  ],
                                                                  "class": "ImageResource"
                                                                 },
                                                                 "hfov": 11.11,
                                                                 "yaw": 83.39,
                                                                 "class": "HotspotPanoramaOverlayMap",
                                                                 "pitch": -29.16
                                                                }
                                                               ],
                                                               "areas": [
                                                                {
                                                                 "displayTooltipInTouchScreens": true,
                                                                 "click": "this.mainPlayList.set('selectedIndex', 13)",
                                                                 "mapColor": "#FF0000",
                                                                 "toolTip": "BEDROOM 2",
                                                                 "class": "HotspotPanoramaOverlayArea"
                                                                }
                                                               ],
                                                               "enabledInCardboard": true,
                                                               "rollOverDisplay": false,
                                                               "id": "overlay_6471A348_1E7A_3449_41B6_4E7D6AED6C2E",
                                                               "class": "HotspotPanoramaOverlay",
                                                               "items": [
                                                                {
                                                                 "yaw": 83.39,
                                                                 "hfov": 11.11,
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 109,
                                                                    "width": 214,
                                                                    "url": "media/panorama_142C44F0_1D4E_272C_41B7_609D26BED236_0_HS_2_0.png",
                                                                    "class": "ImageResourceLevel"
                                                                   }
                                                                  ],
                                                                  "class": "ImageResource"
                                                                 },
                                                                 "class": "HotspotPanoramaOverlayImage",
                                                                 "pitch": -29.16
                                                                }
                                                               ]
                                                              },
                                                              {
                                                               "useHandCursor": true,
                                                               "maps": [
                                                                {
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 23,
                                                                    "width": 69,
                                                                    "url": "media/panorama_142C44F0_1D4E_272C_41B7_609D26BED236_0_HS_3_0_0_map.gif",
                                                                    "class": "ImageResourceLevel"
                                                                   }
                                                                  ],
                                                                  "class": "ImageResource"
                                                                 },
                                                                 "hfov": 7.86,
                                                                 "yaw": 84.63,
                                                                 "class": "HotspotPanoramaOverlayMap",
                                                                 "pitch": -18.35
                                                                }
                                                               ],
                                                               "areas": [
                                                                {
                                                                 "displayTooltipInTouchScreens": true,
                                                                 "click": "this.mainPlayList.set('selectedIndex', 10)",
                                                                 "mapColor": "#FF0000",
                                                                 "toolTip": "HALLWAY",
                                                                 "class": "HotspotPanoramaOverlayArea"
                                                                }
                                                               ],
                                                               "enabledInCardboard": true,
                                                               "rollOverDisplay": false,
                                                               "id": "overlay_6722741B_1E66_13C8_41B1_5A474D223D95",
                                                               "class": "HotspotPanoramaOverlay",
                                                               "items": [
                                                                {
                                                                 "yaw": 84.63,
                                                                 "hfov": 7.86,
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 46,
                                                                    "width": 139,
                                                                    "url": "media/panorama_142C44F0_1D4E_272C_41B7_609D26BED236_0_HS_3_0.png",
                                                                    "class": "ImageResourceLevel"
                                                                   }
                                                                  ],
                                                                  "class": "ImageResource"
                                                                 },
                                                                 "class": "HotspotPanoramaOverlayImage",
                                                                 "pitch": -18.35
                                                                }
                                                               ]
                                                              },
                                                              {
                                                               "useHandCursor": true,
                                                               "maps": [
                                                                {
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 14,
                                                                    "width": 63,
                                                                    "url": "media/panorama_142C44F0_1D4E_272C_41B7_609D26BED236_0_HS_4_0_0_map.gif",
                                                                    "class": "ImageResourceLevel"
                                                                   }
                                                                  ],
                                                                  "class": "ImageResource"
                                                                 },
                                                                 "hfov": 7.37,
                                                                 "yaw": 84.9,
                                                                 "class": "HotspotPanoramaOverlayMap",
                                                                 "pitch": -13.1
                                                                }
                                                               ],
                                                               "areas": [
                                                                {
                                                                 "displayTooltipInTouchScreens": true,
                                                                 "click": "this.mainPlayList.set('selectedIndex', 7)",
                                                                 "mapColor": "#FF0000",
                                                                 "toolTip": "DINING ROOM",
                                                                 "class": "HotspotPanoramaOverlayArea"
                                                                }
                                                               ],
                                                               "enabledInCardboard": true,
                                                               "rollOverDisplay": false,
                                                               "id": "overlay_6B324A8B_1E66_14C8_41BA_588D49086250",
                                                               "class": "HotspotPanoramaOverlay",
                                                               "items": [
                                                                {
                                                                 "yaw": 84.9,
                                                                 "hfov": 7.37,
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 29,
                                                                    "width": 127,
                                                                    "url": "media/panorama_142C44F0_1D4E_272C_41B7_609D26BED236_0_HS_4_0.png",
                                                                    "class": "ImageResourceLevel"
                                                                   }
                                                                  ],
                                                                  "class": "ImageResource"
                                                                 },
                                                                 "class": "HotspotPanoramaOverlayImage",
                                                                 "pitch": -13.1
                                                                }
                                                               ]
                                                              },
                                                              {
                                                               "inertia": false,
                                                               "id": "panorama_142C44F0_1D4E_272C_41B7_609D26BED236_tcap0",
                                                               "angle": 0,
                                                               "rotate": false,
                                                               "hfov": 22.8,
                                                               "image": {
                                                                "levels": [
                                                                 {
                                                                  "height": 850,
                                                                  "width": 850,
                                                                  "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                                                  "class": "ImageResourceLevel"
                                                                 }
                                                                ],
                                                                "class": "ImageResource"
                                                               },
                                                               "class": "TripodCapPanoramaOverlay"
                                                              }
                                                             ],
                                                             "class": "SphericPanoramaFrame",
                                                             "sphere": {
                                                              "levels": [
                                                               {
                                                                "height": 3040,
                                                                "width": 6080,
                                                                "url": "media/panorama_142C44F0_1D4E_272C_41B7_609D26BED236_hq.jpeg",
                                                                "class": "ImageResourceLevel"
                                                               },
                                                               {
                                                                "height": 1608,
                                                                "width": 3217,
                                                                "url": "media/panorama_142C44F0_1D4E_272C_41B7_609D26BED236.jpeg",
                                                                "class": "ImageResourceLevel"
                                                               }
                                                              ],
                                                              "class": "ImageResource"
                                                             }
                                                            }
                                                           ],
                                                           "hfov": 360,
                                                           "adjacentPanoramas": [
                                                            {
                                                             "panorama": "this.panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3",
                                                             "yaw": 82.53,
                                                             "class": "AdjacentPanorama",
                                                             "backwardYaw": -89.4,
                                                             "distance": 1
                                                            },
                                                            {
                                                             "panorama": {
                                                              "hfovMax": 125,
                                                              "id": "panorama_0C5A249A_1D5A_271C_41B1_F588299D1F0E",
                                                              "partial": false,
                                                              "pitch": 0,
                                                              "thumbnailUrl": "media/panorama_0C5A249A_1D5A_271C_41B1_F588299D1F0E_t.jpg",
                                                              "hfovMin": 60,
                                                              "label": "Bedroom 2 Adjacent 2",
                                                              "frames": [
                                                               {
                                                                "thumbnailUrl": "media/panorama_0C5A249A_1D5A_271C_41B1_F588299D1F0E_t.jpg",
                                                                "overlays": [
                                                                 {
                                                                  "useHandCursor": true,
                                                                  "maps": [
                                                                   {
                                                                    "image": {
                                                                     "levels": [
                                                                      {
                                                                       "height": 108,
                                                                       "width": 153,
                                                                       "url": "media/panorama_0C5A249A_1D5A_271C_41B1_F588299D1F0E_0_HS_0_0_0_map.gif",
                                                                       "class": "ImageResourceLevel"
                                                                      }
                                                                     ],
                                                                     "class": "ImageResource"
                                                                    },
                                                                    "hfov": 13.99,
                                                                    "yaw": 9.34,
                                                                    "class": "HotspotPanoramaOverlayMap",
                                                                    "pitch": -39.56
                                                                   }
                                                                  ],
                                                                  "areas": [
                                                                   {
                                                                    "displayTooltipInTouchScreens": true,
                                                                    "click": "this.startPanoramaWithCamera(this.panorama_142C44F0_1D4E_272C_41B7_609D26BED236, this.camera_10BC7062_1F97_2E0C_41B4_02B057E8966C); this.mainPlayList.set('selectedIndex', 14)",
                                                                    "mapColor": "#FF0000",
                                                                    "toolTip": "STUDY AREA",
                                                                    "class": "HotspotPanoramaOverlayArea"
                                                                   }
                                                                  ],
                                                                  "enabledInCardboard": true,
                                                                  "rollOverDisplay": false,
                                                                  "id": "overlay_6906BFE6_1E66_2C78_418F_54D4CE447969",
                                                                  "class": "HotspotPanoramaOverlay",
                                                                  "items": [
                                                                   {
                                                                    "yaw": 9.34,
                                                                    "hfov": 13.99,
                                                                    "image": {
                                                                     "levels": [
                                                                      {
                                                                       "height": 217,
                                                                       "width": 306,
                                                                       "url": "media/panorama_0C5A249A_1D5A_271C_41B1_F588299D1F0E_0_HS_0_0.png",
                                                                       "class": "ImageResourceLevel"
                                                                      }
                                                                     ],
                                                                     "class": "ImageResource"
                                                                    },
                                                                    "class": "HotspotPanoramaOverlayImage",
                                                                    "pitch": -39.56
                                                                   }
                                                                  ]
                                                                 },
                                                                 {
                                                                  "inertia": false,
                                                                  "id": "panorama_0C5A249A_1D5A_271C_41B1_F588299D1F0E_tcap0",
                                                                  "angle": 0,
                                                                  "rotate": false,
                                                                  "hfov": 22.8,
                                                                  "image": {
                                                                   "levels": [
                                                                    {
                                                                     "height": 850,
                                                                     "width": 850,
                                                                     "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                                                     "class": "ImageResourceLevel"
                                                                    }
                                                                   ],
                                                                   "class": "ImageResource"
                                                                  },
                                                                  "class": "TripodCapPanoramaOverlay"
                                                                 }
                                                                ],
                                                                "class": "SphericPanoramaFrame",
                                                                "sphere": {
                                                                 "levels": [
                                                                  {
                                                                   "height": 3040,
                                                                   "width": 6080,
                                                                   "url": "media/panorama_0C5A249A_1D5A_271C_41B1_F588299D1F0E_hq.jpeg",
                                                                   "class": "ImageResourceLevel"
                                                                  },
                                                                  {
                                                                   "height": 1608,
                                                                   "width": 3217,
                                                                   "url": "media/panorama_0C5A249A_1D5A_271C_41B1_F588299D1F0E.jpeg",
                                                                   "class": "ImageResourceLevel"
                                                                  }
                                                                 ],
                                                                 "class": "ImageResource"
                                                                }
                                                               }
                                                              ],
                                                              "hfov": 360,
                                                              "adjacentPanoramas": [
                                                               {
                                                                "panorama": "this.panorama_142C44F0_1D4E_272C_41B7_609D26BED236",
                                                                "yaw": 9.34,
                                                                "class": "AdjacentPanorama",
                                                                "backwardYaw": 174.91,
                                                                "distance": 1
                                                               }
                                                              ],
                                                              "class": "Panorama",
                                                              "vfov": 180
                                                             },
                                                             "yaw": 174.91,
                                                             "class": "AdjacentPanorama",
                                                             "backwardYaw": 9.34,
                                                             "distance": 1
                                                            }
                                                           ],
                                                           "class": "Panorama",
                                                           "vfov": 180
                                                          },
                                                          "yaw": -89.4,
                                                          "class": "AdjacentPanorama",
                                                          "backwardYaw": 82.53,
                                                          "distance": 1
                                                         }
                                                        ],
                                                        "class": "Panorama",
                                                        "vfov": 180
                                                       },
                                                       "yaw": -92.36,
                                                       "class": "AdjacentPanorama",
                                                       "backwardYaw": 86.57,
                                                       "distance": 1
                                                      },
                                                      {
                                                       "panorama": "this.panorama_142C74AA_1D4E_273C_4166_E77592AAE430",
                                                       "yaw": 92.61,
                                                       "class": "AdjacentPanorama",
                                                       "backwardYaw": -87.58,
                                                       "distance": 1
                                                      }
                                                     ],
                                                     "class": "Panorama",
                                                     "vfov": 180
                                                    },
                                                    "yaw": -87.58,
                                                    "class": "AdjacentPanorama",
                                                    "backwardYaw": 92.61,
                                                    "distance": 1
                                                   },
                                                   {
                                                    "panorama": "this.panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95",
                                                    "yaw": 84.63,
                                                    "class": "AdjacentPanorama",
                                                    "backwardYaw": 176.67,
                                                    "distance": 1
                                                   },
                                                   {
                                                    "panorama": {
                                                     "hfovMax": 139,
                                                     "id": "panorama_142FAAB7_1D4E_2314_41A5_4F219CE8B53C",
                                                     "partial": false,
                                                     "pitch": 0,
                                                     "thumbnailUrl": "media/panorama_142FAAB7_1D4E_2314_41A5_4F219CE8B53C_t.jpg",
                                                     "hfovMin": 60,
                                                     "label": "Guest Bathroom",
                                                     "frames": [
                                                      {
                                                       "thumbnailUrl": "media/panorama_142FAAB7_1D4E_2314_41A5_4F219CE8B53C_t.jpg",
                                                       "overlays": [
                                                        {
                                                         "useHandCursor": true,
                                                         "maps": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "height": 124,
                                                              "width": 200,
                                                              "url": "media/panorama_142FAAB7_1D4E_2314_41A5_4F219CE8B53C_0_HS_0_0_0_map.gif",
                                                              "class": "ImageResourceLevel"
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "hfov": 14.63,
                                                           "yaw": -3.33,
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "pitch": -52.51
                                                          }
                                                         ],
                                                         "areas": [
                                                          {
                                                           "displayTooltipInTouchScreens": true,
                                                           "click": "this.startPanoramaWithCamera(this.panorama_142C74AA_1D4E_273C_4166_E77592AAE430, this.camera_0F151EF5_1F97_33F4_419D_46472A14ED49); this.mainPlayList.set('selectedIndex', 10)",
                                                           "mapColor": "#FF0000",
                                                           "toolTip": "HALLWAY",
                                                           "class": "HotspotPanoramaOverlayArea"
                                                          }
                                                         ],
                                                         "enabledInCardboard": true,
                                                         "rollOverDisplay": false,
                                                         "id": "overlay_7A517A20_1E6A_17F8_41A2_D1E481C2F860",
                                                         "class": "HotspotPanoramaOverlay",
                                                         "items": [
                                                          {
                                                           "yaw": -3.33,
                                                           "hfov": 14.63,
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "height": 253,
                                                              "width": 406,
                                                              "url": "media/panorama_142FAAB7_1D4E_2314_41A5_4F219CE8B53C_0_HS_0_0.png",
                                                              "class": "ImageResourceLevel"
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "pitch": -52.51
                                                          }
                                                         ]
                                                        },
                                                        {
                                                         "inertia": false,
                                                         "id": "panorama_142FAAB7_1D4E_2314_41A5_4F219CE8B53C_tcap0",
                                                         "angle": 0,
                                                         "rotate": false,
                                                         "hfov": 22.8,
                                                         "image": {
                                                          "levels": [
                                                           {
                                                            "height": 850,
                                                            "width": 850,
                                                            "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                                            "class": "ImageResourceLevel"
                                                           }
                                                          ],
                                                          "class": "ImageResource"
                                                         },
                                                         "class": "TripodCapPanoramaOverlay"
                                                        }
                                                       ],
                                                       "class": "SphericPanoramaFrame",
                                                       "sphere": {
                                                        "levels": [
                                                         {
                                                          "height": 3040,
                                                          "width": 6080,
                                                          "url": "media/panorama_142FAAB7_1D4E_2314_41A5_4F219CE8B53C_hq.jpeg",
                                                          "class": "ImageResourceLevel"
                                                         },
                                                         {
                                                          "height": 1608,
                                                          "width": 3217,
                                                          "url": "media/panorama_142FAAB7_1D4E_2314_41A5_4F219CE8B53C.jpeg",
                                                          "class": "ImageResourceLevel"
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       }
                                                      }
                                                     ],
                                                     "hfov": 360,
                                                     "adjacentPanoramas": [
                                                      {
                                                       "panorama": "this.panorama_142C74AA_1D4E_273C_4166_E77592AAE430",
                                                       "yaw": -3.33,
                                                       "class": "AdjacentPanorama",
                                                       "backwardYaw": -170.16,
                                                       "distance": 1
                                                      }
                                                     ],
                                                     "class": "Panorama",
                                                     "vfov": 180
                                                    },
                                                    "yaw": -170.16,
                                                    "class": "AdjacentPanorama",
                                                    "backwardYaw": -3.33,
                                                    "distance": 1
                                                   }
                                                  ],
                                                  "class": "Panorama",
                                                  "vfov": 180
                                                 },
                                                 "yaw": 176.67,
                                                 "class": "AdjacentPanorama",
                                                 "backwardYaw": 84.63,
                                                 "distance": 1
                                                },
                                                {
                                                 "panorama": "this.panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441",
                                                 "yaw": -93.01,
                                                 "class": "AdjacentPanorama",
                                                 "backwardYaw": 83.29,
                                                 "distance": 1
                                                },
                                                {
                                                 "panorama": "this.panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80",
                                                 "yaw": 91.83,
                                                 "class": "AdjacentPanorama",
                                                 "backwardYaw": -93.59,
                                                 "distance": 1
                                                }
                                               ],
                                               "class": "Panorama",
                                               "vfov": 180
                                              },
                                              "yaw": -92.41,
                                              "class": "AdjacentPanorama",
                                              "backwardYaw": 92.86,
                                              "distance": 1
                                             }
                                            ],
                                            "class": "Panorama",
                                            "vfov": 180
                                           },
                                           "yaw": -95.4,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": 88.52,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": "this.panorama_142C146F_1D4E_6734_41B3_D05B01677309",
                                           "yaw": 166.4,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": 2.61,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": "this.panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95",
                                           "yaw": -93.59,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": 91.83,
                                           "distance": 1
                                          }
                                         ],
                                         "class": "Panorama",
                                         "vfov": 180
                                        },
                                        "yaw": 2.61,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": 166.4,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": "this.panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA",
                                        "yaw": -172.94,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": 82.64,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": {
                                         "hfovMax": 128,
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_142FE9D6_1D4E_6114_41B7_CDBA1A80F91C_t.jpg",
                                         "id": "panorama_142FE9D6_1D4E_6114_41B7_CDBA1A80F91C",
                                         "hfovMin": 60,
                                         "label": "Master Bathroom",
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_142FE9D6_1D4E_6114_41B7_CDBA1A80F91C_t.jpg",
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 159,
                                                  "width": 200,
                                                  "url": "media/panorama_142FE9D6_1D4E_6114_41B7_CDBA1A80F91C_0_HS_0_0_0_map.gif",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 16.43,
                                               "yaw": 90.01,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -52.53
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "displayTooltipInTouchScreens": true,
                                               "click": "this.startPanoramaWithCamera(this.panorama_142C146F_1D4E_6734_41B3_D05B01677309, this.camera_127CEF91_1F97_320C_41A3_2227087B4E89); this.mainPlayList.set('selectedIndex', 16)",
                                               "mapColor": "#FF0000",
                                               "toolTip": "MASTER BEDROOM",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_656ED77D_1E6A_1C4B_41BD_8AFA8195B94C",
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 90.01,
                                               "hfov": 16.43,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 365,
                                                  "width": 456,
                                                  "url": "media/panorama_142FE9D6_1D4E_6114_41B7_CDBA1A80F91C_0_HS_0_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -52.53
                                              }
                                             ]
                                            },
                                            {
                                             "inertia": false,
                                             "id": "panorama_142FE9D6_1D4E_6114_41B7_CDBA1A80F91C_tcap0",
                                             "angle": 0,
                                             "rotate": false,
                                             "hfov": 22.8,
                                             "image": {
                                              "levels": [
                                               {
                                                "height": 850,
                                                "width": 850,
                                                "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                                "class": "ImageResourceLevel"
                                               }
                                              ],
                                              "class": "ImageResource"
                                             },
                                             "class": "TripodCapPanoramaOverlay"
                                            }
                                           ],
                                           "class": "SphericPanoramaFrame",
                                           "sphere": {
                                            "levels": [
                                             {
                                              "height": 3040,
                                              "width": 6080,
                                              "url": "media/panorama_142FE9D6_1D4E_6114_41B7_CDBA1A80F91C_hq.jpeg",
                                              "class": "ImageResourceLevel"
                                             },
                                             {
                                              "height": 1608,
                                              "width": 3217,
                                              "url": "media/panorama_142FE9D6_1D4E_6114_41B7_CDBA1A80F91C.jpeg",
                                              "class": "ImageResourceLevel"
                                             }
                                            ],
                                            "class": "ImageResource"
                                           }
                                          }
                                         ],
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_142C146F_1D4E_6734_41B3_D05B01677309",
                                           "yaw": 90.01,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": -85.03,
                                           "distance": 1
                                          }
                                         ],
                                         "class": "Panorama",
                                         "vfov": 180
                                        },
                                        "yaw": -85.03,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": 90.01,
                                        "distance": 1
                                       }
                                      ],
                                      "class": "Panorama",
                                      "vfov": 180
                                     },
                                     "yaw": 82.64,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": -172.94,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": "this.panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083",
                                     "yaw": -58.75,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": 126.8,
                                     "distance": 1
                                    }
                                   ],
                                   "class": "Panorama",
                                   "vfov": 180
                                  },
                                  "yaw": 84.32,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": -96.98,
                                  "distance": 1
                                 }
                                ],
                                "class": "Panorama",
                                "vfov": 180
                               },
                               "yaw": 172.34,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -8.42,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA",
                               "yaw": 126.8,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -58.75,
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": -168.06,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -76.56,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMax": 124,
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E_t.jpg",
                             "id": "panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E",
                             "hfovMin": 60,
                             "label": "Entrance to Carport",
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E_t.jpg",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 37,
                                      "width": 65,
                                      "url": "media/panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E_0_HS_0_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.61,
                                   "yaw": 3.59,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -11.05
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.startPanoramaWithCamera(this.panorama_142CB1A9_1D4A_213C_41B8_500457431EA1, this.camera_11158FF6_1F97_31F4_41BD_5DAFC7D3528F); this.mainPlayList.set('selectedIndex', 26)",
                                   "mapColor": "#FF0000",
                                   "toolTip": "CARPORT",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_2561F867_1DE6_28E9_41A5_DD56B9E5F99F",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 3.59,
                                   "hfov": 7.61,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 74,
                                      "width": 131,
                                      "url": "media/panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -11.05
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 177,
                                      "width": 200,
                                      "url": "media/panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E_0_HS_1_1_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 40.63,
                                   "yaw": -14.56,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -30.56
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true,
                                   "toolTip": "PARKING AREA",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_CB852145_1EDA_75B8_41A5_2DDCD68C0E31",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -14.56,
                                   "roll": 0,
                                   "hfov": 40.63,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 634,
                                      "width": 716,
                                      "url": "media/panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E_0_HS_1_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -30.56
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 200,
                                      "width": 158,
                                      "url": "media/panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E_0_HS_2_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 23.76,
                                   "yaw": 174.5,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -15.58
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.startPanoramaWithCamera(this.panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F, this.camera_11FDEFE8_1F97_321C_41A0_54237918CC15); this.mainPlayList.set('selectedIndex', 21)",
                                   "mapColor": "#FF0000",
                                   "toolTip": "BACK ENTRANCE",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_CC3ECADC_1EEE_7448_4181_C172725C3036",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 174.5,
                                   "hfov": 23.76,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 525,
                                      "width": 416,
                                      "url": "media/panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E_0_HS_2_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -15.58
                                  }
                                 ]
                                },
                                {
                                 "inertia": false,
                                 "id": "panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E_tcap0",
                                 "angle": 0,
                                 "rotate": false,
                                 "hfov": 22.8,
                                 "image": {
                                  "levels": [
                                   {
                                    "height": 850,
                                    "width": 850,
                                    "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "class": "TripodCapPanoramaOverlay"
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 3040,
                                  "width": 6080,
                                  "url": "media/panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F",
                               "yaw": 174.5,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -89.35,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "hfovMax": 123,
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_142CB1A9_1D4A_213C_41B8_500457431EA1_t.jpg",
                                "id": "panorama_142CB1A9_1D4A_213C_41B8_500457431EA1",
                                "hfovMin": 60,
                                "label": "Carport",
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_142CB1A9_1D4A_213C_41B8_500457431EA1_t.jpg",
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 66,
                                         "width": 107,
                                         "url": "media/panorama_142CB1A9_1D4A_213C_41B8_500457431EA1_0_HS_0_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 12.69,
                                      "yaw": -2.6,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -4.81
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.startPanoramaWithCamera(this.panorama_142C5947_1D4A_2174_41BC_3520F29F63F1, this.camera_101F0E5A_1F97_323C_41AF_A3120448730C); this.mainPlayList.set('selectedIndex', 27)",
                                      "mapColor": "#FF0000",
                                      "toolTip": "BACK ENTRANCE TO FRONT",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_258DB677_1DEA_18EA_41BD_6B3C1DFA8D32",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -2.6,
                                      "hfov": 12.69,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 133,
                                         "width": 215,
                                         "url": "media/panorama_142CB1A9_1D4A_213C_41B8_500457431EA1_0_HS_0_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -4.81
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 191,
                                         "width": 200,
                                         "url": "media/panorama_142CB1A9_1D4A_213C_41B8_500457431EA1_0_HS_1_1_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 25.99,
                                      "yaw": -82.28,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -16.76
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "displayTooltipInTouchScreens": true,
                                      "toolTip": "PARKING AREA",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_C92B6AF6_1EE6_1458_41B9_05EE93A7E730",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -82.28,
                                      "roll": 0,
                                      "hfov": 25.99,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 427,
                                         "width": 446,
                                         "url": "media/panorama_142CB1A9_1D4A_213C_41B8_500457431EA1_0_HS_1_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -16.76
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 79,
                                         "width": 53,
                                         "url": "media/panorama_142CB1A9_1D4A_213C_41B8_500457431EA1_0_HS_2_1_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 6.34,
                                      "yaw": -89.73,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": 1.68
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.mainPlayList.set('selectedIndex', 21)",
                                      "mapColor": "#FF0000",
                                      "toolTip": "BACK ENTRANCE",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_D353DBDE_1EEA_1448_41BB_E46D53868508",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -89.73,
                                      "roll": 0,
                                      "hfov": 6.34,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 159,
                                         "width": 107,
                                         "url": "media/panorama_142CB1A9_1D4A_213C_41B8_500457431EA1_0_HS_2_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": 1.68
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 39,
                                         "width": 37,
                                         "url": "media/panorama_142CB1A9_1D4A_213C_41B8_500457431EA1_0_HS_3_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 4.46,
                                      "yaw": -89.52,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": 3.46
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.startPanoramaWithCamera(this.panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E, this.camera_10E5DE44_1F97_3214_4179_9C87E0EB2F26); this.mainPlayList.set('selectedIndex', 25)",
                                      "mapColor": "#FF0000",
                                      "toolTip": "BACK ENTRANCE",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_C9CA3A5A_1EEA_1448_41B5_E44C839B3F82",
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -89.52,
                                      "hfov": 4.46,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 79,
                                         "width": 75,
                                         "url": "media/panorama_142CB1A9_1D4A_213C_41B8_500457431EA1_0_HS_3_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": 3.46
                                     }
                                    ]
                                   },
                                   {
                                    "inertia": false,
                                    "id": "panorama_142CB1A9_1D4A_213C_41B8_500457431EA1_tcap0",
                                    "angle": 0,
                                    "rotate": false,
                                    "hfov": 22.8,
                                    "image": {
                                     "levels": [
                                      {
                                       "height": 850,
                                       "width": 850,
                                       "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                       "class": "ImageResourceLevel"
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "class": "TripodCapPanoramaOverlay"
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame",
                                  "sphere": {
                                   "levels": [
                                    {
                                     "height": 3040,
                                     "width": 6080,
                                     "url": "media/panorama_142CB1A9_1D4A_213C_41B8_500457431EA1_hq.jpeg",
                                     "class": "ImageResourceLevel"
                                    },
                                    {
                                     "height": 1608,
                                     "width": 3217,
                                     "url": "media/panorama_142CB1A9_1D4A_213C_41B8_500457431EA1.jpeg",
                                     "class": "ImageResourceLevel"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  }
                                 }
                                ],
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E",
                                  "yaw": -89.52,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 3.59,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": {
                                   "hfovMax": 125,
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_142C5947_1D4A_2174_41BC_3520F29F63F1_t.jpg",
                                   "id": "panorama_142C5947_1D4A_2174_41BC_3520F29F63F1",
                                   "hfovMin": 60,
                                   "label": "Back Entrance",
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_142C5947_1D4A_2174_41BC_3520F29F63F1_t.jpg",
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 112,
                                            "width": 85,
                                            "url": "media/panorama_142C5947_1D4A_2174_41BC_3520F29F63F1_0_HS_0_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 10,
                                         "yaw": 2.22,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -6.76
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "displayTooltipInTouchScreens": true,
                                         "click": "this.startPanoramaWithCamera(this.panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53, this.camera_10A92E16_1F97_3234_41AA_ACE16A6CD971); this.mainPlayList.set('selectedIndex', 1)",
                                         "mapColor": "#FF0000",
                                         "toolTip": "TO FRONT ENTRANCE",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_2A6529DB_1DEA_6BDA_4191_DA2A32D8DD47",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 2.22,
                                         "hfov": 10,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 225,
                                            "width": 170,
                                            "url": "media/panorama_142C5947_1D4A_2174_41BC_3520F29F63F1_0_HS_0_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -6.76
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 58,
                                            "width": 68,
                                            "url": "media/panorama_142C5947_1D4A_2174_41BC_3520F29F63F1_0_HS_1_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 8.12,
                                         "yaw": -87.25,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -5.54
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "displayTooltipInTouchScreens": true,
                                         "click": "this.startPanoramaWithCamera(this.panorama_142CB1A9_1D4A_213C_41B8_500457431EA1, this.camera_10C30E2B_1F97_321C_41B4_1829B9DA2F7B); this.mainPlayList.set('selectedIndex', 26)",
                                         "mapColor": "#FF0000",
                                         "toolTip": "CARPORT",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_C3BEBC8D_1EEA_2CC8_41A4_FF613F1A38AD",
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -87.25,
                                         "hfov": 8.12,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 116,
                                            "width": 137,
                                            "url": "media/panorama_142C5947_1D4A_2174_41BC_3520F29F63F1_0_HS_1_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -5.54
                                        }
                                       ]
                                      },
                                      {
                                       "inertia": false,
                                       "id": "panorama_142C5947_1D4A_2174_41BC_3520F29F63F1_tcap0",
                                       "angle": 0,
                                       "rotate": false,
                                       "hfov": 22.8,
                                       "image": {
                                        "levels": [
                                         {
                                          "height": 850,
                                          "width": 850,
                                          "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                          "class": "ImageResourceLevel"
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "class": "TripodCapPanoramaOverlay"
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame",
                                     "sphere": {
                                      "levels": [
                                       {
                                        "height": 3040,
                                        "width": 6080,
                                        "url": "media/panorama_142C5947_1D4A_2174_41BC_3520F29F63F1_hq.jpeg",
                                        "class": "ImageResourceLevel"
                                       },
                                       {
                                        "height": 1608,
                                        "width": 3217,
                                        "url": "media/panorama_142C5947_1D4A_2174_41BC_3520F29F63F1.jpeg",
                                        "class": "ImageResourceLevel"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     }
                                    }
                                   ],
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53",
                                     "yaw": 2.22,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": -175.64,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": "this.panorama_142CB1A9_1D4A_213C_41B8_500457431EA1",
                                     "yaw": -87.25,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": -2.6,
                                     "distance": 1
                                    }
                                   ],
                                   "class": "Panorama",
                                   "vfov": 180
                                  },
                                  "yaw": -2.6,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": -87.25,
                                  "distance": 1
                                 }
                                ],
                                "class": "Panorama",
                                "vfov": 180
                               },
                               "yaw": 3.59,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -89.52,
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": -89.35,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 174.5,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMax": 122,
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_t.jpg",
                             "id": "panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80",
                             "hfovMin": 60,
                             "label": "Backside 2",
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_t.jpg",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 92,
                                      "width": 138,
                                      "url": "media/panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_0_HS_0_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 14.53,
                                   "yaw": 95.28,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -27.96
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.startPanoramaWithCamera(this.panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF, this.camera_0FB92EC8_1F97_321C_41A0_6A4F7A82253C); this.mainPlayList.set('selectedIndex', 23)",
                                   "mapColor": "#FF0000",
                                   "toolTip": "PATIO",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_2D524EF1_1DFA_69E6_41A8_4191D48CB790",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 95.28,
                                   "hfov": 14.53,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 184,
                                      "width": 277,
                                      "url": "media/panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -27.96
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 22,
                                      "width": 71,
                                      "url": "media/panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_0_HS_1_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 8.12,
                                   "yaw": 96.71,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -16.68
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.startPanoramaWithCamera(this.panorama_142F9680_1D4E_23EC_4163_994A48C558C0, this.camera_0F878EB9_1F97_327C_41B4_B1DADA744C0A); this.mainPlayList.set('selectedIndex', 24)",
                                   "mapColor": "#FF0000",
                                   "toolTip": "PATIO",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_8A2ADE13_1EAE_EFD8_41BB_E8BFCD77CA2C",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 96.71,
                                   "hfov": 8.12,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 45,
                                      "width": 143,
                                      "url": "media/panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_0_HS_1_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -16.68
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 53,
                                      "width": 111,
                                      "url": "media/panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_0_HS_2_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 11.24,
                                   "yaw": -90.1,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -31.64
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.startPanoramaWithCamera(this.panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F, this.camera_10603EAA_1F97_321C_41B2_AEAEE5FF7041); this.mainPlayList.set('selectedIndex', 21)",
                                   "mapColor": "#FF0000",
                                   "toolTip": "SIDEYARD/PATIO",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_89B3F191_1EAA_14D8_41B9_087DD8E3821C",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -90.1,
                                   "hfov": 11.24,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 106,
                                      "width": 222,
                                      "url": "media/panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_0_HS_2_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -31.64
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 200,
                                      "width": 136,
                                      "url": "media/panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_0_HS_3_1_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 21.9,
                                   "yaw": -92.17,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -10.48
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.mainPlayList.set('selectedIndex', 25)",
                                   "mapColor": "#FF0000",
                                   "toolTip": "CARPORT",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_889559C0_1EAA_14B8_4177_9EBEBF4B76C8",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -92.17,
                                   "roll": 0,
                                   "hfov": 21.9,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 548,
                                      "width": 374,
                                      "url": "media/panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_0_HS_3_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -10.48
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 70,
                                      "width": 66,
                                      "url": "media/panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_0_HS_4_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.82,
                                   "yaw": -91.67,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -9.33
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.mainPlayList.set('selectedIndex', 25)",
                                   "mapColor": "#FF0000",
                                   "toolTip": "BACK ENTRANCE TO CARPORT",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_1F58A923_1EEA_15F8_41AA_F9158C53E4AD",
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -91.67,
                                   "hfov": 7.82,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 141,
                                      "width": 133,
                                      "url": "media/panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_0_HS_4_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -9.33
                                  }
                                 ]
                                },
                                {
                                 "inertia": false,
                                 "id": "panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_tcap0",
                                 "angle": 0,
                                 "rotate": false,
                                 "hfov": 22.8,
                                 "image": {
                                  "levels": [
                                   {
                                    "height": 850,
                                    "width": 850,
                                    "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "class": "TripodCapPanoramaOverlay"
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 3040,
                                  "width": 6080,
                                  "url": "media/panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F",
                               "yaw": -90.1,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 85.65,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_142F9680_1D4E_23EC_4163_994A48C558C0",
                               "yaw": 96.71,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 87.74,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF",
                               "yaw": 95.28,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 89.65,
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": 85.65,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -90.1,
                            "distance": 1
                           }
                          ],
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": 88.5,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 88.31,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_142F9680_1D4E_23EC_4163_994A48C558C0",
                         "yaw": -72.13,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 88.67,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80",
                         "yaw": 89.65,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 95.28,
                         "distance": 1
                        }
                       ],
                       "class": "Panorama",
                       "vfov": 180
                      },
                      "yaw": 88.67,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -72.13,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80",
                      "yaw": 87.74,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 96.71,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E",
                      "yaw": 23.07,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 42.57,
                      "distance": 1
                     }
                    ],
                    "class": "Panorama",
                    "vfov": 180
                   },
                   "yaw": 42.57,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 23.07,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "hfovMax": 121,
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2_t.jpg",
                    "id": "panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2",
                    "hfovMin": 60,
                    "label": "Bedroom 1 Wide 2",
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2_t.jpg",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 73,
                             "width": 125,
                             "url": "media/panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 12.61,
                          "yaw": -96.06,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -31.59
                         }
                        ],
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "click": "this.startPanoramaWithCamera(this.panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E, this.camera_117DBDC9_1F97_361C_41A1_675DBADA3FDA); this.mainPlayList.set('selectedIndex', 6)",
                          "mapColor": "#FF0000",
                          "toolTip": "BEDROOM 1",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_A304FECE_1EA7_EC48_41B6_77B09625A136",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -96.06,
                          "hfov": 12.61,
                          "image": {
                           "levels": [
                            {
                             "height": 146,
                             "width": 250,
                             "url": "media/panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -31.59
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 200,
                             "width": 25,
                             "url": "media/panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2_0_HS_1_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 8.3,
                          "yaw": -65.68,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -11.74
                         }
                        ],
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "click": "this.mainPlayList.set('selectedIndex', 24)",
                          "mapColor": "#FF0000",
                          "toolTip": "PATIO AREA",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_DE1A92DC_1EA6_7448_41B2_9257A5D2BA21",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -65.68,
                          "roll": 0,
                          "hfov": 8.3,
                          "image": {
                           "levels": [
                            {
                             "height": 1098,
                             "width": 140,
                             "url": "media/panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -11.74
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 82,
                             "width": 66,
                             "url": "media/panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2_0_HS_2_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.86,
                          "yaw": -65.63,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -6.16
                         }
                        ],
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "click": "this.mainPlayList.set('selectedIndex', 24)",
                          "mapColor": "#FF0000",
                          "toolTip": "PATIO AREA",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_DD720DE7_1EDA_2C78_41B8_6C93621018BB",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -65.63,
                          "hfov": 7.86,
                          "image": {
                           "levels": [
                            {
                             "height": 165,
                             "width": 133,
                             "url": "media/panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2_0_HS_2_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -6.16
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 28,
                             "width": 83,
                             "url": "media/panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2_0_HS_3_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 8.95,
                          "yaw": -135.83,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -24.4
                         }
                        ],
                        "areas": [
                         {
                          "displayTooltipInTouchScreens": true,
                          "click": "this.mainPlayList.set('selectedIndex', 4)",
                          "mapColor": "#FF0000",
                          "toolTip": "BEDROOM 1",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_D9C0C216_1EDA_77D8_4173_C027E739D837",
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -135.83,
                          "hfov": 8.95,
                          "image": {
                           "levels": [
                            {
                             "height": 56,
                             "width": 166,
                             "url": "media/panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2_0_HS_3_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -24.4
                         }
                        ]
                       },
                       {
                        "inertia": false,
                        "id": "panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2_tcap0",
                        "angle": 0,
                        "rotate": false,
                        "hfov": 22.8,
                        "image": {
                         "levels": [
                          {
                           "height": 850,
                           "width": 850,
                           "url": "media/panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_tcap0.png",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "class": "TripodCapPanoramaOverlay"
                       }
                      ],
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "levels": [
                        {
                         "height": 3040,
                         "width": 6080,
                         "url": "media/panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ],
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E",
                      "yaw": -96.06,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 88.59,
                      "distance": 1
                     }
                    ],
                    "class": "Panorama",
                    "vfov": 180
                   },
                   "yaw": 88.59,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -96.06,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_142C6B33_1D4D_E113_4152_2E078B497D82",
                   "yaw": -174.48,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -76.91,
                   "distance": 1
                  }
                 ],
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": -76.91,
                "class": "AdjacentPanorama",
                "backwardYaw": -174.48,
                "distance": 1
               }
              ],
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": 118.58,
             "class": "AdjacentPanorama",
             "backwardYaw": 87.02,
             "distance": 1
            },
            {
             "panorama": "this.panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95",
             "yaw": 83.29,
             "class": "AdjacentPanorama",
             "backwardYaw": -93.01,
             "distance": 1
            }
           ],
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": -175.51,
          "class": "AdjacentPanorama",
          "backwardYaw": 1.5,
          "distance": 1
         }
        ],
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": -85.44,
       "class": "AdjacentPanorama",
       "backwardYaw": -2.52,
       "distance": 1
      },
      {
       "panorama": "this.panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474",
       "yaw": 2.95,
       "class": "AdjacentPanorama",
       "backwardYaw": 4.94,
       "distance": 1
      },
      {
       "panorama": "this.panorama_142C5947_1D4A_2174_41BC_3520F29F63F1",
       "yaw": -175.64,
       "class": "AdjacentPanorama",
       "backwardYaw": 2.22,
       "distance": 1
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": 4.94,
    "class": "AdjacentPanorama",
    "backwardYaw": 2.95,
    "distance": 1
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "buttonPlayLeft": {
   "paddingRight": 0,
   "minWidth": 0,
   "mode": "push",
   "width": 38,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "height": 38,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "shadow": false,
   "transparencyActive": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonZoomIn": {
   "paddingRight": 0,
   "minWidth": 0,
   "mode": "push",
   "width": 30,
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "height": 30,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "shadow": false,
   "transparencyActive": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonMoveLeft": {
   "paddingRight": 0,
   "minWidth": 0,
   "mode": "push",
   "width": 30,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5.png",
   "height": 30,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_rollover.png",
   "shadow": false,
   "transparencyActive": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "displayPlaybackBar": true,
  "buttonRestart": {
   "paddingRight": 0,
   "minWidth": 0,
   "mode": "push",
   "width": 38,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "height": 38,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "shadow": false,
   "transparencyActive": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "buttonZoomOut": {
   "paddingRight": 0,
   "minWidth": 0,
   "mode": "push",
   "width": 30,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "height": 30,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "shadow": false,
   "transparencyActive": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "touchControlMode": "drag_rotation",
  "buttonMoveRight": {
   "paddingRight": 0,
   "minWidth": 0,
   "mode": "push",
   "width": 30,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894.png",
   "height": 30,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_rollover.png",
   "shadow": false,
   "transparencyActive": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894",
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonMoveUp": {
   "paddingRight": 0,
   "minWidth": 0,
   "mode": "push",
   "width": 30,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB.png",
   "height": 30,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_rollover.png",
   "shadow": false,
   "transparencyActive": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonPlayRight": {
   "paddingRight": 0,
   "minWidth": 0,
   "mode": "push",
   "width": 38,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "height": 38,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "shadow": false,
   "transparencyActive": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonMoveDown": {
   "paddingRight": 0,
   "minWidth": 0,
   "mode": "push",
   "width": 30,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2.png",
   "height": 30,
   "borderRadius": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_rollover.png",
   "shadow": false,
   "transparencyActive": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2",
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false
 },
 {
  "id": "panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_camera",
  "initialPosition": {
   "hfov": 104,
   "yaw": 32,
   "class": "PanoramaCameraPosition",
   "pitch": 15.35
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 495,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 4.78,
     "yawDelta": 25.85,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 4.78,
     "yawDelta": 308.3,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 4.78,
     "yawDelta": 25.85,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53",
 {
  "id": "panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53_camera",
  "initialPosition": {
   "hfov": 123,
   "yaw": -50.74,
   "class": "PanoramaCameraPosition",
   "pitch": -4.13
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -83.82,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -9.53,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142CB576_1D4E_2114_41B3_498186C748F4",
 {
  "id": "panorama_142CB576_1D4E_2114_41B3_498186C748F4_camera",
  "initialPosition": {
   "hfov": 118,
   "yaw": 179.92,
   "class": "PanoramaCameraPosition",
   "pitch": -20.12
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -175.83,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -21.94,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441",
 {
  "id": "panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441_camera",
  "initialPosition": {
   "hfov": 123,
   "yaw": 73.71,
   "class": "PanoramaCameraPosition",
   "pitch": -7.89
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 94.48,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -7.62,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142C6B33_1D4D_E113_4152_2E078B497D82",
 {
  "id": "panorama_142C6B33_1D4D_E113_4152_2E078B497D82_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": -43.38,
   "class": "PanoramaCameraPosition",
   "pitch": -23.65
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -4.33,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -24.09,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -83.22,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -23.73,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2",
 {
  "id": "panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2_camera",
  "initialPosition": {
   "yaw": -149.05,
   "class": "PanoramaCameraPosition",
   "pitch": -15.82
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -89.9,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -19.07,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E",
 {
  "id": "panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_camera",
  "initialPosition": {
   "yaw": 94.9,
   "class": "PanoramaCameraPosition",
   "pitch": -3.8
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 158.93,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -4.99,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 43.64,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -12.27,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95",
 {
  "id": "panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": 127.89,
   "class": "PanoramaCameraPosition",
   "pitch": -7.49
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 77.54,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.01,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -90.49,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -18.96,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE",
 {
  "id": "panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE_camera",
  "initialPosition": {
   "hfov": 123,
   "yaw": -9.55,
   "class": "PanoramaCameraPosition",
   "pitch": -12.38
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "id": "sequence_0F641229_1D7A_E33C_41BB_126508AA109D",
   "movements": [
    {
     "targetYaw": -27.12,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -16.69,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetHfov": 69,
     "targetYaw": 80.29,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -13.95,
     "easing": "cubic_in_out",
     "hfovSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -9.55,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -12.38,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "repeat": 0,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80",
 {
  "id": "panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80_camera",
  "initialPosition": {
   "hfov": 122,
   "yaw": 25.44,
   "class": "PanoramaCameraPosition",
   "pitch": -9.87
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 68.35,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -13.35,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -51.95,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.72,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142C74AA_1D4E_273C_4166_E77592AAE430",
 {
  "id": "panorama_142C74AA_1D4E_273C_4166_E77592AAE430_camera",
  "initialPosition": {
   "hfov": 124,
   "yaw": -128.14,
   "class": "PanoramaCameraPosition",
   "pitch": -2.18
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -90.73,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.36,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 94.61,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.72,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142FAAB7_1D4E_2314_41A5_4F219CE8B53C",
 {
  "id": "panorama_142FAAB7_1D4E_2314_41A5_4F219CE8B53C_camera",
  "initialPosition": {
   "hfov": 124,
   "yaw": -145.63,
   "class": "PanoramaCameraPosition",
   "pitch": -9.38
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -112.1,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -9.77,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -11.13,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -16.21,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3",
 {
  "id": "panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3_camera",
  "initialPosition": {
   "yaw": 139.28,
   "class": "PanoramaCameraPosition",
   "pitch": -12.5
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -102.43,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -20.51,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB",
 {
  "id": "panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": -130.02,
   "class": "PanoramaCameraPosition",
   "pitch": -9.35
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -85.96,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -11.8,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 92.34,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -17.88,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142C44F0_1D4E_272C_41B7_609D26BED236",
 {
  "id": "panorama_142C44F0_1D4E_272C_41B7_609D26BED236_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": 168.21,
   "class": "PanoramaCameraPosition",
   "pitch": -14.46
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -127.97,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -15.14,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0C5A249A_1D5A_271C_41B1_F588299D1F0E",
 {
  "id": "panorama_0C5A249A_1D5A_271C_41B1_F588299D1F0E_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": -31.55,
   "class": "PanoramaCameraPosition",
   "pitch": -11.03
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 4.14,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -11.2,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142C146F_1D4E_6734_41B3_D05B01677309",
 {
  "id": "panorama_142C146F_1D4E_6734_41B3_D05B01677309_camera",
  "initialPosition": {
   "yaw": -33.69,
   "class": "PanoramaCameraPosition",
   "pitch": -7
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -90.98,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -15.38,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -169.62,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -15.74,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142FE9D6_1D4E_6114_41B7_CDBA1A80F91C",
 {
  "id": "panorama_142FE9D6_1D4E_6114_41B7_CDBA1A80F91C_camera",
  "initialPosition": {
   "yaw": -49.64,
   "class": "PanoramaCameraPosition",
   "pitch": -11.4
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 89.47,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -15.38,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA",
 {
  "id": "panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_camera",
  "initialPosition": {
   "yaw": -56.23,
   "class": "PanoramaCameraPosition",
   "pitch": -5.57
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 80.52,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -8.22,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718",
 {
  "id": "panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": 38.33,
   "class": "PanoramaCameraPosition",
   "pitch": -0.96
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -9.7,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -5.83,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083",
 {
  "id": "panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083_camera",
  "initialPosition": {
   "yaw": -107.48,
   "class": "PanoramaCameraPosition",
   "pitch": -8.11
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 102.13,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -19.07,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F",
 {
  "id": "panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_camera",
  "initialPosition": {
   "yaw": 130.05,
   "class": "PanoramaCameraPosition",
   "pitch": -0.19
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -86.55,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -14.06,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80",
 {
  "id": "panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_camera",
  "initialPosition": {
   "yaw": 82.27,
   "class": "PanoramaCameraPosition",
   "pitch": -6.59
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -92.17,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.12,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF",
 {
  "id": "panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_camera",
  "initialPosition": {
   "yaw": -36.21,
   "class": "PanoramaCameraPosition",
   "pitch": -4.6
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 86.25,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -4.28,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142F9680_1D4E_23EC_4163_994A48C558C0",
 {
  "id": "panorama_142F9680_1D4E_23EC_4163_994A48C558C0_camera",
  "initialPosition": {
   "yaw": 30.08,
   "class": "PanoramaCameraPosition",
   "pitch": -4.1
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 84.94,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -5.71,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E",
 {
  "id": "panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E_camera",
  "initialPosition": {
   "yaw": -6.59,
   "class": "PanoramaCameraPosition",
   "pitch": -2.89
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -174.51,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -16.57,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142CB1A9_1D4A_213C_41B8_500457431EA1",
 {
  "id": "panorama_142CB1A9_1D4A_213C_41B8_500457431EA1_camera",
  "initialPosition": {
   "yaw": -48.25,
   "class": "PanoramaCameraPosition",
   "pitch": 5.75
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -5.76,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": 0.02,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_142C5947_1D4A_2174_41BC_3520F29F63F1",
 {
  "id": "panorama_142C5947_1D4A_2174_41BC_3520F29F63F1_camera",
  "initialPosition": {
   "yaw": -42.83,
   "class": "PanoramaCameraPosition",
   "pitch": -3.97
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 0.45,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -3.09,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_142CB576_1D4E_2114_41B3_498186C748F4",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142CB576_1D4E_2114_41B3_498186C748F4_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_142C6B33_1D4D_E113_4152_2E078B497D82",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C6B33_1D4D_E113_4152_2E078B497D82_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_142C74AA_1D4E_273C_4166_E77592AAE430",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C74AA_1D4E_273C_4166_E77592AAE430_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_142FAAB7_1D4E_2314_41A5_4F219CE8B53C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FAAB7_1D4E_2314_41A5_4F219CE8B53C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_142C44F0_1D4E_272C_41B7_609D26BED236",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C44F0_1D4E_272C_41B7_609D26BED236_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_0C5A249A_1D5A_271C_41B1_F588299D1F0E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0C5A249A_1D5A_271C_41B1_F588299D1F0E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_142C146F_1D4E_6734_41B3_D05B01677309",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C146F_1D4E_6734_41B3_D05B01677309_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.panorama_142FE9D6_1D4E_6114_41B7_CDBA1A80F91C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FE9D6_1D4E_6114_41B7_CDBA1A80F91C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "media": "this.panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "media": "this.panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "media": "this.panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "media": "this.panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "media": "this.panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
    "media": "this.panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
    "media": "this.panorama_142F9680_1D4E_23EC_4163_994A48C558C0",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142F9680_1D4E_23EC_4163_994A48C558C0_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
    "media": "this.panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
    "media": "this.panorama_142CB1A9_1D4A_213C_41B8_500457431EA1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142CB1A9_1D4A_213C_41B8_500457431EA1_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 0)",
    "media": "this.panorama_142C5947_1D4A_2174_41BC_3520F29F63F1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C5947_1D4A_2174_41BC_3520F29F63F1_camera"
   }
  ]
 },
 {
  "id": "thumbnaillist5245_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "media": "this.panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_17272BE1_1D4E_612C_41BB_BB28F6E8E474_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "media": "this.panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0C7424D7_1D4E_2714_41BA_9E53E2EF9E53_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
    "media": "this.panorama_142CB576_1D4E_2114_41B3_498186C748F4",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142CB576_1D4E_2114_41B3_498186C748F4_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "media": "this.panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C4002_1D4E_DEEC_41A7_3F54D0764441_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "media": "this.panorama_142C6B33_1D4D_E113_4152_2E078B497D82",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C6B33_1D4D_E113_4152_2E078B497D82_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "media": "this.panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0C10185D_1DB6_2F14_41BB_B0C5727869C2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
    "media": "this.panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C60FB_1D4D_DF1C_41B3_74D3E370B54E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
    "media": "this.panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C7A7E_1D4E_E314_417A_728A9C4A1B95_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)",
    "media": "this.panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C750A_1D4E_E6FC_41AD_F4D5DCDB71FE_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)",
    "media": "this.panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C6F73_1D4E_E113_41BC_0B8819C21B80_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 11)",
    "media": "this.panorama_142C74AA_1D4E_273C_4166_E77592AAE430",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C74AA_1D4E_273C_4166_E77592AAE430_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 11, 12)",
    "media": "this.panorama_142FAAB7_1D4E_2314_41A5_4F219CE8B53C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FAAB7_1D4E_2314_41A5_4F219CE8B53C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 12, 13)",
    "media": "this.panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FBF28_1D4E_213C_419C_4B9C3651C6E3_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 13, 14)",
    "media": "this.panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C6FDC_1D4E_2114_41B7_A1DE5DC190DB_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 14, 15)",
    "media": "this.panorama_142C44F0_1D4E_272C_41B7_609D26BED236",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C44F0_1D4E_272C_41B7_609D26BED236_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 15, 16)",
    "media": "this.panorama_0C5A249A_1D5A_271C_41B1_F588299D1F0E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0C5A249A_1D5A_271C_41B1_F588299D1F0E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 16, 17)",
    "media": "this.panorama_142C146F_1D4E_6734_41B3_D05B01677309",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C146F_1D4E_6734_41B3_D05B01677309_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 17, 18)",
    "media": "this.panorama_142FE9D6_1D4E_6114_41B7_CDBA1A80F91C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FE9D6_1D4E_6114_41B7_CDBA1A80F91C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 18, 19)",
    "media": "this.panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C2F2D_1D4E_6134_41AE_9E4112D37DDA_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 19, 20)",
    "media": "this.panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FC452_1D4E_676C_4172_C2EE1E3A0718_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 20, 21)",
    "media": "this.panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FFE8A_1D4E_63FC_41BC_BBE6032A7083_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 21, 22)",
    "media": "this.panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FE6BE_1D4E_2314_4191_8FA08326E56F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 22, 23)",
    "media": "this.panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FAC04_1D4E_26F4_4171_5D5660CD0A80_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 23, 24)",
    "media": "this.panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142FF149_1D4E_217C_41B0_2BE4DEF0D3DF_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 24, 25)",
    "media": "this.panorama_142F9680_1D4E_23EC_4163_994A48C558C0",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142F9680_1D4E_23EC_4163_994A48C558C0_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 25, 26)",
    "media": "this.panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C96FC_1D4D_E314_4188_0C882CD7B90E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 26, 27)",
    "media": "this.panorama_142CB1A9_1D4A_213C_41B8_500457431EA1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142CB1A9_1D4A_213C_41B8_500457431EA1_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 27, 0)",
    "media": "this.panorama_142C5947_1D4A_2174_41BC_3520F29F63F1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_142C5947_1D4A_2174_41BC_3520F29F63F1_camera"
   }
  ]
 },
 {
  "id": "camera_111A9D8B_1F97_361C_41AA_2D2841DFFBF1",
  "initialPosition": {
   "hfov": 123,
   "yaw": 87.59,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "id": "sequence_111AAD8B_1F97_361C_41AB_5C662A89C8CE",
   "movements": [
    {
     "targetYaw": -9.55,
     "yawSpeed": 175.59,
     "pitchSpeed": 87.89,
     "targetPitch": -12.38,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -27.12,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -16.69,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetHfov": 69,
     "targetYaw": 80.29,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -13.95,
     "easing": "cubic_in_out",
     "hfovSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 87.59,
     "yawSpeed": 5.73,
     "pitchSpeed": 3.35,
     "targetPitch": 0,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "repeat": 0,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1131FD9B_1F97_363C_41B2_759C00A858C2",
  "initialPosition": {
   "hfov": 124,
   "yaw": -95.37,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -128.14,
     "yawSpeed": 28.66,
     "pitchSpeed": 14.77,
     "targetPitch": -2.18,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -90.73,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.36,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 94.61,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.72,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_112D6DAA_1F97_361C_41A2_3C654676F901",
  "initialPosition": {
   "hfov": 123,
   "yaw": -96.71,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 73.71,
     "yawSpeed": 216,
     "pitchSpeed": 108,
     "targetPitch": -7.89,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 94.48,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -7.62,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_11453DBA_1F97_367C_41A2_0BDD0B5B3C21",
  "initialPosition": {
   "hfov": 122,
   "yaw": 86.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 25.44,
     "yawSpeed": 47.27,
     "pitchSpeed": 24.03,
     "targetPitch": -9.87,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 68.35,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -13.35,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -51.95,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.72,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_117DBDC9_1F97_361C_41A1_675DBADA3FDA",
  "initialPosition": {
   "yaw": -91.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 94.9,
     "yawSpeed": 94.84,
     "pitchSpeed": 47.7,
     "targetPitch": -3.8,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 158.93,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -4.99,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 43.64,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -12.27,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_10956DD8_1F97_363C_41BA_C59A0DAD97C4",
  "initialPosition": {
   "hfov": 118,
   "yaw": 177.48,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 179.92,
     "yawSpeed": 2.84,
     "pitchSpeed": 1.91,
     "targetPitch": -20.12,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -175.83,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -21.94,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_108D3DEF_1F97_3614_41A7_C037A633074F",
  "initialPosition": {
   "hfov": 104,
   "yaw": -175.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 495,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 4.78,
     "yawDelta": 25.85,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 4.78,
     "yawDelta": 308.3,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 4.78,
     "yawDelta": 25.85,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_10B1CDFC_1F97_31F5_4179_B81A9902C9CC",
  "initialPosition": {
   "yaw": -177.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -42.83,
     "yawSpeed": 101.57,
     "pitchSpeed": 51.05,
     "targetPitch": -3.97,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 0.45,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -3.09,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_10A92E16_1F97_3234_41AA_ACE16A6CD971",
  "initialPosition": {
   "hfov": 123,
   "yaw": 4.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -50.74,
     "yawSpeed": 54.19,
     "pitchSpeed": 27.47,
     "targetPitch": -4.13,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -83.82,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -9.53,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_10C30E2B_1F97_321C_41B4_1829B9DA2F7B",
  "initialPosition": {
   "yaw": 177.4,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -48.25,
     "yawSpeed": 170.81,
     "pitchSpeed": 85.51,
     "targetPitch": 5.75,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -5.76,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": 0.02,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_10E5DE44_1F97_3214_4179_9C87E0EB2F26",
  "initialPosition": {
   "yaw": -176.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -6.59,
     "yawSpeed": 33.51,
     "pitchSpeed": 17.18,
     "targetPitch": -2.89,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -174.51,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -16.57,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_101F0E5A_1F97_323C_41AF_A3120448730C",
  "initialPosition": {
   "yaw": 92.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -42.83,
     "yawSpeed": 102.05,
     "pitchSpeed": 51.29,
     "targetPitch": -3.97,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 0.45,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -3.09,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1031BE74_1F97_32F4_41B3_CCB7E352BBFD",
  "initialPosition": {
   "hfov": 123,
   "yaw": -91.48,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "id": "sequence_10314E74_1F97_32F4_41B0_F64352988129",
   "movements": [
    {
     "targetYaw": -9.55,
     "yawSpeed": 148.72,
     "pitchSpeed": 74.52,
     "targetPitch": -12.38,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -27.12,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -16.69,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetHfov": 69,
     "targetYaw": 80.29,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -13.95,
     "easing": "cubic_in_out",
     "hfovSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -91.48,
     "yawSpeed": 52.73,
     "pitchSpeed": 26.74,
     "targetPitch": 0,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "repeat": 0,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_102A5E8C_1F97_3214_41B4_8C8747134C22",
  "initialPosition": {
   "yaw": -177.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -33.69,
     "yawSpeed": 81.14,
     "pitchSpeed": 40.88,
     "targetPitch": -7,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -90.98,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -15.38,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -169.62,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -15.74,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_104EEE9B_1F97_323C_41BA_0F2A6125CAD3",
  "initialPosition": {
   "hfov": 120,
   "yaw": -88.17,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 127.89,
     "yawSpeed": 139.31,
     "pitchSpeed": 69.83,
     "targetPitch": -7.49,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 77.54,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.01,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -90.49,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -18.96,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_10603EAA_1F97_321C_41B2_AEAEE5FF7041",
  "initialPosition": {
   "yaw": -94.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 130.05,
     "yawSpeed": 34.34,
     "pitchSpeed": 17.59,
     "targetPitch": -0.19,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -86.55,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -14.06,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0F878EB9_1F97_327C_41B4_B1DADA744C0A",
  "initialPosition": {
   "yaw": -92.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 30.08,
     "yawSpeed": 72.92,
     "pitchSpeed": 36.79,
     "targetPitch": -4.1,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 84.94,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -5.71,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0FB92EC8_1F97_321C_41A0_6A4F7A82253C",
  "initialPosition": {
   "yaw": -90.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -36.21,
     "yawSpeed": 15.31,
     "pitchSpeed": 8.12,
     "targetPitch": -4.6,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 86.25,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -4.28,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0FDCBED7_1F97_3234_41A3_C0ACABFA4C38",
  "initialPosition": {
   "yaw": -7.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -107.48,
     "yawSpeed": 16.39,
     "pitchSpeed": 8.66,
     "targetPitch": -8.11,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 102.13,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -19.07,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0FF03EE6_1F97_3214_41A4_89E172904BF5",
  "initialPosition": {
   "yaw": 83.02,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -56.23,
     "yawSpeed": 33.86,
     "pitchSpeed": 17.35,
     "targetPitch": -5.57,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 80.52,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -8.22,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0F151EF5_1F97_33F4_419D_46472A14ED49",
  "initialPosition": {
   "hfov": 124,
   "yaw": 9.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -128.14,
     "yawSpeed": 117.22,
     "pitchSpeed": 58.84,
     "targetPitch": -2.18,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -90.73,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.36,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 94.61,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.72,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0F08FF04_1F97_3214_41B8_8CC18E8902F3",
  "initialPosition": {
   "hfov": 120,
   "yaw": 87.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -130.02,
     "yawSpeed": 160.22,
     "pitchSpeed": 80.24,
     "targetPitch": -9.35,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -85.96,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -11.8,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 92.34,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -17.88,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_12191F38_1F97_327C_4142_92D7CC295310",
  "initialPosition": {
   "hfov": 120,
   "yaw": -97.47,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 168.21,
     "yawSpeed": 29.97,
     "pitchSpeed": 15.42,
     "targetPitch": -14.46,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -127.97,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -15.14,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_12026F47_1F97_3214_41BB_2EDE9F3AEBF1",
  "initialPosition": {
   "yaw": -93.43,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 139.28,
     "yawSpeed": 32.08,
     "pitchSpeed": 16.47,
     "targetPitch": -12.5,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -102.43,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -20.51,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_12346F56_1F97_3234_41BA_B3293BF60ECD",
  "initialPosition": {
   "hfov": 124,
   "yaw": 92.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -128.14,
     "yawSpeed": 186.77,
     "pitchSpeed": 93.45,
     "targetPitch": -2.18,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -90.73,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.36,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 94.61,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.72,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1224CF65_1F97_3214_4170_C1567FCCB234",
  "initialPosition": {
   "hfov": 122,
   "yaw": -13.6,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 25.44,
     "yawSpeed": 31.16,
     "pitchSpeed": 16.01,
     "targetPitch": -9.87,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 68.35,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -13.35,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -51.95,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.72,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_12579F73_1F97_32F3_41BE_391D0A4A2828",
  "initialPosition": {
   "yaw": -97.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -56.23,
     "yawSpeed": 10.79,
     "pitchSpeed": 5.87,
     "targetPitch": -5.57,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 80.52,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -8.22,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_12408F82_1F97_320C_4192_959029139359",
  "initialPosition": {
   "yaw": -89.99,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -49.64,
     "yawSpeed": 10.72,
     "pitchSpeed": 5.84,
     "targetPitch": -11.4,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 89.47,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -15.38,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_127CEF91_1F97_320C_41A3_2227087B4E89",
  "initialPosition": {
   "yaw": 94.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -33.69,
     "yawSpeed": 72.77,
     "pitchSpeed": 36.72,
     "targetPitch": -7,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -90.98,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -15.38,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -169.62,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -15.74,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_126E0FA0_1F97_320C_4193_28DC6C590F86",
  "initialPosition": {
   "yaw": -91.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -36.21,
     "yawSpeed": 15.61,
     "pitchSpeed": 8.27,
     "targetPitch": -4.6,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 86.25,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -4.28,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_11858FAF_1F97_3214_41BC_7333E41E100E",
  "initialPosition": {
   "yaw": 103.44,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -107.48,
     "yawSpeed": 33.43,
     "pitchSpeed": 17.14,
     "targetPitch": -8.11,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 102.13,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -19.07,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_11B1BFBC_1F97_3274_41AA_83C5FBFAF966",
  "initialPosition": {
   "yaw": -5.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -6.59,
     "yawSpeed": 1.59,
     "pitchSpeed": 1.29,
     "targetPitch": -2.89,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -174.51,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -16.57,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_11AC7FCB_1F97_321C_4189_651A689E317A",
  "initialPosition": {
   "yaw": 89.9,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 82.27,
     "yawSpeed": 2.86,
     "pitchSpeed": 1.93,
     "targetPitch": -6.59,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -92.17,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.12,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_11C40FDA_1F97_323C_415C_B0DA6C2C3198",
  "initialPosition": {
   "hfov": 123,
   "yaw": -177.05,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -50.74,
     "yawSpeed": 122.62,
     "pitchSpeed": 61.53,
     "targetPitch": -4.13,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -83.82,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -9.53,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_11FDEFE8_1F97_321C_41A0_54237918CC15",
  "initialPosition": {
   "yaw": 90.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 130.05,
     "yawSpeed": 6.85,
     "pitchSpeed": 3.91,
     "targetPitch": -0.19,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -86.55,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -14.06,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_11158FF6_1F97_31F4_41BD_5DAFC7D3528F",
  "initialPosition": {
   "yaw": 90.48,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -48.25,
     "yawSpeed": 105.46,
     "pitchSpeed": 52.98,
     "targetPitch": 5.75,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -5.76,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": 0.02,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_110DA005_1F97_2E14_41A0_B3F79C52405D",
  "initialPosition": {
   "yaw": -156.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 30.08,
     "yawSpeed": 110.9,
     "pitchSpeed": 55.69,
     "targetPitch": -4.1,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 84.94,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -5.71,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_113A8014_1F97_2E34_419D_DC81758DE416",
  "initialPosition": {
   "yaw": 83.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -149.05,
     "yawSpeed": 128.13,
     "pitchSpeed": 64.27,
     "targetPitch": -15.82,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -89.9,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -19.07,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_11528025_1F97_2E14_41BB_E79094E3CD07",
  "initialPosition": {
   "hfov": 120,
   "yaw": 103.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -43.38,
     "yawSpeed": 123.54,
     "pitchSpeed": 61.99,
     "targetPitch": -23.65,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -4.33,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -24.09,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -83.22,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -23.73,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_114A1034_1F97_2E74_41B9_FB528FECA00E",
  "initialPosition": {
   "hfov": 120,
   "yaw": -87.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -130.02,
     "yawSpeed": 32.9,
     "pitchSpeed": 16.87,
     "targetPitch": -9.35,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -85.96,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -11.8,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 92.34,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -17.88,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_11637043_1F97_2E0C_41B2_E0CF12CA1086",
  "initialPosition": {
   "hfov": 120,
   "yaw": -3.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 127.89,
     "yawSpeed": 85.08,
     "pitchSpeed": 42.85,
     "targetPitch": -7.49,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 77.54,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.01,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -90.49,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -18.96,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_109A0052_1F97_2E0C_41A7_D2E6A6B7B77E",
  "initialPosition": {
   "hfov": 124,
   "yaw": 176.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -145.63,
     "yawSpeed": 216,
     "pitchSpeed": 108,
     "targetPitch": -9.38,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -112.1,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -9.77,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -11.13,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -16.21,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_10BC7062_1F97_2E0C_41B4_02B057E8966C",
  "initialPosition": {
   "hfov": 120,
   "yaw": -5.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 168.21,
     "yawSpeed": 19.94,
     "pitchSpeed": 10.42,
     "targetPitch": -14.46,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -127.97,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -15.14,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_10D09070_1F97_2E0C_41B6_89A08B93C180",
  "initialPosition": {
   "yaw": 11.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 130.05,
     "yawSpeed": 18.55,
     "pitchSpeed": 9.73,
     "targetPitch": -0.19,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -86.55,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -14.06,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_10F4508E_1F97_2E14_4190_931B97D172DD",
  "initialPosition": {
   "hfov": 120,
   "yaw": 171.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 38.33,
     "yawSpeed": 90.02,
     "pitchSpeed": 45.3,
     "targetPitch": -0.96,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -9.7,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -5.83,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_10E9E0A8_1F97_2E1C_41B5_379842D06DFF",
  "initialPosition": {
   "yaw": 121.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -56.23,
     "yawSpeed": 42.87,
     "pitchSpeed": 21.84,
     "targetPitch": -5.57,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 80.52,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -8.22,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_100D40BC_1F97_2E74_41B5_B0ED848405EF",
  "initialPosition": {
   "hfov": 122,
   "yaw": 84.6,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 25.44,
     "yawSpeed": 45.93,
     "pitchSpeed": 23.36,
     "targetPitch": -9.87,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 68.35,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -13.35,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -51.95,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.72,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1026B0D6_1F97_2E34_4161_223EE46FA54E",
  "initialPosition": {
   "hfov": 120,
   "yaw": -87.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 127.89,
     "yawSpeed": 138.65,
     "pitchSpeed": 69.5,
     "targetPitch": -7.49,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 77.54,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.01,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -90.49,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -18.96,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_105AA0EB_1F97_2E1C_41A7_3503C7B98C95",
  "initialPosition": {
   "yaw": -91.69,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 130.05,
     "yawSpeed": 33.95,
     "pitchSpeed": 17.4,
     "targetPitch": -0.19,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -86.55,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -14.06,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_107E7105_1F97_2E14_4171_4B4A131D1B67",
  "initialPosition": {
   "yaw": -91.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 30.08,
     "yawSpeed": 72.37,
     "pitchSpeed": 36.52,
     "targetPitch": -4.1,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 84.94,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -5.71,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0F90311D_1F97_2E34_41BB_5FA55341CF19",
  "initialPosition": {
   "yaw": -84.72,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 82.27,
     "yawSpeed": 31.89,
     "pitchSpeed": 16.37,
     "targetPitch": -6.59,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -92.17,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.12,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0FB7B12C_1F97_2E14_41AE_C0B5ECD82BE2",
  "initialPosition": {
   "hfov": 123,
   "yaw": -61.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 73.71,
     "yawSpeed": 211.05,
     "pitchSpeed": 105.54,
     "targetPitch": -7.89,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 94.48,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -7.62,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0FAB713B_1F97_2E7C_41AD_4C9678C6299A",
  "initialPosition": {
   "yaw": 5.52,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 94.9,
     "yawSpeed": 46.05,
     "pitchSpeed": 23.42,
     "targetPitch": -3.8,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 158.93,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -4.99,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 43.64,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -12.27,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0FCC714A_1F97_2E1C_41BE_F2E6D6C302B7",
  "initialPosition": {
   "hfov": 120,
   "yaw": -95.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 38.33,
     "yawSpeed": 90.52,
     "pitchSpeed": 45.55,
     "targetPitch": -0.96,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -9.7,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -5.83,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0FE00159_1F97_2E3C_41AA_61AD701745A8",
  "initialPosition": {
   "yaw": 7.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -33.69,
     "yawSpeed": 24.03,
     "pitchSpeed": 12.46,
     "targetPitch": -7,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -90.98,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -15.38,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -169.62,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -15.74,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0F04E168_1F97_2E1C_41B3_5577F12394FB",
  "initialPosition": {
   "yaw": -53.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -107.48,
     "yawSpeed": 9.43,
     "pitchSpeed": 5.2,
     "targetPitch": -8.11,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 102.13,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -19.07,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0F38B176_1F97_2EF4_41AF_5E950F8F4653",
  "initialPosition": {
   "yaw": 107.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -36.21,
     "yawSpeed": 38.96,
     "pitchSpeed": 19.89,
     "targetPitch": -4.6,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 86.25,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -4.28,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0F5CB185_1F97_2E14_41B6_B50079B72655",
  "initialPosition": {
   "yaw": -83.29,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 82.27,
     "yawSpeed": 31.63,
     "pitchSpeed": 16.24,
     "targetPitch": -6.59,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -92.17,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.12,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_122861C4_1F97_2E14_419D_B941E8F4CCDA",
  "initialPosition": {
   "yaw": -137.43,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 94.9,
     "yawSpeed": 118.01,
     "pitchSpeed": 59.23,
     "targetPitch": -3.8,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 158.93,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -4.99,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 43.64,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -12.27,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1250B1D4_1F97_2E34_41AA_5AB61FA8ADD4",
  "initialPosition": {
   "hfov": 118,
   "yaw": 4.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 179.92,
     "yawSpeed": 17.01,
     "pitchSpeed": 8.97,
     "targetPitch": -20.12,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -175.83,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -21.94,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1245D1E2_1F97_2E0C_41BA_0096083DAFB6",
  "initialPosition": {
   "hfov": 120,
   "yaw": -92.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -43.38,
     "yawSpeed": 46.39,
     "pitchSpeed": 23.59,
     "targetPitch": -23.65,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -4.33,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -24.09,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -83.22,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -23.73,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_124C81F1_1F97_2E0C_41A7_ED6840BADA08",
  "initialPosition": {
   "hfov": 120,
   "yaw": 86.99,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 127.89,
     "yawSpeed": 27.6,
     "pitchSpeed": 14.24,
     "targetPitch": -7.49,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 77.54,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -10.01,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -90.49,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -18.96,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_12715200_1F96_D20C_417E_9A712237C340",
  "initialPosition": {
   "yaw": 90.6,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 139.28,
     "yawSpeed": 7.7,
     "pitchSpeed": 4.34,
     "targetPitch": -12.5,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -102.43,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -20.51,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1278220F_1F96_D214_41B9_B5D1D10DBFE3",
  "initialPosition": {
   "hfov": 120,
   "yaw": -170.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -31.55,
     "yawSpeed": 127.07,
     "pitchSpeed": 63.74,
     "targetPitch": -11.03,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 4.14,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -11.2,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_126CA21E_1F96_D234_41B7_58350A12BA5E",
  "initialPosition": {
   "hfov": 123,
   "yaw": 94.56,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -50.74,
     "yawSpeed": 140.91,
     "pitchSpeed": 70.63,
     "targetPitch": -4.13,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": -83.82,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -9.53,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1190322D_1F96_D214_41BE_D2F4DFB0D82A",
  "initialPosition": {
   "hfov": 123,
   "yaw": -178.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 73.71,
     "yawSpeed": 216,
     "pitchSpeed": 108,
     "targetPitch": -7.89,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    },
    {
     "targetYaw": 94.48,
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetPitch": -7.62,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "autoplay": true,
  "id": "audio_1F71C2A7_1EBA_14C7_41B7_CF2CD004BC46",
  "audio": {
   "mp3Url": "media/audio_1F71C2A7_1EBA_14C7_41B7_CF2CD004BC46.mp3",
   "oggUrl": "media/audio_1F71C2A7_1EBA_14C7_41B7_CF2CD004BC46.ogg",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 }
], "children": [
 {
  "progressBorderRadius": 4,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "paddingRight": 0,
  "toolTipPaddingBottom": 4,
  "progressBarOpacity": 1,
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressRight": 10,
  "toolTipBorderSize": 1,
  "toolTipOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarHeight": 20,
  "playbackBarOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "shadow": false,
  "playbackBarHeadWidth": 6,
  "class": "ViewerArea",
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "progressBottom": 1,
  "paddingBottom": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipTextShadowColor": "#000000",
  "progressBorderSize": 2,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 4,
  "paddingLeft": 0,
  "paddingTop": 0,
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "minHeight": 50,
  "progressBackgroundOpacity": 1,
  "toolTipPaddingTop": 4,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 4,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "minWidth": 100,
  "toolTipPaddingRight": 6,
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "progressLeft": 10,
  "toolTipFontSize": 16,
  "borderRadius": 0,
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 30,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBorderSize": 2,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "top": 77,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipTextShadowBlurRadius": 3,
  "bottom": 92,
  "progressBarBorderColor": "#000000",
  "id": "MainViewer",
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressHeight": 20,
  "left": 0,
  "progressBorderColor": "#AAAAAA",
  "playbackBarBottom": 10,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "right": 0,
  "toolTipFontFamily": "Tahoma",
  "progressOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ]
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#000000"
  ],
  "minWidth": 0,
  "itemThumbnailBorderRadius": 5,
  "itemLabelFontFamily": "Arial",
  "paddingRight": 20,
  "scrollBarColor": "#FFFFFF",
  "itemLabelFontStyle": "normal",
  "itemLabelFontColor": "#FFFFFF",
  "itemPaddingRight": 3,
  "itemThumbnailShadowVerticalLength": 3,
  "itemLabelTextDecoration": "none",
  "itemBackgroundColorRatios": [],
  "itemThumbnailOpacity": 1,
  "gap": 10,
  "itemLabelHorizontalAlign": "center",
  "borderRadius": 5,
  "itemThumbnailWidth": 100,
  "borderSize": 0,
  "itemBorderRadius": 0,
  "itemThumbnailHeight": 75,
  "maxWidth": 800,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "layout": "vertical",
  "shadow": false,
  "horizontalAlign": "left",
  "itemHorizontalAlign": "center",
  "class": "ThumbnailList",
  "playList": "this.thumbnaillist5245_playlist",
  "itemPaddingLeft": 3,
  "top": 86,
  "itemVerticalAlign": "middle",
  "bottom": 98,
  "scrollBarVisible": "rollOver",
  "paddingBottom": 10,
  "itemMode": "normal",
  "itemPaddingTop": 3,
  "id": "thumbnaillist5245",
  "itemThumbnailShadowBlurRadius": 4,
  "maxHeight": 800,
  "paddingLeft": 20,
  "itemBackgroundColor": [],
  "itemThumbnailShadowColor": "#000000",
  "itemPaddingBottom": 3,
  "itemThumbnailShadowOpacity": 0.8,
  "itemOpacity": 1,
  "selectedItemLabelFontWeight": "bold",
  "itemLabelFontSize": 14,
  "paddingTop": 10,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemLabelPosition": "bottom",
  "minHeight": 0,
  "itemLabelGap": 5,
  "itemThumbnailScaleMode": "fit_outside",
  "itemThumbnailShadowSpread": 1,
  "itemBackgroundColorDirection": "vertical",
  "itemBackgroundOpacity": 0,
  "right": 13,
  "backgroundOpacity": 0.2,
  "itemLabelFontWeight": "normal",
  "verticalAlign": "top",
  "itemThumbnailShadow": true
 },
 {
  "paddingRight": 0,
  "minWidth": 30,
  "fontSize": 40,
  "width": 478,
  "height": 49,
  "textDecoration": "none",
  "fontFamily": "Tahoma",
  "borderRadius": 0,
  "borderSize": 0,
  "fontStyle": "normal",
  "text": "248 S Doheny Dr.",
  "shadow": false,
  "fontColor": "#666666",
  "class": "Label",
  "horizontalAlign": "center",
  "top": 13,
  "fontWeight": "bold",
  "paddingBottom": 0,
  "id": "label4056",
  "paddingLeft": 0,
  "paddingTop": 0,
  "left": 9,
  "minHeight": 16,
  "backgroundOpacity": 0,
  "verticalAlign": "middle"
 },
 {
  "children": [
   {
    "children": [
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
     {
      "paddingRight": 0,
      "minWidth": 0,
      "mode": "toggle",
      "width": 38,
      "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C.png",
      "height": 38,
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "shadow": false,
      "transparencyActive": false,
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
      "paddingLeft": 0,
      "paddingTop": 0,
      "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C_pressed.png",
      "minHeight": 0,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
       {
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2"
        ],
        "backgroundColorRatios": [
         0
        ],
        "backgroundColorDirection": "vertical",
        "overflow": "hidden",
        "scrollBarOpacity": 0.5,
        "backgroundColor": [
         "#FFFFFF"
        ],
        "scrollBarColor": "#000000",
        "minWidth": 20,
        "paddingRight": 0,
        "height": "100%",
        "width": 47,
        "contentOpaque": false,
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "layout": "vertical",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "class": "Container",
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "paddingLeft": 0,
        "paddingTop": 0,
        "minHeight": 20,
        "backgroundOpacity": 1,
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894"
      ],
      "backgroundColorRatios": [
       0
      ],
      "backgroundColorDirection": "vertical",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "minWidth": 20,
      "paddingRight": 0,
      "height": "100%",
      "width": 133,
      "contentOpaque": false,
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 5,
      "layout": "horizontal",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minHeight": 20,
      "backgroundOpacity": 1,
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "backgroundColorRatios": [
       0
      ],
      "backgroundColorDirection": "vertical",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "minWidth": 20,
      "paddingRight": 0,
      "height": "100%",
      "width": 85,
      "contentOpaque": false,
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "layout": "horizontal",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minHeight": 20,
      "backgroundOpacity": 1,
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     }
    ],
    "backgroundColorRatios": [
     0
    ],
    "backgroundColorDirection": "vertical",
    "overflow": "hidden",
    "scrollBarOpacity": 0.5,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "minWidth": 468,
    "paddingRight": 0,
    "height": "93.478%",
    "width": 468,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "layout": "horizontal",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "class": "Container",
    "horizontalAlign": "center",
    "paddingBottom": 0,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "paddingLeft": 0,
    "paddingTop": 0,
    "minHeight": 20,
    "backgroundOpacity": 1,
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
   }
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "minWidth": 1,
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "height": 92,
  "width": "100%",
  "contentOpaque": false,
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 6,
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "class": "Container",
  "horizontalAlign": "center",
  "paddingBottom": 0,
  "bottom": "0%",
  "paddingLeft": 0,
  "paddingTop": 0,
  "left": "0%",
  "minHeight": 1,
  "backgroundOpacity": 0.3,
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 }
], 
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "minWidth": 20,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": "100%",
 "width": "100%",
 "contentOpaque": false,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "buttonToggleMute": "this.IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
 "class": "Player",
 "vrPolyfillScale": 1,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "scripts": {
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "existsKey": function(key){  return key in window; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; }
 },
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingTop": 0,
 "minHeight": 20,
 "start": "this.playAudioList([this.audio_1F71C2A7_1EBA_14C7_41B7_CF2CD004BC46]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver"
})