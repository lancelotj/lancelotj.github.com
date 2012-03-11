---
layout: post
date: 2012-03-10
title: Chane PDF File Initial View
---

When you open PDF files using Adobe Reader, it will read initial view settings such as single page or double page stored in the PDF file. It's actually pretty easy to change this information in Linux:

1. Install pdfedit: `sudo apt-get install pdfedit`
2. Open the PDF file in pdfedit, right click the "catalog" node in the tree panel, choose "add item to dictionary"
3. Add property name: "PageLayout"
3. Select "name" and input "TwoPageRight"
4. Click "add and close"
5. Save the PDF file

This adds a name in the catalog dictionary of PDF file. It will be used by the Acrobat Reader. There are other possibilities:

- SinglePage
- OneColumn
- TwoColumnLeft
- TwoColumnRight
- TwoPageLeft
- TwoPageRight

"Column" means continuous page. "Page" means display as a single page. "Left" means start double pages  with odd-numbered pages on the left.

Please note that not all PDF viewers support this setting. Only Acrobat Reader supports it.
