#!/bin/bash

# Path to handlebars command
CMD="../node_modules/handlebars/bin/handlebars"

# Layouts
layouts="main board list card label modalLabels"
for f in $layouts
do
    $CMD "./layouts/${f}.handlebars" -f "../public/${f}Template.js"
done

# Partials
partials="addList addCard addLabel labels boardModal listModal cardModal labelModal"
for f in $partials
do
    $CMD "./partials/${f}.handlebars" -p -f "../public/${f}Template.js"
done
