---
title: Step 3 - Adding Creator Information
lastUpdated: 2025-12-04
authors:
  - sebastian-beier
sidebar:
  order: 3
---

In Step 3 of the submission wizard, you are required to list the individuals who contributed to the dataset. Correctly identifying authors ensures that everyone receives proper credit and that your data can be cited accurately.

## Managing Authors

The main interface for this step shows a list of current authors.

![](@images/pgp-repository/web-client-4.png)

* **Add Author:** Click this button to open the detailed entry form for a new contributor.
* **Edit:** Modify the details of an existing author.
* **Remove:** Delete an author from the list.

:::danger[Mandatory Requirement]
You must specify at least one author with the **Creator** role to proceed.
:::

## Author Details

When adding or editing an author, you will be presented with the following fields:

![](@images/pgp-repository/web-client-3.png)

### 1. Author Role
Select the appropriate role for the individual:
* **Creator:** The main researchers involved in producing the data. These names will appear in the primary citation of the dataset.
* **Contributor:** Individuals who helped (e.g., data curation, technical support) but are not primary authors.

### 2. ORCID (Open Researcher and Contributor ID)
Entering an ORCID iD is highly recommended. It uniquely identifies authors across the global research ecosystem.
* **Example:** `0000-0002-1825-0097`

### 3. Name Fields
* **First Name:** (e.g. *Josiah*)
* **Last Name:** (e.g. *Carberry*)

:::tip[Quick Fill]
Use the **"Sync signed in user info"** button to automatically populate these fields with your own account details.
:::

### 4. Affiliation & ROR ID
You must provide the institutional affiliation for every author.
* **ROR ID:** The Research Organization Registry ID for the institution (e.g. `https://ror.org/05gq02987`). This helps standardise institutional names.
* **Affiliation Name:** The full name of the institution (e.g. *Brown University*).

## Next Steps

Once you have added all necessary authors and verified their roles, click **Next** to proceed to the data selection and upload.