# Запуск
------------------------
Для запуска необходимо установить зависимости. Для этого выполните команду:
```bash
npm i
```
После чего соберите проект, выполнив команду:
```bash
npm run build
```
# API
-----------------------
IVI разделяем каталог на категории (фильмы, сериалы, мультфильмы, для детей) и жанры (боевик, комедия, мелодрама и т.д.).

Список категорий и жанров
https://api.ivi.ru/mobileapi/categories/v5/?app_version=870

Каталог для выбранной категории
https://api.ivi.ru/mobileapi/catalogue/v5/?category=...&sort=pop&from=0&to=99&fields=id,title,compilation,object_type,fake,hru,poster_originals,description,synopsis&app_version=870

Сортировка может быть:
new - по дате появления на ivi
year - по году выхода
pop - по популярности
ivi - по рейтингу ivi
kp - по рейтингу Кинопоиска
imdb - по рейтингу imdb
Ответ:
poster_originals - постеры
synopsis - короткое описание фильма
description - длинное описание фильма
object_type=compilation - это сборник, т.е. сериал либо фильм, состоящий из нескольких серий (например, Москва слезам не верит состоит из двух серий)

Если fake=true, то фильм не доступен для просмотра.

Максимальное количество элементов в ответе - 100. Элементов может быть и больше, поэтому нужно продолжать запрос до тех пор, пока не придет пустой ответ (0-99, 100-199 и т.д.).

Каталог для выбранного жанра
https://api.ivi.ru/mobileapi/catalogue/v5/?genre=...&sort=pop&from=0&to=99&fields=id,title,compilation,object_type,fake,hru,poster_originals,description,synopsis&app_version=870

Поиск фильма/сериала
https://api.ivi.ru/mobileapi/search/v5/?query=xxx&from=0&to=99&fields=id,title,compilation,object_type,fake&app_version-870

Получить список серий сборника
https://api.ivi.ru/mobileapi/videofromcompilation/v5/?id=xxx&fields=id,title,fake,poster_originals,description,synopsis&from=0&to=99&app_version=870
Ссылка на фильм
https://www.ivi.ru/watch/{id}/?utm_source=alice

Ссылка на сборник
https://www.ivi.ru/watch/{hru}?utm_source=alice