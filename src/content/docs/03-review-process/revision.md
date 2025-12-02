---
title: Revision
description: Understand the review criteria and how to handle revision requests to ensure your dataset meets e!DAL-PGP quality standards.
lastUpdated: 2025-12-02
sidebar:
  label: Revision
  order: 3
---

After the internal review is initiated, the process enters a "Wait and Hope" phase. While you wait, the IPK Data Stewardship Team is actively assessing your submission.

If the reviewers identify any issues that prevent the immediate acceptance of your dataset, you will receive a **Revision Request** via email.

## What is being reviewed?

The reviewers evaluate your submission against strict quality criteria. A revision may be requested if your data does not meet the standards in the following areas:

### 1. Content & Metadata Review
* **Completeness:** Are all mandatory fields (Title, Authors, Affiliations) filled correctly?
* **Context:** Is the abstract (Description) sufficiently detailed?
    * *Common Issue:* The description is too short or copied directly from a paper abstract without describing the actual data files.
* **Linkage:** Are authors linked via **ORCID**? Is the associated research paper linked via DOI?

### 2. Technical Review
* **File Formats:** Are open and standard formats used?
    * *Requirement:* Proprietary formats (e.g. `.xlsx`, `.doc`) should be converted to open alternatives (e.g. `.csv`, `.pdf`, `.txt`) whenever possible to ensure long-term accessibility.
* **Structure:** Is the folder hierarchy logical?
    * *Common Issue:* Uploading a single, massive ZIP file instead of an uncompressed folder structure. This prevents users from previewing files online.
* **Integrity:** Do the files open correctly? Are there corrupted files?

### 3. Legal & Formal Review
* **License Compatibility:** Is the selected license (Standard: CC BY 4.0) appropriate?
* **Privacy:** Does the dataset contain sensitive personal data (e.g., survey results with names) that must be anonymized?

## Handling a Revision Request

If you receive a request for changes:

1.  **Read the Feedback:** The email will contain specific comments from the reviewers explaining exactly what needs to be fixed.
2.  **Edit your Submission:** Log back into the e!DAL-PGP interface. You can modify metadata or replace files without starting over.
3.  **Re-Submit:** Once you have addressed all points, submit the dataset again. It will go back into the review queue.

:::tip[Pro Tip]
Responding quickly and thoroughly to revision requests significantly speeds up the time to publication and DOI assignment.
:::

## Next Steps

Once your revision is accepted (or if no revision was needed), you will receive the final decision email.

[Revision Response](./revision-response)