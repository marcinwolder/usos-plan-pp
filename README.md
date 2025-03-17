# USOS Plan ++ 📅

The application is used to filter out other groups' classes from the AGH schedule.  
It can be used to quickly find your classes or to compare which group has the best schedule.

**Chrome Web Store:** [[LINK]](https://chromewebstore.google.com/detail/usos-plan++/koianmalhfdfhcgpgohlfekmgdihjgkn)

## How to use

1. Open your AGH university plan [[example]](https://web.usos.agh.edu.pl/kontroler.php?_action=katalog2/przedmioty/pokazPlanGrupyPrzedmiotow&grupa_kod=ISI_1S_sem_4&cdyd_kod=24%2F25-L)
2. Open extension
3. Enter your groups numbers
4. Click filter button

## Requirements
#### For development:
* Google Chrome

## Project Structure

```bash
└───src  # Extension source code
    ├───background.js
    ├───icon-128.png
    ├───icon-16.png
    ├───icon-48.png
    ├───icon.png
    ├───manifest.json # Info about extension
    ├───popup.css # Styles of popup window
    ├───popup.html # HTML of popup window
    └───popup.js # JS that does the ✨ magic ✨
```
