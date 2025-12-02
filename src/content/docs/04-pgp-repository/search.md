---
title: edal-PGP Search
date: 2025-12-02
sidebar:
  order: 1
---

- DOI / repo search https://doi.ipk-gatersleben.de/search
- Help docs: https://edal-pgp.ipk-gatersleben.de/document/search.html


![](../../../assets/images/pgp-repository/PGP_Search_1.png)

For precise searching there are interface elements that will be displayed when the "advanced" button is clicked (see red highlighted part in the upper image). The shown elements enable to build a query out of multiple components. To find results with approximate matching information the fuzzy check box should be checked otherwise it will result in an exact search. The type of information which the query should match can also be selected. Finally one can select if results must or must not contain the search term. The "+" button adds the query to a list and starts a search. Alternatively the "search" button and the enter key can be used for searching.

![](../../../assets/images/pgp-repository/PGP_Search_2.png)

The picture above shows the results of an example query with the following attributes [fuzzy = yes, type = title, search term = gen, must occur]. The query got parsed to a valid Lucene query according to the [Lucene Query Parser Syntax](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html) and is displayed in a list (See the red marked area). This list is used to show all entered queries in separate boxes that can be deleted individually with the contained "x" button. The results of a query are displayed in a table with elements to control the displayed page. The right upper corner shows information about which results are displayed and how many results were found that match the current listed queries.

![](../../../assets/images/pgp-repository/PGP_Search_3.png)

There are also interface elements that allow to search more quickly. The search bar let’s a user search for a simple term, multiple terms separated with whitespaces or even complex queries (that fulfill the [Lucene Query Parser Syntax](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html) ). The search starts when the "search" button has been clicked or enter has been pressed. To reset the results, entered queries and other options there is the "Clear filters" button.

![](../../../assets/images/pgp-repository/PGP_Search_4.png)

The User Interface also offers options to filter the results (see the red marked area in the upper image). The first elements enable to filter for the result type (Dataset, file, directory). The next filter can be used to filter for the year of creation. The next two options can only be used for file searching and enable to filter for the file size and the file type. Finally there is a list of possible search terms listed in different categories. After every search term there is a number which represents how many results this search term in addition to the current list of queries and filters would yield. With a click it will be parsed to a query, added to the list of queries and new search is started.

![](../../../assets/images/pgp-repository/PGP_Search_5.png)


The bold "More (x)" in each category will display a dialogue window with a mouse click (see upper image). This window enables the user to browse all available search terms of a category that yield at least 1 result when combined with the existing queries and filters. A search term can be added to the existing queries with a click. The list is initially sorted by the number of results "Hits" but it can also be sorted lexicographically with the radio button "Search terms" at the top of the dialogue.