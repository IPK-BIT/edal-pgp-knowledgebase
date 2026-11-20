---
title: Review Process
lastUpdated: 2025-12-02
description: Details on the internal technical and scientific review performed by the IPK curation team.
sidebar:
  label: Review Process
  order: 2
prev: false  
tableOfContents: false
---

Every submitted dataset undergoes an inspection before it is released via DOI. This quality assurance process ensures that all data adheres to the **FAIR principles** (Findable, Accessible, Interoperable, Reusable) and being complient with established **community standards**.
The review is conducted by the **IPK Data Stewardship Team** focusing on three major aspects:

### 1. Technical Validation & Community Standards
* **Community Standards:** The use of established plant science standards is strictly enforced.
    * **Phenomics:** Compliance with **MIAPPE** (Minimum Information About a Plant Phenotyping Experiment).
    * **Metadata Structure:** Use of the **ISA** (Investigation-Study-Assay) framework for describing experimental setups.
* **File Formats:** The repository prioritizes open, non-proprietary formats (e.g. `.csv`, `.txt`, `.png`) over proprietary ones (e.g. `.xlsx`, `.doc`). The most appropriate format for the specific data type must be used to ensure long-term accessibility and reuse.
* **Structure:** The folder hierarchy must be logical and accessible.
* **Accessibility:** Submissions containing single, massive ZIP archives will be rejected. Users are required to upload uncompressed folder structures to allow file browsing and previewing.

### 2. Metadata Quality
* **Completeness:** Are all mandatory fields (Title, Authors, Affiliations) filled correctly?
* **Context:** Is the description sufficient to understand the data without having to read the associated paper?
* **PID Linkage:** Are authors linked via **ORCID**? Is the associated research paper linked via DOI?

### 3. Formal & Legal Checks
* **License Compatibility:** Is the selected license appropriate for the data type?
* **Privacy:** Does the dataset contain sensitive or confidental data?

Once the review is initiated, the system triggers the first communication to the user.