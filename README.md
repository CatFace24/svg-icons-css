## Set up:
1) Download and install Node.JS https://nodejs.org/en/download/
2) Replace/Place your SVG icons into 'input-icons-svg' folder

## Creating your own output-icons.css:
1) Initialize project with '`npm init -y`
![image](https://github.com/CatFace24/svg-icons-css/assets/109134194/6319df36-d2d5-42b9-8f21-28de5953accc)

2) Install svgo package with `npm install --save fs path svgo`
![image](https://github.com/CatFace24/svg-icons-css/assets/109134194/4432ed90-f12f-4dd7-ad4d-58a6a5d83c08)

3) Run `node generateIcons.js`
![image](https://github.com/CatFace24/svg-icons-css/assets/109134194/e0051e47-9681-46ff-abc5-8fb484dfb9b3)

4) Your icons are now made into classes in `./output-icons.css` 

## General
- input-icons-svg folder contains several svg icons
- generateIcons.js reads this folder and converts it into CSS classes, output into output-icons.css
- components.css then stylizes the colour / size of compoenents using the icons via variables
- just put these icon classes wherever you need

## Next Steps:
- Tweak javascript with newer properties (see if formatting is also possible)
- Figure out proper sizings in em
- Combine with design/colour tokens
