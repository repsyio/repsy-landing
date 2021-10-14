FROM nginx:alpine

RUN rm -rf web/sass/
ADD default.conf /etc/nginx/conf.d/
ADD web /usr/share/nginx/html/
