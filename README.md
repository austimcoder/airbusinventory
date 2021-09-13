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

## Demo

Airbus Inventory App url: http://airbus-ui.s3-website.ap-south-1.amazonaws.com/

Keycloack Serverurl: http://ec2-15-206-187-78.ap-south-1.compute.amazonaws.com/auth

*Note: Demo deployed with no SLA's to worry. Therfore, you may find some inconvenience while accessing. In that case, if you want to have a look, just ping me and we will figure it out*
