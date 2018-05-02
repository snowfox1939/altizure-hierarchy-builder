var fs = require('fs');
var JSONC = require('jsoncomp');

if (fs.existsSync('./settings.json')) {
    var settings = require('./settings.json');

    if (!settings.directory || !fs.existsSync(settings.directory)) {
        error('please provide a valid directory path in "settings.json"');
        process.exit(0);
    }

    if (settings.rootLevel === undefined || settings.rootLevel < 0) {
        error('"rootLevel" is invalid, it have to be greater than or equal to 0');
        process.exit(0);
    }

    if (settings.leafLevel === undefined || settings.leafLevel > 8) {
        error('"leafLevel" is invalid, it have to be less than 9');
        process.exit(0);
    }

    if (settings.rootLevel > settings.leafLevel) {
        error('"rootLevel" should be less than or equal to "leafLevel"');
        process.exit(0);
    }

} else {

    error('"settings.json" not found.');
    process.exit(0);

}

// get all OBJ filenames and save them
var models = new Array();

fs.readdirSync(settings.directory).forEach(function (filename) {

    if (filename.indexOf('.obj') != -1) {

        models.push(filename);
    }
});

// setup levels' property
var levels = new Array();

for (let i = settings.rootLevel; i <= settings.leafLevel; i++) {

    levels.push({
        level: i,
        upper: {
            interval: Math.pow(2, 8 - i),
            layer: Math.pow(2, i)
        },
        lower: {
            interval: Math.pow(2, 8 - i),
            layer: i == 0 ? 1 : Math.pow(2, i - 1)
        }
    });
}

var progressCounter = 0;
var nodeCounter = 0;
process.stdout.write('0%..');

var hierarchy = {
    models: []
};

// create top level nodes so we can recursive later
let rootNodeAmount = settings.rootLevel == 0 ? 1 : Math.pow(2, 1 + (settings.rootLevel - 1) * 2);
for (let i = 0; i < rootNodeAmount; i++) {

    let levelInfo = getLevelInfomation(settings.rootLevel);

    let upperPartition = Math.floor(i / levelInfo.lower.layer) * levelInfo.upper.interval;
    let lowerPartition = (i % levelInfo.lower.layer) * levelInfo.lower.interval;

    let filename = 'tile_' + settings.rootLevel + '_' + upperPartition + '_' + lowerPartition + '_tex.obj';

    if (models.indexOf(filename) != -1) {

        hierarchy.models.push({
            level: settings.rootLevel,
            upperPartition: upperPartition,
            lowerPartition: lowerPartition,
            filename: filename,
            children: []
        });

        nodeCounter += 1;
        if ((nodeCounter / models.length) >= (progressCounter + 0.1)) {

            progressCounter += 0.1;
            process.stdout.write(Math.floor(progressCounter * 100) + '%..');
        }
    }
}

// then, iterate root nodes and start recursion
hierarchy.models.forEach(giveBirth);

function giveBirth(node) {

    if (node.level == settings.leafLevel) {
        return;
    }

    let levelInfo = getLevelInfomation(node.level);

    let order = Math.floor(node.upperPartition / levelInfo.upper.interval) * levelInfo.lower.layer
        + Math.floor(node.lowerPartition / levelInfo.lower.interval);

    let childLevel = node.level + 1;

    for (let i = 0; i < 4; i++) {
        let childOrder = order * 4 + i;

        let childLevelInfo = getLevelInfomation(childLevel);

        let upperPartition = Math.floor(childOrder / childLevelInfo.lower.layer) * childLevelInfo.upper.interval;
        let lowerPartition = (childOrder % childLevelInfo.lower.layer) * childLevelInfo.lower.interval;

        let filename = 'tile_' + childLevel + '_' + upperPartition + '_' + lowerPartition + '_tex.obj';

        if (models.indexOf(filename) != -1) {

            node.children.push({
                level: childLevel,
                upperPartition: upperPartition,
                lowerPartition: lowerPartition,
                filename: filename,
                children: []
            });

            nodeCounter += 1;
            if ((nodeCounter / models.length) >= (progressCounter + 0.1)) {

                progressCounter += 0.1;
                process.stdout.write(Math.floor(progressCounter * 100) + '%..');
            }
        }
    }

    node.children.forEach(giveBirth);
}

// write into file
let fileContent = settings.compress ? JSONC.compress(JSON.stringify(hierarchy)) : JSON.stringify(hierarchy, null, 2);
fs.writeFileSync('./altizure_hierarchy.json', fileContent);
process.stdout.write('Done\n');

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