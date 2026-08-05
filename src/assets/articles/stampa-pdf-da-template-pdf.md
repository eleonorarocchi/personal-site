---
title: "Stampa PDF da template (PDF)"
date: "2017-01-26"
slug: "stampa-pdf-da-template-pdf"
wordpress_id: 56
---

Avevo la necessità di stampare alcuni PDF dalla mia applicazione iOS. I PDF hanno caratteristiche simili (stessa struttura interna), ma dati diversi a seconda di righe selezionate a video dall'utente.
Ho abbozzato quindi un metodo che mi consente di generare un PDF da un template predefinito (un PDF di scheletro, praticamente), al quale poter eventualmente aggiungere gli elementi personalizzati.
`- (void) generatePdfWithFilePath: (NSString *)thefilePath fromTemplate:(NSString*)templateName
{
_pageSize.width = 595; // Standard page size A4
_pageSize.height = 842; // Standard page size A4
UIGraphicsBeginPDFContextToFile(thefilePath, CGRectZero, nil);
NSURL *templateUrl = [[NSBundle mainBundle] URLForResource:templateName withExtension:@"pdf"];
NSString *templatePath = [templateUrl path];
CFURLRef url = CFURLCreateWithFileSystemPath(NULL, (CFStringRef)templatePath, kCFURLPOSIXPathStyle, 0);
//open template file
CGPDFDocumentRef templateDocument = CGPDFDocumentCreateWithURL(url);
CFRelease(url);
//get amount of pages in template
size_t count = CGPDFDocumentGetNumberOfPages(templateDocument);
//for each page in template
for (size_t pageNumber = 1; pageNumber <= count; pageNumber++) {
//get bounds of template page
CGPDFPageRef templatePage = CGPDFDocumentGetPage(templateDocument, pageNumber);
CGRect templatePageBounds = CGPDFPageGetBoxRect(templatePage, kCGPDFCropBox);
//create empty page with corresponding bounds in new document
UIGraphicsBeginPDFPageWithInfo(templatePageBounds, nil);
CGContextRef context = UIGraphicsGetCurrentContext();
//flip context due to different origins
CGContextTranslateCTM(context, 0.0, templatePageBounds.size.height);
CGContextScaleCTM(context, 1.0, -1.0);
//copy content of template page on the corresponding page in new file
CGContextDrawPDFPage(context, templatePage);
//flip context back
CGContextTranslateCTM(context, 0.0, templatePageBounds.size.height);
CGContextScaleCTM(context, 1.0, -1.0);
/* CUSTOM DRAWING */
if (pageNumber == 1) {
NSString *newText = @"New text.";
UIFont *textFont = [UIFont systemFontOfSize:16];
[newText drawAtPoint:CGPointMake(60, 150) withAttributes:@{NSFontAttributeName:textFont}];
}
}
CGPDFDocumentRelease(templateDocument);
UIGraphicsEndPDFContext();
}`
