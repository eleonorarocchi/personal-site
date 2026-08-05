---
title: "Scroll della ScrollView quando si apre la tastiera, e chiusura."
date: "2017-09-27"
slug: "scroll-della-scrollview-quando-si-apre-la-tastiera-e-chiusura"
wordpress_id: 113
---

Con xcode 9 mi sono accorta che l'oggetto
`[[[notification userInfo] objectForKey:UIKeyboardFrameBeginUserInfoKey] CGRectValue].size`
che dovrebbe restituire le dimensioni della keyboard, restituisce 0.
Sostituendolo con
`[[[notification userInfo] objectForKey:UIKeyboardFrameEndUserInfoKey] CGRectValue].size`
tutto funziona come prima.
`#pragma mark - Keyboard management
- (void)keyboardWasShown:(NSNotification *)notification
{
CGPoint textPosition = [activeField convertPoint:self.view.frame.origin toView:nil];
// CGSize keyboardSize = [[[notification userInfo] objectForKey:UIKeyboardFrameBeginUserInfoKey] CGRectValue].size;
CGSize keyboardSize = [[[notification userInfo] objectForKey:UIKeyboardFrameEndUserInfoKey] CGRectValue].size;
keyboardHeight = keyboardSize.height;`
NSInteger screenHeight = [[UIScreen mainScreen] bounds].size.height;
if (screenHeight - textPosition.y - 44 - 44 <= keyboardHeight){
CGPoint scrollPoint = CGPointMake(0.0, self.scrollView.frame.origin.y + (keyboardHeight) + activeField.frame.size.height - 44 - 44 ); // - pagingViewHeight perchè altrimenti viene visualizzata una zona bianca dovuta al paginatore
[self.scrollView setContentOffset:scrollPoint animated:YES];
}
keyboardIsVisible = YES;
}
- (void) keyboardWillHide:(NSNotification \*)notification
{
CGPoint scrollPoint = CGPointMake(0.0, 0);
[self.scrollView setContentOffset:scrollPoint animated:YES];
keyboardIsVisible = NO;
}
