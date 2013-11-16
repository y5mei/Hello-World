<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML"></script>

楼主滚回来了，老师给答案了，这两天忙着申学校没时间打出来，贱晾。。。
原题目是这个样子的：

>微扰后的哈密顿量如下，基  $B=\{\left| 1 \right\rangle,\left|2 \right\rangle,\left| 3\right\rangle\}$, 求能量的本征值的二阶修正和本证函数的一阶修正
$$ H = \begin{vmatrix}
E&{\lambda a}&{\lambda b}\\\
{\lambda {a}^{*}} &0 &0\\\
{\lambda {b}^{*}}&0&0\\
\end{vmatrix}$$


-------
- ###能量的零阶修正

	微扰前哈密顿量 $$ H_{0}= \left( {\matrix{
   E & 0 & 0  \cr 
   0 & 0 & 0  \cr 
   0 & 0 & 0  \cr } } \right)$$ 可以认为已经对角化了，能量的零阶修正为其对角元: $$E_{1}^{0}=E,E_{2}^{0}=0,E_{3}^{0}=0$$.
   简并子空间为：$span\{\left|2 \right\rangle,\left| 3\right\rangle\}$.
   
   
- ###能量的一阶修正

	由于微扰:$$V= \left( {\matrix{
   0 & {\lambda a} & {\lambda b}  \cr 
   {\lambda {a^*}} & 0 & 0  \cr 
   {\lambda {b^*}} & 0 & 0  \cr } } \right)$$
   可以微扰V 在简并子空间$span\{\left|2 \right\rangle,\left| 3\right\rangle\}$里已经块对角化了，则能量的一阶修正量是微扰矩阵块对角化后的相应对角元素，所以能量的一阶修正都是0：$$E_{1}^{1}=0,E_{2}^{1}=0,E_{3}^{1}=0$$.
- ###能量的二阶修正
	
	在简并子空间 $span\{\left|2 \right\rangle,\left| 3\right\rangle\}$ 中，假设可以找到一组足够好的线性组合，$$\left|+^0 \right\rangle = c_{2}^{+}\left|2\right\rangle+c_{3}^{+}\left|3 \right\rangle$$
	$$\left|-^0 \right\rangle = c_{2}^{-}\left|2\right\rangle+c_{3}^{-}\left|3 \right\rangle$$ 
	可以块对角化微扰矩阵 V，并且可以使得能量的二级修正不再简并，在非简并子空间 $span\{\left|1 \right\rangle\}$ 里同时取
	$$\left|1^{0}\right\rangle = \left|1\right\rangle$$
	则新的基底 $ {B'}=\{\left|1^{0} \right\rangle,\left|+^{0} \right\rangle,\left|-^{0}\right\rangle\}$

	将能量本征值和波函数都按照 $\lambda$ 展开，得到下式:
	$$\left( {{H_0} + V} \right)\left( {\left| {{n^0}} \right\rangle  + \lambda \left| {{n^1}} \right\rangle  + ...} \right) = \left( {E_n^0 + \lambda E_n^1 + ...} \right)\left( {\left| {{n^0}} \right\rangle  + \lambda \left| {{n^1}} \right\rangle  + ...} \right)$$

	按照 $\lambda^1$ 提项：
	+ 首先让 n = 1
		$${H_0}\left| {{1^1}} \right\rangle  + V\left| {{1^0}} \right\rangle  = E_1^0\left| {{1^1}} \right\rangle  + E_1^1\left| {{1^1}} \right\rangle $$

		左乘 $\left\langle 2 \right|$    （**这个是难点**）:
   		
   		$$\left\langle 2 \right|{H_0}\left| {{1^1}} \right\rangle  + \left\langle 2 \right|V\left| {{1^0}} \right\rangle  = \left\langle 2 \right|E_1^0\left| {{1^1}} \right\rangle  + \left\langle 2 \right|E_1^1\left| {{1^1}} \right\rangle $$

   		由于前面已经求得了能量的一阶修正，带入上式：

   		$$\left\langle 2 \right|0\left| {{1^1}} \right\rangle  + \left\langle 2 \right|V\left| {{1^0}} \right\rangle  = \left\langle 2 \right|E\left| {{1^1}} \right\rangle  + \left\langle 2 \right|0\left| {{1^1}} \right\rangle $$ 
		
		消去含 0 的项，并且注意到 $E_{1}^{0} = E$ 和 $\left| 1^{0}\right\rangle = \left| 1 \right\rangle$, 可得：
   		$$\left\langle 2 \right|\left. {{1^1}} \right\rangle  = {{\left\langle 2 \right|V\left| {{1^0}} \right\rangle } \over E} = {{\lambda {a^*}} \over E}$$    

   		同理，左乘 $\left\langle 3 \right|$，最后得到：
   		$$\left\langle 3 \right|\left. {{1^1}} \right\rangle  = {{\left\langle 3 \right|V\left| {{1^0}} \right\rangle } \over E} = {{\lambda {b^*}} \over E}$$          

	+ 其次让 n = +
		$${H_0}\left| {{ + ^1}} \right\rangle  + V\left| {{ + ^0}} \right\rangle  = E_ + ^0\left| {{ + ^1}} \right\rangle  + E_ + ^1\left| {{ + ^1}} \right\rangle $$

		左乘 $\left\langle 1 \right|$：
		$${E}\left\langle 1 \right.\left| {{ + ^1}} \right\rangle  + \left\langle 1 \right|V\left| {{ + ^0}} \right\rangle  = \left\langle 1 \right|0\left| {{ + ^1}} \right\rangle  + E_ + ^1\left\langle 1 \right.\left| {{ + ^1}} \right\rangle  = 0 + E_ + ^10$$

		移项可得：
		>$$\left\langle 1 \right|V\left| {{ + ^0}} \right\rangle  =  - {E}\left\langle 1 \right.\left| {{ + ^1}} \right\rangle $$

	+ 最后让 n = -

		同理可得：
		>$$\left\langle 1 \right|V\left| {{ - ^0}} \right\rangle  =  - E\left\langle 1 \right.\left| {{ - ^1}} \right\rangle $$
		
- ###波函数的一阶修正
	lajdfla







Welcome to StackEdit!	{#welcome}
=====================


Hello, I am your first Markdown document within **StackEdit**[^stackedit]. Don't delete me, I can be helpful. I can be recovered anyway in the `Utils` tab of the <i class="icon-cog"></i> `Settings` dialog.

----------


Documents
---------

**StackEdit** stores your documents in your browser local storage, which means all your documents are automatically saved locally and are accessible offline.

> **NOTE:** This also means that your documents are not shared between different browsers or computers and that clearing your browser's data may **delete all of them!**

#### <i class="icon-file"></i> Create a document

You can create a new document by clicking the <i class="icon-file"></i> button in the navigation bar. This will switch from the current document to the new one.

#### <i class="icon-folder-open"></i> Switch to another document

You can list all your local documents and switch from one to another by clicking the <i class="icon-folder-open"></i> button in the navigation bar.

#### <i class="icon-pencil"></i> Rename a document

You can rename the current document by clicking the document title in the navigation bar.

#### <i class="icon-trash"></i> Delete a document

You can delete the current document by clicking the <i class="icon-trash"></i> button in the navigation bar.

#### <i class="icon-hdd"></i> Save a document

You can save the current document to a file using the <i class="icon-hdd"></i> `Save as...` sub-menu.

> **NOTE:** See [<i class="icon-share"></i> Publish a document](#publish-a-document) section for a description of the different outputs.


----------


Synchronization
---------------

**StackEdit** can be combined with **Google Drive** and **Dropbox** to have your documents centralized in the *Cloud*. The synchronization mechanism will take care of uploading your modifications or downloading the latest version of your documents.

> **NOTE:** Full access to **Google Drive** or **Dropbox** is required to be able to import any document in StackEdit. Imported documents are downloaded in your browser and are not transmitted to a server.

#### <i class="icon-download"></i> Import a document

You can import a document from the *Cloud* by going to the <i class="icon-provider-gdrive"></i> `Google Drive` or the <i class="icon-provider-dropbox"></i> `Dropbox` sub-menu and by clicking `Import from...`. Once imported, your document will be automatically synchronized with the **Google Drive** / **Dropbox** file.

#### <i class="icon-upload"></i> Export a document

You can export any document by going to the <i class="icon-provider-gdrive"></i> `Google Drive` or the <i class="icon-provider-dropbox"></i> `Dropbox` sub-menu and by clicking `Export to...`. Even if your document is already synchronized with **Google Drive** or **Dropbox**, you can export it to a another location. **StackEdit** can synchronize one document with multiple locations.

#### <i class="icon-refresh"></i> Synchronize a document

Once your document is linked to a **Google Drive** or a **Dropbox** file, **StackEdit** will periodically (every 3 minutes) synchronize it by downloading/uploading any modification. Any conflict will be detected, and a local copy of your document will be created as a backup if necessary.

If you just have modified your document and you want to force the synchronization, click the <i class="icon-refresh"></i> button in the navigation bar.

> **NOTE:** The <i class="icon-refresh"></i> button is disabled when:
> 
> - you are offline,
> - or the document is not synchronized with any location,
> - or the document has not been modified since the last synchronization.

#### <i class="icon-refresh"></i> Manage document synchronization

Since one document can be synchronized with multiple locations, you can list and manage synchronized locations by clicking <i class="icon-refresh"></i> `Manage synchronization` in the <i class="icon-provider-stackedit"></i> menu. This will open a dialog box allowing you to add or remove synchronization links that are associated to your document.

> **NOTE:** If you delete the file from **Google Drive** or from **Dropbox**, the document will no longer be synchronized with that location.

----------


Publication
-----------

Once you are happy with your document, you can publish it on different websites directly from **StackEdit**. As for now, **StackEdit** can publish on **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **Tumblr**, **WordPress** and on any SSH server.

#### <i class="icon-share"></i> Publish a document

You can publish your document by going to the <i class="icon-share"></i> `Publish on` sub-menu and by choosing a website. In the dialog box, you can choose the publication format:

- Markdown, to publish the Markdown text on a website that can interpret it (**GitHub** for instance),
- HTML, to publish the document converted into HTML (on a blog for instance),
- Template, to have a full control of the output.

> **NOTE:** The default template is a simple webpage wrapping your document in HTML format. You can customize it in the `Services` tab of the <i class="icon-cog"></i> `Settings` dialog.

#### <i class="icon-share"></i> Update a publication

After publishing, **StackEdit** will keep your document linked to that publish location so that you can update it easily. Once you have modified your document and you want to update your publication, click on the <i class="icon-share"></i> button in the navigation bar.

> **NOTE:** The <i class="icon-share"></i> button is disabled when:
> 
> - you are offline,
> - or the document has not been published anywhere.

#### <i class="icon-share"></i> Manage document publication

Since one document can be published on multiple locations, you can list and manage publish locations by clicking <i class="icon-share"></i> `Manage publication` in the <i class="icon-provider-stackedit"></i> menu. This will open a dialog box allowing you to remove publication links that are associated to your document.

> **NOTE:** In some cases, if you remove the file from the website or the post from the blog, the document will no longer be published on that location.

----------


Markdown Extra
--------------

**StackEdit** supports **Markdown Extra**, which extends **Markdown** syntax with some nice features.

> **NOTE:** You can disable any **Markdown Extra** feature in the `Extensions` tab of the <i class="icon-cog"></i> `Settings` dialog.


### Tables

**Markdown Extra** has a special syntax for tables:

Item      | Value
--------- | -----
Computer  | \$1600
Phone     | \$12
Pipe      | \$1

You can specify column alignment with one or two colons:

| Item      |  Value | Qty  |
| :-------- | ------:| :--: |
| Computer  | \$1600 |  5   |
| Phone     |   \$12 |  12  |
| Pipe      |    \$1 | 234  |


### Definition Lists

**Markdown Extra** has a special syntax for definition lists too:

Term 1
Term 2
:   Definition A
:   Definition B

Term 3

:   Definition C

:   Definition D

	> part of definition D


### Fenced code blocks

GitHub's fenced code blocks are also supported with **Prettify** syntax highlighting:

```
// Foo
var bar = 0;
```

> **NOTE:** To use **Highlight.js** instead of **Prettify**, just configure the `Markdown Extra` extension in the <i class="icon-cog"></i> `Settings` dialog.


### Special Attributes

With **Markdown Extra**, you can specify `class` and `id` attributes on headers and fenced code blocks just like this:

##### Header example {#my-header}

``` {#my-id .my-class}
var foo = bar;
```

Then you can create cross-references like this: [beginning of the document](#welcome).


### Footnotes

You can create footnotes like this[^footnote].

  [^footnote]: Here is the *text* of the **footnote**.

### SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                  | ASCII                                    | HTML                                |
 ------------------|------------------------------------------|-------------------------------------
| Single backticks | `'Isn't this fun?'`                      | &#8216;Isn&#8217;t this fun?&#8217; |
| Quotes           | `"Isn't this fun?"`                      | &#8220;Isn&#8217;t this fun?&#8221; |
| Dashes           | `-- is an en-dash and --- is an em-dash` | &#8211; is an en-dash and &#8212; is an em-dash |


### Table of contents

You can insert a table of contents using the marker `[TOC]`:

[TOC]


### MathJax
 
You can render *LaTeX* mathematical expressions using **MathJax**, as on [math.stackexchange.com][1]:

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall
n\in\mathbb N$ is via through the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> **NOTE:** When exporting, make sure you include MathJax to render mathematical expression correctly. Your page/template should include something like: 

```
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML"></script>
```

> **NOTE:** You can find more information:
>
> - about **Markdown** syntax [here][2],
> - about **Markdown Extra** extension [here][3],
> - about **Prettify** syntax highlighting [here][4],
> - about **Highlight.js** syntax highlighting [here][5].

Written with [StackEdit](https://stackedit.io/).





  
  
  [^stackedit]: StackEdit is a free, open-source Markdown editor based on PageDown, the Markdown library used by Stack Overflow and the other Stack Exchange sites.
    
  [1]: http://math.stackexchange.com/
  [2]: http://daringfireball.net/projects/markdown/syntax "Markdown"
  
 
