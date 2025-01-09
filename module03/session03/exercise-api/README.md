# EXERCISE API
---

### Endpoint Student

#### 1. List Student

HTTP 
```
GET http://localhost:4440/api/v1/students
```

parameters 
| Parameters | Required | Description |
| --- | --- | --- |
| detail/:id | `false` | Untuk mendapatkan data detail atau satuan dari seorang student |
| /:jc | `false` | Untuk mendapatkan data student based on tipe job connector nya, jika jc = 'wd' maka hanya menampilkan data student wd |

query parameter
|Query Parameter| Required | Description 
| --- | --- | --- |
| gender | `false` | untuk mendapatkan data student based on gender | 
| branch | `false` | untuk mendapatkan data student based on branch dimana dia belajar | 

result / response 
| parameters | Description | 
| --- | --- |
| status | `OK` jika berhasil , `Error` jika terdapat kesalahan pada code | 
| message | `success` jika berhasil , `error` jika terjadi error
| data | berisi data array of object dari 

