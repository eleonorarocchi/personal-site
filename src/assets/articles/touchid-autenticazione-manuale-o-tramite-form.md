---
title: "TouchID: autenticazione manuale o tramite form?"
date: "2017-02-07"
slug: "touchid-autenticazione-manuale-o-tramite-form"
wordpress_id: 71
---

La richiesta era di avere un'app che consentisse un accesso tramite autenticazione. Ma perché non consentire l'accesso tramite TouchID, per i dispositivi che lo supportano (e l'hanno attivo!)?
Con queste poche semplici righe è possibile gestire questa magia:
`LAContext *context = [[LAContext alloc] init];
NSError *error = nil;
if ([context canEvaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics error:&error])
{
{[context evaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics localizedReason:@"Sei il proprietario?" reply:^(BOOL success, NSError *error)
{
if (error)
{
// C'è stato un problema nel verificare la tua identità
} else if (success)
{
// Ok autenticazione avvenuta
} else
{
// Accesso non consentito
}
}];
}`
