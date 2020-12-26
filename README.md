# README

セットアップ
```
$ bundle config --local build.mysql2 "--with-ldflags=-L/usr/local/opt/openssl/lib"
$ bundle install
$ touch .env
```

```
// .env

RAILS_MAX_THREADS=16
MYSQL_HOST=localhost
MYSQL_USERNAME=root
MYSQL_PASSWORD=

```

アプリケーション名の変更

```
$ bundle exec railg g rename:into {{ NEW_APP_NAME }}
```
