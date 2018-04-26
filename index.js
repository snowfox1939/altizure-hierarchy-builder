var fs = require('fs');


if (fs.existsSync('./settings.json')) {
    var settings = require('./settings.json');

    if (!settings.directory || !fs.existsSync(settings.directory)) {
        error('please provide a valid directory path in "settings.json"');
        process.exit(0);
    }

    if (settings.rootLevel === undefined) {
        rootLevel = 0;
    }

    if (settings.leafLevel === undefined) {
        leafLevel = 8;
    }

} else {

    error('"settings.json" not found.');
    process.exit(0);

}

var models = new Array();
var hierarchy = {
    models: []
};

fs.readdirSync(settings.directory).forEach(function(filename) {
    if (filename.indexOf('.obj') != -1) {
        let nameChunks = filename.split('_');
        models.push({
            filename: filename,
            level: parseInt(nameChunks[1]),
            upperPartition: parseInt(nameChunks[2]),
            lowerPartition: parseInt(nameChunks[3])
        });
    }
});

for (let i = settings.rootLevel; i <= settings.leafLevel; i++) {

    models.forEach(function(model) {

        if (model.level == i) {

            if (i == 0) {

                hierarchy.models.push({
                    filename: model.filename,
                    children: []
                });

            } else {

                // if level is not 0, we need to recursively locate the model into the tree

            }
        }
    });
}

function error(message) {
    console.log('\x1b[41m%s\x1b[0m', message);
}

// traverse tree and locate the model
function traverse(model, currentLevel, currentNode) {

}

// compute and get the index of next level node
function locateNode(modelPartition, level) {
    // remain of (partition/current level partition space) / next level partition space
}