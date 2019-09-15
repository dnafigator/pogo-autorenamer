# Prerequisites

1. Android Platform Tools (on PC).
1. NodeJS (on PC).
1. Calcy IV (on Phone).
1. Pokemon Go game.

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

# Running