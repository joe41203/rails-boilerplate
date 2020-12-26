# README

セットアップ
```
$ bundle config --local build.mysql2 "--with-ldflags=-L/usr/local/opt/openssl/lib"
$ bundle install
```

アプリケーション名の変更

```
$ bundle exec railg g rename:into {{ NEW_APP_NAME }}
```
