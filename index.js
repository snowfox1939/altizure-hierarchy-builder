var fs = require('fs');

// parameters: settings.directory [, settings.compress]
var buildHierarchy = function (settings) {
    if (!settings.directory || !fs.existsSync(settings.directory)) {
        error('directory path is invalid');
        return;
    }
    
    // get all OBJ filenames and save them
    var files = new Array();
    
    fs.readdirSync(settings.directory).forEach(function (filename) {
    
        if (filename.indexOf('.obj') != -1) {
    
            files.push(filename);
        }
    });
    
    // setup levels' property
    var levels = new Array();
    var maxLevel = 0;

    files.forEach((file) => {

        // example file name: tile_5_0_8_tex.obj

        let chunks = file.split('_');

        let level = parseInt(chunks[1]);
        let x = parseInt(chunks[2]);
        let y = parseInt(chunks[3]);

        tile = {
            filename: file,
            level: level,
            x: x,
            y: y
        };

        if (level > maxLevel) {

            maxLevel = level;
        }

        let stored = false;

        for (let i = 0; i < levels.length; i++) {

            if (levels[i].level == level) {

                // search if x boundary has been stored in boundary list
                let boundaryStored = false;

                for (let j = 0; j < levels[i].xBoundaries.length; j++) {

                    if (levels[i].xBoundaries[j] == x) {

                        boundaryStored = true;
                        break;
                    }
                }

                if (!boundaryStored) {

                    // save boundaries
                    levels[i].xBoundaries.push(x);
                }

                boundaryStored = false;

                for (let j = 0; j < levels[i].yBoundaries.length; j++) {

                    if (levels[i].yBoundaries[j] == y) {

                        boundaryStored = true;
                        break;
                    }
                }

                if (!boundaryStored) {

                    // save boundaries
                    levels[i].yBoundaries.push(y);
                }

                levels[i].tiles.push(tile);

                stored = true;
                break;
            }
        }

        if (!stored) {

            levels.push({
                level: level,
                xBoundaries: [x],
                yBoundaries: [y],
                tiles: [tile]
            });
        }
    });
    
    // tree hierarchy
    var hierarchy = {
        basePath: settings.directory,
        models: [],
        levels: []
    };

    // push level 0 tiles into hierarchy (as root of hierarchy tree)
    getLevelInfomation(0).tiles.forEach((tile) => {

        tile.children = [];
        hierarchy.models.push(tile);
    });

    for (let i = 1; i <= maxLevel; i++) {

        getLevelInfomation(i).tiles.forEach((tile) => {

            // list of tiles of current level
            let parentList = hierarchy.models;

            // current level
            let parentLevel = parentList[0].level;

            // tile's direct parent tile
            let directParentTile = null;

            // boolean to indicate parent of the tile cannot be found
            let parentNotFound = false;

            while (parentLevel < i) {

                let xError = Infinity;
                let yError = Infinity;
                let xBoundary = null;
                let yBoundary = null;

                parentLevelInfo = getLevelInfomation(parentLevel);

                // search correct x location of parent for the tile
                parentLevelInfo.xBoundaries.forEach((bound) => {

                    if ((xError > 0) && (bound <= tile.x) && ((tile.x - bound) < xError)) {

                        xError = tile.x - bound;
                        xBoundary = bound;
                    }
                });

                // search correct y location of parent for the tile
                parentLevelInfo.yBoundaries.forEach((bound) => {

                    if ((yError > 0) && (bound <= tile.y) && ((tile.y - bound) < yError)) {

                        yError = tile.y - bound;
                        yBoundary = bound;
                    }
                });

                if (xBoundary === null || yBoundary === null) {

                    parentNotFound = true;
                    break;
                }

                for (let j = 0; j < parentList.length; j++) {

                    let parent = parentList[j];

                    if ((parent.x == xBoundary) && (parent.y == yBoundary)) {

                        if (parentLevel == (i - 1)) {

                            directParentTile = parent;
                            parentLevel += 1;
                        
                        } else {

                            parentList = parent.children;
                            parentLevel = parentList[0].level;
                        }
                    }
                }
            }

            if (!parentNotFound && directParentTile) {

                tile.children = [];

                directParentTile.children.push(tile);
            }
        });
    }

    for (let i = 0; i < levels.length; i++) {
        hierarchy.levels.push({
            level: levels[i].level,
            xBoundaries: levels[i].xBoundaries,
            yBoundaries: levels[i].yBoundaries
        });
    }

    return hierarchy;
    
    function error(message) {
    
        console.log('\x1b[41m%s\x1b[0m', message);
    }
    
    function getLevelInfomation(level) {
        for (let i = 0; i < levels.length; i++) {
            if (levels[i].level == level) {
                return levels[i];
            }
        }
    }
}

module.exports = buildHierarchy;