# Airbusinventory

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.11.

## About

Airbusinventory application is an Angular project which communicates with porduct server to perform fetch, add new, update and search by category fuctionality over Airbus inventory database

## Low level Design

This project uses Angular's HTTP Client service and Keyloak angular support to connect with products server secured end points

### Configurations

Configure the enviroment file as follows:

    {
      production: //true if using in prod or false,
      Keycloak: {
        authUrl: //keycloack authentication url,
        clientId: //cilent name,
        realmId: //realm name
      },
      productServerUrl: //product Server url 
    };

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
