import { Component } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { get, isNull, isObject, isString, isUndefined } from 'lodash-es';
import { LocalDatabaseService } from '../../services/local-database.service';
import { mappingUtility } from '../mapping-block/mapping-util';
import { validate as isValidUUID } from 'uuid';

@Component({
  selector: 'app-db-block',
  templateUrl: './db-block.component.html',
  styleUrls: ['./db-block.component.scss']
})
export class DbBlockComponent extends BaseBlockComponent {

  hasError = false;
  errorMessage = '';
  isLoading = false;

  operation = 'none';
  adapterName = 'UNKNOWN';
  schema = 'none';
  schemaGetter;
  idField = 'uuid';
  skipFirst = true;
  uuidGetter;

  constructor(
    private readonly localDatabase: LocalDatabaseService
  ) {
    super();
  }


  onConfigUpdate(config: any) {
    this.adapterName = get(config, 'adapterName', 'UNKNOWN');
    this.schema = get(config, 'schema', 'none');
    this.schemaGetter = get(config, 'schemaGetter');
    this.operation = get(config, 'operation', 'none');
    this.skipFirst = get(config, 'skipFirst', true);
    this.uuidGetter = get(config, 'uuidGetter');
  }

  onData(data: any, firstChange: boolean) {
    if (firstChange && this.skipFirst) {
      return;
    }

    const isEmptyObject = o => isObject(o) && Object.keys(o).length === 0;
    const isGetOperation = () => this.operation === 'fetch' || this.operation === 'get';
    if (isUndefined(data) || (isEmptyObject(data) && !isGetOperation())) {
      console.log('skipping empty db payload', data);
      return;
    }

    this.isLoading = true;

    switch (this.operation) {
      case 'fetch': {
        if (isString(this.uuidGetter)) {
          const uuid = mappingUtility({ data: this.model, context: this.context }, this.uuidGetter);
          if (isString(uuid)) {
            this.localDatabase.fetch({ uuid }).then(function (result) {
              this.isLoading = false;
              this.output.emit(result);
            }.bind(this));
          }
        }
        // TODO: Error
        this.isLoading = false;
        return;
      }
      case 'delete': {
        if (isString(this.uuidGetter)) {
          const uuid = mappingUtility({ data: this.model, context: this.context }, this.uuidGetter);
          if (isString(uuid)) {
            this.localDatabase.deleteItem({ uuid }).then(function (result) {
              this.isLoading = false;
              this.output.emit(result);
            }.bind(this));
          }
        }
        // TODO: Error
        return;
      }
      case 'update': {
        // TODO: To update value must have a UUID
        this.localDatabase.update({
          uuid: data.uuid,
          data
        }).then(function (result) {
          this.isLoading = false;
          this.output.emit(result);
        }.bind(this));
        return;
      }
      case 'add': {
        const schema = this.schemaGetter
          ? mappingUtility({ data: this.model, context: this.context }, this.schemaGetter)
          : this.schema;
        // TODO: temporary hack to prevent saving null data
        if (!isUndefined(data) && !isNull(data)) {
          this.localDatabase.add({
            adapterName: this.adapterName,
            schema,
            data
          }).then(function (result) {
            this.isLoading = false;
            this.output.emit(result);
          }.bind(this));
        }
        return;
      }
      case 'get': {
        const schema = this.schemaGetter
          ? mappingUtility({ data: this.model, context: this.context }, this.schemaGetter)
          : this.schema;
        this.localDatabase.get({
          adapterName: this.adapterName,
          schema
        }).then(function (result) {
          this.isLoading = false;
          this.output.emit(result);
        }.bind(this));
        return;
      }
      case 'upsert': {
        // we check that data.uuid is defined and not null:
        if (isValidUUID(data.uuid) === false) {
          this.hasError = true;
          this.errorMessage = 'UUID is not valid';
          return;
        }

        this.localDatabase.put({
          adapterName: this.adapterName,
          schema: this.schema,
          data
        }).then(function (result) {
          this.isLoading = false;
          this.output.emit();
        }
          .bind(this));
        return;
      }
      default:
        this.isLoading = false;
        console.log(`Unknown or unsupported database operation ${this.operation}`);
    }
  }
}
