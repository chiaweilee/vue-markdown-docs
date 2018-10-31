## Headers and Caching

### Expires

`HTTP/1.0`

*Invalid dates, like 0 mean already expired*

```
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

### Cache-Control

`HTTP/1.1`

#### max-age=<`seconds`>

### Etag & If-none-match

Server compares `ETag` with the `Etag` of the resource, server send back a `304 Not Modified` if cache is still fresh.

#### 304 Not Modified

maximum time a resource will be considered fresh.

### Last-Modified

contains date and time which server believes resource was last modified.

`Less accurate` than `ETag`

### HTTP/2

* Longer-lived connection
* Request and response multiplexing within a shared connection
* HPACK - Header Compression
* Server push resources
