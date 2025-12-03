---
title: Adding Metadata
lastUpdated: 2025-12-02
sidebar:
  label: Adding Metadata
  order: 1
---

After logging in and selecting your files, the e!DAL web wizard will ask you to provide metadata. This step is important to ensure your data is **FAIR** (Findable, Accessible, Interoperable, and Reusable).

High-quality metadata ensures that your dataset can be found by search engines (like Google Dataset Search) and correctly cited by other researchers.

## Mandatory Fields

You must complete these fields to proceed with the submission.

### 1. Title

The title should be descriptive and unique. It is the first thing users see.

* **Good:** *Raw phenotyping image data for "Drought stress response in winter wheat" (2023)*
* **Bad:** *Data.zip* or *Supplementary Material*

:::tip[Naming Convention]
If your data belongs to a specific publication, it is good practice to include a reference to the topic or the paper title in the dataset title, e.g., *"Supplementary Dataset for: [Paper Title]"*.
:::

### 2. Description (Abstract)

Provide a comprehensive summary of the dataset. This text appears on the landing page of your DOI.

* Describe **what** the data is (e.g. *genomic sequences, microscope images*).
* Describe **how** it was generated (methodology).
* Mention technical details like file formats or specific software versions used.

:::caution[Abstracts]
Do not simply copy-paste the abstract of your research paper unless the dataset covers exactly the same scope. The dataset description should focus on the **data files** themselves.
:::

### 3. Creators (Authors)

List all major contributors to the dataset.

* **Name:** Full name is required.
* **Affiliation:** All institutional affiliations must be provided for every author.
* **ORCID:** Linking authors to their **ORCID** is highly recommended to ensuring proper credit and linkage in global databases.

### 4. License

You must select a license to define how others can use your data.

* **Default:** `CC BY 4.0` (Creative Commons Attribution) is the standard for open research data. It allows others to use your data as long as they cite you.
* **Software:** If you are uploading code, consider if a software license (like MIT or GPL) is more appropriate, though CC BY is standard for the PGP repository.

## Recommended Fields

While not strictly mandatory for the wizard to finish, filling these out is critical for the visibility of your data.

### Keywords

Enter specific terms that describe your data (e.g., *Triticum aestivum*, *Genotyping*, *Drought Stress*, *High-throughput Phenotyping*). These are used by search indices to categorise your submission.

### Related Identifiers (Linking to Papers)

If your dataset supports a research paper, you should link them here.

1. Select the Relation Type: **IsSupplementTo** (if the paper is published) or **IsReferencedBy**.
2. Enter the **DOI** of the paper (or preprint).

:::note[Why link?]
Linking your dataset to your paper increases the citation count for both. It allows systems like CrossRef and DataCite to automatically connect your paper and your data.
:::

### Funding Information

Acknowledge your funding sources.

* **Funder Name:** (e.g., *German Federal Ministry of Education and Research (BMBF)*)
* **Grant Number:** The specific project ID.

## Next Steps

Once you have filled out the metadata, proceed to the **Review** step where you will accept the license agreement and submit the data to the PGP internal review team.