import { ObjectProperty } from './objectproperty';
import { FormPropertyFactory } from './formpropertyfactory';

import {
  ZSchemaValidatorFactory
} from '../schema.validator.factory';

import { ValidatorRegistry } from './validatorregistry';

describe('ObjectProperty', () => {

  const A_VALIDATOR_REGISTRY = new ValidatorRegistry();
  const A_SCHEMA_VALIDATOR_FACTORY = new ZSchemaValidatorFactory(null);
  const A_FORM_PROPERTY_FACTORY = new FormPropertyFactory(A_SCHEMA_VALIDATOR_FACTORY, A_VALIDATOR_REGISTRY, {});


  const THE_OBJECT_SCHEMA = {
    type: 'object',
    properties: {
      FOO: {type: 'integer'},
      BAR: {type: 'integer'},
      BAZ: {type: 'object'}
    }
  };

  let objProperty: ObjectProperty;


  beforeEach(() => {
    objProperty = new ObjectProperty(
      A_FORM_PROPERTY_FACTORY,
      A_SCHEMA_VALIDATOR_FACTORY,
      A_VALIDATOR_REGISTRY,
      THE_OBJECT_SCHEMA,
      null,
      '',
      {}
    );
  });

  it('should create same properties as in the schema', () => {

    for (const propertyId in THE_OBJECT_SCHEMA.properties) {
      if (THE_OBJECT_SCHEMA.properties.hasOwnProperty(propertyId)) {
        const property = objProperty.getProperty(propertyId);
        expect(property).toBeDefined();
      }
    }
  });

});
