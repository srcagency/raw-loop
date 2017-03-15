module.exports = main

function main(initialState, view, opts) {
    opts = opts || {}

    var create = opts.create
    var diff = opts.diff
    var patch = opts.patch

    var tree = opts.initialTree || view(initialState, 0);
    var target = opts.target || create(tree, opts)

    var loop = {
        state: initialState,
        target: target,
        update: update
    }
    return loop

    function update(state) {
        redraw(state)
        loop.state = state
    }

    function redraw(state) {
        var newTree = view(state)

        if (opts.createOnly) {
            create(newTree, opts)
        } else {
            var patches = diff(tree, newTree, opts)
            target = patch(target, patches, opts)
        }

        tree = newTree
    }
}
