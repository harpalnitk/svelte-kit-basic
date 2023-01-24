### INITIAL SETTINGS
1. Disable minimap, breadcrumbs, enable preview when first time using vscode in settings
2. Ctrl + , to open settings
3. ctrl + K to clear terminal; cls for cmd


### COMMAND PALLETEE 
## Ctrl + p : opens command palette
 1. IN command pallete search for any file and click enter to open that file
 2. Type @ in command pallete to list all symbols f
functions in the file   Note: Ctrl+Shift+.  does that
in one step
3. type > in command pallete to run any command

4. type :23 in command pallette to go to line number 23 in the file
OR Ctrl + G, will open comman pallete with : sign already typed

### FILE EXPLORER
1. Ctrl+B hides/show(toggles) file explorer side window
2. Ctrl + W close open files one by one starting from right
3. Collapse all open folders button in top right 
of file explorer

### Intellisense
1. Ctrl + Space: Suggestions
2. Ctrl+Shift+space: Param hints i.e what parameters
can be passed into a method
### Create File
1. Type filename src/routes/data/index.js and
vs code will create directories as well


### MOVEMENT IN FILE
1. Shift + right arrow or Shift + down arrow will
select text in lines 
2. Ctrl + L to highlihgt line by line and then Ctrl + / to comment those lines
3. Ctrl + D selects the word
4. Ctrl + D again will select the next occurence of that word and then u can edit all selected simultaneously
OR use alt + Click
5. Ctrl + C and the line will be automatically copied

### MOVE LINES
1. Use Alt + Up arrow to move line up
2. Alt+Shift+Up Arrow will copy the line and paste it up
3. Alt + Click for multiple cursors

### CODE FOLDING
1. Command pallete and type >fold to fold all code
2. Ctrl+Shift+[  to fold individual method where cursor is

### BRACKET PAIR COLORIZATION
1. OPen Settings Ctrl + , and search for colorize and enable it

### LINKED EDITING
1.  OPen Settings Ctrl + , and search for linked editing and enable it, closing tags are automatically edited with opening tags

### EMMET Cheatsheet
1. https://docs.emmet.io/cheat-sheet/
2. In command pallette >Emmet balance inward/outward to wrap code inside
another tag

### Find references
1. First option is global search by Ctrl+Shift+F
2. right click on function> peek> peek implementation/references/definitions
 
## Rename function
1. Find implementation using above method and rename it;it will rename all places where function is used 





## NPM SCRIPT TAG
1. In bottom of explorer buttons for all scripts are there from package.json file
we can also create our custom tasks
2. Use >task in command pallete to set a default build task
it will create a taks.json file under .vscode folder in the project directory
 now u can use command pallete and use >run to tun the command

### USING GIT
1. go to source control icon
2. All files modified will be shown
3. Click on + icon before files to stage them
4. then click on commit button and type message
5. then publish

1. M against file in explorere means it is modified
2. In source control clicking on the same file will show the difference between versions



 