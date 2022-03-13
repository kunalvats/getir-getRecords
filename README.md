# getir-getRecords
getir case study for get records task

Install dependencies

```sh
npm install
```

## Start server
```sh
npm start
```

## Running tests

```sh
npm test
```
# API Endpoints

Post Method:
```sh
/api/user/getUserInfo
```
Server:
```sh
https://getir-get-records.herokuapp.com/api/user/getUserInfo
```

Sample Request Body
```
 {
    "startDate": "2016-01-26", 
    "endDate": "2018-02-02", 
    "minCount": 2700, 
    "maxCount": 3000
 }
```

Sample Response -
```
{
    "code": 0,
    "msg": "success",
    "records": [
        {
            "key": "ibfRLaFT",
            "createdAt": "2016-12-25T16:43:27.909Z",
            "totalCount": 2700
        },
        {
            "key": "pxClAvll",
            "createdAt": "2016-12-19T10:00:40.050Z",
            "totalCount": 3000
        }
    ]
}
```
