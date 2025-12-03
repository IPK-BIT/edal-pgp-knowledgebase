---
title: User Information
lastUpdated: 2025-12-03
sidebar:
  order: 3
---

<style>

.markdown table {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}

/* Prevent table cells from wrapping text */
.markdown table {
  table-layout: fixed; /* fixes column widths */
  width: 100%;         /* optional, stretch table to full width */
}

.markdown th,
.markdown td {
  white-space: nowrap;  /* no wrapping */
  overflow: hidden;     /* optional: hide overflow */
  text-overflow: ellipsis; /* optional: show ... if content is too long */
}


</style>


## Starting the e!DAL Server

e!DAL use the RMI technology to serve a centralized repository, which allow users to access the system in parallel. The following section show how to initiate the an e!DAL server instance. For starting just run the Java fat-jar and add the mandatory parameter.

```bash
java -jar eDAL-Server.jar -dcr 10.5073 -dcu TIB.ABC -dcp password -ru root@email.com -r1 scientificReviewer@email.command -r2 substituteReviewer@email.com -r3 managingReviewer@email.com
```

:::note
If a more complex server configuration, e.g. through a firewall is necessary, add the additional needed parameters listed below.
:::

## Server parameters

:::note
Mandatory parameters are marked.
:::

### RMI parameters

Mandatory | Option (short) | Option (long) | Description |
| ----- |----------------|---------------|------------|
|   | `-d <arg>` | `--dataPort <arg>` | Port for RMI data streams (default: 1098) |
|   | `-p <arg>` | `--registryPort <arg>` | Port for RMI registry (default: 1099) |
|   | `-s` | `--serverLog` | Activate RMI server log (default: false) |
|   | `-n` | `--noSsl` | Deactivate SSL for RMI transfer (default: true) |
|   | `-rmi <arg>` | `--rmiserver <arg>` | Set `java.rmi.server.hostname` (recommended to use dynamic server hostname) |

### Path parameters

Mandatory | Option (short) | Option (long) | Description |
| ----- |----------------|---------------|------------|
|   | `-i <arg>` | `--dataPath <arg>` | Path for e!DAL data files (default: `${user.home}/edal`) |
|   | `-m <arg>` | `--mountPath <arg>` | Path for e!DAL database/index files (default: `${user.home}/edal`) |

### DataCite parameters

Mandatory | Option (short) | Option (long) | Description |
| ----- |----------------|---------------|------------|
| x | `-dcp <arg>` | `--dataCitePassword <arg>` | Password for DataCite account |
| x | `-dcr <arg>` | `--dataCitePrefix <arg>` | Prefix of DataCite account (use `10.5072` for test mode) |
| x | `-dcu <arg>` | `--dataCiteUser <arg>` | Username for DataCite account |
|   | `-dif <arg>` | `--doiInfix <arg>` | Specific infix for DOI construction schema |


### Database parameters

Mandatory | Option (short) | Option (long) | Description |
| ----- |----------------|---------------|------------|
|   | `-du <arg>` | `--DBuser <arg>` | Username for embedded database (default: sa) |
|   | `-dp <arg>` | `--DBpass <arg>` | Password for embedded database |


### HTTP parameters

Mandatory | Option (short) | Option (long) | Description |
| ----- |----------------|---------------|------------|
|   | `-hp <arg>` | `--httpListenerPort <arg>` | Port for HTTP listener (default: 80) |
|   | `-hps <arg>` | `--httpsListenerPort <arg>` | Port for HTTPS listener (default: 443) |
|   | `-https` | `--httpsListener` | Activate SSL for HTTP listener |
|   | `-kp <arg>` | `--keystorepath <arg>` | Path to SSL key store |
|   | `-kpass <arg>` | `--keystorepassword <arg>` | Password for SSL key store |
|   | `-ss <arg>` | `--staticserver <arg>` | Static server address for HTTP listener |
|   | `-sp <arg>` | `--staticport <arg>` | Static server port for HTTP listener |

### Proxy parameters

Mandatory | Option (short) | Option (long) | Description |
| ----- |----------------|---------------|------------|
|   | `-hph <arg>` | `--httpProxyHost <arg>` | Address for HTTP proxy |
|   | `-hpp <arg>` | `--httpProxyPort <arg>` | Port for HTTP proxy |
|   | `-hsh <arg>` | `--httpsProxyHost <arg>` | Address for HTTPS proxy |
|   | `-hsp <arg>` | `--httpsProxyPort <arg>` | Port for HTTPS proxy |

### Email addresses

Mandatory | Option (short) | Option (long) | Description |
| ----- |----------------|---------------|------------|
| x | `-r1 <arg>` | `--scientificReviewer <arg>` | Email for scientific reviewer |
| x | `-r2 <arg>` | `--substituteReviewer <arg>` | Email for substitute reviewer |
| x | `-r3 <arg>` | `--managingReviewer <arg>` | Email for managing reviewer |
| x | `-ru <arg>` | `--rootUser <arg>` | Email for root user |

### SMTP parameters

Mandatory | Option (short) | Option (long) | Description |
| ----- |----------------|---------------|------------|
|   | `-sh <arg>` | `--smtpHost <arg>` | SMTP host address |
|   | `-su <arg>` | `--smtpLogin <arg>` | SMTP username |
|   | `-sp <arg>` | `--smtpPassword <arg>` | SMTP password |

### Additional parameter

Mandatory | Option (short) | Option (long) | Description |
| ----- |----------------|---------------|------------|
|   | `-c` | `--stopClean` | Deactivate clean function for broken upload entities |