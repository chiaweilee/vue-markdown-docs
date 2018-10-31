## Horizontal Vertical Center

```Scss
#wrapper {
    position: relative;

    .center {
        position: absolute;
        height: 100px;
        width: 100px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
```

```Scss
#wrapper {
    position: relative;

    .center {
        position: absolute;
        height: 100px;
        width: 100px;
        top: 50%;
        left: 50%;
        margin: -50px 0 0 -50px
    }
}
```

```Scss
#wrapper {
    position: relative;

    .center {
        position: absolute;
        height: 100px;
        width: 100px;
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
}
```

```Scss
#wrapper {
    position: flex;
    justify-content: center;
    align-items: center;
}
```
