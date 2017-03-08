% Internet Privacy
% Mort Yao
% 2016-07-22

# How to block Google Analytics (from tracking you)

## Option 1. The official (questionably working) way

Install the [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout).

Note the following claims on their [description](https://chrome.google.com/webstore/detail/google-analytics-opt-out/fllaojicojecljbmefodhfapmkghcbnh) page:

> Updates to your browser or operating system may affect the functionality of the opt-out extension.

So even if it does work, it _may_ stop working without you noticing it. See Option 2 for a more proper solution.

## Option 2. The brutal (and the only correct) way

Add this one line to your `/etc/hosts`:

    127.0.0.1	www.google-analytics.com

So your browser will not even have a chance to see the tracking code (<https://www.google-analytics.com/analytics.js> or <https://www.google-analytics.com/ga.js>).

## Notes

Note that although this method effectively blocks Google Analytics' tracking code, it is normally not possible to know whether there are other pieces of JavaScript engaged in traffic tracking activities on a Web page. Google Analytics is just the most commonly-used and the cheapest (free) one, used by many sites without visitors' consent.

Also, be aware that the method here does not prevent the server itself logging your activities; nor does it protect you from eavesdropping.

---

**References**

* City College of San Francisco. “Instructions: Block Google Analytics”
Accessed May 24, 2016.
<http://www.ccsf.edu/Policy/Privacy/ga.html>
