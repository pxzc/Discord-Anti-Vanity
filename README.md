# Overview

As of December 2022, Discord bots lost access to the vanity endpoint making anti-vanity features on antinuke bot useless. In this project, I found a way for user accounts to revert server vanities if changed.

# Disclaimer

Using this on a user account is against [Discord ToS](https://discord.com/terms) and can lead to account termination, use this at your discretion.

# Need your token?
Run code (Discord Console - [Ctrl + Shift + I])

```
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```
