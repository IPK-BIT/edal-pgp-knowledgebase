---
title: Adding Data
lastUpdated: 2025-12-02
sidebar:
  label: Adding Data
  order: 2
---

Once you have initiated a submission, you need to upload the actual research data. The e!DAL web interface offers flexible options depending on where your data is currently stored.

## Add Data

You can choose between uploading files directly from your computer or importing them from an S3-compatible cloud storage bucket.

### Option 1: From Local Drive

This is the standard method for most users. You can upload individual files or entire directory structures.

1. **Select Files:** Click the **"Add Data"** button or drag and drop your files into the upload area.

2. **Folder Uploads:**

   * **Supported Browsers:** To upload complete folder structures (maintaining sub-directories), please use **Google Chrome** or **Mozilla Firefox**.

   * **Other Browsers:** May only support single file selection.

3. **Verification:** The system will calculate checksums for your files to ensure integrity during the transfer.

### Avoid Pre-Zipping

:::danger[Do not upload ZIP files]
Please upload your **folders and files directly** rather than wrapping them in a single `.zip` or `.tar` archive.

* **Why?** e!DAL allows users to browse, filter, and preview individual files online. If you upload a giant zip file, users must download the entire thing to see one file.
* **Exception:** You may zip specific sub-directories if they contain thousands of tiny files that belong strictly together (e.g. a specific log dump), but generally, open structures are preferred.
:::


### Option 2: From S3 Bucket

If your data is already hosted in an S3-compatible object store (e.g. AWS S3, MinIO, or institutional cloud storage), you can transfer it directly without downloading it to your local machine first. This is recommended for **large datasets** (>10 GB).

To connect your bucket, provide the following connection details:

* **Service Endpoint:** The URL of your S3 provider (e.g. `s3.amazonaws.com` or your institutional endpoint).

* **Access Key ID:** Your public identifier.

* **Secret Access Key:** Your private key (this is used only for the transfer and is not stored permanently).

* **Bucket Name:** The exact name of the source bucket.

:::tip[Permissions]
Ensure your S3 credentials have `ListBucket` and `GetObject` permissions so the e!DAL importer can read the file structure and download the objects.
:::

## Next Steps

Once the data upload is complete and verified, proceed to the final step to Submit the Dataset for internal review.