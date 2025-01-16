# Next.js router.push() Asynchronous Navigation Issue

This repository demonstrates a common issue with Next.js's `router.push()` method:  the asynchronous nature of client-side navigation.  The provided code shows how actions following `router.push()` might execute before the navigation is actually finished, leading to unexpected results.

The solution demonstrates using the `router.events` object to listen for the `routeChangeComplete` event, ensuring the navigation has concluded before executing subsequent code. 

## Bug
The `bug.js` file contains a component that uses `router.push()` to navigate to another page.  The code logs a message to the console immediately after calling `router.push()`.  In most browsers, the console log will appear *before* the page actually changes because `router.push` is asynchronous. 