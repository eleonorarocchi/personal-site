---
title: "Laravel: come si parte?"
date: "2017-01-15"
slug: "lavarel-come-si-parte"
wordpress_id: 42
---

Per iniziare a lavorare con Lavarel, c'è bisogno di una eseguire serie di operazioni preliminari, per installare Composer.
**Composer**
Da terminale, questi sono i comandi da eseguire, per l'installazione
`php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === '55d6ead61b29c7bdee5cccfb50076874187bd9f21f65d8991d46ec5cc90518f447387fb9f76ebae1fbbacf329e583e30') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"`
`php composer.phar`
`php composer.phar -V` //per verificare la versione
`sudo mv composer.phar /usr/local/bin/composer` //per spostare nella cartella bin
`composer -V` //per riverificare l'installazione.
Dopodiché da terminale posiamo avviare l'installazione:
`composer create-project laravel/laravel MyProjectName --prefer-dist`
Ed il gioco è fatto!
