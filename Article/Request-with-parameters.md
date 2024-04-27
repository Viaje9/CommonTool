# 在Http request帶上Params

## 常用傳遞參數的方法

可以先簡單分為兩種 Method 的傳遞參數方式

### GET

GET 可以分成兩種傳遞參數的方式

1. Path Parameters
2. Query Parameters

#### Path Parameters

Path Parameters 是將參數放在 URL 的路徑中，並且以 `/` 開頭，參數之間以 `/` 連接。
這種方式常用在像是商品頁面、明細頁等等，這些頁面的 URL 會有一個固定的部分，再加上一個變動的部分。
但通常只會有一個 Path Parameters，也可以有多個，但不建議這樣使用，在維護上會比較困難。

e.g.

```http
GET /detail/123
GET /detail/456
```

#### Query Parameters

Query Parameters 傳遞參數，這些參數會被放在 URL 的後面，並且以 `?` 開頭，參數之間以 `&` 連接。
這種方式常用在像是搜尋頁面、篩選頁面等等，這些頁面的 URL ，可以傳遞多個參數。

e.g.

```http
GET /search?keyword=apple
GET /search?keyword=apple&category=fruit
```

### POST

POST 傳遞參數，這些參數會被放在 Request Body 中，這種方式常用在像是新增、修改、刪除等等，這些操作會需要傳遞較多的參數。
如果用 GET 的方式傳遞參數，會有長度限制，而且會有安全性的問題。因為 GET 的參數會被放在 URL 中，這樣會有外洩的風險。
POST 的傳遞方式又可以依照 Content-Type 的不同，分為不同的方式，像是 `application/x-www-form-urlencoded`、`application/json`、`multipart/form-data` 等等。

#### application/json

```http
POST /api/user
Content-Type: application/json

{
  "name": "John",
  "age": 18
}
```
