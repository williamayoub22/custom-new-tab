<img width="2559" height="1185" alt="image" src="https://github.com/user-attachments/assets/75861f55-3937-46fe-811d-6b81cecb622f" />
<img width="2559" height="1190" alt="image" src="https://github.com/user-attachments/assets/019e1718-53bf-4dda-8bda-7d72c348ac25" />


# Custom New Tab Extension

A sleek, lightweight browser extension that replaces the default "New Tab" page with a customizable dashboard featuring quick-access links, drag-and-drop sorting, and dynamic local backgrounds.

All user data is stored locally in the browser for privacy, fast load times, and full offline functionality.

## online website version
https://newtabs.netlify.app/

## Features
- Customizable quick-access links
- Drag-and-drop sorting
- Dynamic local background images
- Local persistence using `localStorage`
- Modern glass-morphism inspired UI
- Fully offline-compatible

## Technologies Used
- Manifest V2 Extension Architecture
- JavaScript (ES6)
- localStorage API
- CSS3 animations and responsive design
- jQuery + jQuery UI
- FontAwesome

## File Structure

```text
├── fonts/                # Custom fonts
├── jquery/               # jQuery files
├── jqueryUi/             # jQuery UI files
├── js/                   # Additional JS resources
├── logo/                 # Extension icons
├── photos/               # Background image pool
├── releases/             # Packaged extension builds
├── css.css               # Main stylesheet
├── index.html            # Main extension page
├── main.js               # Core functionality
├── manifest.json         # Extension configuration
└── README.md             # Documentation

```


## Installation

### Chrome / Brave / Edge
1. Extract the latest ZIP from the `releases/` folder
2. Open `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the extracted extension folder

### Firefox
1. Extract the release ZIP
2. Open `about:debugging#/runtime/this-firefox`
3. Click **Load Temporary Add-on**
4. Select `manifest.json`

## Testing
- Open a new tab and verify the dashboard loads
- Test adding/editing/removing links
- Verify drag-and-drop sorting persists
- Refresh tabs to confirm dynamic backgrounds
- Test offline functionality by disconnecting from the internet

## Releases
Packaged builds are stored inside the `releases/` directory.

Example:

```text
newtab-1.2.4.zip
```
