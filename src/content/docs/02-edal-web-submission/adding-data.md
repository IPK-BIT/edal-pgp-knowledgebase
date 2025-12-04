---
title: Step 4 - Adding Data
lastUpdated: 2025-12-04
authors:
  - sebastian-beier
sidebar:
  order: 4
---

Once you have provided the necessary metadata, the final step (Step 4 of 4) is to upload the actual research data. The e!DAL web interface offers two tabs for this purpose: **Local file upload** and **S3 Access**.

![](@images/pgp-repository/web-client-5.png)

## Upload Methods

### Tab 1: Local file upload

This is the standard method for most users. You can upload individual files or maintain directory structures.

1. **Select Files:** Click the button labeled **"Select files"** (or *Dateien auswählen*) to open your system's file picker.
2. **Verify Uploads:** After selection, your files will appear in a table showing:
    * **Name:** The filename.
    * **Relative Path:** Crucial for verifying that your folder structure is preserved (e.g. `bridge_isatab_export/s_study.txt`).
    * **File Type & Size:** To help you spot any incorrect files.

:::tip[Folder Structures]
To upload complete folder structures while maintaining sub-directories (as seen in the *Relative Path* column), please use **Google Chrome** or **Mozilla Firefox**. Other browsers may flatten directory structures.
:::

#### Avoid Pre-Zipping
:::danger[Do not upload ZIP files]
Please upload your **folders and files directly** rather than wrapping them in a single `.zip` or `.tar` archive.

* **Why?** e!DAL allows users to browse, filter, and preview individual files online. If you upload a giant zip file, users must download the entire thing to see one file.
* **Exception:** You may zip specific sub-directories if they contain thousands of tiny files that belong strictly together (e.g. a specific log dump), but generally, open structures are preferred.
:::

### Tab 2: S3 Access

If your data is already hosted in an S3-compatible object store (e.g. AWS S3, MinIO, or institutional cloud storage), use the **S3 Access** tab. This allows you to transfer data directly without downloading it to your local machine first.

To connect your bucket, provide the following connection details:

* **Service Endpoint:** The URL of your S3 provider (e.g. `s3.amazonaws.com` or your institutional endpoint).
* **Access Key ID:** Your public identifier.
* **Secret Access Key:** Your private key (used only for the transfer and not stored permanently).
* **Bucket Name:** The exact name of the source bucket.

:::tip[Permissions]
Ensure your S3 credentials have `ListBucket` and `GetObject` permissions so the e!DAL importer can read the file structure and download the objects.
:::

## Finalizing Submission

Once your files are listed correctly in the table:

1. Review the file list one last time to ensure nothing is missing.
2. Click the **Finish** button at the bottom right.

This will complete the wizard and send your dataset to the internal review team.