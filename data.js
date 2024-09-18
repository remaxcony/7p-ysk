var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -0.44100210199333567,
          "pitch": 0.011134645792866493,
          "rotation": 4.71238898038469,
          "target": "2-cocina"
        },
        {
          "yaw": 0.9927926610916931,
          "pitch": 0.014574912559037756,
          "rotation": 1.5707963267948966,
          "target": "1-salon"
        },
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "3-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon",
      "name": "SALON",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.720169664812877,
        "pitch": 0.10212880709174499,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.41499906732199676,
          "pitch": -0.06725957797556426,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": 0.4012360341598331,
          "pitch": 0.18467414893516754,
          "rotation": 4.71238898038469,
          "target": "0-entrada"
        },
        {
          "yaw": 0.5901257723607518,
          "pitch": 0.06123691616156535,
          "rotation": 7.0685834705770345,
          "target": "3-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina",
      "name": "COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.83896159137581,
        "pitch": 0.1331913557197275,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.16591988405995828,
          "pitch": 0.012803156658705461,
          "rotation": 0,
          "target": "1-salon"
        },
        {
          "yaw": 0.49577607699914417,
          "pitch": 0.16046226219797433,
          "rotation": 1.5707963267948966,
          "target": "0-entrada"
        },
        {
          "yaw": -0.5531543261700413,
          "pitch": 0.13318603441964427,
          "rotation": 4.71238898038469,
          "target": "3-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pasillo",
      "name": "PASILLO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5533769050162043,
        "pitch": 0.07035608954230455,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.20174939283662852,
          "pitch": 0.016006394502408483,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        },
        {
          "yaw": 1.0787912549292216,
          "pitch": 0.09645406210185747,
          "rotation": 0,
          "target": "4-hab-1"
        },
        {
          "yaw": 1.8226398239461954,
          "pitch": 0.14003476864594333,
          "rotation": 0,
          "target": "5-hab-2"
        },
        {
          "yaw": -2.464588163823773,
          "pitch": 0.12557479397602656,
          "rotation": 5.497787143782138,
          "target": "6-bao-1"
        },
        {
          "yaw": -1.4295555291754543,
          "pitch": 0.1274552816568182,
          "rotation": 0,
          "target": "7-hab-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hab-1",
      "name": "HAB 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.796493460581825,
        "pitch": 0.2011844372977265,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.13380987344306305,
          "pitch": 0.08883841603908316,
          "rotation": 0,
          "target": "3-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hab-2",
      "name": "HAB 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.773398947431021,
        "pitch": 0.09372436214029278,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -0.17898371540891844,
          "pitch": 0.07461566168143818,
          "rotation": 0,
          "target": "3-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bao-1",
      "name": "BAÑO 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.5759231325058156,
        "pitch": 0.20755046414978295,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.021898520597231297,
          "pitch": 0.15266489747743428,
          "rotation": 0,
          "target": "3-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-hab-3",
      "name": "HAB 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.5367243064280975,
        "pitch": 0.14302073827270334,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -3.0506101160648704,
          "pitch": 0.1212048548662068,
          "rotation": 0,
          "target": "9-balcon"
        },
        {
          "yaw": -1.361054944349151,
          "pitch": 0.16897620195980956,
          "rotation": 0,
          "target": "8-bao-2"
        },
        {
          "yaw": -0.10342306128270273,
          "pitch": 0.06477971503114155,
          "rotation": 0,
          "target": "3-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bao-2",
      "name": "BAÑO 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0544205366697827,
        "pitch": 0.22420171637633501,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -0.04183241649726277,
          "pitch": 0.10733087892612048,
          "rotation": 0,
          "target": "7-hab-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-balcon",
      "name": "BALCON",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0610136015183755,
        "pitch": 0.14990512178611226,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 1.8288539532565924,
          "pitch": 0.12925402594760982,
          "rotation": 0,
          "target": "7-hab-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
