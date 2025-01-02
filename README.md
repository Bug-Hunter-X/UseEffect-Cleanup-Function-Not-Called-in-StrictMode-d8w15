# Next.js useEffect Cleanup Function Not Called in StrictMode

This repository demonstrates a subtle bug in Next.js where the cleanup function in `useEffect` is not always called when using `React.StrictMode`.  The issue appears specifically when a component is unmounted due to navigation.

## Problem Description

The `MyComponent` uses `useEffect` with a cleanup function.  While this function correctly logs when the component initially mounts, it may *not* consistently log when the component unmounts when navigation happens or when strict mode is enabled, leading to potential memory leaks or unexpected behavior. 

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/` route.
5. Notice the "MyComponent mounted" log.
6. Navigate away from the `/` route. The "MyComponent unmounted" log might be missing in the console.

## Solution

The issue is likely a Next.js-specific behavior or interaction with StrictMode.  A workaround is to avoid navigation-related unmounting and ensure that the component does not remount.  This approach ensures proper cleanup.  Another is to implement error handling to catch the unhandled error.