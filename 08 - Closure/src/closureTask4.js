//4. Напишите функцию кеш

function cache(func) {
        let cache = {};
        let slice = Array.prototype.slice;

        return function (x, y) {
            let args = slice.call(arguments);

            if (args in cache)
                return 'From cache: ' + cache[args];
            else
                return 'Counted and put in cache: ' + (cache[args] = func(x, y));
        }
}

let complexFunction = function (arg1, arg2) {
    return arg1 + arg2;
}

let isCached = cache(complexFunction);

module.exports = {isCached};