---
title: Step 2 - Adding Basic Information
lastUpdated: 2025-12-04
authors:
  - sebastian-beier
sidebar:
  order: 2
---

After logging in and selecting your files, the e!DAL web wizard will guide you through the metadata provision process. This step is important to ensure your data is **FAIR** (Findable, Accessible, Interoperable, and Reusable).

High-quality metadata ensures that your dataset can be found by search engines (like Google Dataset Search) and correctly cited by other researchers.

## Step 2: Basic Information

In this step, you are required to provide the core details of your dataset.

![](@images/pgp-repository/web-client-2.png)

### 1. Dataset Title

The title should be descriptive and unique. It is the first thing users see.

* **Good:** *Raw phenotyping image data for "Drought stress response in winter wheat" (2023)*
* **Bad:** *Data.zip* or *Supplementary Material*

:::tip[Naming Convention]
If your data belongs to a specific publication, it is good practice to include a reference to the topic or the paper title in the dataset title, e.g., *"Supplementary Dataset for: [Paper Title]"*.
:::

### 2. Description

Provide a comprehensive summary of the dataset. This text appears on the landing page of your DOI.

* Describe **what** the data is (e.g. *genomic sequences, microscope images*).
* Describe **how** it was generated (methodology).
* Mention technical details like file formats or specific software versions used.

:::caution[Abstracts]
Do not simply copy-paste the abstract of your research paper unless the dataset covers exactly the same scope. The dataset description should focus on the **data files** themselves.
:::

### 3. License

You must select a license to define how others can use your data.

* **Default:** `CC BY 4.0` (Creative Commons Attribution) is the standard for open research data. It allows others to use your data as long as they cite you.
* **Software:** If you are uploading code, consider if a software license (like MIT or GPL) is more appropriate, though CC BY is standard for the PGP repository.

## Next Steps

Once you have filled out all basic information fields, proceed to the **Creators** step where you will specify the authors of the dataset.