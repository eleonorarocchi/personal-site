---
title: "Configurare progetto Cordova per inviare notifiche push via FMC a iOs"
date: "2020-01-14"
slug: "configurare-progetto-cordova-per-inviare-notifiche-push-via-fmc-a-ios"
wordpress_id: 329
---

Se ti stai chiedendo come fare a configurare un progetto Cordova per inviare notifiche push via FMC ad un app iOs, sappi che me lo sono chiesta anche io. Soprattutto dopo aver seguito la guida ufficiale di Firebase senza che nulla funzionasse.

Metto di seguito i passi che per me hanno funzionato, e condivido qui questo mio nuovo sapere acquisito dopo ben un giorno di problemi di ogni tipo.

## Fase 1: Aggiungere Firebase alla piattaforma iOs di Cordova

Ho creato la mia applicazione basandomi su Cordova. Una volta pronta la parte generica di contenuto, ho provveduto a ad aggiungere la piattaforma ios, ma prima ho dovuto aggiungere al progetto Cordova un'importantissima libreria, necessaria a compilare senza errori poi l'applicazione iOs. Quindi questi sono i comandi che ho eseguito dalla directory di progetto Cordova:

```
> cordova plugin add cordova-plugin-cocoapod-support --save
> cordova add platform ios
```

Creata la piattaforma iOs, e entrando quindi nella directory ios appunto, ho dovuto aprire il file di configurazione di CocoaPods (ovvero il file Podfile), e aggiungere i pacchetti di cui si ha bisogno per FMC:

```
platform :ios, '7.0'
target 'MyFantasticApp' do
	pod 'Firebase/Core'
	pod 'Firebase/Messaging'
end
```

Fatta questa modifica ho potuto procedere con l'installazione vera e propria di questi due pacchetti, lanciando da terminale il comando:

```
> pod install
```

A questo punto si può aprire la soluzione con Xcode, avendo l'attenzione di aprire il file con estensione .xcworkspace.

## Fase 2: Configurare la console di FMC

Nella Firebase Console, occorre censire l'applicazione iOs e seguire le istruzioni fornite, fino a generare il file GoogleService-Info.plist, che va poi scaricato e posizionato nella cartella di progetto che contiene il file MyFanstasticApp-Info.plist di progetto (e la storyboard). Fatto questo passaggio è possibile testare la comunicazione con l'applicazione, che nel frattempo va messa in esecuzione (va bene anche su simulatore).

## Fase 3: impostare i certificati APN

Mentre per inviare push notification su Android, è sufficiente configurare Firebase, per iOs è necessario effettuare alcuni passaggi anche per configurare APN. Consiglio di seguire la guida di Francesco Ficetola (<http://www.francescoficetola.it/2013/04/13/ios-come-configurare-inviare-e-ricevere-le-notifiche-push-in-una-app-ios/>) in particolare la parte riguardante l'"**Abilitazione delle Push Notifications sul Provisioning Portal**".

I passaggi fondamentali sono:

1. Accedere al [*Provisioning Portal*](http://www.developer.apple.com/).
2. Verificare di possedere un certificato non scaduto per lo sviluppo (*Development Certificate*) e per la distribuzione (*Distribution Certificate*)
3. Verificare di aver registrato un **App ID** associato alla propria app (sezione *Identifiers*).
4. Per tale AppID occorre abilitare l’opzione “*Push Notifications*” e generare due certificati (*Development Push SSL Certificate* e *Production Push SSL Certificate*). Per la generazione di questi certificati, leggere le istruzioni che vengono riportate dopo il click su “*Create Certificate*“: si utilizza il tool *Accesso Portachiavi* per creare il *Certificate Signing Request (CSR)* che occorrerà uploadare (<https://help.apple.com/developer-account/#/devbfa00fef7>).
5. Dopo aver completato la generazione, occorre effettuare il download dei due certificati, e facendo doppio click, si importano sempre in *Accesso Portachiavi* nella sezione “*I miei certificati*“.

Infine occorre creare una Key, sempre sul portale <https://developer.apple.com/>, e scaricare il certificato, che andrà poi caricato nella Firebase Console, nella scheda di configurazione dell'app iOs:

![](https://www.eleonorarocchi.it/wp-content/uploads/2020/01/Schermata-2020-01-14-alle-14.06.07-1024x394.png)

In questa sezione sono richiesti anche ID Chiave e ID Team, che si possono trovare sempre nella sezione Keys nel portale [https://developer.apple.com](https://developer.apple.com/):

![](https://www.eleonorarocchi.it/wp-content/uploads/2020/01/rcFNA-1.png)

## Fase 4: Configurazione progetto Xcode

Per prima cosa occorre aggiungere le capabilities necessarie al progetto, ossia "Push Notification" e "Remote notification" in "Background Modes".

![](https://www.eleonorarocchi.it/wp-content/uploads/2020/01/Schermata-2020-01-14-alle-14.14.47-1024x554.png)

Infine occorre personalizzare il file AppDelegate.m inserendo il codice necessario alla registrazione del token e alla ricezione delle notifiche push, come da esempio:

```
#import "AppDelegate.h"
#import "MainViewController.h"
@import Firebase;
@import UserNotifications;

// Implement UNUserNotificationCenterDelegate to receive display notification via APNS for devices
// running iOS 10 and above.
@interface AppDelegate () <UNUserNotificationCenterDelegate>
@end

@implementation AppDelegate

NSString *const kGCMMessageIDKey = @"gcm.message_id";

- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
{
    // [START configure_firebase]
    [FIRApp configure];
    // [END configure_firebase]

    // [START set_messaging_delegate]
    [FIRMessaging messaging].delegate = self;
    // [END set_messaging_delegate]

    // Register for remote notifications. This shows a permission dialog on first run, to
    // show the dialog at a more appropriate time move this registration accordingly.
    // [START register_for_notifications]
    if ([UNUserNotificationCenter class] != nil) {
      // iOS 10 or later
      // For iOS 10 display notification (sent via APNS)
      [UNUserNotificationCenter currentNotificationCenter].delegate = self;
      UNAuthorizationOptions authOptions = UNAuthorizationOptionAlert |
          UNAuthorizationOptionSound | UNAuthorizationOptionBadge;
      [[UNUserNotificationCenter currentNotificationCenter]
          requestAuthorizationWithOptions:authOptions
          completionHandler:^(BOOL granted, NSError * _Nullable error) {
            // ...
          }];
    } else {
      // iOS 10 notifications aren't available; fall back to iOS 8-9 notifications.
      UIUserNotificationType allNotificationTypes =
      (UIUserNotificationTypeSound | UIUserNotificationTypeAlert | UIUserNotificationTypeBadge);
      UIUserNotificationSettings *settings =
      [UIUserNotificationSettings settingsForTypes:allNotificationTypes categories:nil];
      [application registerUserNotificationSettings:settings];
    }

    [application registerForRemoteNotifications];
    // [END register_for_notifications]
    
    self.viewController = [[MainViewController alloc] init];
    return [super application:application didFinishLaunchingWithOptions:launchOptions];
}
  
- (void)messaging:(FIRMessaging *)messaging didReceiveRegistrationToken:(NSString *)fcmToken {
    NSLog(@"FCM registration token: %@", fcmToken);
    // Notify about received token.
    NSDictionary *dataDict = [NSDictionary dictionaryWithObject:fcmToken forKey:@"token"];
    [[NSNotificationCenter defaultCenter] postNotificationName:
     @"FCMToken" object:nil userInfo:dataDict];
    // TODO: If necessary send token to application server.
    // Note: This callback is fired at each app startup and whenever a new token is generated.
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo {
  // If you are receiving a notification message while your app is in the background,
  // this callback will not be fired till the user taps on the notification launching the application.
  // TODO: Handle data of notification

  // With swizzling disabled you must let Messaging know about the message, for Analytics
  // [[FIRMessaging messaging] appDidReceiveMessage:userInfo];

  // Print message ID.
  if (userInfo[kGCMMessageIDKey]) {
    NSLog(@"Message ID: %@", userInfo[kGCMMessageIDKey]);
  }

  // Print full message.
  NSLog(@"%@", userInfo);
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
    fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
  // If you are receiving a notification message while your app is in the background,
  // this callback will not be fired till the user taps on the notification launching the application.
  // TODO: Handle data of notification

  // With swizzling disabled you must let Messaging know about the message, for Analytics
  // [[FIRMessaging messaging] appDidReceiveMessage:userInfo];

  // Print message ID.
  if (userInfo[kGCMMessageIDKey]) {
    NSLog(@"Message ID: %@", userInfo[kGCMMessageIDKey]);
  }

  // Print full message.
  NSLog(@"%@", userInfo);

    
    #if !TARGET_IPHONE_SIMULATOR
     
        application.applicationIconBadgeNumber = 0;
     
        // We can determine whether an application is launched as a result of the user tapping the action
        // button or whether the notification was delivered to the already-running application by examining
        // the application state.
     
        if (application.applicationState == UIApplicationStateActive) {
            // Nothing to do if applicationState is Inactive, the iOS already displayed an alert view.
            UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:@"Notifica Push"
                                                                message:[NSString stringWithFormat:@"%@",
                                                                         [[userInfo objectForKey:@"aps"] objectForKey:@"alert"]]
                                                               delegate:self
                                                      cancelButtonTitle:@"OK"
                                                      otherButtonTitles:nil];
            [alertView show];
            //[alertView release];
        }
     
        NSLog(@"remote notification: %@",[userInfo description]);
        NSDictionary *apsInfo = [userInfo objectForKey:@"aps"];
     
        NSString *alert = [apsInfo objectForKey:@"alert"];
        NSLog(@"Received Push Alert: %@", alert);
     
        NSString *sound = [apsInfo objectForKey:@"sound"];
        NSLog(@"Received Push Sound: %@", sound);
     
        NSString *badge = [apsInfo objectForKey:@"badge"];
        NSLog(@"Received Push Badge: %@", badge);
     
    #endif
  completionHandler(UIBackgroundFetchResultNewData);
}

- (void)application:(UIApplication*)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData*)deviceToken
{
    NSLog(@"My token is: %@", deviceToken);
}
 
- (void)application:(UIApplication*)application didFailToRegisterForRemoteNotificationsWithError:(NSError*)error
{
    NSLog(@"Failed to get token, error: %@", error);
}

- (void)userNotificationCenter:(UNUserNotificationCenter* )center willPresentNotification:(UNNotification* )notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler {
    NSLog( @"Here handle push notification in foreground" );
    //For notification Banner - when app in foreground

    completionHandler(UNNotificationPresentationOptionAlert);

    // Print Notification info
    NSLog(@"Userinfo %@",notification.request.content.userInfo);
}
@end
```

Fatte tutte queste operazioni, è possibile testare la ricezione delle notifiche, ma attenzione: le notifiche possono essere inviate solo su dispositivi fisici e non su simulatore iOs!
