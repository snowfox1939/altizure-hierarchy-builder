# altizure-hierarchy-builder
A tool for building hierarchy of 3D models from [Altizure.com](https://www.altizure.com/) into json file.

## Model naming rules
  
tile_ *level* _ *partition index of divided root area* _ *lower partition index*_tex.obj


**level 0**  
`Upper index`: 0  
`Lower inder`: 0  
  
**level 1**  
`Upper index`: 0, 128  
`Lower inder`: 0  
  
**level 2**  
`Upper index`: 0, 64, 128, 192  
`Lower inder`: 0, 64  
  
**level 3**  
`Upper index`: 0, 32, 64, 96, 128, 160, 192, 224  
`Lower inder`: 0, 32, 64, 96  
  
**level 4**  
`Upper index`: 0, 16, 32, 48, 64, 80, ... , 144, 160, 176, 192, 208, 224, 240  
`Lower inder`: 0, 16, 32, 48, 64, 80, 96, 112  
  
**level 5**  
`Upper index`: 0, 8, 16, 24, 32, 40, ... , 216, 224, 232, 240, 248  
`Lower inder`: 0, 8, 16, 24, 32, 40, ... , 88, 96, 104, 112, 120  

**level 6**  
`Upper index`: 0, 4, 8, 12, 16, ..., 244, 248, 252  
`Lower inder`: 0, 4, 8, 12, 16, 20, ..., 124  
  
**level 7**  
`Upper index`: 0, 2, 4, 6, 8, ....., 248, 250, 252, 254  
`Lower inder`: 0, 2, 4, 6, ... , 124, 126  

**level 8**  
`Upper index`: 0, 1, 2, 3, 4, 5, 6, ..., 254, 255  
`Lower inder`: 0, 1, 2, 3, ..., 127, 128  



## Sample output

output file will located at `project_root/altizure_hierarchy.json`

```json
{
    "models": [
        {
            "filename": "tile_0_0_0_tex.obj",
            "children": [
                {
                    "filename": "tile_1_0_0_tex.obj",
                    "children": [
                        {
                            "filename": "tile_2_0_0_tex.obj",
                            "children": []
                        },
                        {
                            "filename": "tile_2_0_64_tex.obj",
                            "children": []
                        },
                        {
                            "filename": "tile_2_64_0_tex.obj",
                            "children": []
                        },
                        {
                            "filename": "tile_2_64_64_tex.obj",
                            "children": []
                        }
                    ]
                },
                {
                    "filename": "tile_1_128_0_tex.obj",
                    "children": [
                        {
                            "filename": "tile_2_128_0_tex.obj",
                            "children": []
                        },
                        {
                            "filename": "tile_2_128_64_tex.obj",
                            "children": []
                        },
                        {
                            "filename": "tile_2_192_0_tex.obj",
                            "children": []
                        },
                        {
                            "filename": "tile_2_192_64_tex.obj",
                            "children": []
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
    "rootLevel": "level from which it starts, defaults to 0",
    "leafLevel": "level of which it ends, defaults to 8",
    "compress": "compress output json or not"
}
```