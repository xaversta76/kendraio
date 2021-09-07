import { Component } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { HttpClient } from '@angular/common/http';
import { get, isObject } from 'lodash';
import { mappingUtility } from '../mapping-block/mapping-util';
import { fromIntrospectionQuery } from 'graphql-2-json-schema';

@Component({
  selector: 'app-graphql-block',
  templateUrl: './graphql-block.component.html',
  styleUrls: ['./graphql-block.component.scss']
})
export class GraphqlBlockComponent extends BaseBlockComponent {

  endpoint = '';
  variableGetters = {};
  headers = {};
  query = '';

  hasError = false;
  errorMessage = '';
  isLoading = false;

  constructor(private readonly http: HttpClient) {
    super();
  }

  onConfigUpdate(config: any) {
    this.endpoint = get(config, 'endpoint', '');
    this.variableGetters = get(config, 'variables', {});
    this.headers = get(config, 'headers', {});
    this.query = get(config, 'query', '');
  }

  onData(data: any, firstChange: boolean) {
    if (firstChange && !get(this.config, 'allowFirst', false)) {
      return;
    }
    const allowEmpty = get(this.config, 'allowEmpty', false);
    if (!isObject(data) && !allowEmpty) {
      return;
    }
    if (Object.keys(data).length === 0 && !allowEmpty) {
      return;
    }

    if (this.query === '') {
      this.query = get(data,"query","");
      if (!data) {
        return;
      }
    } 
    const asJsonScema = get(this.config, 'asJsonScema', true);

    let payload;
    let headers;
    try {
      payload = {
        query: this.query,
        variables: Object.keys(this.variableGetters).reduce((a, key) => {
          a[key] = mappingUtility({ data, context: this.context }, this.variableGetters[key]);
          return a;
        }, {})
      };
      headers = Object.keys(this.headers).reduce((a, key) => {
        a[key] = mappingUtility({ data, context: this.context }, this.headers[key]);
        return a;
      }, {});
    } catch (e) {
      this.hasError = true;
      this.errorMessage = e.message;
    }
    if (!payload || !headers) {
      console.log('graphql payload or headers not set');
      return;
    }

    this.hasError = false;
    this.isLoading = true;
    this.http.post(this.endpoint || data.endpoint, payload, { headers })
      .subscribe(result => {
        this.isLoading = false;
        if (asJsonScema) {
          console.dir('query response', result)
          const schema = fromIntrospectionQuery(get(result, 'data', {}), {});
          this.output.emit(schema);
        } else {
          this.output.emit(result);
        }
      }, error => {
        this.hasError = true;
        this.isLoading = false;
        this.errorMessage = error.message;
      });
  }
}
