---
title: Review Process
lastUpdated: 2025-12-02
description: Details on the internal technical and scientific review performed by the IPK curation team.
sidebar:
  label: Review Process
  order: 1
---

Every dataset submitted to the e!DAL-PGP repository undergoes a manual inspection before it is publicly released and assigned a DOI. This quality assurance process ensures that all data not only adheres to the **FAIR principles** (Findable, Accessible, Interoperable, Reusable) but also complies with established **community standards** and best practices.

## Who performs the review?

The review is conducted by the **IPK Data Stewardship Team**. This team consists of two roles:

1.  **Technical Reviewers:** IT specialists who check the data integrity, storage requirements, and format interoperability.
2.  **Scientific Curators:** Domain experts who verify the metadata description, scientific context, and adherence to biological data standards.

## What is reviewed?

The curation team evaluates the submission based on three main pillars:

### 1. Technical Validation & Community Standards
* **Community Standards:** The use of established plant science standards is strictly enforced.
    * **Phenomics:** Compliance with **MIAPPE** (Minimum Information About a Plant Phenotyping Experiment).
    * **Metadata Structure:** Use of the **ISA** (Investigation-Study-Assay) framework for describing experimental setups.
* **File Formats:** The repository prioritizes open, non-proprietary formats (e.g. `.csv`, `.txt`, `.png`) over proprietary ones (e.g. `.xlsx`, `.doc`). The most appropriate format for the specific data type must be used to ensure long-term accessibility and reuse.
* **Structure:** The folder hierarchy must be logical and accessible.
* **Accessibility:** Submissions containing single, massive ZIP archives are typically rejected. Users are required to upload uncompressed folder structures to allow file-level browsing and previewing.

### 2. Metadata Quality
* **Completeness:** Are all mandatory fields (Title, Authors, Affiliations) filled correctly?
* **Context:** Is the abstract (Description) sufficiently detailed for a third party to understand the experiment without having to read the associated paper?
* **PID Linkage:** Are authors linked via **ORCID**? Is the associated research paper linked via DOI?

### 3. Formal & Legal Checks
* **License Compatibility:** Is the selected license (Standard: CC BY 4.0) appropriate for the data type?
* **Privacy:** Does the dataset contain sensitive personal data (e.g. in survey results) that must be anonymized?

## Next Steps

Once the review is initiated, the system triggers the first communication to the user.

[Confirmation Email](../confirmation-email)