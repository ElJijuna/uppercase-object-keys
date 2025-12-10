# UPPERCASE OBJECT KEYS 

[![Build Status](https://travis-ci.org/pilmee/uppercase-object-keys.svg?branch=master)](https://travis-ci.org/pilmee/uppercase-object-keys) [![Dependencies Status](https://david-dm.org/pilmee/uppercase-object-keys.svg)](https://david-dm.org/pilmee/uppercase-object-keys.svg) [![License: MIT](https://img.shields.io/npm/l/package.json.svg)](https://opensource.org/licenses/MIT) [![Greenkeeper badge](https://badges.greenkeeper.io/pilmee/uppercase-object-keys.svg)](https://greenkeeper.io/) [![Total alerts](https://img.shields.io/lgtm/alerts/g/pilmee/uppercase-object-keys.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/pilmee/uppercase-object-keys/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/pilmee/uppercase-object-keys.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/pilmee/uppercase-object-keys/context:javascript)

Transforma los nombres de las propiedades de un objeto a mayúsculas. / Transforms the names of the properties of an object to uppercase.

## Descripción / Description

Una pequeña librería sin dependencias que convierte todas las claves de un objeto a mayúsculas, manteniendo sus valores intactos.

A lightweight library with zero dependencies that converts all object keys to uppercase while preserving their values.

## Instalación / Installation

```bash
npm install uppercase-object-keys
```

O como dependencia de desarrollo:

```bash
npm install uppercase-object-keys --save-dev
```

## Uso / Usage

### Ejemplo básico / Basic Example

```javascript
const uppercaseObjectKeys = require('uppercase-object-keys');

const obj = { name: 'Nelida', age: 30, email: 'nelida@example.com' };

console.log(uppercaseObjectKeys(obj));
// Resultado / Result: { NAME: 'Nelida', AGE: 30, EMAIL: 'nelida@example.com' }
```

### Con módulos ES6 / With ES6 Modules

```javascript
import uppercaseObjectKeys from 'uppercase-object-keys';

const user = { firstName: 'Juan', lastName: 'Pérez' };
console.log(uppercaseObjectKeys(user));
// Resultado / Result: { FIRSTNAME: 'Juan', LASTNAME: 'Pérez' }
```

### Casos de uso / Use Cases

- **Normalización de datos**: Estandarizar claves de objetos para comparaciones o procesamiento
- **APIs**: Convertir respuestas de APIs a un formato consistente
- **Configuración**: Transformar archivos de configuración

## API

### `uppercaseObjectKeys(object)`

Transforma todas las claves de un objeto a mayúsculas.

- **Parámetro / Parameter**: `object` (Object) - El objeto a transformar
- **Retorna / Returns**: (Object) - Nuevo objeto con claves en mayúsculas
- **Nota / Note**: Las claves originales son reemplazadas, se crea un nuevo objeto

## Ejemplos avanzados / Advanced Examples

```javascript
const uppercaseObjectKeys = require('uppercase-object-keys');

// Trabajar con objetos anidados
const nested = {
  user: { name: 'Ana', age: 25 },
  settings: { theme: 'dark' }
};

const result = uppercaseObjectKeys(nested);
// { USER: { name: 'Ana', age: 25 }, SETTINGS: { theme: 'dark' } }
// Nota: Solo transforma el nivel superior / Only transforms top level

// Trabajar con arrays
const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

const transformed = data.map(item => uppercaseObjectKeys(item));
// [{ ID: 1, NAME: 'Item 1' }, { ID: 2, NAME: 'Item 2' }]
```

## Testing / Pruebas

```bash
npm test
```

## Cambios recientes / Recent Changes

- **v1.1.0**: Eliminadas dependencias externas (removido lodash)
- Implementación nativa con JavaScript vanilla

## Licencia / License

MIT - Ver LICENSE para más detalles

## Autor / Author

@pilmee
