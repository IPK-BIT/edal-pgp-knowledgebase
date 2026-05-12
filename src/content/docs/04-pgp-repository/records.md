---
title: e!DAL-PGP Records
lastUpdated: 2025-12-02
authors:
  - helena-schnitzer
  - daniel-arend
sidebar:
  order: 2
---

Once you open a single DOI record in the e!DAL-PGP repository, you see three panels – "Citation", "Files", and "Metadata". 

## Citation

The **Citation** panel at the top of the contentn page provides essential information needed to properly reference the dataset. It includes:

- **Citation** string that can be directly reused in publications
  - In addition citations are downloadable as **BibTeX**, **RIS**, **Text** or **JSON-LD** file
- **Abstract** with a concise description of the dataset content and purpose
- **License** defining the usage and distribution rights associated with the dataset
- **DOI** as persistent identifier for accessing the dataset
- **Content** with a brief summary overview of what the dataset contains

## Files

The **Files** panel gives access to downloadable resources of the dataset and allows users to:

- **Download the entire record as a ZIP archive**
  - Use the <btn>Download as ZIP</btn> button to retrieve all files in one compressed package.
:::danger[Note]
ZIP Extraction using the native Windows Zip Client can fail due to file path length, please use third-party ZIP client instead
:::
- **Download individual files**
  - The file tree can be expanded to browse folders and select specific files.

## Metadata

The **Metadata** panel show descriptive information about the dataset and its associated files. The provides attributes are inspired by the Dublin Core and DataCite metadata schema:

- **Contributor** : the dataset contributors.
- **Creator** : the person who created the record.
- **Publisher** : the publishing institution.
- **Size** : total size of the dataset.
- **Subject** : a list of key terms or keywords describing the dataset.
- **Coverage** : spatial or temporal scope of the data, where applicable.
- **Date**
  - **Created** : when the record was first published.
  - **Updated** : the most recent modification date.
- **Language** : the dataset language.
- **Relation** : links to related datasets or resources.
- **Source** : original source material or references.