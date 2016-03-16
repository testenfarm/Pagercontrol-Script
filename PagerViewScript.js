
var target = UIATarget.localTarget();

// START_MODULE PagerView Module
var testmodule = "PagerView Module";
UIALogger.logStart(testmodule);


target.frontMostApp().mainWindow().tableViews()[0].tapWithOptions({tapOffset:{x:0.62, y:0.04}});
target.delay(2);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_1')
target.delay(2);
target.frontMostApp().mainWindow().scrollViews()["intro_scroll"].buttons()[0].tap();
// Make sure the button index is valid
target.delay(2);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_2')
target.delay(2);
target.frontMostApp().mainWindow().scrollViews()["intro_scroll"].buttons()[1].tap();
target.delay(2);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_3')
target.delay(2);
target.frontMostApp().mainWindow().scrollViews()["intro_scroll"].buttons()[2].tap();
target.delay(2);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_4')
target.delay(2);
target.frontMostApp().mainWindow().scrollViews()["intro_scroll"].buttons()[3].tap();
target.delay(2);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_5')
target.delay(2);

UIALogger.logPass(testmodule);