# altizure-hierarchy-builder
A tool for building hierarchy of 3D models from [Altizure.com](https://www.altizure.com/) into json file.

## Model naming rules
  
tile_ *level* _ *x index* _ *y index*_tex.obj  

check the [document](https://site.altizure.com/support/articles/download_assets?lang=zh-tw#sample) from [Altizure.com](https://www.altizure.com/)

## Sample output

output file will located at `project_root/altizure_hierarchy.json`

```json
{
  "basePath": "C:\\Users\\CrashedBboy\\Downloads\\lidar_working_data\\altizure_models",
  "models": [
    {
      "level": 0,
      "x": 0,
      "y": 0,
      "filename": "tile_0_0_0_tex.obj",
      "children": [
        {
          "level": 1,
          "x": 0,
          "y": 0,
          "filename": "tile_1_0_0_tex.obj",
          "children": [
            {
              "level": 2,
              "x": 0,
              "y": 0,
              "filename": "tile_2_0_0_tex.obj",
              "children": [
                {
                  "level": 3,
                  "x": 0,
                  "y": 0,
                  "filename": "tile_3_0_0_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 16,
                      "y": 0,
                      "filename": "tile_4_16_0_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 0,
                      "y": 16,
                      "filename": "tile_4_0_16_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 16,
                      "y": 16,
                      "filename": "tile_4_16_16_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 32,
                  "y": 0,
                  "filename": "tile_3_32_0_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 32,
                      "y": 0,
                      "filename": "tile_4_32_0_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 48,
                      "y": 0,
                      "filename": "tile_4_48_0_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 32,
                      "y": 16,
                      "filename": "tile_4_32_16_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 48,
                      "y": 16,
                      "filename": "tile_4_48_16_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 0,
                  "y": 32,
                  "filename": "tile_3_0_32_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 0,
                      "y": 32,
                      "filename": "tile_4_0_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 16,
                      "y": 32,
                      "filename": "tile_4_16_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 0,
                      "y": 48,
                      "filename": "tile_4_0_48_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 16,
                      "y": 48,
                      "filename": "tile_4_16_48_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 32,
                  "y": 32,
                  "filename": "tile_3_32_32_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 32,
                      "y": 32,
                      "filename": "tile_4_32_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 48,
                      "y": 32,
                      "filename": "tile_4_48_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 32,
                      "y": 48,
                      "filename": "tile_4_32_48_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 48,
                      "y": 48,
                      "filename": "tile_4_48_48_tex.obj",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "level": 2,
              "x": 64,
              "y": 0,
              "filename": "tile_2_64_0_tex.obj",
              "children": [
                {
                  "level": 3,
                  "x": 64,
                  "y": 0,
                  "filename": "tile_3_64_0_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 64,
                      "y": 0,
                      "filename": "tile_4_64_0_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 80,
                      "y": 0,
                      "filename": "tile_4_80_0_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 64,
                      "y": 16,
                      "filename": "tile_4_64_16_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 80,
                      "y": 16,
                      "filename": "tile_4_80_16_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 96,
                  "y": 0,
                  "filename": "tile_3_96_0_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 96,
                      "y": 0,
                      "filename": "tile_4_96_0_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 112,
                      "y": 0,
                      "filename": "tile_4_112_0_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 96,
                      "y": 16,
                      "filename": "tile_4_96_16_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 112,
                      "y": 16,
                      "filename": "tile_4_112_16_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 64,
                  "y": 32,
                  "filename": "tile_3_64_32_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 64,
                      "y": 32,
                      "filename": "tile_4_64_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 80,
                      "y": 32,
                      "filename": "tile_4_80_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 64,
                      "y": 48,
                      "filename": "tile_4_64_48_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 80,
                      "y": 48,
                      "filename": "tile_4_80_48_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 96,
                  "y": 32,
                  "filename": "tile_3_96_32_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 96,
                      "y": 32,
                      "filename": "tile_4_96_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 112,
                      "y": 32,
                      "filename": "tile_4_112_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 96,
                      "y": 48,
                      "filename": "tile_4_96_48_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 112,
                      "y": 48,
                      "filename": "tile_4_112_48_tex.obj",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "level": 2,
              "x": 0,
              "y": 64,
              "filename": "tile_2_0_64_tex.obj",
              "children": [
                {
                  "level": 3,
                  "x": 0,
                  "y": 64,
                  "filename": "tile_3_0_64_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 0,
                      "y": 64,
                      "filename": "tile_4_0_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 16,
                      "y": 64,
                      "filename": "tile_4_16_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 0,
                      "y": 80,
                      "filename": "tile_4_0_80_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 16,
                      "y": 80,
                      "filename": "tile_4_16_80_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 32,
                  "y": 64,
                  "filename": "tile_3_32_64_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 32,
                      "y": 64,
                      "filename": "tile_4_32_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 48,
                      "y": 64,
                      "filename": "tile_4_48_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 32,
                      "y": 80,
                      "filename": "tile_4_32_80_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 48,
                      "y": 80,
                      "filename": "tile_4_48_80_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 0,
                  "y": 96,
                  "filename": "tile_3_0_96_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 0,
                      "y": 96,
                      "filename": "tile_4_0_96_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 16,
                      "y": 96,
                      "filename": "tile_4_16_96_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 32,
                  "y": 96,
                  "filename": "tile_3_32_96_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 32,
                      "y": 96,
                      "filename": "tile_4_32_96_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 48,
                      "y": 96,
                      "filename": "tile_4_48_96_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 32,
                      "y": 112,
                      "filename": "tile_4_32_112_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 48,
                      "y": 112,
                      "filename": "tile_4_48_112_tex.obj",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "level": 2,
              "x": 64,
              "y": 64,
              "filename": "tile_2_64_64_tex.obj",
              "children": [
                {
                  "level": 3,
                  "x": 64,
                  "y": 64,
                  "filename": "tile_3_64_64_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 64,
                      "y": 64,
                      "filename": "tile_4_64_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 80,
                      "y": 64,
                      "filename": "tile_4_80_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 64,
                      "y": 80,
                      "filename": "tile_4_64_80_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 80,
                      "y": 80,
                      "filename": "tile_4_80_80_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 96,
                  "y": 64,
                  "filename": "tile_3_96_64_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 96,
                      "y": 64,
                      "filename": "tile_4_96_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 112,
                      "y": 64,
                      "filename": "tile_4_112_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 96,
                      "y": 80,
                      "filename": "tile_4_96_80_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 112,
                      "y": 80,
                      "filename": "tile_4_112_80_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 64,
                  "y": 96,
                  "filename": "tile_3_64_96_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 64,
                      "y": 96,
                      "filename": "tile_4_64_96_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 80,
                      "y": 96,
                      "filename": "tile_4_80_96_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 64,
                      "y": 112,
                      "filename": "tile_4_64_112_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 80,
                      "y": 112,
                      "filename": "tile_4_80_112_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 96,
                  "y": 96,
                  "filename": "tile_3_96_96_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 96,
                      "y": 96,
                      "filename": "tile_4_96_96_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 112,
                      "y": 96,
                      "filename": "tile_4_112_96_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 96,
                      "y": 112,
                      "filename": "tile_4_96_112_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 112,
                      "y": 112,
                      "filename": "tile_4_112_112_tex.obj",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "level": 1,
          "x": 128,
          "y": 0,
          "filename": "tile_1_128_0_tex.obj",
          "children": [
            {
              "level": 2,
              "x": 128,
              "y": 0,
              "filename": "tile_2_128_0_tex.obj",
              "children": [
                {
                  "level": 3,
                  "x": 128,
                  "y": 0,
                  "filename": "tile_3_128_0_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 128,
                      "y": 0,
                      "filename": "tile_4_128_0_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 144,
                      "y": 0,
                      "filename": "tile_4_144_0_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 128,
                      "y": 16,
                      "filename": "tile_4_128_16_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 144,
                      "y": 16,
                      "filename": "tile_4_144_16_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 160,
                  "y": 0,
                  "filename": "tile_3_160_0_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 160,
                      "y": 0,
                      "filename": "tile_4_160_0_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 176,
                      "y": 0,
                      "filename": "tile_4_176_0_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 160,
                      "y": 16,
                      "filename": "tile_4_160_16_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 176,
                      "y": 16,
                      "filename": "tile_4_176_16_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 128,
                  "y": 32,
                  "filename": "tile_3_128_32_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 128,
                      "y": 32,
                      "filename": "tile_4_128_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 144,
                      "y": 32,
                      "filename": "tile_4_144_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 128,
                      "y": 48,
                      "filename": "tile_4_128_48_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 144,
                      "y": 48,
                      "filename": "tile_4_144_48_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 160,
                  "y": 32,
                  "filename": "tile_3_160_32_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 160,
                      "y": 32,
                      "filename": "tile_4_160_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 176,
                      "y": 32,
                      "filename": "tile_4_176_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 160,
                      "y": 48,
                      "filename": "tile_4_160_48_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 176,
                      "y": 48,
                      "filename": "tile_4_176_48_tex.obj",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "level": 2,
              "x": 192,
              "y": 0,
              "filename": "tile_2_192_0_tex.obj",
              "children": [
                {
                  "level": 3,
                  "x": 192,
                  "y": 0,
                  "filename": "tile_3_192_0_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 192,
                      "y": 0,
                      "filename": "tile_4_192_0_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 208,
                      "y": 0,
                      "filename": "tile_4_208_0_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 192,
                      "y": 16,
                      "filename": "tile_4_192_16_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 208,
                      "y": 16,
                      "filename": "tile_4_208_16_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 224,
                  "y": 0,
                  "filename": "tile_3_224_0_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 224,
                      "y": 16,
                      "filename": "tile_4_224_16_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 240,
                      "y": 16,
                      "filename": "tile_4_240_16_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 192,
                  "y": 32,
                  "filename": "tile_3_192_32_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 192,
                      "y": 32,
                      "filename": "tile_4_192_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 208,
                      "y": 32,
                      "filename": "tile_4_208_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 192,
                      "y": 48,
                      "filename": "tile_4_192_48_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 208,
                      "y": 48,
                      "filename": "tile_4_208_48_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 224,
                  "y": 32,
                  "filename": "tile_3_224_32_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 224,
                      "y": 32,
                      "filename": "tile_4_224_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 240,
                      "y": 32,
                      "filename": "tile_4_240_32_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 224,
                      "y": 48,
                      "filename": "tile_4_224_48_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 240,
                      "y": 48,
                      "filename": "tile_4_240_48_tex.obj",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "level": 2,
              "x": 128,
              "y": 64,
              "filename": "tile_2_128_64_tex.obj",
              "children": [
                {
                  "level": 3,
                  "x": 128,
                  "y": 64,
                  "filename": "tile_3_128_64_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 128,
                      "y": 64,
                      "filename": "tile_4_128_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 144,
                      "y": 64,
                      "filename": "tile_4_144_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 128,
                      "y": 80,
                      "filename": "tile_4_128_80_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 144,
                      "y": 80,
                      "filename": "tile_4_144_80_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 160,
                  "y": 64,
                  "filename": "tile_3_160_64_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 160,
                      "y": 64,
                      "filename": "tile_4_160_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 176,
                      "y": 64,
                      "filename": "tile_4_176_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 160,
                      "y": 80,
                      "filename": "tile_4_160_80_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 176,
                      "y": 80,
                      "filename": "tile_4_176_80_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 128,
                  "y": 96,
                  "filename": "tile_3_128_96_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 128,
                      "y": 96,
                      "filename": "tile_4_128_96_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 144,
                      "y": 96,
                      "filename": "tile_4_144_96_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 128,
                      "y": 112,
                      "filename": "tile_4_128_112_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 144,
                      "y": 112,
                      "filename": "tile_4_144_112_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 160,
                  "y": 96,
                  "filename": "tile_3_160_96_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 160,
                      "y": 96,
                      "filename": "tile_4_160_96_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 176,
                      "y": 96,
                      "filename": "tile_4_176_96_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 160,
                      "y": 112,
                      "filename": "tile_4_160_112_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 176,
                      "y": 112,
                      "filename": "tile_4_176_112_tex.obj",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "level": 2,
              "x": 192,
              "y": 64,
              "filename": "tile_2_192_64_tex.obj",
              "children": [
                {
                  "level": 3,
                  "x": 192,
                  "y": 64,
                  "filename": "tile_3_192_64_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 192,
                      "y": 64,
                      "filename": "tile_4_192_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 208,
                      "y": 64,
                      "filename": "tile_4_208_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 192,
                      "y": 80,
                      "filename": "tile_4_192_80_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 208,
                      "y": 80,
                      "filename": "tile_4_208_80_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 224,
                  "y": 64,
                  "filename": "tile_3_224_64_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 224,
                      "y": 64,
                      "filename": "tile_4_224_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 240,
                      "y": 64,
                      "filename": "tile_4_240_64_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 224,
                      "y": 80,
                      "filename": "tile_4_224_80_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 240,
                      "y": 80,
                      "filename": "tile_4_240_80_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 192,
                  "y": 96,
                  "filename": "tile_3_192_96_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 192,
                      "y": 96,
                      "filename": "tile_4_192_96_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 208,
                      "y": 96,
                      "filename": "tile_4_208_96_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 192,
                      "y": 112,
                      "filename": "tile_4_192_112_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 208,
                      "y": 112,
                      "filename": "tile_4_208_112_tex.obj",
                      "children": []
                    }
                  ]
                },
                {
                  "level": 3,
                  "x": 224,
                  "y": 96,
                  "filename": "tile_3_224_96_tex.obj",
                  "children": [
                    {
                      "level": 4,
                      "x": 224,
                      "y": 96,
                      "filename": "tile_4_224_96_tex.obj",
                      "children": []
                    },
                    {
                      "level": 4,
                      "x": 240,
                      "y": 96,
                      "filename": "tile_4_240_96_tex.obj",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

```

## Settings

Setting values will be retrieved from `project_root/settings.json`
  
sample settings:

```json
{
    "directory": "models path",
    "level": "much many levels the model has",
    "compress": "compress output json or not"
}
```