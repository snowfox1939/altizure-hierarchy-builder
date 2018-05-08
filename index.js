var fs = require('fs');
var JSONC = require('jsoncomp');

if (fs.existsSync('./settings.json')) {
    var settings = require('./settings.json');

    if (!settings.directory || !fs.existsSync(settings.directory)) {
        error('please provide a valid directory path in "settings.json"');
        process.exit(0);
    }

    if (settings.level === undefined || settings.level < 0) {
        error('"level" is invalid, it have to be greater than or equal to 0');
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

for (let i = 0; i <= settings.level; i++) {

    levels.push({
        level: i,
        interval: Math.pow(2, settings.level - i),
        layer: Math.pow(2, i)
    });
}

var progressCounter = 0;
var nodeCounter = 0;
process.stdout.write('0%..');

var hierarchy = {
    basePath: settings.directory,
    models: []
};

// create top level node so we can recursive later

let filename = 'tile_0_0_0_tex.obj';
// "tex" is a custom suffix, you can modify to suit your model

if (models.indexOf(filename) != -1) {

    hierarchy.models.push({
        level: 0,
        x: 0,
        y: 0,
        filename: filename,
        children: []
    });

    nodeCounter += 1;
    if ((nodeCounter / models.length) >= (progressCounter + 0.1)) {

        progressCounter += 0.1;
        process.stdout.write(Math.floor(progressCounter * 100) + '%..');
    }
}

// then, iterate root nodes and start recursion
hierarchy.models.forEach(giveBirth);

function giveBirth(node) {

    if (node.level == settings.level - 4) {
        return;
    }

    let nodeLevelInfo = getLevelInfomation(node.level);

    let level = node.level + 1;
    let interval = nodeLevelInfo.interval / 2;

    let filename, x, y;
    
    // child 0
    x = node.x;
    y = node.y;
    filename = 'tile_' + level + '_' + x + '_' + y + '_tex.obj';

    if (models.indexOf(filename) != -1) {

        node.children.push({ level: level, x: x, y: y, filename: filename, children: [] });

        modelCountIncrease();
    }

    // child 1
    x = node.x + interval;
    y = node.y;
    filename = 'tile_' + level + '_' + x + '_' + y + '_tex.obj';

    if (models.indexOf(filename) != -1) {

        node.children.push({ level: level, x: x, y: y, filename: filename, children: [] });

        modelCountIncrease();
    }

    // child 2
    x = node.x;
    y = node.y + interval;
    filename = 'tile_' + level + '_' + x + '_' + y + '_tex.obj';

    if (models.indexOf(filename) != -1) {

        node.children.push({ level: level, x: x, y: y, filename: filename, children: [] });

        modelCountIncrease();
    }

    // child 3
    x = node.x + interval;
    y = node.y + interval;
    filename = 'tile_' + level + '_' + x + '_' + y + '_tex.obj';

    if (models.indexOf(filename) != -1) {

        node.children.push({ level: level, x: x, y: y, filename: filename, children: [] });

        modelCountIncrease();
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

function modelCountIncrease() {
    nodeCounter += 1;
    if ((nodeCounter / models.length) >= (progressCounter + 0.1)) {

        progressCounter += 0.1;
        process.stdout.write(Math.floor(progressCounter * 100) + '%..');
    }
}