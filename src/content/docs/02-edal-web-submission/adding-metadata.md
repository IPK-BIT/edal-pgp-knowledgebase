---
title: Step 2 - Adding Basic Information
lastUpdated: 2025-12-04
authors:
  - sebastian-beier
  - daniel-arend
sidebar:
  order: 2
---

### Basic Metadata

After logging in and accepting the DLA, the dialog will guide you through the metadata provision process. This step is important to ensure your data is **FAIR**-compliant.

The metadata ensures all datasets can be found by search engines and correctly cited by other researchers.

### Step 2: Basic Information

In this step, you are required to provide the core details of your dataset.

![](@images/pgp-repository/web-client-2.png)

#### 1. Dataset Title

The title should be descriptive and unique. It should decribe the concrete datasets and not the corresponding research paper.
It is the first thing users see.

* **Good:** *"Raw phenotyping image data for drought stress response in winter wheat" (2023)*
* **Bad:** *"Data.zip"* or *"Supplementary Material for my wheat paper"*

#### 2. Description

Provide a comprehensive summary of the dataset. This text appears on the landing page of your DOI.

* Describe **what** the data is (e.g. *genomic sequences, microscope images*).
* Describe **how** it was generated (methodology).
* Mention technical details like file formats or specific software versions used.

<!--
:::tip[Naming Convention]
If your data belongs to a specific publication, it is good practice to include a reference to the topic or the 
paper title in the dataset title, e.g., *"Supplementary Dataset for: [Paper Title]"*.
:::
-->

:::caution[Abstracts]
Do not simply copy-paste the abstract of your research paper. The dataset description should focus on the **data files** themselves. If your dataset belongs to a specific publication, it is good practice to include a reference to the topic or the paper
:::

### 3. License

You must select a Creative Commons license to define how others can use your data.

* **Default:** `CC BY 4.0` (Creative Commons Attribution) is the standard for open research data. It allows others to use your data as long as they cite you.
* **Software:** If you are uploading code, consider if a software license (like MIT or GPL) is more appropriate, though CC BY is standard for the PGP repository.

## Next Steps

Once you have provided all basic information, proceed to the **Creators** step to specify the authors of the dataset.