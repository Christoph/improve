import {inject, noView} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';


@inject(HttpClient)
@noView()
export class LocalLoader {
    private client;
    public data;

    constructor(http) {
        this.client =  http;

        this.client.configure(config => {
            config
                .withBaseUrl('data/')
                .withDefaults({
                  credentials: 'same-origin',
                  headers: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'Fetch'
                  }
                });
        });
    }

    load_file(filename) {
        this.client.fetch(filename)
          .then(response => response.json())
          .then(data => this.data = data);
    }
}
