# Prerequisites

1. Android Platform Tools (on PC).
1. NodeJS (on PC).
1. Calcy IV (on Phone).
1. Pokemon Go game.

# License

Licensed under the terms of the ISC license, see the LICENSE file for details.

# Preparing

1. Enable Developer Options on your Android phone.
1. Enable debugging over USB in Developer Options.
1. (not all phones) Enable security settings USB debugging (to enable sending input via adb).
1. Open Terminal / Cmd (depends on your OS) and go to platform-tools directory.
1. Connect a device via USB cable.
1. Type `adb devices` (the device should appeat in the list)
1. Open some input field on the phone, for ex, browser -> tap on the URL (keyboard should be visible)
1. Type `adb shell input text test`.
1. If the text 'test' appeared in the input field - you're done evethything correctly.
1. If not - please, google how to enable senging events via adb to your phone

# Installing

1. Clone the repo.
1. Navigate to the repo folder.
1. Copy 'config.js.example' and remove the '.example' (leaving 'config.js').
1. Adjust the path to your `adb`.
1. Adjust screen size.
1. For slow phones adjust sleep value.

# Running

1. Launch the CalcyIV.
1. Set up desired renaming options.
1. Click 'Switch to Game' button.
1. Open first pokemon screen.
1. Place the CalcyIV icon just above the Camera button.
1. Type `npm start` in Terminal app no your PC.
1. Watch pokes renaming.