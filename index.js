"use strict";

const adb = '/Users/idcompany/Library/Android/sdk/platform-tools/adb',
    { promisify } = require('util'),
    execCb = require('child_process').exec,
    exec = promisify(execCb)

function sendInput(args, t) {
    console.log('Sending input ' + args)
    return exec(adb + ' shell input ' + args).then((res) => {
        console.log(`stdout: ${res.stdout}`);
        console.error(`stderr: ${res.stderr}`);
        return delay(t)
    })
}

function tap(x, y, sleep = 500) {
    console.log('tapping ' + x + ' ' + y)
    return sendInput('tap ' + x + ' ' + y, sleep)
}

function longTap(x, y, sleep = 500) {
    console.log('longTapping ' + x + ' ' + y)
    return sendInput('swipe ' + x + ' ' + y + ' ' + x + ' ' + y + ' 500', sleep)
}

function delay(t, val) {
    return new Promise(function (resolve) {
        console.log('Sleeping for ' + t + 'ms')
        setTimeout(function () {
            console.log('Sleept for ' + t + 'ms')
            resolve(val);
        }, t);
    });
}


tap(1000, 2150
).then(() =>
    tap(1000, 1700)
).then(() =>
    tap(500, 1000)
).then(() =>
    tap(930, 730)
).then(() =>
    tap(500, 1500)
).then(() =>
    tap(500, 1500)
).then(() =>
    tap(500, 1000)
).then(() =>
    tap(1000, 2050)
).then(() =>
    longTap(500, 1500)
).then(() =>
    tap(100, 1600)
).then(() =>
tap(100, 1600)
)
