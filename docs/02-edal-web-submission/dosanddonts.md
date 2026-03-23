---
title: Dos and Donts
lastUpdated: 2026-03-02

sidebar:
  order: 1
---

# How to Provide a Dataset Before Submission to Avoid Unnecessary Rejections?

# 

Purpose of This Guide

Many dataset rejections are not caused by bad science, but by missing ISA structure , Incomplete metadata, Broken ontology references, Formatting inconsistencies and Incorrect linkage between the ISA (Investigation-Study -Assay files)

## 1. Recommended Workflow (Before Submission)

Follow this checklist in order.

### Step 1 — Create Proper ISA Structure

Your dataset must follow the ISA model:

```
Investigation
 ├── Study
 ├── Assay
 ├── workflows (if applicable)
 └── runs (if applicable)
```

Minimum required:  investigation.xlsx , isa.study.xlsx  and  isa.assay.xlsx. Common reason for rejection is uploading only the excel files without ISA structure.

### Step 2 — Define Study Naming Convention

Study names must follow a defined convention. For example:

```
genebankpartner_yearstart-yearend_sitename
```

Correct:

```
NPPC_1971-1974_Piestany
CREA_2006_SAL
```

Incorrect:

```
trial1
experiment_final
data_new_version
```

If the site name is missing, use coordinates temporarily:

```
IPGR_1985_lon-24.93388-lat-42.12002
```

### Step 3 — Ensure All Identifiers Are Stable

Identifiers are the backbone of the dataset. Every sample must have sample name(mandatory in study file) , Accession ID and replicate IDs if replicated.

| Sample Name | Accession | Replicate |
|-------------|-----------|-----------|
| plant_1     | ACC1234   | 1         |
| plant_2     | ACC1234   | 2         |

### Step 4 — Complete the Investigation File

Most common rejection problems happen here. Ensure that Study referenced, Assay referenced, Ontologies listed, Contacts are complete, Description filled and All protocols described

# 2. Structure of the Dataset (What Must Exist)

## A. Investigation File

Must Include

### 1. Investigation Metadata

- Title
- Description
- Submission date
- Project name

### 2. Investigation Contacts (CRITICAL)

- First Name
- Last Name
- Email
- ORCID
- Affiliation (complete, not abbreviated)

  | First Name   | Last Name | ORCID          | Email      | Affiliation                                                          |
  |--------------|-----------|----------------|------------|----------------------------------------------------------------------|
  | Jagadeeshwar | Etukala   | 0000-0002-XXXX | [jay@ipk.de](mailto:jay@ipk.de) | Leibniz Institute of Plant Genetics and Crop Plant Research, Germany |

Wrong:

```
Missing ORCID
Only "IPK" as affiliation
```

### 3. Ontologies Used (VERY IMPORTANT)

Elena´s comment: Not all ontologies used in study and assays are listed in investigation.

You must list ALL ontologies used.

| Term Source Name | Term Source File                      | Term Source Version |
|------------------|---------------------------------------|---------------------|
| CO               | <https://cropontology.org>              | 2024                |
| UO               | <http://purl.obolibrary.org/obo/uo.owl> | 2023                |
| PO               | <http://purl.obolibrary.org/obo/po.owl> | 2023                |

## B. Study File (isa.study.xlsx)

Minimum Required Columns:

- Source Name
- Sample Name
- Organism
- Characteristics
- Geographic co-ordinate (latitude)
- Geographic co-ordinate (longitude)

#### Proper Coordinate Format

Correct format:

```
Latitude: 52.210000
Longitude: 20.640000
```

Incorrect format

```
52°12’N
20.64E
Germany (approx.)
```

#### Basic Passport Data (Domain Specific)

Must include Accession number, Material source information and country or origin and source coordinates.  Without passport data the data set is incomplete and not reusable.

## C. Assay File (isa.assay.xlsx)

Contains:

1. Sample Name (must match Study file exactly)
2. Trait
3. Value
4. Unit
5. Protocol reference

# 3.Common Formatting Issues (With Examples)

## 1.Term Accession Number & Term Source REF Missing

Elena´s comment: Usually Term Accession number and term source REF are left empty.

| Trait           | Term Source REF | Term Accession Number |
|-----------------|-----------------|-----------------------|
| Days to heading | CO              | CO_321:0000025        |

## 2. Confusing Trait Ontology vs Unit Ontology

Common mistake:

Trait = Plant height  
Unit = cm

Trait ontology → Crop Ontology (CO)  
Unit ontology → Units Ontology (UO)

Correct example:

| Trait        | Term Source REF | Term Accession Number |
|--------------|-----------------|-----------------------|
| Plant height | CO              | CO_321:0000012        |

| Unit       | Term Source REF | Term Accession Number |
|------------|-----------------|-----------------------|
| centimeter | UO              | UO:0000015            |

## 3. Duplicated columns

Wrong:

| Plant Height | Plant Height |
|--------------|--------------|
| 120          |              |
| 130          |              |

One column empty-> delete it

## 4. Missing Link Between Files

Common problem:

1. Study not referenced in Investigation
2. Assay not linked to Study
3. Misspelled file names

## 5. Sample Name Missing

Sample Name is mandatory because:

Study → defines samples  
Assay → links measurements to Sample Name

Without it → ISA structure breaks.

# 4. Domain-Specific Issues

## 1. Site Location Must Be Geo Coordinates

Not just:

```
Versailles
Gatersleben
```

Must include Latitude and Longitude

## 2.Traits Must Have Full Names linked to Ontologies

Not acceptable:

```
PH
TKW
DTH
```

Must be expanded:

```
Plant height
Thousand kernel weight
Days to heading
```

## 3.Basic Passport Data Required

Missing passport data causes:

1. Broken linkage to EURISCO
2. Incomplete material description
3. Reduced reusability

## 4.Data Quality Checks Before Submission

Perform these checks:

1. Any value biologically impossible? (e.g., TKW = 0)
2. Any experiment listed but no observed data?
3. Are missing values empty or zero?
4. All Sample Names unique?
5. All ontologies filled?
6. All studies referenced?

## 5.Final Pre-Submission Checklist

Before uploading:

```
 ☐ ISA structure complete
 ☐ Investigation file fully filled
 ☐ All ontologies listed
 ☐ Study names consistent
 ☐ Coordinates in decimal format
 ☐ Sample Name present
 ☐ Replicates uniquely identified
 ☐ Passport data included
 ☐ ORCID and emails included
 ☐ No duplicated columns
 ☐ No empty referenced studies
```
