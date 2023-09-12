## Start
`./scripts/dev.sh`

## Generate a dev SSL certificate
cf. [Method 2 on this link](https://kracekumar.com/post/54437887454/ssl-for-flask-local-development/)
1. Install `openssl` on your machine
2. Generate a private key `openssl genrsa -des3 -out server.key 1024`
3. Generate a CSR `openssl req -new -key server.key -out server.csr`
4. Remove Passphrase from key `cp server.key server.key.org && openssl rsa -in server.key.org -out server.key`
5. Generate self signed certificate `openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt`
