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

Список категорий и жанров:
https://api.ivi.ru/mobileapi/categories/v5/?app_version=870

Каталог для выбранной категории:
https://api.ivi.ru/mobileapi/catalogue/v5/?category=...&sort=pop&from=0&to=99&fields=id,title,compilation,object_type,fake,hru,poster_originals,description,synopsis&app_version=870

Сортировка может быть:
- new - по дате появления на ivi
- year - по году выхода
- pop - по популярности
- ivi - по рейтингу ivi
- kp - по рейтингу Кинопоиска
- imdb - по рейтингу imdb

Ответ:
- poster_originals - постеры
- synopsis - короткое описание фильма
- description - длинное описание фильма
- object_type=compilation - это сборник, т.е. сериал либо фильм, состоящий из нескольких серий (например, Москва слезам не верит состоит из двух серий)

Если fake=true, то фильм не доступен для просмотра.

Максимальное количество элементов в ответе - 100. Элементов может быть и больше, поэтому нужно продолжать запрос до тех пор, пока не придет пустой ответ (0-99, 100-199 и т.д.).

Каталог для выбранного жанра:
https://api.ivi.ru/mobileapi/catalogue/v5/?genre=...&sort=pop&from=0&to=99&fields=id,title,compilation,object_type,fake,hru,poster_originals,description,synopsis&app_version=870

Поиск фильма/сериала:
https://api.ivi.ru/mobileapi/search/v5/?query=xxx&from=0&to=99&fields=id,title,compilation,object_type,fake,hru,poster_originals,description,synopsis&app_version-870

Получить список серий сборника:
https://api.ivi.ru/mobileapi/videofromcompilation/v5/?id=xxx&fields=id,title,fake,poster_originals,description,synopsis&from=0&to=99&app_version=870

Ссылка на фильм:
https://www.ivi.ru/watch/{id}/?utm_source=alice

Ссылка на сборник:
https://www.ivi.ru/watch/{hru}?utm_source=alice

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
