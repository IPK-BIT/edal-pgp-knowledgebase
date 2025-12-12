---
title: Step 4 - Adding Data
lastUpdated: 2025-12-04
authors:
  - sebastian-beier
  - daniel-arend
sidebar:
  order: 4
---

Once you have provided the necessary metadata, the final step is to upload the actual research data. The web interface offers two tabs for this purpose: **Local file upload** and **S3 Access**.

![](@images/pgp-repository/web-client-5.png)

### Local file upload

This is the standard method for most users. You can upload your local files or directories.

1. **Select Files:** Click the **"Select files"** button to open a file picker.
2. **Verify Uploads:** After selection, your files will appear in a table showing:
    * **Name & Relative Path** Verify your files & folder structure is preserved
    * **File Type & Size:** To help you spot any incorrect files.

:::tip[Folder Structures]
To upload complete folder structures while maintaining sub-directories (as seen in the *Relative Path* column), please use a **Chromium** based Browser such as **Google Chrome** or **Brave**.
:::

#### Avoid Pre-Zipping
:::danger[Do not upload ZIP files]
Upload your **folders & files directly** rather than wrapping them in a `.zip` or `.tar` archive.

* **Why?** e!DAL allows users to browse, filter, and preview individual files online. If you upload a giant zip file, users must download the entire thing to see one file.
* **Exception:** You may zip specific files, if they are common for a dedicated tool ecosystem, but generally, open structures are preferred.
:::

### S3 Access

If your data is too large to be transfered via browser (>500 MB)/>1000 files) just put it on a S3-compatible object store (e.g. AWS S3, MinIO, or institutional cloud storage) and provide the subseqently explained access parameters in the **S3 Access** tab. This allows you to transfer data directly into the repository.

* **Service Endpoint:** The URL of your S3 provider (e.g. `s3.amazonaws.com`).
* **Access Key ID:** Your public identifier.
* **Secret Access Key:** Your private key (used only for the transfer and not stored permanently).
* **Bucket Name:** The exact name of the source bucket.
* **Region Name:** The name of region where your bucket physically resides.

:::tip[Permissions]
If the conenction test failed, please ensure that your S3 credentials have `ListBucket` and `GetObject` permissions so the e!DAL importer can read the file structure and download the objects.
:::

## Finalizing Submission

Once your files are listed correctly in the table, please review the file list one last time to ensure nothing is missing and click the **Finish** button at the bottom right to start the dataset submission and intiating the internal review team.